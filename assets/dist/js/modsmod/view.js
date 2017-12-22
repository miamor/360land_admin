var splitURL = location.href.split('/');
var modID = splitURL[splitURL.length-1];

function loadData () {
    $.ajax({
        url: API_URL+"/mods/"+modID+"/",
        type: "get",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', __token);
        },
        success: function (response) {
            response = response.data;
            //$('.user-name').html(response.name)
            //$('.username').html(response.username)
            for (var key in response) {
                $('input[name="'+key+'"]').val(response[key]).attr('disabled', true);
            }

            console.log($('input[name="sex"][value="'+response[key]+'"]'));
            $('input[name="sex"][value="'+response[key]+'"]').prop('checked', true);
        },
        error: function (a, b, c) {
            console.log(a)
        }
	});
}

$(document).ready(function () {
    loadData();
})
