<?php
// Replace contact@example.com with your real receiving email address
$receiving_email_address = 'dineshwaran529@gmail.com';

// Check if the PHP Email Form library is available
if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
} else {
    die('Error: Unable to load the "PHP Email Form" library.');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

// Set the receiving email address
$contact->to = $receiving_email_address;

// Validate and sanitize user input
$contact->from_name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$contact->from_email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$contact->subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);

// Validate that all required fields are provided
if (empty($contact->from_name) || empty($contact->from_email) || empty($contact->subject)) {
    die('Error: All fields are required.');
}

// SMTP configuration (Use environment variables for sensitive data)
$contact->smtp = array(
    'host' => 'smtp.gmail.com',
    'username' => 'dineshwaran778', // Set environment variable for SMTP username
    'password' => 'saefvzixdixowakl', // Set environment variable for SMTP password
    'port' => '587',
    'encryption' => 'tls' // Ensure TLS is used
);

// Add messages
$contact->add_message($contact->from_name, 'From');
$contact->add_message($contact->from_email, 'Email');
$contact->add_message(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING), 'Message', 10);

// Send the email and provide feedback
if ($contact->send()) {
    echo 'Message sent successfully!';
} else {
    echo 'Error: Unable to send message.';
}
?>

