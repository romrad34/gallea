<footer>
 <p>© COPYRIGHT 2017 Romain ITOFO<a href="mentions-legales.php"> &nbsp - mentions légales</a></p>
</footer>
<script type="text/javascript" src="js/jquery-3.1.0.min.js" >
</script>
<script type="text/javascript" src="js/transition.js">
</script>
<script type="text/javascript" src="js/header.js">
</script>
<?php
    if(isset($wow))
    {
        echo '<script type="text/javascript" src="js/wow.min.js"></script>';
    }
?>
<script type="text/javascript" src="js/<?= $js ?>.js"></script>
</body>
<div id="loading">
    <img src="img/gear.gif" width="50" height="50" alt="">
</div>
</html>
