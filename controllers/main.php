<?php
include '../models/model_main.php';

$main = new main();

// GATHER DATA EXAMPLE CALLS
$dataRaw = $main->getAllUsers();
$dataLimit = $main->getUsersWithLimit($limit);


// EXAMPLES ON TIME SET FUNCTIONS
$today = date($dataLast[0]['daytime']);
$arrayDates = [date("2020-09-29"), date("2020-10-07"), date("2020-10-15"), date("2020-10-22"), date("2020-11-03")];
$dateMjY = date("M. j, Y", $today);
$daySeconds = 86400; // 60*60*24
$timeZero = strtotime(0);


// RETURN DATA (ALWAYS AT THE END)
// print_r($dataRaw); // to see what we are returning. Needs to be commented if we want to see anything in front.
header("Content-Type: text/json; charset=utf8");
echo json_encode(array($dataRaw));
?>