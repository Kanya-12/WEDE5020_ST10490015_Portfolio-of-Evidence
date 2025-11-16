<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Save message to a file
    $file = fopen("messages.txt", "a");
    fwrite($file, "Name: $name\nEmail: $email\nMessage: $message\n----------------------\n");
    fclose($file);

    echo "<h3>Thank you, $name! Your message has been sent successfully.</h3>";
    echo "<a href='contact.html'>Back to Contact Page</a>";

} else {
    echo "Invalid request.";
}

?>
