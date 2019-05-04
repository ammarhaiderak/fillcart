//var $prods=$("#prod");
var myproduct={
                "id":"a",
                "prod_name":"b",
                "prod_quan":"c",
                "prod_price":"d",
                "img_link":"e"
            }

function call_func(product){

      console.log(product);
      //console.log(product.id);
      console.log(product.prod_name);
      console.log(product.prod_price);
      console.log(product.prod_quan);
      console.log(product.id);
      console.log(product.img_link);

      //redirect to single product page from here

}




var $string='';
$.ajax({
    url:  '/api/v1/products/',
    type:  'get',
    dataType:  'json',
    success: function (products) {
    $.each(products,function(i,product){
            var myproduct2={
                "id":product.id,
                "prod_name":product.prod_name,
                "prod_quan":product.prod_quan,
                "prod_price":product.prod_price,
                "img_link":product.img_link
            }

//            console.log(myproduct.id);
//            console.log(myproduct.prod_name);
//            console.log(myproduct.prod_price);
//            console.log(myproduct.img_link);
//            console.log(myproduct)

         $('.myrow').append(
         '<div class="col-lg-4 col-md-6 pr">'+
						'<div class="single-product">'+
							'<img class="img-fluid" src="'+product.img_link+'" alt="">'+
							'<div class="product-details">'+
								'<h6>'+product.prod_name+'</h6>'+
								'<div class="price">'+
									'<h6>'+product.prod_price+'</h6>'+
			    					'</div>'+
								'<div class="prd-bottom">'+
									'<a href="" class="social-info">'+
										'<span class="ti-bag"></span>'+
										'<p class="hover-text">add to bag</p>'+
									'</a>'+
									'<a href="" class="social-info">'+
										'<span class="lnr lnr-heart"></span>'+
										'<p class="hover-text">Wishlist</p>'+
									'</a>'+
									'<a href="" class="social-info">'+
										'<span class="lnr lnr-sync"></span>'+
										'<p class="hover-text">compare</p>'+
									'</a>'+
									'<a href="#" onclick="call_func(\''+myproduct+'\')" class="social-info">'+
										'<span class="lnr lnr-move"></span>'+
										'<p class="hover-text">view more</p>'+
									'</a>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>');
    });
    },
    error: function(error_data){
    console.log("Error!")
    }
});
