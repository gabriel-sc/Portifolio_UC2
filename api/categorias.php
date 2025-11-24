<?php
require_once "../db.php";

$db = new Database();
$conn = $db->getConnection();

$sql = "SELECT * FROM categorias";
$stmt = $conn->query($sql);

echo json_encode($stmt->fetchAll());
