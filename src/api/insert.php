<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Content-Type");
    require 'connect.php';

    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $name = $request->name;
        $email = $request->email;
        $senha = $request->senha;

        $sql = " INSERT INTO usuario(`nome`, `email`, `senha`) VALUES ('{$name}', '{$email}', '{$senha}') ";
                    
        if($conn->query($sql)) {
           http_response_code(201);
        } else {
           http_response_code(422);
        }

        $name = '';
        $email = '';
        $senha = '';
    }
?>
