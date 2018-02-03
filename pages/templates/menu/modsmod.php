<h3 class="menu-title">Mods</h3>

<div class="menu-one-box smod-box mod-box">
    <h4 class="menu-one-box-header">Mods</h4>
    <div class="menu-one-box-body">
        <a class="menu-one-item" href="<?php echo $config->mLink ?>">Danh sách</a>
        <a class="menu-one-item" href="<?php echo $config->mLink ?>?mode=manage">Danh sách (thuộc quyền)</a>
        <a class="menu-one-item" href="<?php echo $config->mLink ?>?mode=new">Thêm mới</a>
    </div>
</div>

<div class="menu-one-box smod-box hidden">
    <h4 class="menu-one-box-header">Smods</h4>
    <div class="menu-one-box-body">
        <a class="menu-one-item" href="<?php echo $config->sLink ?>">Danh sách</a>
    </div>
</div>


<div class="menu-one-box">
    <h4 class="menu-one-box-header">Me</h4>
    <div class="menu-one-box-body">
        <a class="menu-one-item" href="<?php echo $config->smLink.'/me' ?>">Edit my info</a>
        <a class="menu-one-item" href="<?php echo $config->smLink.'/me?mode=changepassword' ?>">Change my password</a>
    </div>
</div>
