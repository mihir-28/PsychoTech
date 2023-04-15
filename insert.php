<?php
// Retrieve form data from POST request
$username = $_POST['name'];
$age = $_POST['age'];
$email = $_POST['email'];

$conn = new PDO('mysql:host=localhost;dbname=psycotech', 'admin', 'admin');
$stmt = $conn->prepare('INSERT INTO users (userId, userName, userEmail, age) VALUES (?, ?, ?, ?)');

$sql = "SELECT MAX(userId) AS last_id FROM users";
$result = $conn->query($sql);
$row = $result->fetch(PDO::FETCH_ASSOC);
$lastId = $row['last_id'];
$newId = $lastId + 1;

$stmt->bindParam(1, $newId);
$stmt->bindParam(2, $username);
$stmt->bindParam(3, $email);
$stmt->bindParam(4, $age);
$stmt->execute();

// Return response (if needed)
header("Location: quiz.html");
exit();
?>