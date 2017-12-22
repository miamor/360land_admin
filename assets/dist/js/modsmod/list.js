var splitURL = location.href.split('/');
var typeURL = splitURL[splitURL.length-1];

if (typeURL == 'mods') $('main>h2').text('Mods');
else $('main>h2').text('Smods');
console.log(API_URL+"/"+typeURL+"s/");

$(document).ready(function () {
    $('#buyList').DataTable({
        ajax: {
            url: API_URL+"/"+typeURL+"s/",
            type: "get",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
		columns: [
			{ data: "name" },
			{ data: "phone" },
            { data: "email" },
            { data: "address" },
		],
        fnRowCallback: function (nRow, aData, iDisplayIndex) {
            console.log(aData);
            /*if (aData.taxiid != null) {
                $(nRow).addClass('taken');
            }*/
        }
	})
})
