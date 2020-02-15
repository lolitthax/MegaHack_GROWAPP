<?php
    session_start();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Content-Type");
    require 'connect.php';

    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $email = $request->email;
        $senha = $request->senha;

        $sql = " SELECT idUsuario, email, senha FROM `usuario` WHERE email = '$email' AND senha = '$senha' "; 
        $result = $conn->query($sql);
        
        $row = $result->fetch(PDO::FETCH_ASSOC);

        if($row != null) {
            $_SESSION['login'] = $row['idUsuario'];
            header('Location: teste.php');
        } else {
            echo "Erro no Login";
        }

        $email = '';
        $senha = '';
    }
?>