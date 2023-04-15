<?php
// Get calculated value from AJAX request
$perType = $_POST['perType'];
$userEmail = $_POST['userEmail'];

// Connect to database using PDO
$db = new PDO("mysql:host=localhost;dbname=psycotech", "admin", "admin");

// Prepare SQL statement
$stmt = $db->prepare("UPDATE users SET perType = ? WHERE userEmail = ?");

// Bind parameter to statement
$stmt->bindParam(1, $perType, PDO::PARAM_STR);
$stmt->bindParam(2, $userEmail, PDO::PARAM_STR);

// Execute statement
$stmt->execute();
?>