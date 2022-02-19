import axios from "axios";
import Nav from "../components/nav";
import Footer from '../components/footer';

import instance from '../api/instance';
const Search = {

    formatter : new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

    }),
    async render(key) {
      console.log(key);
      const {data} = await instance.get(`/products?q=${key}`);
      console.log(data);
    return /* html */ `
        <div class=""> 
            <div id="header">
                ${Nav.render()}
            </div>
            <div class="container w-[1200px] mx-[auto] my-[0]">
              <section class="find mt-[10rem]">
                <div class="result">
                    <h3 class="result_h3 font-semibold text-[18px] tracking-[1px]">Showing [ ${data.length} ] result for:</h3>
                    <div class="result-box">
                        <p class="result_detail text-[50px]">${key}</p>
                        <img src="https://cdn.shopify.com/s/files/1/0031/1699/0564/t/15/assets/sketch-border.png?v=7692273349260485024" alt="" />
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-x-[3rem] h-[1000px]">
                    ${data.map(result=> `
                    <div class="product__box pt-[10px]">
                        <a href="" class="product__link">
                            <img src="${result.img}" alt="" class="img" />
                            <div class="text flex flex-col">
                            <span class="text-center text-[18px] text-[#2e2e2e] tracking-[2px]">${result.name}</span>
                            <span class="price text-center tracking-[2px] text-[14px]">${this.formatter.format(result.price)}</span>
                            </div>
                        </a>
                    </div>
                    `).join('')}
                    
                </div>
                
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

export default Search;
