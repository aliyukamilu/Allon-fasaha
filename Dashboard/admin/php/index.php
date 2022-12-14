<?php

declare(strict_types=1);
// header('Content-type:application/json;charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    include 'gate.php';
    if (isset($_GET['login'])) {
        $username = (string) $_GET['email'];
        $password = (string) $_GET['password'];
        login($username, $password);
    } elseif (isset($_GET['dashboardTop'])) {
        dashboard();
    } elseif (isset($_GET['addCenter'])) {
        centre($_GET);
    } elseif (isset($_GET['getCenters'])) {
        centreAll();
    } elseif (isset($_GET['creatUser'])) {
        createUser($_GET);
    } elseif (isset($_GET['creatUserAssistant'])) {
        createUserAssitant($_GET);
    } elseif (isset($_GET['allAdmins'])) {
        allAdmin();
    } elseif (isset($_GET['allStudent'])) {
        allStudent();
    } elseif (isset($_GET['specificStudent'])) {
        specificStudent($_GET['id']);
    } elseif (isset($_GET['createStudent'])) {
        createStudent($_GET);
    } elseif (isset($_GET['getStudentMetrics'])) {
        studentMetrics($_GET['id']);
    } elseif (isset($_GET['getStudentPerformance'])) {
        studentPerformance($_GET['id'], $_GET['subject']);
    } elseif (isset($_GET['getCenterMetrix'])) {
        centerDetailTop($_GET['id']);
    } elseif (isset($_GET['getCenterInfo'])) {
        centerInfo($_GET['id']);
    } elseif (isset($_GET['updateSProfile'])) {
        updateStudentProfile($_GET['id']);
    } elseif (isset($_GET['getAllStudentSpecificCentre'])) {
        getAllStudentSpecificCentre($_GET['id']);
    } elseif (isset($_GET['getAllStudentSpecificCentreFeeding'])) {
        getAllStudentSpecificCentreFeeding(base64_decode($_GET['id']));
        
    }elseif (isset($_GET['updateFeedingCenter'])) {
        updateFeedingCenter($_GET['info']);
        
    }elseif (isset($_GET['studentFeedingChart'])) {
        studentFeeding($_GET['id']);
        
    }elseif(isset($_GET['allStudentFeedChart'])){
        allStudentFeedChart();
    }elseif(isset($_GET['updatePass'])){
        UpdatePass();
}
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include 'gate.php';
    if (isset($_POST['saveImg'])) {
        saveImg($_POST);
    }elseif(isset($_POST['updateImg'])){
        UpdateImg($_POST);
    }elseif(isset($_POST['centerAssImg'])){
        centerAssistantImg($_POST);    
    // if (isset($_GET['practice'])) {
    //     // session_start();
    //     // print_r($_GET);
    //     $data = $_GET;
    //     practice($data);
    // }
    }
}
