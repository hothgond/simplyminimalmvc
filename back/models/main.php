<?php

require_once '../lib/db_config.php';

class main {
    public $connection;

    public function disconnect(){
        $this->connection->disconnect();
    }

    // Example functions
    public function getAllUsers(){
        $this->connection = new db_config();
        $con = $this->connection->connect();
        $users = $con->query(
            "SELECT * 
            FROM table
            WHERE enabled == true
            ORDER BY id ASC")->fetchAll();
        return $users;
    }

    public function getUsersWithLimit($limit){
        $connection = new db_config();
        $con = $connection->connect();
        $followers = $con->query(
            "SELECT * 
            FROM table
            WHERE enabled == true
            ORDER BY id ASC
            LIMIT ".$limit)->fetchAll();
        return $followers;
    }  
}
?>