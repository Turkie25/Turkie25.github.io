<?php 

extract($_REQUEST);
$file = fopen("form-save2.txt","a");

date_default_timezone_set('Europe/Amsterdam');
$current_date = date('d-m-Y : H:i:s');
echo $current_date;

fwrite($file, "-------------------------------\n");
fwrite($file, "Datum : ");
fwrite($file, $current_date ."\n");
fwrite($file, "Naam : ");
fwrite($file, $name ."\n");
fwrite($file, "Email : ");
fwrite($file, $email . "\n");
fwrite($file, "Message : ");
fwrite($file, $message ."\n");
fwrite($file, "-------------------------------\n\n");

fclose($file);
header("location: https://turkie25.github.io/");

?>