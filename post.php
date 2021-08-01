<?php
$statusMsg='';
if(isset($_POST['submit'])){

    $fromEmail = $_POST['email'];
    $name = $_POST['name'];
    $toEmail = "motalibhossainrbk33@gmail.com";
    $subjectName = $_POST["subject"];
    $message1 = $_POST["message"];

    $subject = $subjectName;
	$headers="From: ".$fromEmail;
    $message="Email address :".$fromEmail."\n"."Name :".$name."\n"."Message :".$message1."\n";
  
    mail($toEmail, $subject, $message, $headers);
    echo '<script>alert("Email sent successfully !")</script>';
    echo '<script>window.location.href="https://motalibhossain.com/#contact";</script>';
}
?>