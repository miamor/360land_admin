var splitURL = location.href.split('/');
var userID = splitURL[splitURL.length-1];

(function($) {
    FormGen = function(formType) {
        var v = $(this).attr('id');
        $thisform = this;

        this.initialize = function () {
            $('[attr-required="1"]').each(function () {
                $(this).find('.control-label, .control-labels').append(' <span class="text-danger">*</span>')
            });

            if (formType == 'edit') {
                this.loadData();
            }

            $('#'+v).submit(function () {
                if (formType == 'edit') $thisform.edit();
                else $thisform.add();
                return false
            })
        }

        this.loadData = function () {
            $.ajax({
                url: API_URL+"/mods/"+userID+"/",
                type: "get",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    response = response.data;
                    $('.user-name').html(response.name)
                    $('.username').html(response.username)
                    for (var key in response) {
                        if (key !='sex') {
                            $('input[name="'+key+'"]').val(response[key])
                        }
                    }

                    $('input[name="coin"], input[name="username"]').attr('disabled', true);
                    $('input[name="sex"][value="'+response.sex+'"]').attr('checked', true).closest('.radio').addClass('checked');
                },
                error: function (a, b, c) {
                    console.log(a)
                }
        	});
        }

        this.add = function () {
            var ok = true;
            $('[attr-required="1"]').each(function () {
                var val = $(this).find('input,select,textarea').val();
                if ( !val ) {
                    console.log('Missing parameters');
                    mtip('', 'error', '', 'Các trường đánh dấu * là bắt buộc');
                    ok = false;
                    return false;
                }
            });
            if (ok) {
                var postData = objectifyForm($('#'+v).serializeArray());
                console.log(JSON.stringify(postData));
                $.ajax({
                    url: API_URL+"/mods/",
                    type: "post",
                    data: postData,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', __token);
                    },
                    success: function (response) {
                        console.log(response);
                        mtip('', 'success', '', 'Thông tin người dùng đã được cập nhật thành công');
                        location.href = location.href.split('?')[0];
                    },
                    error: function (a, b, c) {
                        console.log(a);
                        mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                    }
            	});
            }
        }

        this.edit = function () {
            var ok = true;
            $('[attr-required="1"]').each(function () {
                var val = $(this).find('input,select,textarea').val();
                if ( !val ) {
                    console.log('Missing parameters');
                    mtip('', 'error', '', 'Các trường đánh dấu * là bắt buộc');
                    ok = false;
                    return false;
                }
            });
            if (ok) {
                var postData = objectifyForm($('#'+v).serializeArray());
                console.log(JSON.stringify(postData));
                $.ajax({
                    url: API_URL+"/mods/"+userID+"/",
                    type: "put",
                    data: postData,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', __token);
                    },
                    success: function (response) {
                        console.log(response);
                        mtip('', 'success', '', 'Thông tin người dùng đã được cập nhật thành công');
                    },
                    error: function (a, b, c) {
                        console.log(a);
                        mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                    }
            	});
            }
        }

        return this;
    }
    $.fn.FormGen = FormGen
}(jQuery));
