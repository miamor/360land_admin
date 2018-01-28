var _URL = location.href.split('?')[0];
var splitURL = _URL.split('/');
var nodeID = splitURL[splitURL.length-1];


function del (itemID) {
    $a = $('a[attr-id="'+itemID+'"]');
    console.log('del '+itemID+' called!');
    if (itemID) {
        if (confirm("Are you sure want to remove item #"+itemID+" permanently?")) {
            /*var row = table.row($a.closest('tr'));
            var rowNode = row.node();
            row.remove();*/

            $.ajax({
                url: API_URL+'/tiendoduans/'+itemID+'/',
                type: 'delete',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    console.log(response);
                    mtip('', 'success', '', 'Bài viết đã xóa khỏi hệ thống thành công');

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
 
$(document).ready(function() {
    table = $('#buyList').DataTable( {
        ajax: {
            url: API_URL.split('/manager_')[0]+"/search/tiendoduan/",
            type: "POST",
            data: {duan: nodeID}
            /*beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }*/
        },
        columns: [
            {
                data: "id",
                render : function (data, type, row) {
                    return '<a href="'+location.href+'?mode=progressedit&id='+data+'">'+data+'</a>'
                }
            },
            { data: "thumbs" },
            { data: "details" },
            { data: "time" },
            { 
                data: null,
                render : function (data, type, row) {
                    return '<div class="row-btns"><a attr-id="'+row.id+'" class="row-btn-edit" href="'+location.href+'?mode=progressedit&id='+row.id+'"><i class="fa fa-pencil"></i></a> <a attr-id="'+row.id+'" class="row-btn-del text-danger" href="#" onclick="javascript:del(\''+row.id+'\'); return false"><i class="fa fa-trash"></i></a></div>'
                }
            }
        ],
        fnRowCallback: function (nRow, aData, iDisplayIndex) {
            console.log(aData);
            /*if (aData.taxiid != null) {
                $(nRow).addClass('taken');
            }*/
        }
    });
});