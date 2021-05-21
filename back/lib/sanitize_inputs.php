<?php
spl_autoload_register(function ($classname) {
    require_once $classname . '.php';
});


class sanitize_inputs {
	
    public function makeIntNumber($number){
        $number = intval($number);
        return $number;
    }
    
    public function makefloatNumber($number){
        $number = floatval($number);
        return $number;
    }

    public function makeDate($date){
        // $date must be "mm/dd/yyyy";
        $date = explode('/',$date);
        return date("M-d-Y", mktime(0, 0, 0, $date[0], $date[1], $date[2]));
    }

	public function makePassword($pass){
        $pass = trim($pass); //remove empty spaces
        $pass = strip_tags($pass); //remove html tags
        $pass = htmlentities($pass, ENT_QUOTES,'UTF-8'); //for major security transform some other chars into html corrispective...
        return $pass;
    }
    
    public function makeText($text){
        $text = trim($text); //remove empty spaces
        $text = strip_tags($text); //remove html tags
        $text = filter_var($text, FILTER_SANITIZE_MAGIC_QUOTES); //addslashes();
        $text = filter_var($text, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW); //remove /t/n/g/s
        $text = filter_var($text, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH); //remove é à ò ì ` ecc...
        $text = htmlentities($text, ENT_QUOTES,'UTF-8'); //for major security transform some other chars into html corrispective...
        return $text;
    }
    
    public function makeEmail($email){
        $email = trim($email); //remove empty spaces
        $email = strip_tags($email); //remove html tags
        $email = filter_var($email, FILTER_SANITIZE_EMAIL); //e-mail filter;
        if($email = filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return htmlentities($email, ENT_QUOTES,'UTF-8');//for major security transform some other chars into html corrispective...
        }else{ 
            echo json_encode(array("success" => false,"error" => "The Email: '".$email."' is badly formatted"));
            die;
        }
    }
}