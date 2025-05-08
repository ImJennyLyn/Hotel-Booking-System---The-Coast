<?php
$host = "localhost";
$username = "root";
$password = ""; // Change this if you have a MySQL password
$dbname = "hotel_booking";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed: " . $conn->connect_error]));
}
?>
