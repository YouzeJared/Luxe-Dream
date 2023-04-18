const categoryFilter = document.getElementById("cateSelect");
const priceFilter = document.getElementById("priceSelect");

let state = []/*建立一个数组*/
state = rawdata/*将数据放入数据*/
let filterrange = []
let filterrangeprice = []
let filterCategory = []
let afterfilter = []
getData(state)
initalStatus();
function initalStatus() {
  getData(state);
    
  if(getUrlParameter('categoryId') || getUrlParameter('priceRange')) {
    categoryFilter.value = getUrlParameter('categoryId');
    priceFilter.value = getUrlParameter('priceId');
    filterHandler();
    filterprice();
  } else {
    getData(state);
  }
}

/*console.log(state)*/

function getData(state) {

  let productsdata = ""
  for (let product of state) {/*for 循环读取 state里面的元素*/
    if (product.productMedia.length > 0 && product.productMedia[0].url) {/*只读取带有productMedia内容的元素*/

      const urlParam = `detail.html?prodId=${product.prodId}`
      const productdetails = `
        <div class="col col-lg-3 col-md-6 col-12">
        <a href="${urlParam}" style = "text-decoration: none; color:black">
            <img src="https://storage.googleapis.com/luxe_media/wwwroot/${product.productMedia[0].url}">
             <p id="title">${product.title}</p> <!--读取title-->
            <p id="price">$ ${product.price}</p> <!--读取price--> 
        </a>
        </div>`
      productsdata += productdetails
    }
  }
  document.getElementById('prodList').innerHTML = productsdata
  
}
/*升序*/
function asc() {
  setUrlParams('sort', 'asc')
  if(filterrange == 0 && filterCategory == 0){
    state.sort(function (A, B) {
      const valueA = A.price
      const valueB = B.price
      return valueA - valueB;
    });
    getData(state)
    console.log("re1")
  }
  if(filterrange != 0 && filterCategory == 0){
    filterrange.sort(function (A, B) {
      const valueA = A.price
      const valueB = B.price
      return valueA - valueB;
    });
    getData(filterrange)
    console.log("re2")
  }
  if(filterrange == 0 && filterCategory != 0){
    filterCategory.sort(function (A, B) {
      const valueA = A.price
      const valueB = B.price
      return valueA - valueB;
    });
    getData(filterCategory)
    console.log("re38")
  }
  if(filterrange != 0 && filterCategory != 0){
    filterCategory.sort(function (A, B) {
      const valueA = A.price
      const valueB = B.price
      return valueA - valueB;
    });
    getData(filterCategory)
   
    console.log("re4")
  }
  
}
/*降序*/
function desc() {
  setUrlParams('sort', 'desc')
  if(filterrange == 0 && filterCategory == 0){
    state.sort(function (A, B) {
      const valueA = A.price
      const valueB = B.price
      return valueB - valueA;
    });
    getData(state)
  }
  if(filterrange != 0 && filterCategory == 0){
    filterrange.sort(function (A, B) {
      const valueA = A.price
      const valueB = B.price
      return valueB - valueA;
    });
    getData(filterrange)
  }
  if(filterrange == 0 && filterCategory != 0){
    filterCategory.sort(function (A, B) {
      const valueA = A.price
      const valueB = B.price
      return valueB - valueA;
    });
    getData(filterCategory)
  }

  if(filterrange != 0 && filterCategory != 0){
    filterCategory.sort(function (A, B) {
      const valueA = A.price
      const valueB = B.price
      return valueB - valueA;
    });
    getData(filterCategory)
  }
  
}


/*根据Category筛选*/
function filterHandler() {
  /*定义变量*/
  const cateId = categoryFilter.value
  
  filterCategory = []
  setUrlParams('categoryId', cateId)

  /*循环遍历所有数据*/
  /*将两个筛选条件结合，进行判断*/
  if (filterCategory.length == 0 && filterrange.length != 0) {
    filterprices()
    for (let product of filterrangeprice) {
      if (product.categoryId == cateId || cateId == "0") {
        filterCategory.push(product)
        /*如果需要在类别的基础上二次筛选，则把结果放在全局变量afterfilter*/
        afterfilter.push(product)
        displayNothing()
       
      }
    }
  console.log("price")
  
  } 
  else  {
    filterprices()
    for (let product of filterrangeprice) {
      if (product.categoryId == cateId || cateId == "0") {
        filterCategory.push(product)
      }
    }
    getData(filterCategory)
    console.log("prie")
  }
  
 /*如果不为0，则显示内容，如果为0，则显示语句*/
  function displayNothing() {
    if(filterCategory.length != 0) {
      getData(filterCategory)
    } else {
      document.getElementById('prodList').innerHTML = `<p>No product in this range</p>`;
    }
  
    
  }
  console.log(displayNothing())
 
 

}


/*根据Price筛选*/
function filterprice() {
  /*定义变量*/
  const priceId = priceFilter.value
  setUrlParams('priceId', priceId)
  filterrange = []
  
  /*循环遍历所有数据*/
  /*将两个筛选条件结合，进行判断*/
  if (filterCategory.length != 0) {
    for (let product of filterCategory) {
      if (priceId == 0) {
        filterrange = filterCategory
        displayNothing()
      }
      
      if (product.price <= 100 && priceId == 100) {
        filterrange.push(product)
        /*如果需要在类别的基础上二次筛选，则把结果放在全局变量afterfilter*/
        afterfilter.push(product)
        displayNothing()
        console.log("repeat")
      }
      if (product.price > 100 && product.price <= 500 && priceId == 500) {
        filterrange.push(product)
        /*如果需要在类别的基础上二次筛选，则把结果放在全局变量afterfilter*/
        afterfilter.push(product)
        console.log("repeat1")
        
      }
      if (product.price > 500 && product.price <= 1000 && priceId == 1000) {
        filterrange.push(product)
        /*如果需要在类别的基础上二次筛选，则把结果放在全局变量afterfilter*/
        afterfilter.push(product)
        console.log("repeat2")
        
      }
      if (product.price > 1000 && priceId == 1001) {
        filterrange.push(product)
        /*如果需要在类别的基础上二次筛选，则把结果放在全局变量afterfilter*/
        afterfilter.push(product)
        console.log("repeat3")
        
      }
    
    }
    getData(filterrange)
  console.log("4")

  }
  
  else {
    for (let product of state) {
      if (priceId == 0) {
        filterrange = state
        
      }
      if (product.price <= 100 && priceId == 100) {
        filterrange.push(product)
        
        
      }
      if (product.price > 100 && product.price <= 500 && priceId == 500) {
        filterrange.push(product)
        
        
      }
      if (product.price > 500 && product.price <= 1000 && priceId == 1000) {
        filterrange.push(product)
        
       
      }
      if (product.price > 1000 && priceId == 1001) {
        filterrange.push(product)
        
      }
    }
    getData(filterrange)
    console.log("5")
  }

 /*如果不为0，则显示内容，如果为0，则显示语句*/
  function displayNothing() {
    if(filterrange.length != 0) {
      getData(filterrange)
     
    } else {
      document.getElementById('prodList').innerHTML = `<p>No product in this range</p>`;
    }
  
  
  }
  
  console.log(displayNothing())
  
  
}


function getUrlParameter(value) {
  const getUrl = window.location.search;
  const urlParams = new URLSearchParams(getUrl);
  return urlParams.get(value);
}


function setUrlParams(key, value) {
  /*window.location.href"是本页面跳转*/
  const url = new URL(window.location.href)
  url.searchParams.set(key, value)
  console.log(url)
  /*pushState()方法是在历史记录中增加一条新的记录*/
  /*window.history.pushState(data, title, targetURL)*/
  window.history.pushState({ path: url.href }, '', url.href)
}

function filterprices() {
  const priceId = document.getElementById('priceSelect').value
  filterrangeprice = []
  for (let product of state) {
    if (priceId == 0) {
      filterrangeprice = state
      
    }
    if (product.price <= 100 && priceId == 100) {
      filterrangeprice.push(product)
      
      
    }
    if (product.price > 100 && product.price <= 500 && priceId == 500) {
      filterrangeprice.push(product)
      
      
    }
    if (product.price > 500 && product.price <= 1000 && priceId == 1000) {
      filterrangeprice.push(product)
      
     
    }
    if (product.price > 1000 && priceId == 1001) {
      filterrangeprice.push(product)
      
    }
  }
 
}



categoryFilter.addEventListener("change", filterHandler);
priceFilter.addEventListener("change", filterprice);