<h2><i class="fa fa-map-marker"></i> <span class="node_title">Node title</span></h2>


<div class="nav-tabs-custom">
    <ul class="nav nav-tabs">
        <li class="stat active"><a href="#stat" data-toggle="tab" aria-expanded="false">Thống kê</a></li>
        <li class="edit"><a href="#edit" data-toggle="tab" aria-expanded="true">Sửa thông tin</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane active" id="stat">
            <div class="col-lg-6 chart" style="padding:0 25px 0 0!important">
                <canvas id="areaChart"></canvas>
            </div>
            <div class="col-lg-6 chart">
                <canvas id="lineChart"></canvas>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="tab-pane hide" id="edit">
            <?php include 'project.edit.php' ?>
        </div>
    </div>
</div>
