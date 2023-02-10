<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

//Load Composer's autoloader
require 'mailer/autoload.php';

//Create an instance; passing `true` enables exceptions
if(isset($_POST['send'])){
    $name = htmlentities($_POST['name']);
    $email = htmlentities($_POST['email']);
    $subject = htmlentities($_POST['subject']);
    $address = htmlentities($_POST['address']);
    $message = htmlentities($_POST['message']);

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'Www.IcleanAEY@gmail.com';
    $mail->Password = 'xmzlzgwqlqnprigc';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress('Www.IcleanAEY@gmail.com');
    $mail->Subject = ("$email ($subject)");
    $mail->Body = ("$message ($address)");
    $mail->send();

    header("Location: ./response.html");
}

?>

