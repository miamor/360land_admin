<h2>Gửi thông báo</h2>

<form id="theform" class="form-edit-user">
	<div class="form-group" attr-required="1">
		<div class="col-lg-3 control-label no-padding-left">Gửi tới</div>
		<div class="col-lg-9 no-padding">
            <label><input name="send_all" type="checkbox" value="1"> Tất cả</label>
			<select class="form-control select-users chosen-select" name="to" id="users_select" multiple>
            </select>
		</div>
		<div class="clearfix"></div>
	</div>

	<div class="form-group" attr-required="1">
		<div class="col-lg-3 control-label no-padding-left">Chọn thông báo có sẵn</div>
        <div class="col-lg-3 no-padding">
            <label><input name="available" type="radio" checked value="1"> Có</label>
		</div>
		<div class="col-lg-4 no-padding">
            <label><input name="available" type="radio" value="0"> Không</label>
        </div>
		<div class="clearfix"></div>
	</div>

    <div class="form-group customshow" attr-available="1" attr-required="1">
		<div class="col-lg-3 control-label no-padding-left">Thông báo</div>
		<div class="col-lg-9 no-padding">
            <select class="form-control select-thongbao" name="thongbao" id="thongbao_select">
            </select>
        </div>
		<div class="clearfix"></div>
	</div>


    <div class="form-group customshow hide" attr-available="0" attr-required="1">
		<div class="col-lg-3 control-label no-padding-left">Details</div>
		<div class="col-lg-9 no-padding">
			<textarea class="form-control" name="details" placeholder="Details"></textarea>
		</div>
		<div class="clearfix"></div>
	</div>


	<div class="add-form-submit center">
		<input type="reset" value="Reset" class="btn btn-default">
		<input type="submit" value="Submit" class="btn">
	</div>
</form>
