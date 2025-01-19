<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../assets/vendor/phpmailer/src/PHPMailer.php';
require '../assets/vendor/phpmailer/src/SMTP.php';
require '../assets/vendor/phpmailer/src/Exception.php';

$receiving_email_address = 'boominathan2355@gmail.com';

$mail = new PHPMailer(true);

try {
    $from_name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $from_email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if (empty($from_name) || empty($from_email) || empty($subject) || empty($message)) {
        echo 'Error: All fields are required.';
        exit;
    }

    if (!$from_email) {
        echo 'Error: Invalid email address.';
        exit;
    }

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'boominathanalagirisamy@gmail.com';
    $mail->Password = 'igbydycyptrxthwz';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom($from_email, $from_name);
    $mail->addAddress($receiving_email_address);
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = nl2br($message);
    $mail->AltBody = $message;

    $mail->send();
    echo 'Message sent successfully!';
} catch (Exception $e) {
    echo 'Error: Unable to send message. Please try again later.';
}
?>
