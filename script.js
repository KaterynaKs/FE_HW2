{/* <div class="container">
        <div class="admin">
            <input type="text" id="inputField" placeholder="Введите id продукта">
            <button class="btn">Показать</button>
        </div>
        <div class="product">
            <div class="images">
                <img src="https://th.bing.com/th/id/OIP.F9ib5_0k-u3u5rLOJD0ZbgHaNK?pid=ImgDet&w=184&h=325&c=7&dpr=1,3" alt="">
            </div>            
            <div class="text">
                <h2>Title</h2>
                <p id="text">Stock:</p>
                <p id="text">Price:</p>
                <p id="text">Rating:</p>
                <p id="text">Category:</p>
            </div>
        </div>
    </div> */}    

    let getProductById = (id) =>{
        
        fetch(`https://dummyjson.com/products/${id}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            
            mark(data);
        })
    }    

    const bodyBlock = document.querySelector(".body");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    const adminDiv = document.createElement("form");
    adminDiv.classList.add("add_form");

    const inputElem = document.createElement("input");
    inputElem.setAttribute("name", "prod");
    inputElem.setAttribute("id", "prod");
    inputElem.setAttribute("type", "text");

    const btnElem = document.createElement("button");
    btnElem.innerText="Показать";

    adminDiv.append(inputElem, btnElem);
    containerDiv.append(adminDiv);
    bodyBlock.append(containerDiv);

    const prodDiv = document.createElement("div");
    prodDiv.classList.add("product");

    const mark = (product) => {
        
    while (prodDiv.firstChild) {prodDiv.removeChild(prodDiv.firstChild); }
    
    prodDiv.innerHTML=' '
    
    const imagesDiv = document.createElement("div");
    imagesDiv.classList.add("images");

    const imageElem = document.createElement("img");
    imageElem.setAttribute("alt", "avatar");
    imageElem.setAttribute("src", product.images[0])
    
    imagesDiv.append(imageElem);

    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    const titleElem = document.createElement("h2");
    titleElem.innerText = product.title;
    const pElem = document.createElement("p");
    pElem.innerText = `Price: ${product.price}`;
    const pElemStock = document.createElement("p");
    pElemStock.innerText = `Stock: ${product.stock}`
    const totalRating = document.createElement("p");
    const avg = product.reviews.reduce((sum, review) => sum + review.rating, 0)/product.reviews.length;
    totalRating.innerText = `Rating AVG: ${avg.toFixed(1)}`
    const categoryElem = document.createElement("p");
    categoryElem.innerText = `Category: ${product.category}`
    textDiv.append(titleElem, pElem, pElemStock, totalRating, categoryElem);
    prodDiv.append(imagesDiv, textDiv);
    containerDiv.append(prodDiv);
    bodyBlock.append(containerDiv);
}

adminDiv.addEventListener("submit", (e) => {
    e.preventDefault();
    const prodId = e.target.prod.value;
    getProductById(prodId)
    console.log(prodId); 
    e.target.reset();  
});

    




    