<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../phpmailer/src/Exception.php';
require '../phpmailer/src/PHPMailer.php';
require '../phpmailer/src/SMTP.php';

function login($username, $password)
{
    include "include/config.php";
    $query_User_re = sprintf("SELECT * FROM all_users WHERE email='{$username}'");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
   
    if ($totalRows_User_re > 0) {
        if ($row_User_re['password'] == $password) {
            $arr = ['status' => 1, 'message' => 'Buzzing you in dashbord', 'userId' => $row_User_re['user_id']];
            exit(json_encode($arr));
        }
    }else{
        $arr = ['status' => 0, 'message' => 'Wrong username or password'];
        exit(json_encode($arr));
    }

 }



 function createUser($fname, $lname, $email, $password)
 {
     include "include/config.php";
     
             $query_User_re = sprintf("INSERT INTO `all_users` (`first_name`, `last_name`, `email`, `password`) 
             VALUES ('$fname','$lname','$email','$password')");
             $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
             if ($User_re) {

                 $mail = new PHPMailer(true);

        try {
      //Server settings
      $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
      $mail->isSMTP();                                            //Send using SMTP
      $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
      $mail->Username   = 'steamledgelimited@gmail.com';                     //SMTP username
      $mail->Password   = 'rjwbbowhpnffazcw';                               //SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
      $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
  
      //Recipients
      $mail->setFrom('steamledgelimited@gmail.com', 'Steamledge Limited');
      $mail->addAddress($email);     //Add a recipient
      // $mail->addAddress('ellen@example.com');               //Name is optional
      // $mail->addReplyTo('info@example.com', 'Information');
    
  
      //Content
    //   $bodyB = $_POST['message'];
    //   $bodyB .= 'https://steamledge.com/allonfasaha/admin/assets/img/logo.png'; 
      $mail->isHTML(true);                                  //Set email format to HTML
      $mail->Subject = 'Email verification from Allon-fasaha';
    //   $mail->Body    = ($bodyB);
      $mail->Body = "Login details for Allon-fasaha: <br />
      username: ".$email."<br />
      password: ".$password." <br />";
      // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
  
      $mail->send();
      echo "<script>
      alert('Login details have been sent to your mail')
      </script>";
  } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
           $returnResponse = ['status'=> 1,'email'=>$email, 'message' => 'added successfully'];
                 exit(json_encode($returnResponse));
             } else {
                 $returnResponse = ['status' => 0, 'message' => " not added, try again"];
                 exit(json_encode($returnResponse));
             }
 
 }
function delUser($userId)
{
    include "include/config.php";
    $query_User_re = sprintf("DELETE FROM `all_users` WHERE `user_id` = '$userId'");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    if ($User_re) {
        $returnResponse = ['status' => 1, 'message' => " deleted successfully"];
        exit(json_encode($returnResponse));
    } else {
        $returnResponse = ['status' => 0, 'message' => " not deleted, try again"];
        exit(json_encode($returnResponse));
    }
}

function updateUser($userId, $fname, $lname, $email, $password)
{
    include "include/config.php";
    $query_User_re = sprintf("UPDATE `all_users`SET `first_name` = '$fname', `last_name` = '$lname',`email` = '$email',`password` = '$password' WHERE `user_id` = '$userId'");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    if ($User_re) {
        $returnResponse = ['status' => 1, 'message' => " update successfully"];
        exit(json_encode($returnResponse));
    } else {
        $returnResponse = ['status' => 0, 'message' => " not updated, try again"];
        exit(json_encode($returnResponse));
    }
}
