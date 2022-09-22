<?php

declare(strict_types=1);
// header('Content-type:application/json;charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    include('test.php');
    if (isset($_GET['doTransfer'])) {
        $amount = (int) $_GET['amount'];
        $narration = (string) $_GET['narration'];
        $referenceNumber = (string) $_GET['referenceNumber'];
        transfer($amount, $narration, $referenceNumber);
    } elseif (isset($_GET['getTransactions'])) {
        $to = (string) $_GET['to'];
        $from = (string) $_GET['from'];
        getTransactions($to,$from);
    }
}
