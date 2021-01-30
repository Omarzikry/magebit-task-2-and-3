<?php
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "reactdb"; 
$id = '';

// CREATE TABLE `contacts` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,`email` varchar(100) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=latin1;

$con = mysqli_connect($host, $user, $password,$dbname,'3306');


$method = $_SERVER["REQUEST_METHOD"];
// $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}


switch ($method) {
    case 'GET':
      // $id = $_GET['id'];
      // $sql = "SELECT * from contacts".($id?" where id=$id":''); 
      $sql = "SELECT * from contacts";
      break;
    case 'POST':
      $email = $_POST["email"];
      $timeStamp = $_POST["timeStamp"];
      $sql = "INSERT INTO contacts(email,timeStamp) values('$email','$timeStamp')"; 
      break;
    case 'DELETE':
      $id = $_GET['del'];
      $sql = "DELETE FROM contacts WHERE id=$id";
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } elseif($method == 'DELETE'){
    echo json_encode($result);
  }else {
    echo mysqli_affected_rows($con);
  }

$con->close();

