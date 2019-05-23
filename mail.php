<?php
$input=$_POST['input'];
$to      = 'oliverrt26@hotmail.com';
$subject = 'the subject';
$message = $input;
$headers = 'From: website.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
if(mail($to, $subject, $message, $headers)){echo 'we received your email thank you ';}
?>
