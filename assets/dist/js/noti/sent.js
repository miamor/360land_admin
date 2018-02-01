var table;
$(document).ready(function () {
    table = $('#buyList').DataTable({
        ajax: {
            url: API_URL+"/danhsachthongbaodagui/",
            type: "get",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
		columns: [
            {
                data: "id",
                render : function (data, type, row) {
                    return '<a href="'+MAIN_URL+'/noti?mode=sent&id='+row.id+'">'+data+'</a>'
                }
            },
            { data: "modname" },
			{ data: "user" },
			{ data: "details" },
			{ data: "time"},
			{ 
                data: "thongbao",
                render : function (data, type, row) {
                    if (data != null) {
                        return '<a href="'+MAIN_URL+'/noti?mode=all&id='+row.id+'">'+data+'</a>'
                    } else {
                        return '';
                    }
                }
            }
		],
        fnRowCallback: function (nRow, aData, iDisplayIndex) {
            console.log(aData);
            /*if (aData.taxiid != null) {
                $(nRow).addClass('taken');
            }*/
        }
	})
})
