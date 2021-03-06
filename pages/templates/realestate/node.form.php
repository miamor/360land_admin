<form class="place-add" id="theform">
    <div class="add-form-content">
    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Tiêu đề </div>
        <div class="col-lg-9 no-padding">
            <input type="text" class="form-control" placeholder="Tiêu đề " name="title"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group form-type_action" attr-required="1">
        <div class="col-lg-3 no-padding control-labels">Loại </div>
        <div class="col-lg-9 no-padding">
            <label class="col-sm-3"><input name="type_action" type="radio" checked value="2"> Bán</label>
            <label class="col-sm-3"><input name="type_action" type="radio" value="1"> Cho thuê</label>
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group form-type" attr-required="1">
        <div class="col-lg-3 no-padding control-labels">Loại bất động sản</div>
        <div class="col-lg-9 no-padding">
            <select id="type2" name="type2" class="form-control type_bds" attr-typeaction="2">
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

            <select id="type1" name="type1" class="form-control type_bds hide" attr-typeaction="1">
                <option selected value="CN">Chọn loại bất động sản</option>
                <option value="typereal11">Chung cư</option>
                <optgroup label="Nhà thuê">
                    <option value="typereal12">Nhà riêng</option>
                    <option value="typereal13">Nhà mặt phố</option>
                    <option value="typereal14">Phòng trọ, nhà trọ</option>
                </optgroup>
                <option value="typereal16">Cửa hàng, ki ốt</option>
                <option value="typereal15">Văn phòng</option>
                <option value="typereal17">Trang trại, khu nghỉ dưỡng</option>
                <option value="typereal18">Khác</option>
            </select>

            <input type="hidden" name="type" id="type"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group form-adr" attr-required="1">
        <div class="col-lg-3 no-padding control-label"><i class="fa fa-map-marker"></i> Địa chỉ </div>
        <div class="col-lg-9 no-padding">
            <div class="col-md-6 select-tinh no-padding-left">
                <select class="form-control" id="city" name="city">
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
                <input type="hidden" id="tinh" name="tinh"/>
            </div>
            <div class="col-md-6 select-huyen no-padding-left">
                <select class="form-control" id="district" name="district">
                    <option value="-1">--Chọn Quận/Huyện *--</option>
                </select>
                <input type="hidden" id="huyen" name="huyen"/>
            </div>
            <div class="clearfix"></div>

            <div class="form-group map_select customshow typereal2 typereal3 typereal4 typereal5 typereal6 typereal7 typereal8 typereal10 typereal12 typereal13 typereal14 typereal15 typereal16 typereal17 typereal18" attr-required="1">
                <input type="text" class="form-control" style="margin-top:6px" id="address" name="address" placeholder="Địa chỉ cụ thể (không bắt buộc)"/>

                <div class="gensmall" style="margin:8px 0 5px;font-style:italic">Địa điểm trên bản đồ không chính xác hay không tìm thấy? Click vào vị trí thích hợp trên bản đồ!</div>
                    
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

    <div class="form-group form-proj hide customshow typereal11 typereal1 typereal4" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Thuộc dự án </div>
        <div class="col-lg-9 no-padding">
            <input type="text" name="tenduan" id="tenduan" class="form-control" autocomplete="off" placeholder="Nhập tên dự án"/>
            <div class="ville-dropdown hide"></div>
            <input type="hidden" name="duanid" id="duanid" class="form-control"/>
        </div>
        <div class="clearfix"></div>
    </div>


    <div class="txt-with-line center">
    	<span class="txt generate-new-button">Thông tin thêm <span class="fa fa-caret-down"></span></span>
    </div>

    <div class="form-group hide customshow typereal1 typereal11 typereal2 typereal3 typereal4" attr-required="1">
        <div class="col-lg-3 no-padding control-label customshow typereal1 typereal11 hide">Ở tầng </div>
        <div class="col-lg-3 no-padding control-label customshow typereal2 typereal3 typereal4 hide">Số tầng </div>
        <div class="col-lg-9 no-padding">
            <input type="number" name="tang" id="tang" class="form-control"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group hide customshow typereal2 typereal3 typereal4" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Chiều rộng mặt tiền</div>
        <div class="col-lg-9 no-padding">
            <input type="number" name="rongtien" id="rongtien" class="form-control" placeholder="Chiều rộng mặt tiền"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group hide customshow typereal2 typereal3 typereal4" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Chiều rộng mặt đường</div>
        <div class="col-lg-9 no-padding">
            <input type="number" name="rongduong" id="rongduong" class="form-control" placeholder="Chiều rộng mặt đường"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Diện tích </div>
        <div class="col-lg-9 no-padding">
            <input type="number" min="1" placeholder="Diện tích" class="form-control" name="area" id="area"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Số phòng ngủ </div>
        <div class="col-lg-9 no-padding">
            <input type="number" min="1" placeholder="Số phòng ngủ" class="form-control" name="sophongngu" id="sophongngu"/>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Hướng</div>
        <div class="col-lg-9 no-padding">
            <select id="huong" name="huong" class="form-control">
                <option value="CN">Chọn hướng</option>
                <option value="e">Đông</option>
                <option value="en">Đông Bắc</option>
                <option value="es">Đông Nam</option>
                <option value="w">Tây</option>
                <option value="wn">Tây Bắc</option>
                <option value="ws">Tây Nam</option>
            </select>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="form-group form-price" attr-required="1">
        <div class="col-lg-3 no-padding control-label"><i class="fa fa-dollar"></i> Giá </div>
        <div class="col-lg-9 no-padding">
            <input type="text" placeholder="Giá" class="form-control" name="price_giatri" id="price_giatri"/>
            <select id="price_donvi" name="price_donvi" class="form-control">
                <option value="m">triệu đồng</option>
                <option value="b">tỷ đồng</option>
                <option value="mp">triệu đồng/m2</option>
            </select>
        </div>
        <input type="hidden" name="price"/>
        <div class="clearfix"></div>
    </div>

    <div class="form-group">
        <div class="col-lg-3 no-padding control-label">Thông tin chi tiết </div>
        <div class="col-lg-9 no-padding">
            <textarea class="form-control" name="details" id="details" placeholder="Thông tin chi tiết"></textarea>
        </div>
        <div class="clearfix"></div>
    </div>


    <!--<div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Hạn</div>
        <div class="col-lg-9 no-padding">
            <input class="form-control" type="text" id="timeto" name="timeto" placeholder="dd/mm/yyyy"/>
        </div>
        <div class="clearfix"></div>
    </div>-->

    <div class="form-group rank-select" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Chọn gói </div>
        <div class="col-lg-9 no-padding">
            <div class="rank-one-select active" attr-rank="0">
                <div class="rank-one-des">Blah blah </div>
                <div class="rank-one-title">Gói thường</div>
            </div>
            <div class="rank-one-select" attr-rank="1">
                <div class="rank-one-des">Bleh bleh</div>
                <div class="rank-one-title">Gói vip</div>
            </div>
            <div class="clearfix"></div>
        </div>
        <input type="hidden" name="rank" id="rank" value="0"/>
        <div class="clearfix"></div>
    </div>

    <div class="form-group form-time" attr-required="1">
        <div class="col-lg-3 no-padding control-label"><i class="fa fa-calendar"></i> Từ </div>
        <div class="col-md-3 no-padding">
            <input class="form-control" type="date" name="timefrom" id="timefrom">
        </div>
        <div class="col-md-1 no-padding control-label text-center">đến</div>
        <div class="col-md-3 no-padding">
            <input class="form-control" type="date" name="timeto" id="timeto">
        </div>
        <div class="clearfix"></div>
    </div>


    <div class="form-group" style="margin-top:30px">
        <div class="col-lg-3 no-padding control-label">Thumbnails </div>
        <div class="col-lg-9 no-padding">
            <textarea class="form-control hidden" name="thumbs" id="thumbs" placeholder="Thumbnails (Mỗi link ảnh một dòng)"></textarea>
            <?php //include 'thumbs.form.php' ?>
            <div id="dropbox" class="dropbox">
                <span class="message">Click to select files or Drop images here to upload.</span>
                <input type="file" accept="image/*" multiple name="thumb_input" class="up-file-input hidden" />
            </div>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group">
        <div class="col-lg-3 no-padding control-label">Panorama image </div>
        <div class="col-lg-9 no-padding">
            <input type="hidden" placeholder="Panorama image (url)" class="form-control" name="panorama_image" id="panorama_image" />

            <div id="dropbox_pano" class="dropbox">
                <span class="message"></span>
                <div class="select-image">
                    <i class="fa fa-folder-open-o"></i> Select image
                </div>
                <input type="file" accept="image/*" name="panorama_input" class="up-file-input hidden" />
            </div>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group" style="margin-top:30px">
        <div class="col-lg-3 no-padding control-label">Ảnh 360 </div>
        <div class="col-lg-9 no-padding">
            <textarea class="form-control hidden" name="anh360" id="anh360"></textarea>
            <div id="dropbox_360" class="dropbox">
                <span class="message">Click to select files or Drop images here to upload.</span>
                <input type="file" accept="image/*" multiple name="anh_360" class="up-file-input hidden"/>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group">
        <div class="col-lg-3 no-padding control-label">Video </div>
        <div class="col-lg-9 no-padding">
            <input class="form-control" name="video" id="video" placeholder="Input video link (youtube, media link: mp4, ogg,...)" />
        </div>
        <div class="clearfix"></div>
    </div>

        
    <div class="user-info-input">
        <div class="txt-with-line center">
        	<span class="txt generate-new-button">Thông tin cá nhân <span class="fa fa-caret-down"></span></span>
        </div>

        <div class="form-group" attr-required="1">
            <div class="col-lg-3 no-padding control-label">Tên </div>
            <div class="col-lg-9 no-padding">
                <input type="text" placeholder="Tên liên hệ" class="form-control" name="tenlienhe" id="tenlienhe"/>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="form-group" attr-required="1">
            <div class="col-lg-3 no-padding control-label">Điện thoại </div>
            <div class="col-lg-9 no-padding">
                <input type="text" placeholder="Điện thoại liên hệ" class="form-control" name="dienthoai" id="dienthoai"/>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="form-group" attr-required="1">
            <div class="col-lg-3 no-padding control-label">Email </div>
            <div class="col-lg-9 no-padding">
                <input type="email" placeholder="Email" class="form-control" name="email" id="email"/>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="form-group">
            <div class="col-lg-3 no-padding control-label">Địa chỉ </div>
            <div class="col-lg-9 no-padding">
                <input type="text" placeholder="Địa chỉ" class="form-control" name="diachi" id="diachi"/>
            </div>
            <div class="clearfix"></div>
        </div>

    </div>

    <input type="hidden" name="typenode" value="true"/>
    <input type="hidden" name="latitude" id="latitude"/>
    <input type="hidden" name="longitude" id="longitude"/>
    <input type="hidden" name="timefrom" id="timefrom"/>
    <input type="hidden" name="timeto" id="timeto"/>

    <div class="add-form-submit center">
        <input value="Làm lại" class="btn btn-default" type="reset">
        <input value="Gửi" class="btn" type="submit">
    </div>
    </div>
</form>
