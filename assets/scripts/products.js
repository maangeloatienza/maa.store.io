(function(){
  var request = new XMLHttpRequest();
  request.open("GET","https://fakestoreapi.com/products")
  request.send()


  request.onload = function(){
    var response = [];
    if(request.status === 200){
      // console.log(JSON.parse(request.response))
      response = JSON.parse(request.response)
      var product_container = document.getElementsByClassName("product--wrapper")[0];
      var product_html = ''
      var products = response.map(function(product){
        product_html+=`
          <div class="product__card">
            <img class="product__image" src="${product.image}" alt="${product.title}">
            <div class="product__body">
              <p class="product__title">${product.title}</p>
              <p class="product__description">$ <b>${product.price}</b></p>
            </div>
          </div>
        `
      })

      product_container.innerHTML = product_html
    }
  }

})()
