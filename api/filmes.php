<?php
require_once "../db.php";

$db = new Database();
$conn = $db->getConnection();

$sql = "SELECT filmes.*, categorias.nome AS categoria 
        FROM filmes 
        LEFT JOIN categorias ON categorias.id = filmes.categoria_id";

$stmt = $conn->query($sql);
$data = $stmt->fetchAll();

echo json_encode($data);
