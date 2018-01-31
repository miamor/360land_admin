<form id="theform" class="place-add">
    <div class="add-form-content">
    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Tiêu đề </div>
        <div class="col-lg-9 no-padding">
            <input type="text" class="form-control" placeholder="Tiêu đề " name="name" id="name"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-labels">Loại dịch vụ</div>
        <div class="col-lg-9 no-padding">
            <select id="type" name="type" class="form-control">
                <option selected value="CN">Chọn loại tiện ích</option>
                <option value="typeservice1">Trường học</option>
                <option value="typeservice2">Bến xe, trạm xe</option>
                <option value="typeservice3">Công trình công cộng</option>
                <option value="typeservice4">Cơ sở y tế</option>
                <option value="typeservice5">Nhà hàng</option>
                <option value="typeservice6">Cơ quan hành chính</option>
                <option value="typeservice7">Khách sạn</option>
                <option value="typeservice8">TT thể thao, giải trí</option>
                <option value="typeservice9">Địa điểm mua sắm</option>
                <option value="typeservice10">Làm đẹp, spá</option>
                <option value="typeservice11">ATM, ngân hàng</option>
                <option value="typeservice12">Các công ty dịch vụ</option>
                <option value="typeservice13">Các tiện ích khác</option>
            </select>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label"><i class="fa fa-map-marker"></i> Địa chỉ </div>
        <div class="col-lg-9 no-padding">
            <div class="form-group map_select" attr-required="1">
                <input type="text" class="form-control" style="margin-top:6px" id="address" name="address" placeholder="Địa chỉ cụ thể "/>

                <div id="infowindow-content">
                    <img src="" width="16" height="16" id="place-icon">
                    <span id="place-name" class="title"></span><br>
                    <span id="place-address"></span>
                </div>
                <div id="map_select"></div>
            </div>

        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Group </div>
        <div class="col-lg-9 no-padding">
            <input type="text" name="group" id="group" class="form-control"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group">
        <div class="col-lg-3 no-padding control-label">Details </div>
        <div class="col-lg-9 no-padding">
            <textarea name="details" id="details" class="form-control"></textarea>
        </div>
        <div class="clearfix"></div>
    </div>

    <input type="hidden" name="latitude" id="latitude"/>
    <input type="hidden" name="longitude" id="longitude"/>

    <div class="add-form-submit center">
        <input value="Làm lại" class="btn btn-default" type="reset">
        <input value="Gửi" class="btn" type="submit">
    </div>
    </div>
</form>
