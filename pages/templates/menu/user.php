<h3 class="menu-title">Thành viên</h3>

<div class="menu-one-box">
    <h4 class="menu-one-box-header">Thành viên</h4>
    <div class="menu-one-box-body">
        <a class="menu-one-item" href="<?php echo $config->uLink ?>">Danh sách thành viên</a>
        <a class="menu-one-item" href="<?php echo $config->uLink.'?mode=waiting' ?>">Đang chờ kiểm duyệt</a>
    </div>
</div>

<div class="menu-one-box">
    <h4 class="menu-one-box-header">Coins</h4>
    <div class="menu-one-box-body">
        <a class="menu-one-item" href="<?php echo $config->uLink.'?type=coins&mode=history' ?>">Lịch sử giao dịch</a>
        <a class="menu-one-item" href="<?php echo $config->uLink.'?type=coins&mode=change' ?>">Thay đổi coin</a>
        <a class="menu-one-item" href="<?php echo $config->uLink.'?type=coins&mode=request' ?>">Yêu cầu nạp tiền</a>
    </div>
</div>
