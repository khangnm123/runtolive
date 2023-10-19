  let blogs = null;
            // get datas from file json
            fetch('../../js/data/listRun.json')
                .then(response => response.json())
                .then(data => {
                    blogs = data;
                    showDetail();
                })

function showDetail() {
    let thisPage = 1; 
    let limit = 3;
            // remove datas default from HTML
            let detail = document.querySelector('.detail');
            let listProduct = document.querySelector('.listProduct');
            let listRight = document.querySelector('.listRight');
            let productId = new URLSearchParams(window.location.search).get('id');
            let thisProduct = blogs.filter(value => value.id == productId)[0];
            //if there is no product with id = productId => return to home page
            if (!thisProduct) {
                window.location.href = "/";
            }
            
            detail.querySelector('.image img').src = thisProduct.image;
            detail.querySelector('.name').innerText = thisProduct.name;
            detail.querySelector('.posted').innerText =thisProduct.posted;
            detail.querySelector('.description').innerText = thisProduct.description;
            detail.querySelector('.description1').innerText =thisProduct.description1;
            (blogs.filter(value => value.id != productId)).forEach(blog=> {
                let newProduct = document.createElement('div');
                newProduct.innerHTML =
                    `
                    <div class="row item">
                    <div class="col-md-4 blog_content" style="margin-top:30px">
                        <div class="thumbnail">
                            <a href=${`/blogdetails.html?id=`+ blog.id}>
                                <img src="${blog.image}" alt="">
                            </a>
                        </div>
                    </div>
                        <div class="col-md-4 blog_text">
                            <span>${blog.posted}</span>
                            <h2>${blog.name}</h2>
                            <p>${blog.title}</p>
                        </div>   
                    </div>
                    `
                listProduct.appendChild(newProduct);
            });
    //Phân trang
                let list = document.querySelectorAll('.listProduct .item');
                console.log(list);
                function loadItem() {
                    let beginGet = limit * (thisPage - 1);
                    let endGet = limit * thisPage - 1;
                    list.forEach((item, key) => {
                        if (key >= beginGet && key <= endGet) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                    })
                }
                loadItem();

    
}
