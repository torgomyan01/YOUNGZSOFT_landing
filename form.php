<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

function isValidEmail($email){
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

$type = $_POST['type'];
$name = isset($_POST['name']) ? $_POST['name'] : 'Пусто';
$email = isset($_POST['email']) ? $_POST['email'] : 'Пусто';
$phoneNumber = isset($_POST['number_phone']) ? $_POST['number_phone'] : 'Пусто';
$message = isset($_POST['message']) ? $_POST['message'] : 'Пусто';

if(isset($_POST['email']) && !isValidEmail($email)){
    echo 'Error Email';
    exit();
}


$to      = 'cyberbulling@gmail.com';
$subject = $type;
$message = '
    Название формы: '.$type.'
    Имя: '.$name.'
    Email: '.$email.'
    Номер телефона: '.$phoneNumber.'
    Сообщения: '.$message.'
';

$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers)){
    echo 1;
} else {
    echo 0;
}



