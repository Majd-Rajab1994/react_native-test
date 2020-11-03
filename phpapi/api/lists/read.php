<?php
 $api_credentials = array(
    'user1' => 'abc123',
    'user2' => 'abcxyz'
);

if (!isset($_SERVER['PHP_AUTH_USER'])) {
    header('WWW-Authenticate: Basic realm="My API"');
    header('HTTP/1.1 401 Unauthorized');
    exit;
} else {
    $username = $_SERVER['PHP_AUTH_USER'];
    $password = $_SERVER['PHP_AUTH_PW'];

    if (!array_key_exists($username, $api_credentials) || $password != $api_credentials[$username]) {
        header('HTTP/1.1 403 Forbidden');
        exit;
    }
    else{
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        include_once '../../config/Databases.php';
        include_once '../../model/lists.php';

        $database = new Databases();
        $db = $database->getConnection();

        $list = new lists($db);

        $s = $list->read();
        $num = $s->rowcount();

        if($num>0)
        {
            $list_array = array();
            $list_array['item']=array();
            while($row = $s->fetch(PDO::FETCH_ASSOC))
            {      
                extract($row);
                $list_item=array(
                    "id" => $id,
                    "name" => $name,
                    "title" => $title,
                    "img" => base64_encode($img),
                );
                array_push($list_array['item'], $list_item);
            }
            http_response_code(200);
            $s=  json_encode($list_array);
            echo $s;
        }
        else{
            http_response_code(404);
            echo json_encode(
                array("message" => "No products found.")
            );
        }
    }
}
?>