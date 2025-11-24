<?php
require_once "db.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $senha_raw = $_POST['senha'] ?? '';

    if ($nome === '' || $email === '' || $senha_raw === '') {
        $error = 'Preencha todos os campos.';
    } else {
        $senha = password_hash($senha_raw, PASSWORD_DEFAULT);
        $db = new Database();
        $conn = $db->getConnection();

        $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':senha', $senha);
        try {
            $stmt->execute();
            header('Location: login.php?registered=1');
            exit;
        } catch (PDOException $e) {
            if (strpos($e->getMessage(), '1062') !== false || strpos($e->getMessage(), 'Duplicate') !== false) {
                $error = 'Email já cadastrado.';
            } else {
                $error = 'Erro: ' . $e->getMessage();
            }
        }
    }
}
?>
<!doctype html>
<html>
<head><meta charset='utf-8'><title>Registrar</title></head>
<body>
<h2>Registrar</h2>
<?php if(!empty($error)) echo '<p style="color:red">'.htmlspecialchars($error).'</p>'; ?>
<form method="POST">
    Nome:<br><input type="text" name="nome" required><br>
    Email:<br><input type="email" name="email" required><br>
    Senha:<br><input type="password" name="senha" required><br><br>
    <button type="submit">Registrar</button>
</form>
<p><a href="login.php">Já tem conta? Entrar</a></p>
</body>
</html>
