<?php
for ($i = 1; $i <= 4; $i++) $config->addJS('dist', $page.'/cityListOther'.$i.'.js');

$id = (isset($__pageAr[2]) ? $__pageAr[2] : null);

//if (!$n) $n = 'node';
if (!$n) header('Location: '.$config->nLink);

if ($n) {
    if ($id) {
        $pageTitle = $id;
    } else {
        $pageTitle = ($n == 'node' ? 'Node' : 'Project');
    }

    include 'templates/header.php';

    //$config->addJS('plugins', 'DataTables/datatables.min.js');
    //$config->addJS('dist', 'ratings.min.js');
    //echo '<link rel="stylesheet" href="'+PLUGINS+'/morris/morris.css">';
    if ($id) {

        if ($mode == 'stat') {
            $config->addJS('plugins', 'chartjs/Chart.min.js');

            $pageTitle = $id.' - Stat';

            //include 'templates/'.$page.'/'.$n.'.stat.php';
        } else if ($mode == 'edit') {
            $config->addJS(-1, 'https://maps.googleapis.com/maps/api/js?v=3&key='.GG_API_KEY.'&libraries=places');
            $config->addJS('dist', $page.'/form.js');
            $config->addJS('dist', $page.'/'.$n.'.edit.js');

            include 'templates/'.$page.'/'.$n.'.edit.php';
        } else if ($mode == 'progressnew') {
            $config->addJS('dist', $page.'/progress.form.js');  
            $config->addJS('dist', $page.'/progress.new.js');  

            include 'templates/'.$page.'/'.$n.'.progress.new.php';
        } else if ($mode == 'progressedit') {
            $config->addJS('dist', $page.'/progress.form.js');  
            $config->addJS('dist', $page.'/progress.edit.js');  

            include 'templates/'.$page.'/'.$n.'.progress.edit.php';
        }

        if ($mode) {

        } else {
            $config->addJS('plugins', 'chartjs/Chart.min.js');

            $config->addJS(-1, 'https://maps.googleapis.com/maps/api/js?v=3&key='.GG_API_KEY.'&libraries=places');
            $config->addJS('dist', $page.'/form.js');
            $config->addJS('dist', $page.'/'.$n.'.edit.js');
    
            $config->addJS('plugins', 'DataTables/datatables.min.js');
            $config->addJS('dist', $page.'/progress.list.js');
    
            if ($n != 'servicenode') $config->addJS('dist', $page.'/'.$n.'.view.js');
    
            include 'templates/'.$page.'/'.$n.'.view.php';
        }

    } else if ($mode == 'new') {

            $config->addJS(-1, 'https://maps.googleapis.com/maps/api/js?v=3&key='.GG_API_KEY.'&libraries=places');
            $config->addJS('dist', $page.'/form.js');

        $config->addJS('dist', $page.'/'.$n.'.'.$mode.'.js');

        include 'templates/'.$page.'/'.$n.'.'.$mode.'.php';

    } else {
        $config->addJS('plugins', 'DataTables/datatables.min.js');
        $config->addJS('dist', $page.'/'.$n.'.list.js');

        include 'templates/'.$page.'/'.$n.'.list.php';
    }
}
else {
    $pageTitle = 'Nodes & Projects';

    include 'templates/header.php';

    include 'templates/'.$page.'/'.$page.'.php';
}
