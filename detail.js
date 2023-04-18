
/*获取每个图片的prodId*/
const prodId = getUrlParam('prodId')
/*获取每个图片的prodId相对应的所有信息，包括price title 等等*/
const currentProduct = getProduct(prodId)
/*获取每个图片的来源*/


function getUrlParam(prodId) {
  /*返回proID的值，substring(1)跳过第一个字符  proID=相对应的值*/
  const url = window.location.search.substring(1);
  const Params = new URLSearchParams(url);
  /*获取与给定搜索参数关联的第一个值。如果找不到参数，null则将返回。*/
  return Params.get(prodId);
  
}

function getProduct(Id) {
  let Product = [];
  for (let prod of rawdata) {
    if (prod.prodId == Id) {
     return Product = prod
    }
  }
  return Product;
}


if(currentProduct.productMedia[2]) { 
  document.getElementById('imgWrap').innerHTML =`<div id="carouselExample" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://storage.googleapis.com/luxe_media/wwwroot/${currentProduct.productMedia[0].url}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://storage.googleapis.com/luxe_media/wwwroot/${currentProduct.productMedia[1].url}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://storage.googleapis.com/luxe_media/wwwroot/${currentProduct.productMedia[2].url}" class="d-block w-100" alt="...">
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`

} else if(currentProduct.productMedia[1]) {
  document.getElementById('imgWrap').innerHTML =`<div id="carouselExample" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://storage.googleapis.com/luxe_media/wwwroot/${currentProduct.productMedia[0].url}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://storage.googleapis.com/luxe_media/wwwroot/${currentProduct.productMedia[1].url}" class="d-block w-100" alt="...">
    </div>
    
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`

} else if(currentProduct.productMedia[0]) {
  document.getElementById('imgWrap').innerHTML =`<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://storage.googleapis.com/luxe_media/wwwroot/${currentProduct.productMedia[0].url}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>`
}

document.getElementById('prodTitle').innerHTML = currentProduct.title
document.getElementById('desc').innerHTML = currentProduct.description
document.getElementById('price').innerHTML = `
  <h5>$ ${currentProduct.price}</h5>
`
