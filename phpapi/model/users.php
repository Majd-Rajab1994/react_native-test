<?php
class users
{
    private $conn;
    private $table = 'users';

    public $id;
    public $username;
    public $password;
    public $email;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function create()
    {
        $query = 'insert into '.$this->table.'  (username , email , password) values ( :username , :email , :password)';

        $stmt = $this->conn->prepare($query);

        $this->username=htmlspecialchars(strip_tags($this->username));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->password=htmlspecialchars(strip_tags($this->password));

        $stmt-> bindParam(':username', $this->username);
        $stmt-> bindParam(':email', $this->email);
        $stmt-> bindParam(':password', $this->password);
        
        if($stmt->execute()){
            return true;
        }else{
            return false;
        }
    }
}

?>