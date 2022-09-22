<?php

declare(strict_types=1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    include 'all_Function.php';
    if (isset($_GET['login'])) {
        $username =  $_GET['username'];
        $password =  $_GET['password'];
        login($username, $password);
    } elseif (isset($_GET['creatUser'])) {
        $fname = (string) $_GET['fname'];

        $lname = (string) $_GET['lname'];

        $email = (string) $_GET['email'];

        $password = "12345";
        
        createUser($fname, $lname, $email, $password);
        
    } else if (isset($_GET['delUser'])){
        $user_id = $_GET['user_id'];
        delUser($user_id);

    } else if (isset($_GET['updateUser'])){
        $user_id = $_GET['user_id'];
        $fname = (string) $_GET['fname'];

        $lname = (string) $_GET['lname'];

        $email = (string) $_GET['email'];

        $password = (string) $_GET['password'];
        updateUser($user_id, $fname, $lname, $email, $password);
    } 
}
?>