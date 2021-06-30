<?php


// $message_sent = false;
    if(isset($_POST['email']) && $_POST['email'] != '') {

        if(filter_car($_POST['email'], 
        FILTER_VALIDATE_EMAIL) ) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
    
        $to = "reganlussier@gmail.com";
        $body = "";
    
        $body .= "From: ".$name. "\r\n";
        $body .= "Email: ".$email. "\r\n";
        $body .= "Message: ".$message. "\r\n";
    
        mail($to, $email, $message);

        $message_sent = true;
        echo 'Thanks';
    }

    // if($message_sent):
    //     echo 'Thanks';
}
}
?>