$("#registerbtn").click(function(e){
     e.preventDefault();

    var credits={
    "username":$('#un').val(),
    "password1":$('#pw1').val(),
    "password2":$('#pw2').val(),
    "email":$('#em').val()
    }


     $.ajax({
        url:  '/api/v1/rest-auth/register/',
        type:  'post',
        dataType:  'json',
        beforeSend: function (xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", '{{ csrf_token }}');
        },
        data:credits,

        success: function (response) {

            $('#unresp').html("");
            $('#emresp').html("");
            $('#pw1resp').html("");
            $('#pw2resp').html("");

            $('#resp').append("You Have been Successfully Registered!");
//            console.log("success!");
//            console.log(response.key);

            //token=response
           // var url = "/";
            //$(location).attr('href', url);
        },
        error: function(error_data){
        $('#unresp').html(error_data.responseJSON.username);
        $('#emresp').html(error_data.responseJSON.email);
        $('#pw1resp').html(error_data.responseJSON.password1);
        $('#pw2resp').html(error_data.responseJSON.password2);



        console.log(error_data);
        }
    });
  });
