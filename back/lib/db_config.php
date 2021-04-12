<?php
spl_autoload_register(function ($classname) {
    include $classname . '.php';
});


class db_config {
	
	// EDIT HERE
    private $db_host = 'localhost'; 	// localhost, domain or IP
    private $db_user = 'user_name'; 	// user name
    private $db_pass = '';				// passsword to access DB
    private $db_name = 'db_name'; 		// database container
    public $db;

	// DO NOT EDIT BELOW
    public function connect(){
        return $this->db = new db($this->db_host, $this->db_user, $this->db_pass, $this->db_name);
    }
    public function disconnect(){
        $this->db->close();
    }
}
// Fetch a record from a database:
//      $account = $db->query('SELECT * FROM accounts WHERE username = ? AND password = ?', 'test', 'test')->fetchArray();
//      echo $account['name'];

// Or you could do:
//      $account = $db->query('SELECT * FROM accounts WHERE username = ? AND password = ?', array('test', 'test'))->fetchArray();
//      echo $account['name'];

// Fetch multiple records from a database:
//      $accounts = $db->query('SELECT * FROM accounts')->fetchAll();
//      foreach ($accounts as $account) {
//          echo $account['name'] . '<br>';
//      }

// You can specify a callback if you do not want the results being stored in an array (useful for large amounts of data):
//      $db->query('SELECT * FROM accounts')->fetchAll(function($account) {
//          echo $account['name'];
//      });

// If you need to break the loop you can add:
//      return 'break'; 

// Get the number of rows:
//      $accounts = $db->query('SELECT * FROM accounts');
//      echo $accounts->numRows();

// Get the affected number of rows:
//      $insert = $db->query('INSERT INTO accounts (username,password,email,name) VALUES (?,?,?,?)', 'test', 'test', 'test@gmail.com', 'Test');
//      echo $insert->affectedRows();

// Get the total number of queries:
//      echo $db->query_count;

// Get the last insert ID:
//      echo $db->lastInsertID();

// Close the database:
//      $db->close();
?>