<?php
class Database {
    private $host = 'sql213.byetcluster.com';
    private $dbname = 'if0_40161697_Lojao_tech';
    private $username = 'if0_40161697';
    private $password = 'ft0hMaLSyJU';
    private $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host={$this->host};dbname={$this->dbname};charset=utf8",
                $this->username,
                $this->password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]
            );
        } catch (PDOException $e) {
            die("Erro na conexão: " . $e->getMessage());
        }

        return $this->conn;
    }
}
