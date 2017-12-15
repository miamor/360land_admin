<h2><i class="fa fa-map-marker"></i> Thêm tiện ích</h2>


<form class="place-add col-md-10">
    <div class="add-form-content">
    <div class="form-group" attr-required="1">
        <div class="col-md-4 no-padding control-label">Tiêu đề </div>
        <div class="col-md-8 no-padding">
            <input type="text" class="form-control" placeholder="Tiêu đề " name="title"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group form-type" attr-required="1">
        <div class="col-md-4 no-padding control-labels">Loại tiện ích</div>
        <div class="col-md-8 no-padding">
            <select id="typeid" name="typeid" class="form-control type_bds" attr-typeaction="2">
                <option selected value="CN">Chọn loại bất động sản</option>
                <option value="typereal1">Chung cư</option>
                <optgroup label="Nhà bán">
                    <option value="typereal2">Nhà riêng</option>
                    <option value="typereal3">Nhà mặt phố</option>
                    <option value="typereal4">Biệt thự, liền kề</option>
                </optgroup>
                <optgroup label="Đất bán">
                    <option value="typereal5">Đất nền dự án</option>
                    <option value="typereal6">Bán đất</option>
                </optgroup>
                <option value="typereal7">Trang trại, khu nghỉ dưỡng</option>
                <option value="typereal8">Nhà kho, nhà xưởng</option>
                <option value="typereal10">Khác</option>
            </select>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group form-adr" attr-required="1">
        <div class="col-md-4 no-padding control-label"><i class="fa fa-map-marker"></i> Địa chỉ </div>
        <div class="col-md-8 no-padding">
            <div class="col-md-6 select-city no-padding-left">
                <select class="form-control" id="city" name="tinh">
                    <option value="-1">--Chọn Tỉnh/Thành phố *--</option>
                    <option value="SG">Hồ Chí Minh</option>
                    <option value="HN">Hà Nội</option>
                    <option value="DDN">Đà Nẵng</option>
                    <option value="BD">Bình Dương</option>
                    <option value="DNA">Đồng Nai</option>
                    <option value="KH">Khánh Hòa</option>
                    <option value="HP">Hải Phòng</option>
                    <option value="LA">Long An</option>
                    <option value="QNA">Quảng Nam</option>
                    <option value="VT">Bà Rịa Vũng Tàu</option>
                    <option value="DDL">Đắk Lắk</option>
                    <option value="CT">Cần Thơ</option>
                    <option value="BTH">Bình Thuận  </option>
                    <option value="LDD">Lâm Đồng</option>
                    <option value="TTH">Thừa Thiên Huế</option>
                    <option value="KG">Kiên Giang</option>
                    <option value="BN">Bắc Ninh</option>
                    <option value="QNI">Quảng Ninh</option>
                    <option value="TH">Thanh Hóa</option>
                    <option value="NA">Nghệ An</option>
                    <option value="HD">Hải Dương</option>
                    <option value="GL">Gia Lai</option>
                    <option value="BP">Bình Phước</option>
                    <option value="HY">Hưng Yên</option>
                    <option value="BDD">Bình Định</option>
                    <option value="TG">Tiền Giang</option>
                    <option value="TB">Thái Bình</option>
                    <option value="BG">Bắc Giang</option>
                    <option value="HB">Hòa Bình</option>
                    <option value="AG">An Giang</option>
                    <option value="VP">Vĩnh Phúc</option>
                    <option value="TNI">Tây Ninh</option>
                    <option value="TN">Thái Nguyên</option>
                    <option value="LCA">Lào Cai</option>
                    <option value="NDD">Nam Định</option>
                    <option value="QNG">Quảng Ngãi</option>
                    <option value="BTR">Bến Tre</option>
                    <option value="DNO">Đắk Nông</option>
                    <option value="CM">Cà Mau</option>
                    <option value="VL">Vĩnh Long</option>
                    <option value="NB">Ninh Bình</option>
                    <option value="PT">Phú Thọ</option>
                    <option value="NT">Ninh Thuận</option>
                    <option value="PY">Phú Yên</option>
                    <option value="HNA">Hà Nam</option>
                    <option value="HT">Hà Tĩnh</option>
                    <option value="DDT">Đồng Tháp</option>
                    <option value="ST">Sóc Trăng</option>
                    <option value="KT">Kon Tum</option>
                    <option value="QB">Quảng Bình</option>
                    <option value="QT">Quảng Trị</option>
                    <option value="TV">Trà Vinh</option>
                    <option value="HGI">Hậu Giang</option>
                    <option value="SL">Sơn La</option>
                    <option value="BL">Bạc Liêu</option>
                    <option value="YB">Yên Bái</option>
                    <option value="TQ">Tuyên Quang</option>
                    <option value="DDB">Điện Biên</option>
                    <option value="LCH">Lai Châu</option>
                    <option value="LS">Lạng Sơn</option>
                    <option value="HG">Hà Giang</option>
                    <option value="BK">Bắc Kạn</option>
                    <option value="CB">Cao Bằng</option>
                </select>
            </div>
            <div class="col-md-6 select-district no-padding-left">
                <select class="form-control" id="district" name="huyen">
                    <option value="-1">--Chọn Quận/Huyện *--</option>
                </select>
            </div>
            <div class="clearfix"></div>

            <div class="form-group map_select" attr-required="1">
                <input type="text" class="form-control" style="margin-top:6px" id="details_address" name="details_address" placeholder="Địa chỉ cụ thể (không bắt buộc)"/>

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

    <div class="txt-with-line center">
    	<span class="txt generate-new-button">Thông tin thêm <span class="fa fa-caret-down"></span></span>
    </div>

    <div class="form-group" attr-required="1">
        <div class="col-md-4 no-padding control-label">Thông tin chi tiết </div>
        <div class="col-md-8 no-padding">
            <textarea class="form-control" name="details" placeholder="Thông tin chi tiết"></textarea>
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
