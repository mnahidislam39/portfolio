<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "dev.nknahid@gmail.com"; // Replace with your Gmail address
  $subject = "New Form Submission";
  $headers = "From: $email";

  mail($to, $subject, $message, $headers);

  // Send a response to the client
  echo "success";
} else {
  // Send an error response to the client
  echo "error";
}
?>
