<form class="place-add" id="theform">
    <div class="add-form-content">
    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Tiêu đề </div>
        <div class="col-lg-9 no-padding">
            <input type="text" class="form-control" placeholder="Tiêu đề " name="title" id="title"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Thumbs </div>
        <div class="col-lg-9 no-padding">
            <textarea class="form-control non-sce" name="thumbs" id="thumbs" placeholder="Mỗi link ảnh một dòng"></textarea>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Chi tiết </div>
        <div class="col-lg-9 no-padding">
            <textarea class="form-control" name="details" id="details"></textarea>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="add-form-submit center">
        <input value="Làm lại" class="btn btn-default" type="reset">
        <input value="Gửi" class="btn" type="submit">
    </div>
    </div>
</form>
