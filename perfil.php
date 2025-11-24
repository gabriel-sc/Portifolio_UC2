<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}
?>
<!doctype html>
<html>
<head><meta charset='utf-8'><title>Perfil</title></head>
<body>
<h2>Área do usuário</h2>
<p>Bem-vindo, <?php echo htmlspecialchars($_SESSION['usuario']); ?>!</p>
<p><a href='logout.php'>Sair</a></p>
</body>
</html>
