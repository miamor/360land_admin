$(document).ready(function () {
    $('#buyList').DataTable({
        ajax: {
            url: API_URL+"/users/",
            type: "get",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
		columns: [
            {
                data: "id",
                render : function (data, type, row) {
                    return '<a href="'+location.href+'/'+data+'">'+data+'</span>'
                }
            },
            { data: "username" },
			{ data: "name" },
			{ data: "email" },
			{ data: "phone" },
            { data: "company" },
            { data: "coin" },
            { data: "rank"}
		],
        fnRowCallback: function (nRow, aData, iDisplayIndex) {
            console.log(aData);
            /*if (aData.taxiid != null) {
                $(nRow).addClass('taken');
            }*/
        }
	})
})
