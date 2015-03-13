<?php

$num = isset($_REQUEST["numero"])?$_REQUEST["numero"]:1;

$res = [];

$clases =    ["cat","dog"];
$colores =   ["red","green","blue","yellow","purple","orange","black","pink"];
$cat_names = ["Bella","Chloe","Molly","Oliver","Tucker","Bandi","Boots","Sox","Pumpkin","Jasper","Lily","Oreo","Tiger","Charlie","Lucy","Cali"];
$dog_names = ["Jake","Sophie","Sadie","Toby","Chloe","Cody","Bailey","Buster","Lola","Duke","Zoe","Cooper","Abby","Riley","Ginger","Harley"];


for ($i = 0; $i < $num; $i++) {


    $tipo = $clases[array_rand($clases, 1)];
    $color = $colores[array_rand($colores, 1)];
    $nombre;

        if($tipo == "cat")
        {
            $nombre = $cat_names[ array_rand($cat_names, 1)];
        }
        else // ($tipo[0] == "dog")
        {
            $nombre = $dog_names[array_rand($dog_names, 1)];
        }


    $ani = array('animal' => $tipo, 'color' => $color, 'nombre' => $nombre, 'timer' =>  rand(1, $num));

    array_push($res,$ani);

}

$resJSON = json_encode($res);

echo($resJSON);


?>

