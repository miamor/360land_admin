<h2>Edit user info: <span class="user-name">User Name</span> <span class="gensmall username">@username</span></h2>

<form class="bootstrap-validator-form new-write" action="?do=edit">
	<div class="form-group">
		<div class="col-lg-3 control-label no-padding-left">Username *</div>
		<div class="col-lg-9 no-padding">
			<input class="form-control" name="username" type="text" placeholder="Username"/>
		</div>
		<div class="clearfix"></div>
	</div>

	<div class="form-group">
		<div class="col-lg-3 control-label no-padding-left">Name *</div>
		<div class="col-lg-4 no-padding">
			<input class="form-control" name="first_name" placeholder="First name" type="text"/>
		</div>
		<div class="col-lg-5 no-padding-right">
			<input class="form-control" name="last_name" placeholder="Last name" type="text"/>
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
			<input class="form-control" name="coins" placeholder="Coins" type="number"/>
		</div>
		<div class="clearfix"></div>
	</div>
	<div class="form-group">
		<div class="col-lg-3 control-label no-padding-left">Avatar</div>
		<div class="col-lg-9 no-padding">
			<input class="form-control" name="avatar" placeholder="Avatar" type="text"/>
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

	<div class="add-form-submit center">
		<input type="reset" value="Reset" class="btn btn-default">
		<input type="submit" value="Submit" class="btn">
	</div>
</form>
