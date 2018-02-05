function del (itemID) {
    $a = $('a.row-btn-del[attr-id="'+itemID+'"]');
    console.log('del '+itemID+' called!');
    var title = $a.closest('tr').find('td:nth-child(2)').text();
    if (itemID && title) {
        if (confirm("Are you sure want to remove "+title+" permanently?")) {
            /*var row = table.row($a.closest('tr'));
            var rowNode = row.node();
            row.remove();*/

            $.ajax({
                url: API_URL+'/nodes/'+itemID+'/',
                type: 'delete',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    console.log(response);
                    mtip('', 'success', '', 'Dự án đã xóa khỏi hệ thống thành công');

                    $a.closest('tr').remove();
                },
                error: function (a, b, c) {
                    console.log(a);
                    mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                }
            })
        }
    }
    return false
}

function confirm (itemID) {
    $a = $('a.row-btn-confirm[attr-id="'+itemID+'"]');
    console.log('confirm '+itemID+' called!');
    var title = $a.closest('tr').find('td:nth-child(2)').text();
    if (itemID) {
        $.ajax({
            url: API_URL+'/confirm_node/',
            type: 'put',
            data: {realestatenode_id: itemID},
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', __token);
            },
            success: function (response) {
                console.log(response);
                if (response.message == 'OK') {
                    mtip('', 'success', '', 'Confirm thành công!');
                    $a.replaceWith('<span class="row-btn-confirm text-success"><i class="fa fa-check"></i></span>')
                    $a.closest('tr').remove();
                }
            },
            error: function (a, b, c) {
                console.log(a);
                mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
            }
        })
    }
}

function callbackFunc () {
    console.log('callbackFunc');
    console.log($('.row-btn-del').length)
    $('.row-btn-del').each(function () {
        $(this).click(function () {
            var title = $(this).closest('tr').find('td:nth-child(2)').text();
            if (confirm("Are you sure want to remove "+title+" permanently?")) {
                var row = table.row($(this).closest('tr'));
                del($(this).attr('attr-id'));
                var rowNode = row.node();
                row.remove();
            }
            return false
        })
    })
}

var table;
$(document).ready(function () {
    table = $('#buyList').DataTable({
        "ajax": {
            "url": API_URL+"/nodefalse/",
            "type": "GET",
            "beforeSend": function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
        "columns": [
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
            {
		data: "type",
		render: function (data, type, row) {
		    return typeRealEstate[data];
		}
	    },
            { data: "tinh" },
            { data: "huyen" },
            { data: "address" },
            {
                data : "price",
                render : function (data, type, row) {
                    return data+' tỷ'
                }
            },
            { data: "area" },
            { data: "timeto"},
            {
                data: "panorama_image",
                render : function (data, type, row) {
                    checkCls = '';
                    if (row.status) checkCls = 'text-success';

                    confirmBtn = '<a attr-id="'+row.id+'" class="row-btn-confirm" href="#" onclick="javascript:confirm(\''+row.id+'\'); return false"><i class="fa fa-check"></i></a>';
                    if (row.status) confirmBtn = '<span attr-id="'+row.id+'" class="row-btn-confirm '+checkCls+'"><i class="fa fa-check"></i></span>';

                    return '<div class="row-btns"><a attr-id="'+row.id+'" class="row-btn-edit" href="'+location.href+'/'+row.id+'"><i class="fa fa-pencil"></i></a> <a attr-id="'+row.id+'" class="row-btn-del text-danger" href="#" onclick="javascript:del(\''+row.id+'\'); return false"><i class="fa fa-trash"></i></a> '+confirmBtn+'</div>'
                }
            }
        ],
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {
            console.log(aData);
            /*if (aData.taxiid != null) {
                $(nRow).addClass('taken');
            }*/
            //callbackFunc()
        }
    });
})
