<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/Databases.php';
include_once '../../model/users.php';

$database = new Databases();
$db = $database->getConnection();

$user = new users($db);

$data = json_decode(file_get_contents("php://input"));

$user->username = $data->username;
$user->password = $data->password;
$user->email = $data->email;


if($user->create()) {
    http_response_code(201);
    echo json_encode(
    array('message' => 'user Created')
    );
} else {
    http_response_code(503);
    echo json_encode(
    array('message' => 'list Not Created')
    );
}
?>