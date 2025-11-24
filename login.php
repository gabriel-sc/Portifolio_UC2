<?php
session_start();
require_once "db.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $senha = $_POST['senha'] ?? '';

    $db = new Database();
    $conn = $db->getConnection();

    $sql = "SELECT * FROM usuarios WHERE email = :email LIMIT 1";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $user = $stmt->fetch();

    if ($user && password_verify($senha, $user['senha'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['usuario'] = $user['nome'];
        header('Location: perfil.php');
        exit;
    } else {
        $error = 'Email ou senha incorretos.';
    }
}
$registered = isset($_GET['registered']) ? true : false;
?>
<!doctype html>
<html>
<head><meta charset='utf-8'><title>Login</title></head>
<body>
<h2>Login</h2>
<?php if(!empty($registered)) echo '<p style="color:green">Cadastro realizado! Faça login.</p>'; ?>
<?php if(!empty($error)) echo '<p style="color:red">'.htmlspecialchars($error).'</p>'; ?>
<form method="POST">
    Email:<br><input type="email" name="email" required><br>
    Senha:<br><input type="password" name="senha" required><br><br>
    <button type="submit">Entrar</button>
</form>
<p><a href="register.php">Criar conta</a></p>
</body>
</html>
