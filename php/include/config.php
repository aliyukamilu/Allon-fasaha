<?php
    $hostname_fasaha = "localhost";
    $database_fasaha = "steazhex_allonfasaha";
    $username_fasaha = "steazhex_allonfasaha";
    $password_fasaha = "allonfasaha1234@";
    $allonfasaha = mysqli_connect($hostname_fasaha, $username_fasaha, $password_fasaha, $database_fasaha) or trigger_error(mysqli_error($allonfasaha),E_USER_ERROR);
?>