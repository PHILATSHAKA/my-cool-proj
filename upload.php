<?php
header('Access-Control-Allow-Origin: *');
define('PUBLIC_KEY', '8b3c0d392a583fb1e1b8');

 $tmpPath = $_FILES['file']['tmp_name'];
 $actualName =$_FILES['file']['name'];

$actualPath = dirname(__FILE__).'\/temp\/'.$actualName;

move_uploaded_file($tmpPath, $actualPath);

 $ch = curl_init();
$post = [
  'UPLOADCARE_PUB_KEY' =>PUBLIC_KEY,
  'UPLOADCARE_STORE'=>1,
  'file' => curl_file_create($actualPath)
];
 curl_setopt($ch,CURLOPT_URL,'https://api.uploadcare.com/base/');
 curl_setopt($ch, CURLOPT_POST, 1);
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 curl_setopt($ch,CURLOPT_POSTFIELDS, $post );

 $response = curl_exec($ch);

 var_dump($response);
