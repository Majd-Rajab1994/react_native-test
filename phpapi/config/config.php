<?php
$dbservername = "localhost";
$dbusername = "root";
$dbpassword ="";
$dbname = "apitest";
$dbconnect = mysqli_connect($dbservername,$dbusername,$dbpassword,$dbname);
if(!$dbconnect)
{
    die ("Faild to connect to my sql server".mysqli_connect_error($dbconnect));
}
$dbconnect->set_charset('utf8');
?>