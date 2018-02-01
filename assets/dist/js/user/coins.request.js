function approve (itemID) {
    $a = $('a[attr-id="'+itemID+'"]');
    console.log('del '+itemID+' called!');
    var coin = $a.closest('tr').find('td:nth-child(3)').text();
    var uname = $a.closest('tr').find('td:nth-child(2)').text();
    if (itemID) {
        if (confirm("Are you sure want to approve this request?")) {
            $.ajax({
                url: API_URL+'/duyetcoin/',
                type: 'put',
                data: {historyid: itemID},
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    console.log(response);
                    mtip('', 'success', '', 'Yêu cầu đã chấp nhận. '+coin+' coin đã được thêm vào tài khoản của '+uname+' thành công');

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

var table;
$(document).ready(function () {
    table = $('#buyList').DataTable({
        ajax: {
            url: API_URL+"/danhsachduyetcoin/",
            type: "get",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
		columns: [
            { data: "id" },
			{ data: "user" },
            { data: "coin" },
            { data: "date"},
            {
                data: null,
                render : function (data, type, row) {
                    return '<div class="row-btns"><a attr-id="'+row.id+'" class="row-btn-approve" href="#" onclick="javascript:approve(\''+row.id+'\'); return false"><i class="fa fa-check"></i></a></div>'
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
