<form class="place-add" id="theform">
    <div class="add-form-content">
    <div class="form-group" attr-required="1">
        <div class="col-lg-3 no-padding control-label">Tiêu đề </div>
        <div class="col-lg-9 no-padding">
            <input type="text" class="form-control" placeholder="Tiêu đề " name="name" id="name"/>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group form-type" attr-required="1">
        <div class="col-lg-3 no-padding control-labels">Loại dự án</div>
        <div class="col-lg-9 no-padding">
            <select id="type_" name="type_" class="form-control">
                <option selected value="CN">Chọn loại dự án</option>
                <option value="loaiduan1">Căn hộ, chung cư</option>
                <option value="loaiduan10">Biệt thự, liền kề, nhà vườn</option>
                <option value="loaiduan3">Trung tâm thương mại</option>
                <option value="loaiduan2">Cao ốc văn phòng</option>
                <option value="loaiduan4">Khu đô thị mới</option>
                <option value="loaiduan5">Khu phức hợp</option>
                <option value="loaiduan6">Nhà ở xã hội</option>
                <option value="loaiduan7">Khu nghỉ dưỡng, sinh thái</option>
                <option value="loaiduan8">Khu công nghiệp</option>
                <option value="loaiduan9">Dự án khác</option>
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

            <div class="form-group map_select" attr-required="1">
                <input type="text" class="form-control" style="margin-top:6px" id="address" name="address" placeholder="Địa chỉ cụ thể *"/>

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
        <div class="col-lg-3 no-padding control-label">Giới thiệu </div>
        <div class="col-lg-9 no-padding">
            <textarea class="form-control" name="intro" id="intro" placeholder="Giới thiệu"></textarea>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group">
        <div class="col-lg-3 no-padding control-label">Thông tin chi tiết </div>
        <div class="col-lg-9 no-padding">
            <textarea class="form-control" name="infoduan" id="infoduan" placeholder="Thông tin chi tiết"></textarea>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="form-group">
        <div class="col-lg-3 no-padding control-label">Chọn gói (ưu tiên)</div>
        <div class="col-lg-9 no-padding">
            <select id="uutien" name="uutien" class="form-control">
                <option value="0">Không ưu tiên</option>
                <option value="1">Phường</option>
                <option value="2">Quận/Huyện</option>
                <option value="3">Tỉnh/Thành phố</option>
            </select>
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

    

    <input type="hidden" name="latitude" id="latitude"/>
    <input type="hidden" name="longitude" id="longitude"/>

    <div class="add-form-submit center">
        <input value="Làm lại" class="btn btn-default" type="reset">
        <input value="Gửi" class="btn" type="submit">
    </div>
    </div>
</form>
