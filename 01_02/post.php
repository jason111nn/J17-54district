<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    try {
        $dsn = "mysql:host=localhost;charset=utf8;dbname=db07";
        $conn = new PDO($dsn, "admin", "1234");

        $sql = "INSERT INTO `tickets` (`first-name`, `last-name`, `password`, `phone`) 
                VALUES (:firstname, :lastname, :password, :phone)";

        $stmt = $conn->prepare($sql);
        $result = $stmt->execute([
            ':firstname' => $data['firstname'],
            ':lastname' => $data['lastname'],
            ':password' => $data['password'],
            ':phone' => $data['phone']
        ]);
        echo json_encode($result);
    } catch (PDOException $e) {
        echo json_encode(false);
    }
} else {
    echo json_encode(false);
}
?>
