<?php
header("Content-Type: text/json; charset=utf8");
// PLEASE REMEMBER: Your server and your PHP needs to be allowed to send Emails.
// Else this controller will return with fail.
$to = clearEmail('somebody@example.com'); // Set your email address where you want to receive emails. 
$subject = clearText('Contact Request From Website'); // Set your subject.

if (isset($_POST['email'])) {
    $name = clearText($_POST['name']);
    $email = clearEmail($_POST['email']);
    $message = clearText($_POST['message']);
    $age = clearText($_POST['age']);
    $weight = clearText($_POST['weight']);

    $message_final = clearText($message .' Age:'. $age .'. Weight: '. $weight .'.') ;
    $headers = "From: ". $name ." <". $email ."> \r\n";

    // Here sends email
   if(mail($to,$subject,$message_final,$headers)){
    echo json_encode(array("success" => true));
   } else{
    echo json_encode(array("success" => false,"error" => "Could not send"));
   }
}else{
    echo json_encode(array("success" => false,"error" => "No email 'from' received"));
}

function clearPassword($pass){
    $pass = trim($pass); //remove empty spaces
    $pass = strip_tags($pass); //remove html tags
    $pass = htmlentities($pass, ENT_QUOTES,'UTF-8'); //for major security transform some other chars into html corrispective...
    return $pass;
}

function clearText($text){
    $text = trim($text); //remove empty spaces
    $text = strip_tags($text); //remove html tags
    $text = filter_var($text, FILTER_SANITIZE_MAGIC_QUOTES); //addslashes();
    $text = filter_var($text, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW); //remove /t/n/g/s
    $text = filter_var($text, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH); //remove é à ò ì ` ecc...
    $text = htmlentities($text, ENT_QUOTES,'UTF-8'); //for major security transform some other chars into html corrispective...
    return $text;
}

function clearEmail($email){
    $email = trim($email); //remove empty spaces
    $email = strip_tags($email); //remove html tags
    $email = filter_var($email, FILTER_SANITIZE_EMAIL); //e-mail filter;
    if($email = filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return htmlentities($email, ENT_QUOTES,'UTF-8');//for major security transform some other chars into html corrispective...
    }else{ 
        echo json_encode(array("success" => false,"error" => "The Email: '".$email."' is badly formatted"));
        die;
    }
}

?>