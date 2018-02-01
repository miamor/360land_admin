<?php
if (!$mode) $mode = 'all';

$id = $config->get('id');

$file = $mode;
if ($id) $file = $mode.'.one';

if ($mode == 'all') {
    if ($id) {
        $pageTitle = 'Thông báo chính';
        $config->addJS('dist', $page.'/form.js');
    } else {
        $pageTitle = 'Danh sách thông báo chính';

        $config->addJS('plugins', 'DataTables/datatables.min.js');
    }
}
else if ($mode == 'sent') {
    if ($id) {
        $pageTitle = 'Thông báo đã gửi';
    } else {
        $pageTitle = 'Danh sách thông báo đã gửi';

        $config->addJS('plugins', 'DataTables/datatables.min.js');
    }
}
else if ($mode == 'new') {
    $pageTitle = 'Thêm thông báo chính';
    $config->addJS('dist', $page.'/form.js');
}
else if ($mode == 'send') {
    $pageTitle = 'Gửi thông báo';
    $config->addJS('dist', $page.'/form.js');
}

include 'templates/header.php';

$config->addJS('dist', $page.'/'.$file.'.js');

include 'templates/'.$page.'/'.$file.'.php';
