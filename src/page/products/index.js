import axios from "axios";
import { getAll } from "../../api/products";
import Nav from "../../components/nav";
import Footer from '../../components/footer';

import instance from '../../api/instance';
const ProductsPage = {
  async render(id) {
    let db;
    let overView;
    if(id == 3) {
      const {data} = await getAll();
      db = data;
      const a = await instance.get('/category/3');
      overView = a.data;
    }else {
      const {data} = await instance.get(`/category/${id}?_embed=products`);
      db = data.products;
      overView = data;
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
                      ${overView.type}
                      </h2>
                      <img src="https://cdn.shopify.com/s/files/1/0031/1699/0564/t/15/assets/lines.png?v=12876156676734959081" alt="" class="overview__border object-cover" />
                    </div>
                    <p class="overview__desc text-[#515151]">
                      ${overView.desc}
                    </p>
                  </div>
                  <div class="overview__image">
                    <img src="${overView.img}" alt="" />
                  </div>
              </div>
              <section class="product grid grid-cols-3 gap-x-[7rem]">
              ${db.map(item=> {
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
              </section>
            </div>
            ${Footer.render()}
        </div>
        `;
  },
  afterRender() {
    Nav.afterRender();
  },
};

export default ProductsPage;
