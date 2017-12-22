<h2>Add new user</h2>

<form class="new-user">
	<div class="form-group">
		<div class="col-lg-3 control-label no-padding-left">Username *</div>
		<div class="col-lg-9 no-padding">
			<input class="form-control" name="username" type="text" placeholder="@username"/>
		</div>
		<div class="clearfix"></div>
	</div>

	<div class="form-group">
		<div class="col-lg-3 control-label no-padding-left">Name *</div>
		<div class="col-lg-9 no-padding">
			<input class="form-control" name="name" placeholder="Name *" type="text"/>
		</div>
		<div class="clearfix"></div>
	</div>

	<div class="form-group">
		<div class="col-lg-3 control-label no-padding-left">Email *</div>
		<div class="col-lg-9 no-padding">
			<input class="form-control" name="email" placeholder="Email" type="email"/>
		</div>
		<div class="clearfix"></div>
	</div>

	<div class="form-group">
		<div class="col-lg-3 control-label no-padding-left">Coins</div>
		<div class="col-lg-9 no-padding">
			<input class="form-control" name="coin" placeholder="coin" type="number"/>
		</div>
		<div class="clearfix"></div>
	</div>
	<div class="form-group">
		<div class="col-lg-3 control-label no-padding-left">Avatar</div>
		<div class="col-lg-9 no-padding">
			<input class="form-control" name="avatar" placeholder="Avatar" type="text" value="<?php echo PAGE_URL.'/data/img/anonymous.jpeg' ?>"/>
		</div>
		<div class="clearfix"></div>
	</div>

	<div class="form-group">
		<div class="col-lg-3 control-label no-padding-left"><i class="fa fa-facebook-square"></i> Fb ID</div>
		<div class="col-lg-9 no-padding">
			<input class="form-control" name="oauth_uid" placeholder="Facebook oauth uid"/>
		</div>
		<div class="clearfix"></div>
	</div>

	<div class="form-group">
		<div class="col-lg-3 no-padding-left">Type</div>
		<div class="col-lg-9 no-padding">
			<label class="radio col-lg-3">
				<input type="radio" value="0" checked name="type"/> User
			</label>
			<label class="radio col-lg-3">
				<input type="radio" value="1" name="type"/> Page
			</label>
		</div>
		<div class="clearfix"></div>
	</div>

	<div class="add-form-submit center">
		<input type="reset" value="Reset" class="btn btn-default">
		<input type="submit" value="Submit" class="btn">
	</div>
</form>
