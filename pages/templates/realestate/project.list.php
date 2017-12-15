<h2>Dự án</h2>

<form id="formFilter" class="filterBox filters">
	<h3 class="filterBox-header">Filter</h3>
	<!--<div class="book-search form-group" id="bsearch">
		<div class="col-lg-4 control-label text-right">Keyword</div>
		<div class="col-lg-6">
			<input class="form-control btit" type="text" id="book-search-title" name="keyword" autocomplete="off" placeholder="Search by title"/>
		</div>
		<div class="clearfix"></div>
	</div>-->
	<div class="filter-status form-group">
		<div class="col-lg-4 text-right">Status</div>
		<div class="col-lg-6">
			<label class="radio col-lg-3">
				<input type="radio" value="1" name="status"/> Show
			</label>
			<label class="radio col-lg-3">
				<input type="radio" value="0" name="status"/> Hide
			</label>
			<label class="radio col-lg-3">
				<input type="radio" value="-1" checked name="status"/> All
			</label>
		</div>
		<div class="clearfix"></div>
	</div>

	<div class="center">
		<input type="submit" value="Lọc"/>
	</div>
</form>

<div class="">
	<table id="buyList" class="table table-bordered table-striped">
		<thead>
			<tr>
			  <th>ID</th>
			  <th>Thông tin khách hàng</th>
			  <th>Thông tin chuyến</th>
			  <th>Tình trạng</th>
			  <th>Giá mua ngay</th>
			  <th>Giá khách trả</th>
			  <th>Ưu tiên</th>
			  <th>Taxi đã nhận</th>
		  </tr>
		</thead>
		<tbody>
		</tbody>
	</table>
</div>

<div class="clearfix"></div>
