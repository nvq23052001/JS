import { getAll } from "../api/products";
import instance from '../api/instance';

import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
import data, { act } from "../data";
const HomePage = {
    
  formatter : new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

  }),
  async render() {
    const { data } = await getAll();
    const a = await instance.get('/products?_start')
    return /* html */ `
    <div class=''>
      ${Nav.render()}
      <div class="banner bg-cover bg-center">
        <div class="banner__wrapper w-[50%] relative left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
          <h2 class="banner__text miller text-white text-center">
            Carefully crafted handmade treasures
          </h2>
          <div class="banner__btn  mt-[20px] flex justify-center">
            <button class="btn btn-trans bg-white hover:bg-transparent hover:text-white transition-all outline-none mx-[10px]">
              <a href="/#/products/3" class="banner__link">
                Shop now
              </a>
            </button>
            <button class="btn btn-trans btn-bg text-white bg-transparent outline-none mx-[10px] hover:bg-white hover:text-black transition-all">
              <a href="#">
                Custom now
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class="container w-[1200px] mx-auto mt-[10rem]">
          <div class="home">
              <section class="latest">
                <div class="latest__box flex justify-between mr-[5px] ml-[5px] mb-[10rem]">
                  <div class="home__text flex-[1_1_100%] flex flex-col justify-center">
                    <div class="text__wrapper">
                      <h3 class="home__name text-[40px] font-[100]">
                        <a href="/#/products/1"  class='home__name-link text-[#383737] font-[100] hover:text-[#717171] transition-all duration-500'>
                          Women's Hat
                        </a>
                      </h3>
                      <a href="/#/products/1" class="home__text-link font-[300] text-[20px] text-[#2e2e2e] border-b  border-[#2e2e2e] hover:translate-x-[10px] hover:text-[#717171] transition-all duration-500 cursor-pointer">Shop</a>
                    </div>
                  </div>
                  <div class="home__img relative">
                    <a href="/#/products/1" class="home__img-link group flex justify-end overflow-hidden w-[auto] h-[auto]">
                      <img src="https://cdn.shopify.com/s/files/1/0031/1699/0564/files/SHOP-WOMEN-Worth-and-Worth-Blue-ash-2-photo.jpg?v=1607482944" alt="" class="home__bg  group-hover:scale-[1.02] group-hover:blur-[1px] transition-all duration-700" />
                    </a>
                    <div class="bg-[url('https://cdn.shopify.com/s/files/1/0031/1699/0564/files/texture_indigo-worth-and-worth.jpg?v=1607483089')] w-[40%] h-[85%] absolute top-[-5%] left-[-3%] z-[-5]">
                        
                    </div>
                  </div>
                </div>
                <div class="latest__box flex flex-row-reverse justify-between mr-[5px] ml-[5px] mb-[10rem]">
                  <div class="home__text flex-[1_1_100%] flex flex-col justify-center">
                    <div class="text__wrapper ml-[auto]">
                      <h3 class="home__name text-[40px] font-[100]">
                        <a href="/#/products/2"  class='home__name-link text-[#383737] font-[100] hover:text-[#717171] transition-all duration-500'>
                          Men's Hat
                        </a>
                      </h3>
                      <a href="/#/products/2" class="home__text-link font-[300] text-[20px] text-[#2e2e2e] border-b  border-[#2e2e2e] hover:translate-x-3 hover:text-[#717171] transition-all duration-500 cursor-pointer">Shop</a>
                    </div>
                  </div>
                  <div class="home__img relative">
                    <a href="/#/products/2" class="home__img-link group flex justify-end overflow-hidden w-[auto] h-[auto]">
                      <img src="https://cdn.shopify.com/s/files/1/0031/1699/0564/files/worth-and-worth-shop-men-collection.jpg?v=1637363336" alt="" class="home__bg  group-hover:scale-[1.02] group-hover:blur-[1px] transition-all duration-700" />
                    </a>
                    <div class="bg-[url('https://cdn.shopify.com/s/files/1/0031/1699/0564/files/texture_indigo-worth-and-worth.jpg?v=1607483089')] w-[60%] h-[85%] absolute top-[-5%] right-[-3%] z-[-5]">
                        
                    </div>
                  </div>
                </div>
              </section>
              <section class="create">
                <h3 class="create__heading mb-[18px] mt-[50px] uppercase text-[21px] tracking-wider flex justify-center text-[#5c5c5c]">Latest Creations</h3>
                ${data.map((product, index)=> {
                  if(index < 3) {
                    return /*html*/ ` <div class="create__box grid grid-cols-2 gap-x-[2rem]">
                  <div class="create__box-modal w-[100%]">
                    <a href="/product/${product.id}" class="create__box-link inline-block group">
                    <img src="${product['imgModel']}" alt="" class="img__modal w-[100%]  group-hover:blur-[1px]" />
                    </a>
                  </div>

                  <div class="create__detail">
                    <a href="/product/${product.id}" className="detail__img-link">
                    <img src="${product.img}" alt="" class="detail__img flex justify-center" />
                    </a>
                    <p class="create__name text-[28px] text-center">
                      <a href="" class="create__name-link text-[#1d1d1d] leading-[38px] hover:text-[#717171] transition-all">
                        ${product.name}
                      </a>
                    </p>
                    <p class="create__price text-center">
                      ${this.formatter.format(product.price)}
                    </p>
                  </div>
                </div>`
                  }
                })}
              </section>
          </div>
      </div>
      ${Footer.render()}
    </div>
  </div>
    `;
  },
  afterRender() {
    Nav.afterRender();
  },
};

export default HomePage;
