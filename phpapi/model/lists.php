<?php
    class lists 
    {
        private $conn;
        private $table = 'lists';

        public $id;
        public $name;
        public $title;
        public $img;

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function read()
        {
            $select = "select * from lists";
            $s = $this->conn->prepare($select);
            $s->execute();
            return $s;
        }

        public function create()
        {
            $query = 'insert into '.$this->table.'  (name , title) values ( :name , :title)';

            $stmt = $this->conn->prepare($query);

            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->title=htmlspecialchars(strip_tags($this->title));

            $stmt-> bindParam(':name', $this->name);
            $stmt-> bindParam(':title', $this->title);
            if($stmt->execute()){
                return true;
            }else{
                return false;
            }
        }
    }
?>