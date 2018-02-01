<?php

    $pageTitle = 'Feedback';
    include 'templates/header.php';

    $config->addJS('plugins', 'DataTables/datatables.min.js');
    $config->addJS('dist', $page.'/list.js');

	include 'templates/'.$page.'/list.php';
