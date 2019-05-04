var token={"key":"abcd"}
$("#loginbtn").click(function(e){
     e.preventDefault();

    var credits={
    "username":$('#un').val(),
    "password":$('#pw').val()
    }


     $.ajax({
        url:  '/api/v1/rest-auth/login/',
        type:  'post',
        dataType:  'json',
        beforeSend: function (xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", '{{ csrf_token }}');
        },
        data:credits,

        success: function (response) {

            $('#unresp').html("");
            $('#pwresp').html("");
            $('.resp').append('Successfully Logged In');

            console.log("success!");
            console.log(response.key);
            token=response

//            var url = "/";
//            $(location).attr('href', url);
        },
        error: function(error_data){
        $('#resp').html(error_data.responseJSON.non_field_errors);

        console.log(error_data);
        }
    });
  });

$("#logoutbtn").click(function(e){
     e.preventDefault();
     $.ajax({
        url:  '/api/v1/rest-auth/logout/',
        type:  'post',
        dataType:  'json',
        beforeSend: function (xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", '{{ csrf_token }}');
        },
        data:token,

        success: function (response) {
//        $('#resp').append('<p>Done!</p>');
            console.log("success!");
            console.log(response);
            $('#msg').append(response.detail)
//
              var url = "/";
                $(location).attr('href', url);
        },
        error: function(error_data){
        console.log(error_data);
        }
    });
  });
