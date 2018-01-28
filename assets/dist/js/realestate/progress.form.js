var placeLatLng = {lat: 18.02, lng: 105.86};

var options = {district: ''};
var c_city = district = null;
var cityList = [];

var _URL = location.href.split('?')[0];
var splitURL = _URL.split('/');
var nodeID = splitURL[splitURL.length-1];
var tiendoID = (location.href.indexOf('id=') > -1) ? location.href.split('id=')[1].split('&')[0] : null;

(function($) {
    FormGen = function(submitType, nodeType) {
        var v = $(this).attr('id');
        var $thismap = this;

        this.initialize = function () {
            if (submitType == 'edit') {
                this.loadData();
            }

            $('[attr-required="1"]').each(function () {
                $(this).find('.control-label,.control-labels').append('<span class="required-mark text-danger bold">*</span>')
            });

            this.submitForm();
        }

        this.submitForm = function () {
            $('#'+v).submit(function () {
                var ok = true;
                $('textarea#thumbs').val($('textarea#thumbs').val().replace(/\n/g, ','));
                $('[attr-required="1"]').not('.form-adr,.form-price').each(function () {
                    var val = $(this).find('input,select,textarea').val();
                    if ( !val || val == "CN" ) {
                        console.log('Missing parameters');
                        mtip('', 'error', '', 'Các trường đánh dấu * là bắt buộc');
                        ok = false;
                        return false;
                    }
                });

                var postData = objectifyForm($(this).serializeArray());
                postData.duanid = nodeID;

                console.log(postData);
                console.log(JSON.stringify(postData));

                if (ok) {
                    if (submitType == 'add') $thismap.add(postData)
                    else if (submitType == 'edit') $thismap.edit(postData)
                } else {
                    console.log('not ok~');
                    mtip('', 'error', '', 'Các trường đánh dấu * là bắt buộc');
                }
                return false
            })
        }

        this.add = function (postData) {
            console.log('ajax post');
            //var postData = $(this).serialize();
            $.ajax({
                url: API_URL+'/tiendoduans/',
                type: 'post',
                data: postData,
                datatype: 'json',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    console.log(response);
                    mtip('', 'success', '', 'Tiến độ dự án đã được đăng thành công');
                    location.href = _URL;
                },
                error: function (a, b, c) {
                    console.log(a);
                    mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                }
            })
        }

        this.edit = function (postData) {
            console.log('ajax put');
            //var postData = $(this).serialize();
            $.ajax({
                url: API_URL+'/tiendoduans/'+tiendoID+'/',
                type: 'put',
                data: postData,
                datatype: 'json',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    console.log(response);
                    mtip('', 'success', '', 'Tiến độ dự án đã được cập nhật thành công');
                },
                error: function (a, b, c) {
                    console.log(a);
                    mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                }
            })
        }

        this.loadData = function () {
            console.log(API_URL+'/tiendoduans/'+tiendoID);
            $.ajax({
                url: API_URL+'/tiendoduans/'+tiendoID+'/',
                type: 'get',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    console.log(response);
                    if (response.message) {
                        //$('#main-content main').html('No item found');
                        return false;
                    }

                    response = response.data;
                    $('.node_title').html(response.name);
                    for (var key in response) {
                        $('input[name="'+key+'"], .form-group:not(".form-adr") select[name="'+key+'"], textarea[name="'+key+'"]').val(response[key])
                    }
                },
                error: function (a, b, c) {
                    console.log(a);
                }
            })
        }

        return this;
    }
    $.fn.FormGen = FormGen
}(jQuery));
