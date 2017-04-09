<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Les paniers de Gallea</title>

    <meta name="description" content="Vente de paniers de fruits et légumes. Panier à la carte.">
    <meta name="keywords" lang="fr" content="panier, carte, producteurs locaux, légumes, fruits, ventes">
    <meta name="author" lang="fr" content="Romain ITOFO">
    <meta name="reply-to" content="admin@heyoup.fr">
    <meta name="category" content="vente de paniers de fruits et légumes">
    <meta name="copyright" content="Romain ITOFO">
    <meta name="identifier-url" content="http://paniers-de-gallea.fr">

    <meta name="robots" content="index, follow">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">

    <meta name="revisit-after" content="15 day">

    <link rel="stylesheet" href="css/global.css?v=<?= filemtime('css/global.css') ?>">
    <link rel="stylesheet" href="css/header.css?v=<?= filemtime('css/header.css') ?>">

    <link rel="stylesheet" href="css/<?= $css ?>.css?v=<?= filemtime('css/'.$css.'.css') ?>">
    <!-- //animation de l'affichage au scroll -->
    <?php
        if(isset($wow))
        {
            echo '<link rel="stylesheet" href="css/wow.css">';
        }
    ?>

    <link rel="stylesheet" href="css/footer.css?v=<?= filemtime('css/footer.css') ?>">
    <link rel="stylesheet" href="css/media-queries.css?v=<?= filemtime('css/media-queries.css') ?>">

    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet">

    <link rel="icon" href="img/icone.ico" />

</head>
