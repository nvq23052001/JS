import axios from "axios";
import { getAll } from "../../api/products";
import Nav from "../../components/nav";
import Footer from '../../components/footer';
import { reRender } from "../../utils/rerender";

import instance from '../../api/instance';
const ProductsPage = {
  db: null,
  overView: {},
  load: true,

  async render(id) {
    // let db;
    // let overView;
        console.log(this.load);
        if(this.load) {
          this.load = false;
        if(id == 3) {
          const {data} = await getAll();
          this.db = data;
          const a = await instance.get('/category/3');
          this.overView = a.data;
        }else {
          const {data} = await instance.get(`/category/${id}?_embed=products`);
          this.db = data.products;
          this.overView = data || {};
        }
      }
    return /* html */ `
        <div class=""> 
            <div id="header">
                ${Nav.render()}
            </div>
            <div class="container w-[1200px] mx-[auto] my-[0]">
              <div class="overview grid mt-[30px] gap-x-[7rem] mb-[20px]">
                  <div class="overview__desc flex flex-col justify-center">
                    <div class="title mb-[20px]">
                      <h2 class="overview__title text-[55px] text-[#2e2e2e]">
                      ${this.overView.type}
                      </h2>
                      <img src="https://cdn.shopify.com/s/files/1/0031/1699/0564/t/15/assets/lines.png?v=12876156676734959081" alt="" class="overview__border object-cover" />
                    </div>
                    <p class="overview__desc text-[#515151]">
                      ${this.overView.desc}
                    </p>
                  </div>
                  <div class="overview__image">
                    <img src="${this.overView.img}" alt="" />
                  </div>
              </div>
              <section class="product grid gap-x-[3rem]">
                <div class="row">
                    <div class="col l-3 m-3 c-12">
                        <div class="category">
                            <input class="category__check" id="cate__check-cl" type="checkbox" name="" id="">
                            <label for="cate__check-cl" class="cate-body">
                                <p>Color</p>
                                <i class="fa-solid fa-chevron-down"></i>  
                            </label>

                            <label for="cate__check-cl" class="check">
                                <div class="grid grid-cols-3">
                                    <label for='color' class="relative test">
                                        <input type="text" id='color' class='filter w-0 h-0 absolute top-0' value="black" />
                                        <img src="../../../img/color-black.png" class="check__color pointer-events-none" alt="">
                                    </label>
                                    <label class="relative test">
                                        <input type="text" class='filter w-0 h-0 absolute top-0' value="blue" />
                                        <img src="../../../img/color-blue.png " class="check__color pointer-events-none" alt="">
                                    </label>

                                    <label class="relative test">
                                        <input type="text" class='filter w-0 h-0 absolute top-0' value="brown" />
                                        <img src="../../../img/color-brown.png" class="check__color pointer-events-none" alt="">
                                    </label>

                                    <label class="relative test">
                                        <input type="text" class='filter w-0 h-0 absolute top-0' value="gray" />
                                        <img src="../../../img//color-gray.png" class="check__color pointer-events-none" alt="">
                                    </label>

                                    <label class="relative">
                                        <input type="text" class='filter w-0 h-0 absolute top-0' value="green" />
                                        <img src="../../../img/color-green.png" class="check__color" alt="">
                                    </label>

                                    <label class="relative">
                                        <input type="text" class='filter w-0 h-0 absolute top-0' value="red" />
                                        <img src="../../../img/color-red.png" class="check__color" alt="">
                                    </label>
                                </div>
                            </label>

                            <input type="checkbox" class="category__check-cl" id="check-style">
                            <label for="check-style" class="cate-body">
                                <p>Price</p>
                                <i class="fa-solid fa-chevron-down"></i>
                            </label>

                            <label class="check-cl" for="check-style">
                                <div class="grid grid-cols-2 gap-x-[5px] gap-y-[10px]">
                                    <label class="flex items-center price-filter">
                                        <input class="check__ip" type="radio" value="50-250">
                                        <span class="check__p">$50-$250</span>
                                    </label>
                                    <label class="flex items-center price-filter">
                                        <input class="check__ip" type="radio" value="250-450">
                                    <span class=" check__p">$250-$450</span>
                                    </label>
                                    <label class="flex items-center price-filter">
                                        <input class="check__ip" type="radio" value="450-750">
                                    <label class=" check__p">$450-$750</label>
                                    </div>
                                </div>
                            </label>
                        </div>
                  </div>
                  <div class="content-body">
                  <div class="product-main grid grid-cols-3">
                    ${this.db.map(item=> {
                      return /*html*/ `
                      <div class="product__box pt-[10px]">
                        <a href="/#/product/${item.id}" class="product__link">
                          <img src="${item.img}" alt="" class="img" />
                          <div class="text flex flex-col">
                            <span class="text-center text-[18px] text-[#2e2e2e] tracking-[2px]">${item.name}</span>
                            <span class="price text-center tracking-[2px] text-[14px]">$${item.price}</span>
                          </div>
                        </a>
                      </div>
                    `
                    }).join('')}
                </div>
                
              </section>
            </div>
            ${Footer.render(ProductsPage)}
        </div>
        `;
  },
  afterRender() {
    Nav.afterRender();

    const priceFilter = document.querySelectorAll('.price-filter');
    priceFilter.forEach(price=> {
      price.addEventListener('click',async (e)=> {
        const filter = e.target.value.split('-');
        let dm = `price_gte=${filter[0]}&price_lte=${filter[1]}`;
        const {data} = await instance.get(`products?${dm}`);
        this.db = data;
        reRender(ProductsPage, '#app');
      })
    })

    const test = document.querySelectorAll('.test');
    test.forEach(te => {
      te.addEventListener('click', async e=> {
        if(e.target.value) {
         const {data} = await instance.get(`products?color=${e.target.value}`);
         this.db = data;
         console.log(this.db);
          reRender(ProductsPage, '#app');
        }
      })
    });
  },
};

export default ProductsPage;
