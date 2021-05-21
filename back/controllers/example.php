<?php

require_once '../models/example.php';

$example = new example();

header("Content-Type: text/json; charset=utf8");

// GATHER DATA
$example_data = $example->getExampleData();

// RETURN DATA 
echo json_encode($example_data);
?>