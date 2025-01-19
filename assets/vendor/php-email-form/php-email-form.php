<?php
class PHP_Email_Form {
    public $to;
    public $from_name;
    public $from_email;
    public $subject;
    public $smtp = [];
    public $messages = [];
    public $ajax = false;

    // Add message to be included in the email
    public function add_message($message, $field_name, $min_length = 0) {
        if (strlen($message) >= $min_length) {
            $this->messages[] = [
                'field' => $field_name,
                'message' => $message
            ];
            return true;
        }
        return false;
    }

    // Send the email
    public function send() {
        if (!filter_var($this->from_email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        $headers = "From: " . $this->from_name . " <" . $this->from_email . ">\r\n";
        $headers .= "Reply-To: " . $this->from_email . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $email_body = "";
        foreach ($this->messages as $msg) {
            $email_body .= $msg['field'] . ": " . $msg['message'] . "\n";
        }

        // Check if SMTP is configured
        if (!empty($this->smtp)) {
            return $this->send_with_smtp($email_body, $headers);
        }

        // Send email using PHP's mail() function
        return mail($this->to, $this->subject, $email_body, $headers);
    }

    // Send email using SMTP
    private function send_with_smtp($email_body, $headers) {
        if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
            die('Error: PHPMailer library is required for SMTP.');
        }

        $mail = new PHPMailer\PHPMailer\PHPMailer();
        $mail->isSMTP();
        $mail->Host = $this->smtp['host'];
        $mail->SMTPAuth = true;
        $mail->Username = $this->smtp['username'];
        $mail->Password = $this->smtp['password'];
        $mail->SMTPSecure = $this->smtp['encryption'];
        $mail->Port = $this->smtp['port'];

        $mail->setFrom($this->from_email, $this->from_name);
        $mail->addAddress($this->to);
        $mail->Subject = $this->subject;
        $mail->Body = $email_body;

        return $mail->send();
    }
}
?>
