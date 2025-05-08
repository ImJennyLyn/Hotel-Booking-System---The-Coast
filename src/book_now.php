<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Include DB connection
include 'db_connection.php';

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

// Check required fields
$required = ['fullName', 'address', 'email', 'phone', 'roomType', 'checkInDate', 'checkOutDate', 'guests'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        echo json_encode(["success" => false, "message" => "Missing field: $field"]);
        exit;
    }
}

// Sanitize input
$fullName = $conn->real_escape_string($data['fullName']);
$address = $conn->real_escape_string($data['address']);
$email = $conn->real_escape_string($data['email']);
$phone = $conn->real_escape_string($data['phone']);
$roomType = $conn->real_escape_string($data['roomType']);
$checkIn = $conn->real_escape_string($data['checkInDate']);
$checkOut = $conn->real_escape_string($data['checkOutDate']);
$guests = (int)$data['guests'];

// Insert into DB
$sql = "INSERT INTO bookings (full_name, address, email, phone, room_type, check_in_date, check_out_date, guests)
        VALUES ('$fullName', '$address', '$email', '$phone', '$roomType', '$checkIn', '$checkOut', $guests)";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Booking saved successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
