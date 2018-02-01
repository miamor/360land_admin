var splitURL = location.href.split('/');
var itemID = (location.href.indexOf('id=') > -1 ? location.href.split('id=')[1].split('&')[0] : null);

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
            } else if (formType == 'send') {
                this.prepareSend();
            }

            $('#'+v).submit(function () {
                if (formType == 'edit') $thisform.edit();
                else if (formType == 'add') $thisform.add();
                else if (formType == 'send') $thisform.send();
                return false
            })
        }

        this.loadData = function () {
            $.ajax({
                url: API_URL+"/themthongbaochinh/"+itemID+"/",
                type: "get",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    response = response.data;

                    for (var key in response) {
                        $('[name="'+key+'"]').val(response[key])
                    }
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
                var postData = $('#'+v).serialize();
                console.log(JSON.stringify(postData));
                $.ajax({
                    url: API_URL+"/themthongbaochinh/",
                    type: "post",
                    data: postData,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', __token);
                    },
                    success: function (response) {
                        console.log(response);
                        mtip('', 'success', '', 'Thông báo đã được thêm thành công');
                        location.href = MAIN_URL+'/noti';
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
                var postData = $('#'+v).serialize();
                console.log(JSON.stringify(postData));
                $.ajax({
                    url: API_URL+"/themthongbaochinh/"+itemID+"/",
                    type: "put",
                    data: postData,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', __token);
                    },
                    success: function (response) {
                        console.log(response);
                        mtip('', 'success', '', 'Thông báo đã được cập nhật thành công');
                    },
                    error: function (a, b, c) {
                        console.log(a);
                        mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                    }
            	});
            }
        }

        this.send = function () {
            var ok = true;
            $('[attr-required="1"]:not(".customshow")').each(function () {
                var val = $(this).find('input,select:not("#users_select"),textarea').val();
                if ( !val ) {
                    console.log('Missing parameters');
                    mtip('', 'error', '', 'Các trường đánh dấu * là bắt buộc');
                    ok = false;
                    return false;
                }
            });
            var avai = $('#'+v+' [name="available"]:checked').val();
            if (ok) {
                if (!$('[attr-available="'+avai+'"]').find('input,textarea,select').val()) {
                    ok = false;
                    console.log('Missing parameters ([attr-available="'+avai+'"])');
                    mtip('', 'error', '', 'Các trường đánh dấu * là bắt buộc');
                }
                if (!$('[name="send_all"]').is(':checked')) {
                    if (!$('#users_select').val()) {
                        ok = false;
                        console.log('Missing parameters (#users_select)');
                        mtip('', 'error', '', 'Các trường đánh dấu * là bắt buộc');
                    }
                }
            }
            if (ok) {
                //var postData = objectifyForm($('#'+v).serializeArray());
                var postData = $('#'+v).serialize();
                /*var usersList = postData.split(/to=|&/);
                console.log(usersList);*/

                if (avai == 0) {
                    postData += '&thongbao=';
                }
                if (!$('[name="send_all"]').is(':checked')) {
                    postData += '&send_all=0';
                }

                console.log(postData);

                $.ajax({
                    url: API_URL+"/guithongbao/",
                    type: "post",
                    data: postData,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', __token);
                    },
                    success: function (response) {
                        console.log(response);
                        mtip('', 'success', '', 'Thông báo đã được gửi thành công');
                        location.href = MAIN_URL+'/noti?mode=sent';
                    },
                    error: function (a, b, c) {
                        console.log(a);
                        mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                    }
            	});
            }
        }

        this.prepareSend = function () {
            this.loadUserList();
            this.loadNotiList();
            $('[name="send_all"]').change(function () {
                if ($(this).is(':checked')) {
                    $('#users_select_chosen').hide()
                } else {
                    $('#users_select_chosen').show();
                }
            });
            $('[name="available"]').change(function () {
                if ($('[name="available"][value="0"]').is(':checked')) {
                    $('[attr-available="1"]').hide()
                    $('[attr-available="0"]').show()
                } else {
                    $('[attr-available="0"]').hide()
                    $('[attr-available="1"]').show()
                }
            })
        }

        this.loadUserList = function () {
            $.ajax({
                url: API_URL+"/users/",
                type: "get",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    $.each(response.data, function (i, v) {
                        $('#users_select').append('<option value="'+v.username+'">'+v.username+'</option>');
                    });
                    $('#users_select').trigger('chosen:updated');
                }, 
                error: function (a, b, c) {
                    console.log(a)
                }
            })
        }

        this.loadNotiList = function () {
            $.ajax({
                url: API_URL+"/danhsachthongbaochinh/",
                type: "get",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    $.each(response.data, function (i, v) {
                        $('#thongbao_select').append('<option value="'+v.id+'">['+v.id+'] '+v.title+'</option>');
                    });
                }, 
                error: function (a, b, c) {
                    console.log(a)
                }
            })
        }

        return this;
    }
    $.fn.FormGen = FormGen
}(jQuery));
