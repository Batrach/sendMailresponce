<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet ='UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// от кого письмо
$mail->setForm('abakumchik989@gmail.com', 'Лешка Абакумов');
// Кому письмо
$mail->addAddress('abakumchik89@mail.ru');
// Тема письма 
$mail->Subject = 'Привет! Это Лешка';

// Рука

$hand = "Правая";
if($_POST['hand']=="left"){
    $hand = 'Левая';
}

// Тело письма

$body = '<h1>Встречайте супер письмо!</h1>';

if(trim(!empty($_POST['name']))){
    $_body.='<p><strong>Имя:</strong> '.$_POST['name'].'<p>';
}
if(trim(!empty($_POST['email']))){
    $_body.='<p><strong>E-mail:</strong> '.$_POST['email'].'<p>';
}
if(trim(!empty($_POST['hand']))){
    $_body.='<p><strong>Рука:</strong> '.$_hand.'<p>';
}
if(trim(!empty($_POST['age']))){
    $_body.='<p><strong>Возраст:</strong> '.$_POST['age'].'<p>';
}
if(trim(!empty($_POST['message']))){
    $_body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'<p>';
}

// Прикрепить файл

if(!empty($_FILES['image']['tmp_name'])){
    //путь загрузки файла
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    //грузим файл
    if(copy($_FILES['image']['tmp_name'], $filePath)){
        $fileAttach = $filePath;
        $body.='<p><strong>Фото в приложении</strong>';
        $mail ->addAttachment($fileAttach);
    }
}

$mail->Body =$body;

// Отправляем 
if(!$mail->send()){
 $message = 'Ошибка';
}else{
    $message = 'Данные отправлены!';
}
$response =['message'=> $message];

header('Content-type: application/json');
echo json_encode($response);
?>