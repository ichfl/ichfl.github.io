<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>PHP обработчик</title>
</head>
<body>

<?php

if (isset($_POST['name']))            {$name=$_POST['name'];}
if (isset($_POST['email']))           {$email=$_POST['email'];}    
if (isset($_POST['plan']))            {$plan=$_POST['plan'];}    

// if (isset($name) and isset($email) and isset($plan)) {

	echo "name -  <strong>$name</strong> <br />";
	echo "email -  <strong>$email</strong> <br />";
	if ($plan==1) {echo "Plan - <strong>1 Day - $20</strong><br />";} 
	if ($plan==2) {echo "Plan - <strong>2 Day - $25</strong><br />";} 
	if ($plan==3) {echo "Plan - <strong>3 Day - $40</strong><br />";} 



// }
// else {
// 	echo '<strong>Переходить на данную страницу можно только из формы</strong>';
// }	

?>

</body>
</html>