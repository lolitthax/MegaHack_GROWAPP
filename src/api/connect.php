<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Content-Type");
    
    function connect() {
        $host = 'localhost';
        $dbname = 'growapp';
        $dbuser = 'root';
        $dbpass = '';

        try {
            $cmd = new PDO("mysql:dbname=$dbname;host=$host",$dbuser,$dbpass);
        } catch (PDOException $e) {
            echo 'Erro com o banco de dados: '. $e->getMessage();
        } catch (Exception $e) {
            echo 'Erro generico: '. $e->getMessage();
        }
        return $cmd;
    }

    $conn = connect();
?>