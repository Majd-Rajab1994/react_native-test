<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/Databases.php';
include_once '../../model/lists.php';

$database = new Databases();
$db = $database->getConnection();

$list = new lists($db);

$data = json_decode(file_get_contents("php://input"));

$list->name = $data->name;
$list->title = $data->title;


if($list->create()) {
    http_response_code(201);
    echo json_encode(
    array('message' => 'list Created')
    );
} else {
    http_response_code(503);
    echo json_encode(
    array('message' => 'list Not Created')
    );
}
?>