<?php
if ($n) {
    if ($n == 'me') {
        if ($mode == 'changepassword') {
            $pageTitle = 'Change password';
            include 'templates/header.php';

            $config->addJS('dist', $page.'/'.$mode.'.js');

            include 'templates/'.$page.'/'.$mode.'.php';
        }
        else {
            $pageTitle = 'Update my info';
            include 'templates/header.php';

            $config->addJS('dist', $page.'/edit.js');

        	include 'templates/'.$page.'/edit.php';
        }
    }
    else {
        $pageTitle = 'Mod info';
        include 'templates/header.php';

        //$config->addJS('plugins', 'DataTables/datatables.min.js');
        //$config->addJS('dist', 'ratings.min.js');
        //echo '<link rel="stylesheet" href="'+PLUGINS+'/morris/morris.css">';
        $config->addJS('dist', $page.'/view.js');

        include 'templates/'.$page.'/view.php';
    }
}
else {
    $pageTitle = 'Mods list';
    include 'templates/header.php';

    $config->addJS('plugins', 'DataTables/datatables.min.js');
    $config->addJS('dist', $page.'/list.js');

	include 'templates/'.$page.'/list.php';
}
