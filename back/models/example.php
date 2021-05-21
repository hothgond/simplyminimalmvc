<?php

require_once '../lib/db_config.php';

class example {
    public $connection;

    public function disconnect(){
        $this->connection->disconnect();
    }
    // Example functions
    public function getExampleData(){
        $this->connection = new db_config();
        $con = $this->connection->connect();
        $exampleData = $con->query(
            "SELECT * 
            FROM example
            Limit 1")->fetchArray();
        return $exampleData;
    }
}
?>