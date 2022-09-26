<?php

function login($username, $password)
{
    include "config/index.php";
    $query_User_re = sprintf("SELECT * FROM admin_center WHERE email='{$username}'");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($totalRows_User_re > 0) {
        if ($row_User_re['password'] == $password) {
            $arr = [
                'status' => 1, 'message' => 'Buzzing you in 😎', 'userId' => $row_User_re['id'], 'type' => 'CA', 'fullName' => $row_User_re['fullname'], 'userName' => $row_User_re['email'], 'country' => $row_User_re['country'],
                'state' => $row_User_re['state'], 'lga' => $row_User_re['lga'], 'center' => $row_User_re['center'], 'role' => $row_User_re['role'], 'phone' => $row_User_re['phone']
            ];
            exit(json_encode($arr));
        }
    } else {
        $query_User_reA = sprintf("SELECT * FROM l_users WHERE username='{$username}'");
        $User_reA = mysqli_query($allonfasaha, $query_User_reA) or die(mysqli_error($allonfasaha));
        $row_User_reA = mysqli_fetch_assoc($User_reA);
        $totalRows_User_reA = mysqli_num_rows($User_reA);
        if ($totalRows_User_reA > 0) {
            if ($row_User_reA['password'] == $password) {
                $arr = ['status' => 1, 'message' => 'Buzzing you in 😎', 'userId' => $row_User_reA['l_id'], 'type' => 'GA', 'fullName' => $row_User_reA['fullname'], 'userName' => $row_User_reA['username'], 'phone' => $row_User_reA['phone']];
                exit(json_encode($arr));
            }
        }
    }
}

function dashboard()
{
    include "config/index.php";
    $tables = ['access_students', 'centres', 'l_users', 'admin_center'];
    $getResponse = [];
    foreach ($tables as $key => $value) {
        $query_User_re = sprintf("SELECT * FROM {$value}");
        $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
        $row_User_re = mysqli_fetch_assoc($User_re);
        $totalRows_User_re = mysqli_num_rows($User_re);
        $getResponse[$value] = $totalRows_User_re;
    }
    exit(json_encode($getResponse));
}

function getAllStudentSpecificCentre()
{
    include "config/index.php";
    $query_User_re = sprintf("SELECT * FROM `access_students` {$value}");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    $getResponse[$value] = $totalRows_User_re;
    exit(json_encode($getResponse));
}

function getAllStudentSpecificCentreFeeding($value)
{
    include "config/index.php";
    $query_User_re = sprintf("SELECT * FROM `access_students` WHERE `center_id` = {$value}");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    $getResponse = [];
    $dateIn = date('Y-m-d');
    if ($totalRows_User_re > 0) {
        do {
            $query_User_re_activities = sprintf("SELECT * FROM `st_activities` WHERE `st_id` = {$row_User_re['id']}");
            $User_re_activities = mysqli_query($allonfasaha, $query_User_re_activities) or die(mysqli_error($allonfasaha));
            $row_User_re_activities = mysqli_fetch_assoc($User_re_activities);
            $totalRows_User_re_activities = mysqli_num_rows($User_re_activities);
            if ($totalRows_User_re_activities == 1) {
                $row_User_re['module_level'] = "M" . $row_User_re_activities['module'] . "_L" . $row_User_re_activities['level'];
            }
            $query_User_re_no_student = sprintf("SELECT SUM(assm_unit) FROM assessment WHERE student_id='{$row_User_re['id']}'");
            $User_re_no_student = mysqli_query($allonfasaha, $query_User_re_no_student) or die(mysqli_error($allonfasaha));
            $row_User_re_no_student = mysqli_fetch_assoc($User_re_no_student);
            $totalRows_User_re_no_student = mysqli_num_rows($User_re_no_student);
            if ($totalRows_User_re_no_student == 1) {
                $row_User_re['total_score'] = $row_User_re_no_student['SUM(assm_unit)'];
            }

            $query_User_re_check_student = sprintf("SELECT * FROM feeding WHERE `user_id`={$row_User_re['id']} AND timeIn LIKE '" . $dateIn . "%%'");
            $User_re_check_student = mysqli_query($allonfasaha, $query_User_re_check_student) or die(mysqli_error($allonfasaha));
            $row_User_re_check_student = mysqli_fetch_assoc($User_re_check_student);
            $totalRows_User_re_check_student = mysqli_num_rows($User_re_check_student);
            if ($totalRows_User_re_check_student > 0) {
                $row_User_re['first_name'] = "✅  &nbsp" . $row_User_re['first_name'];
            } else {
                $row_User_re['first_name'] = "🔲 &nbsp" . $row_User_re['first_name'];
            }
            $row_User_re['id'] = base64_encode($row_User_re['id']);
            $getResponse[] = $row_User_re;
        } while ($row_User_re = mysqli_fetch_assoc($User_re));
    }

    exit(json_encode($getResponse));
}



function centre($all)
{
    include "config/index.php";
    $c_name = $all['center_name'];
    $c_region = "region";
    $c_country = $all['center_country'];
    $c_state = $all['center_state'];
    $c_lga = $all['center_lga'];
    $c_type = $all['center_type'];
    $c_latitude = $all['latitude'];
    $c_longitude = $all['longitude'];

    // print_r($all);
    $query_User_re = sprintf("INSERT INTO `centres`(`centre_name`, `center_type`, `centre_region`, `centre_country`, `centre_state`, `centre_lga`, `latitude`, `longitude`) 
    VALUES ('$c_name','$c_type', '$c_region','$c_country','$c_state','$c_lga','$c_latitude','$c_longitude')");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    if ($User_re) {
        $returnResponse = ['status' => 1, 'message' => "{$c_name} added successfully"];
        exit(json_encode($returnResponse));
    } else {
        $returnResponse = ['status' => 0, 'message' => "{$c_name} not added, try again"];
        exit(json_encode($returnResponse));
    }
}

function createUser($all)
{
    include "config/index.php";
    $c_name = $all['fullname'];
    $c_country = $all['country'];
    $c_state = $all['state'];
    $c_lga = $all['lga'];
    $c_state = $all['state'];
    $c_center = $all['center'];
    $c_role = $all['role'];
    $email = $all['email'];
    $password = $all['password'];
    $phone = $all['phone'];


    // switch ($c_role) {
    //     case '0':

    //         break;
    //     case '1':
    $query_User_re = sprintf("INSERT INTO `admin_center`(`fullname`, `region`, `country`, `state`, `phone`, `lga`, `email`, `role`, `center`, `password`) 
            VALUES ('$c_name','','$c_country','$c_state','$phone','$c_lga','$email','$c_role','$c_center','$password')");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    if ($User_re) {
        $returnResponse = ['status' => 1, 'message' => "{$c_name} added successfully"];
        exit(json_encode($returnResponse));
    } else {
        $returnResponse = ['status' => 0, 'message' => "{$c_name} not added, try again"];
        exit(json_encode($returnResponse));
    }
    //     default:
    //         # code...
    //         break;
    // }

    // print_r($all);

}


function createUserAssitant($all)
{
    include "config/index.php";
    $c_name = $all['fullname'];
    $c_country = $all['country'];
    $c_state = $all['state'];
    $c_lga = $all['lga'];
    $c_center = $all['center'];
    $phone = $all['phone'];
    $address = $all['address'];
    $email = $all['email'];
    $password = 12345;
    $hash_id = uniqid();
    $query_User_re = sprintf("INSERT INTO `center_assistant`(`fullname`, `region`, `country`, `state`, `phone`, `lga`, `email`, `password`, `center_id`, `address`,`hash_id`)
            VALUES ('$c_name','','$c_country','$c_state','$phone','$c_lga','$email','$password','$c_center','$address','$hash_id')");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    if ($User_re) {
        $returnResponse = ['status' => 1, 'message' => "{$c_name} added successfully", 'hash' => "{$hash_id}", 'center' => "{$c_center}",];
        exit(json_encode($returnResponse));
    } else {
        $returnResponse = ['status' => 0, 'message' => "{$c_name} not added, try again"];
        exit(json_encode($returnResponse));
    }
    // print_r($all);

}

function centerAssistantImg()
{
    include "config/index.php";
    $connectorr = $_POST['connector'];
    $img = $_POST['st_image'];
    $center = $_POST['center'];
    $query_User_img = sprintf("INSERT INTO `center_assistant_image`(`hash_id`, `img`) VALUES ('$connectorr','$img')");
    $User_re_img = mysqli_query($allonfasaha, $query_User_img) or die(mysqli_error($allonfasaha));
    if ($User_re_img) {
        $returnResponse = ['status' => 1, 'message' => "{$connectorr}"];
        exit(json_encode($returnResponse));
    } else {
        $returnResponse = ['status' => 0, 'message' => " not added, try again"];
        exit(json_encode($returnResponse));
    }
}


function createStudent($all)
{
    include "config/index.php";
    $c_role = $all['role'];
    switch ($c_role) {
        case '0':
            $parent_fullname = $all['fullname'];
            $parent_relation = $all['relationship'];
            $parent_state = $all['state'];
            $parent_occupation = $all['occupation'];
            $parent_education = "unknown";
            $parent_address = $all['address'];
            $guardian_fullname = $all['fullname_g'];
            $guardian_relation = $all['relationship_g'];
            $guardian_address = $all['address_g'];
            $guardian_phone = $all['phone_g'];
            $guardian_occupation = "unkown";
            $phone = $all['phone'];


            $connectorr = $all['connector'];
            $query_User_re = sprintf("INSERT INTO `parent_guardian`(`fullname`, `relationship`, `state`, `occupation`, `education`, `address`, `guardian_name`, `guardain_relationship`, `guardian_address`, `hash_pin`, `phone`, `guardian_phone`) 
            VALUES ('$parent_fullname','$parent_relation','$parent_state','$parent_occupation','$parent_education','$parent_address','$guardian_fullname','$guardian_relation','$guardian_address','$connectorr','$phone','$guardian_phone')");
            $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
            if ($User_re) {
                $returnResponse = ['status' => 1, 'message' => "New student", 'connector' => "{$connectorr}"];
                exit(json_encode($returnResponse));
            } else {
                $returnResponse = ['status' => 0, 'message' => "Not added, try again"];
                exit(json_encode($returnResponse));
            }
            break;
        case '1':
            $f_name = $all['fname'];
            $l_name = $all['lname'];
            $age = $all['age'];
            $c_country = $all['country'];
            $c_education = $all['edu_background'];
            $c_state = $all['state'];
            $c_lga = $all['lga'];
            $c_center = $all['center'];
            $password = '12345';
            $connectorr = uniqid();
            $query_User_re = sprintf("INSERT INTO `access_students`(`first_name`, `last_name`, `nationality`, `state`, `password`, `lga`, `center_id`, `age`, `edu_background`, `hash_pin`) 
            VALUES ('$f_name','$l_name','$c_country','$c_state','$password','$c_lga','$c_center','$age', '$c_education', '$connectorr')");
            $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
            if ($User_re) {
                $last_id = mysqli_insert_id($allonfasaha);
                if ($last_id) {
                    $user_name = "AF" . "-" . $last_id . "-" . $c_center;
                    $query_User_id = sprintf("UPDATE `access_students` SET `st_username` = '" . $user_name . "' WHERE id = '" . $last_id . "'");
                    $res = mysqli_query($allonfasaha, $query_User_id) or die(mysqli_error($allonfasaha));
                    // if ($res){

                    // }
                }
                $returnResponse = ['status' => 1, 'message' => "{$connectorr}"];
                exit(json_encode($returnResponse));
            } else {
                $returnResponse = ['status' => 0, 'message' => "{$c_name} not added, try again"];
                exit(json_encode($returnResponse));
            }
            // break;
            // case '2':
            //     $connectorr = uniqid();
            //     $img = $_POST['st_image'];
            //     echo $img;
            //     $query_User_img = sprintf("INSERT INTO `st_pictures`(`hash_id`, `img`) VALUES ('$connectorr','$img')");
            //     $User_re_img = mysqli_query($allonfasaha, $query_User_img) or die(mysqli_error($allonfasaha));
            //     if($User_re_img){
            //     $returnResponse = ['status' => 1, 'message' => "{$connectorr}"];
            //     exit(json_encode($returnResponse));
            // } else {
            //     $returnResponse = ['status' => 0, 'message' => " not added, try again"];
            //     exit(json_encode($returnResponse));
            // }
        default:
            # code...
            break;
    }

    // print_r($all);

}

function saveImg()
{
    include "config/index.php";
    $connectorr = $_POST['connector'];
    $img = $_POST['st_image'];
    $query_User_img = sprintf("INSERT INTO `st_pictures`(`hash_id`, `img`) VALUES ('$connectorr','$img')");
    $User_re_img = mysqli_query($allonfasaha, $query_User_img) or die(mysqli_error($allonfasaha));
    if ($User_re_img) {
        $returnResponse = ['status' => 1, 'message' => "{$connectorr}"];
        exit(json_encode($returnResponse));
    } else {
        $returnResponse = ['status' => 0, 'message' => " not added, try again"];
        exit(json_encode($returnResponse));
    }
}



function updateFeedingCenter($all)
{
    include "config/index.php";
    $all = explode("~", $all);
    foreach ($all as $key => $value) {
        $value = base64_decode($value);
        $query_User_re = sprintf("INSERT INTO `feeding`(`user_id`) VALUES ('$value')");
        $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    }
    if ($User_re) {
        $returnResponse = ['status' => 1, 'message' => "Fed " . count($all)];
        exit(json_encode($returnResponse));
    }
}

function centreAll()
{
    include "config/index.php";
    $query_User_re = sprintf("SELECT * FROM centres");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    $getResponse = [];
    if ($totalRows_User_re > 0) {
        do {
            $query_User_re_student = sprintf("SELECT * FROM access_students WHERE center_id={$row_User_re['id']}");
            $User_re_student = mysqli_query($allonfasaha, $query_User_re_student) or die(mysqli_error($allonfasaha));
            $row_User_re_student = mysqli_fetch_assoc($User_re_student);
            $totalRows_User_re_student = mysqli_num_rows($User_re_student);
            $row_User_re['total_student'] = $totalRows_User_re_student;
            // $query_User_re_admin = sprintf("SELECT * FROM access_students WHERE center_id={$row_User_re['id']}");
            // $User_re_admin = mysqli_query($allonfasaha, $query_User_re_admin) or die(mysqli_error($allonfasaha));
            // $row_User_re_admin = mysqli_fetch_assoc($User_re_admin);
            // $totalRows_User_re_admin = mysqli_num_rows($User_re_admin);
            // $row_User_re['total_student'] = $totalRows_User_re_admin;
            $query_User_re_no_student = sprintf("SELECT * FROM time_spent WHERE center_id={$row_User_re['id']}");
            $User_re_no_student = mysqli_query($allonfasaha, $query_User_re_no_student) or die(mysqli_error($allonfasaha));
            $row_User_re_no_student = mysqli_fetch_assoc($User_re_no_student);
            $totalRows_User_re_no_student = mysqli_num_rows($User_re_no_student);
            $row_User_re['no_of_student'] = $totalRows_User_re_no_student;
            $row_User_re['encode_id'] = $row_User_re['id'];
            $row_User_re['id'] = base64_encode($row_User_re['id']);

            $getResponse[] = $row_User_re;
        } while ($row_User_re = mysqli_fetch_assoc($User_re));
        exit(json_encode($getResponse));
    }
}

function allStudent()
{
    include "config/index.php";
    $query_User_re = sprintf("SELECT * FROM access_students");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    $getResponse = [];
    if ($totalRows_User_re > 0) {
        do {
            $query_User_re_student = sprintf("SELECT SUM(assm_unit) FROM assessment WHERE student_id={$row_User_re['id']}");
            $User_re_student = mysqli_query($allonfasaha, $query_User_re_student) or die(mysqli_error($allonfasaha));
            $row_User_re_student = mysqli_fetch_assoc($User_re_student);
            $totalRows_User_re_student = mysqli_num_rows($User_re_student);
            $query_User_re_student_time = sprintf("SELECT SUM(timeSpent) FROM time_spent WHERE student_id={$row_User_re['id']}");
            $User_re_student_time = mysqli_query($allonfasaha, $query_User_re_student_time) or die(mysqli_error($allonfasaha));
            $row_User_re_student_time = mysqli_fetch_assoc($User_re_student_time);
            $totalRows_User_re_student_time = mysqli_num_rows($User_re_student_time);
            $query_User_re_student_logins = sprintf("SELECT * FROM time_spent WHERE student_id={$row_User_re['id']}");
            $User_re_student_logins = mysqli_query($allonfasaha, $query_User_re_student_logins) or die(mysqli_error($allonfasaha));
            $row_User_re_student_logins = mysqli_fetch_assoc($User_re_student_logins);
            $totalRows_User_re_student_logins = mysqli_num_rows($User_re_student_logins);
            $row_User_re['total_score'] = $row_User_re_student['SUM(assm_unit)'];
            $row_User_re['time'] = $row_User_re_student_time['SUM(timeSpent)'];
            $row_User_re['logins'] = $totalRows_User_re_student_logins;


            $row_User_re['id'] = base64_encode($row_User_re['id']);
            $getResponse[] = $row_User_re;
        } while ($row_User_re = mysqli_fetch_assoc($User_re));
        exit(json_encode($getResponse));
    }
}


function specificStudent($data)
{
    include "config/index.php";
    $data = base64_decode($data);
    $query_User_re = sprintf("SELECT * FROM access_students WHERE id={$data}");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    $getResponse = [];
    if ($totalRows_User_re > 0) {
        do {
            $row_User_re['fullname'] = ucwords($row_User_re['first_name']) . " " . ucwords($row_User_re['last_name']);
            unset($row_User_re['first_name']);
            unset($row_User_re['last_name']);
            $query_User_re_center = sprintf("SELECT * FROM centres WHERE id='{$row_User_re['center_id']}'");
            $User_re_center = mysqli_query($allonfasaha, $query_User_re_center) or die(mysqli_error($allonfasaha));
            $row_User_re_center = mysqli_fetch_assoc($User_re_center);
            $totalRows_User_re_center = mysqli_num_rows($User_re_center);
            $query_User_re_points = sprintf("SELECT SUM(assm_unit), SUM(quiz_unit_point) FROM assessment WHERE student_id={$data}");
            $User_re_points = mysqli_query($allonfasaha, $query_User_re_points) or die(mysqli_error($allonfasaha));
            $row_User_re_points = mysqli_fetch_assoc($User_re_points);
            $totalRows_User_re_points = mysqli_num_rows($User_re_points);
            $row_User_re['totalScore'] = $row_User_re_points['SUM(assm_unit)'];
            $row_User_re['totalQuizPoint'] = $row_User_re_points['SUM(quiz_unit_point)'];
            $getResponse[] = $row_User_re;
            $query_User_re_parent = sprintf("SELECT * FROM parent_guardian WHERE hash_pin='{$row_User_re['hash_pin']}'");
            $User_re_parent = mysqli_query($allonfasaha, $query_User_re_parent) or die(mysqli_error($allonfasaha));
            $row_User_re_parent = mysqli_fetch_assoc($User_re_parent);
            $totalRows_User_re_parent = mysqli_num_rows($User_re_parent);
            $getResponse[] = $row_User_re_parent;
            $query_User_re_img = sprintf("SELECT img FROM st_pictures WHERE hash_id='{$row_User_re['hash_pin']}'");
            $User_re_img = mysqli_query($allonfasaha, $query_User_re_img) or die(mysqli_error($allonfasaha));
            $row_User_re_img = mysqli_fetch_assoc($User_re_img);
            $totalRows_User_re_img = mysqli_num_rows($User_re_img);
            $getResponse[] = $row_User_re_img;
        } while ($row_User_re = mysqli_fetch_assoc($User_re));
        exit(json_encode($getResponse));
    }
}

function studentMetrics($data)
{
    include "config/index.php";
    $data = base64_decode($data);
    $module = [1, 2, 3];
    // echo $data;
    $getResponse = [];
    foreach ($module as $key => $value) {
        $level = [1, 2, 3];
        foreach ($level as $key1 => $value1) {
            $subject = ['literacy', 'numeracy'];
            foreach ($subject as $key2 => $value3) {
                $query_User_re = sprintf("SELECT * FROM assessment WHERE student_id={$data} AND module={$value} AND level={$value1} AND subject_name='{$value3}'");
                $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
                $row_User_re = mysqli_fetch_assoc($User_re);
                $totalRows_User_re = mysqli_num_rows($User_re);
                if ($totalRows_User_re > 0) {
                    $getTheResponse = [];
                    do {
                        $getTheResponse[] = $row_User_re;
                    } while ($row_User_re = mysqli_fetch_assoc($User_re));
                    $getResponse[$value][$value1][$value3] = $getTheResponse;
                } else {
                    $getResponse[$value][$value1][$value3] = 0;
                }
            }
        }
    }
    exit(json_encode($getResponse));
}

function studentPerformance($data, $subject)
{
    include "config/index.php";
    $data = base64_decode($data);
    $query_User_re = sprintf("SELECT DISTINCT module_name  FROM assessment WHERE student_id={$data} AND subject_name='{$subject}'");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    $subject_list = [];
    $subject_list_value = [];
    if ($totalRows_User_re > 0) {
        do {
            $subject_list[] = $row_User_re['module_name'];
        } while ($row_User_re = mysqli_fetch_assoc($User_re));
        // print_r($subject_list);
        foreach ($subject_list as $key => $value) {
            $query_User_get_value = sprintf("SELECT AVG(assm_unit), module_name FROM `assessment` WHERE student_id={$data} AND module_name='{$value}'");
            $User_get_value = mysqli_query($allonfasaha, $query_User_get_value) or die(mysqli_error($allonfasaha));
            $row_User_get_value = mysqli_fetch_assoc($User_get_value);
            $totalRows_User_get_value = mysqli_num_rows($User_get_value);
            if ($totalRows_User_get_value > 0) {
                do {
                    $subject_list_value[$value] = (int)$row_User_get_value['AVG(assm_unit)'];
                } while ($row_User_get_value = mysqli_fetch_assoc($User_get_value));
            }
        }
    }
    exit(json_encode($subject_list_value));
}

function allAdmin()
{
    include "config/index.php";
    $allTables = ['admin_center'];
    $getResponse = [];
    foreach ($allTables as $key => $value) {
        $query_User_re = sprintf("SELECT * FROM {$value}");
        $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
        $row_User_re = mysqli_fetch_assoc($User_re);
        $totalRows_User_re = mysqli_num_rows($User_re);
        if ($totalRows_User_re > 0) {
            do {
                $getResponse[] = $row_User_re;
            } while ($row_User_re = mysqli_fetch_assoc($User_re));
        }
    }
    exit(json_encode($getResponse));
}

function specificAdmin()
{
    include "config/index.php";
    $allTables = ['l_users'];
    $getResponse = [];
    foreach ($allTables as $key => $value) {
        $query_User_re = sprintf("SELECT * FROM {$value}");
        $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
        $row_User_re = mysqli_fetch_assoc($User_re);
        $totalRows_User_re = mysqli_num_rows($User_re);
        if ($totalRows_User_re > 0) {
            do {
                $getResponse[] = $row_User_re;
            } while ($row_User_re = mysqli_fetch_assoc($User_re));
        }
    }
    exit(json_encode($getResponse));
}

function centerDetailTop($data)
{
    include "config/index.php";
    $tables = ['access_students', 'time_spent'];
    $getResponse = [];
    $firstNumber = 0;
    $secondNumber = 0;
    $data = base64_decode($data);
    foreach ($tables as $key => $value) {
        $query_User_re = sprintf("SELECT * FROM {$value} WHERE center_id={$data}");
        $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
        $row_User_re = mysqli_fetch_assoc($User_re);
        $totalRows_User_re = mysqli_num_rows($User_re);
        // if ($value = 'access_students') {
        //     $firstNumber = $totalRows_User_re;
        // } else {
        //     $secondNumber = $totalRows_User_re;
        // }
        $getResponse[$value] = $totalRows_User_re;
    }
    // $getResponse['yet'] = $firstNumber - $secondNumber;

    exit(json_encode($getResponse));
}

function centerInfo($data)
{
    include "config/index.php";

    $data = base64_decode($data);
    $query_User_re = sprintf("SELECT centres.centre_name, centres.centre_country, 
                                centres.centre_state, centres.centre_lga,centres.id, admin_center.fullname 
                                FROM centres INNER JOIN admin_center ON centres.id=admin_center.center 
                                WHERE centres.id={$data};");
    $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($totalRows_User_re > 0) {
        do {
            $getResponse[] = $row_User_re['centre_name'];
            $getResponse[] = $row_User_re['centre_country'];
            $getResponse[] = $row_User_re['centre_state'];
            $getResponse[] = $row_User_re['centre_lga'];
            $getResponse[] = $row_User_re['fullname'];
            $query_User_assistant = sprintf("SELECT * FROM center_assistant WHERE center_id={$row_User_re['id']}");
            $User_assistant = mysqli_query($allonfasaha, $query_User_assistant) or die(mysqli_error($allonfasaha));
            $row_User_assistant = mysqli_fetch_assoc($User_assistant);
            $totalRows_User_assistant = mysqli_num_rows($User_assistant);
            if ($totalRows_User_assistant > 0) {
                do {
                    $getResponse[] = $row_User_assistant['fullname'];
                    $getResponse[] = $row_User_assistant['address'];
                    $getResponse[] = $row_User_assistant['email'];
                    // $id = $row_User_assistant['hash_id'];
                    $query_User_assistant_img = sprintf("SELECT * FROM center_assistant_image WHERE center_id={$row_User_re['id']}");
                    $User_assistant_img = mysqli_query($allonfasaha, $query_User_assistant_img) or die(mysqli_error($allonfasaha));
                    $row_User_assistant_img = mysqli_fetch_assoc($User_assistant_img);
                    $totalRows_User_assistant_img = mysqli_num_rows($User_assistant_img);
                    if ($totalRows_User_assistant_img > 0) {
                        do {
                            $getResponse[] = $row_User_assistant_img['img'];
                        } while ($row_User_assistant_img = mysqli_fetch_assoc($User_assistant_img));
                    }
                } while ($row_User_assistant = mysqli_fetch_assoc($User_assistant));
            }
        } while ($row_User_re = mysqli_fetch_assoc($User_re));
    }
    exit(json_encode($getResponse));
}

function studentFeeding($data)
{
    include "config/index.php";
    $data = base64_decode($data);
    $databases = ["feeding", "st_activities"];
    $getResponse = [];
    foreach ($databases as $key => $value) {
        if ($value == "st_activities") {
            $query_User_re = sprintf("SELECT SUM(logins) FROM {$value} WHERE st_id={$data}");
        } else {
            $query_User_re = sprintf("SELECT * FROM {$value} WHERE user_id={$data}");
        }
        $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
        $row_User_re = mysqli_fetch_assoc($User_re);
        $totalRows_User_re = mysqli_num_rows($User_re);
        if ($value == "st_activities") {
            $getResponse[$value] = $row_User_re['SUM(logins)'];
        } else {
            $getResponse[$value] = $totalRows_User_re;
        }
    }
    exit(json_encode($getResponse));
}

function allStudentFeedChart()
{
    include "config/index.php";
    $databases = ["feeding", "st_activities"];
    $getResponse = [];
    foreach ($databases as $key => $value) {
        if ($value == "st_activities") {
            $query_User_re = sprintf("SELECT SUM(logins) FROM {$value}");
        } else {
            $query_User_re = sprintf("SELECT * FROM {$value}");
        }
        $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
        $row_User_re = mysqli_fetch_assoc($User_re);
        $totalRows_User_re = mysqli_num_rows($User_re);
        if ($value == "st_activities") {
            $getResponse[$value] = $row_User_re['SUM(logins)'];
        } else {
            $getResponse[$value] = $totalRows_User_re;
        }
    }
    exit(json_encode($getResponse));
}

function updateStudentProfile($data)
{
    include "config/index.php";
    $c_role = $_GET['role'];
    $data = base64_decode($data);
    switch ($c_role) {
        case '0':
            $parent_fullname = $_GET['fullname'];
            $parent_relation = $_GET['relationship'];
            $parent_state = $_GET['state'];
            $parent_occupation = $_GET['occupation'];
            $parent_education = "unknown";
            $parent_address = $_GET['address'];
            $guardian_fullname = $_GET['fullname_g'];
            $guardian_relation = $_GET['relationship_g'];
            $guardian_address = $_GET['address_g'];
            $guardian_phone = $_GET['phone_g'];
            $phone = $_GET['phone'];


            $connectorr = $_GET['connector'];
            $query_User_re = sprintf("UPDATE parent_guardian SET fullname = '$parent_fullname', relationship = '$parent_relation', state = '$parent_state', occupation = '$parent_occupation', education = '$parent_education', address = '$parent_address', guardian_name = '$guardian_fullname', guardain_relationship = '$guardian_relation', guardian_address = '$guardian_address', hash_pin = '$connectorr', phone = '$phone', guardian_phone = '$guardian_phone' WHERE id={$data}");
            $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
            if ($User_re) {
                $returnResponse = ['status' => 1, 'message' => "Updated Successfully", 'connector' => "{$connectorr}"];
                exit(json_encode($returnResponse));
            } else {
                $returnResponse = ['status' => 0, 'message' => "Not updated, try again"];
                exit(json_encode($returnResponse));
            }
            break;
        case '1':
            $f_name = $_GET['fname'];
            $l_name = $_GET['lname'];
            $age = $_GET['age'];
            $c_country = $_GET['country'];
            $c_education = $_GET['edu_background'];
            $c_state = $_GET['state'];
            $c_lga = $_GET['lga'];
            $c_center = $_GET['center'];
            $password = '12345';
            $connectorr = uniqid();
            $query_User_re = sprintf("UPDATE access_students SET first_name = '$f_name', last_name = '$l_name', nationality = '$c_country', state = '$c_state', password = '$password', lga = '$c_lga', center_id = '$c_center', age = '$age', edu_background = '$c_education', hash_pin = '$connectorr'  WHERE id={$data}");
            $User_re = mysqli_query($allonfasaha, $query_User_re) or die(mysqli_error($allonfasaha));
            if ($User_re) {
                $returnResponse = ['status' => 1, 'message' => "{$connectorr}"];
                exit(json_encode($returnResponse));
            } else {
                $returnResponse = ['status' => 0, 'message' => "{$c_name} not updated, try again"];
                exit(json_encode($returnResponse));
            }
        default:
            # code...
            break;
    }

    // print_r($all);

}

function UpdateImg()
{
    include "config/index.php";
    $connectorr = $_POST['connector'];
    $img = $_POST['st_image'];
    $query_User_img = sprintf("UPDATE st_pictures SET img = '$img'  WHERE hash_id={$connectorr}");
    $User_re_img = mysqli_query($allonfasaha, $query_User_img) or die(mysqli_error($allonfasaha));
    if ($User_re_img) {
        $returnResponse = ['status' => 1, 'message' => "{$connectorr}"];
        exit(json_encode($returnResponse));
    } else {
        $returnResponse = ['status' => 0, 'message' => " not added, try again"];
        exit(json_encode($returnResponse));
    }
}

function UpdatePass()
{
    include "config/index.php";
    $connectorr = $_GET['id'];
    $password = $_GET['pin'];
    $query_User_img = sprintf("UPDATE l_users SET `password` = '$password'  WHERE l_id={$connectorr}");
    $User_re_img = mysqli_query($allonfasaha, $query_User_img) or die(mysqli_error($allonfasaha));
    if ($User_re_img) {
        $returnResponse = ['status' => 1, 'message' => "password Updated successfully"];
        exit(json_encode($returnResponse));
    } else {
        $returnResponse = ['status' => 0, 'message' => " password not Updated, try again"];
        exit(json_encode($returnResponse));
    }
}