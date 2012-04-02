<?php
$data = $_POST['data'];

//removing the "data:image/png;base64," part
$uri =  substr($data,strpos($data,",")+1);

// put the data to a file
file_put_contents('wow.png', base64_decode($uri));

//force user to download the image
if(file_exists('wow.png')){
		echo('wow.png');
        /*
        // We'll be outputting a PNG
        header('Content-type: image/png');
        // It will be called wow.png
        header('Content-Disposition: attachment; filename="wow.png"');
        // The PDF source is in wow.png
        readfile('wow.png');
        */
}
?>