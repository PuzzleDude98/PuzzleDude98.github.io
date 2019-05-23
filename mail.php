<?php
$input=$_POST['input'];
$to      = 'oliverrt26@hotmail.com';
$subject = 'Another Suggestion';
$message = $input;
$headers = 'From: puzzledude98.github.io' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
if(mail($to, $subject, $message, $headers)){echo 'we received your email thank you ';}
?>
