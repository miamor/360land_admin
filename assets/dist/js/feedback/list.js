var table;
$(document).ready(function () {
    table = $('#buyList').DataTable({
        ajax: {
            url: API_URL+"/danhsachphanhoi/",
            type: "get",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
		columns: [
            {
                data: "id",
                render : function (data, type, row) {
                    return '<a href="'+location.href+'/'+data+'">'+data+'</a>'
                }
            },
            {
                data: "title",
                render : function (data, type, row) {
                    return '<a href="'+location.href+'/'+row.id+'">'+data+'</a>'
                }
            },
			{ data: "details" },
			{ data: "email" },
			{ data: "time"}
		],
        fnRowCallback: function (nRow, aData, iDisplayIndex) {
            console.log(aData);
            /*if (aData.taxiid != null) {
                $(nRow).addClass('taken');
            }*/
        }
	})
})
