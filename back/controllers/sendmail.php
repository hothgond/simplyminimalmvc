<?php

include '../lib/sanitize_inputs.php';
$sanitizeField = new sanitize_inputs();

header("Content-Type: text/json; charset=utf8");
// PLEASE REMEMBER: Your server and your PHP needs to be allowed to send Emails.
// Else this controller will return with fail.
$to = $sanitizeField->makeEmail('somebody@example.com'); // Set your email address where you want to receive emails. 
$subject = $sanitizeField->makeText('Contact Request From Website'); // Set your subject.

if (isset($_POST['email'])) {
    $name = $sanitizeField->makeText($_POST['name']);
    $email = $sanitizeField->makeEmail($_POST['email']);
    $message = $sanitizeField->makeText($_POST['message']);
    $age = $sanitizeField->makeIntNumber($_POST['age']);
    $weight = $sanitizeField->makeText($_POST['weight']);

    $message_final = $sanitizeField->makeText($message .' Age:'. $age .'. Weight: '. $weight .'.') ;
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



?>