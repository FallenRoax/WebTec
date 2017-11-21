<?php
// get values
$firstName = htmlspecialchars($_POST["firstName"]);
$lastName = htmlspecialchars($_POST["lastName"]);

// "save" message in log
error_log("Received message: {FirstName=" . $firstName . ", LastName=" . $lastName ."}");

// send nice text back
echo "Danke " . $firstName . ". Deine Daten wurden weitergeleitet :)";

?>