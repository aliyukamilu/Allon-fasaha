<?php
$hostname_gcc = "localhost";
$database_gcc = "steazhex_allonfasaha";
$username_gcc = "steazhex_allonfasaha";
$password_gcc = "allonfasaha1234@";
$gcc = mysqli_connect($hostname_gcc, $username_gcc, $password_gcc, $database_gcc) or trigger_error(mysql_error(),E_USER_ERROR); 
?>