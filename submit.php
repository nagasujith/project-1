<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$name = $_POST['name'];
$age = $_POST['age'];
$country = $_POST['country'];
$phone = $_POST['phone'];
$email = $_POST['email'];



$conn = new mysqli('localhost', 'root', '', 'healthybite');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO registration (name, age, country, phone, email) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sisis", $name, $age, $email, $phone, $country);
    $stmt->execute();
    echo "Registration successful...";
    $stmt->close();
    $conn->close();
}
?>
