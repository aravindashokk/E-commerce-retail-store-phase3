<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include './customers.php';


$sql= "SELECT  club_ID,club_name,club_email,school_Id,club_description from club";
$result=$db->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

?>