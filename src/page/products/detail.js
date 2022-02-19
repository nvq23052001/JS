import toastr from "toastr";
import "toastr/build/toastr.min.css";

import Nav from "../../components/nav";
import { get, getAll } from "../../api/products";
import { addToCart } from "../../utils/cart";
import { reRender } from "../../utils/rerender";
const DetailProduct = {
  formatter : new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

  }),
  async render(id) {
    const { data } = await get(id);
    const {data: all} = await getAll();
    return /*html*/ `<div class="">
            ${Nav.render()}
            <div class="container w-[1200px] mx-[auto] my-[0xp]">
              <section class="product__detail grid gap-x-[80px] ">
                <div class="product__img">
                  <img class="w-[100%]" src="${data.img}" alt="" />
                </div>
                <div class="product__over mt-[10rem]">
                  <h3 class="name text-[50px]">${data.name}</h3>
                  <p class="price mb-[30px] text-[#424242] tracking-[2px]">${this.formatter.format(data.price)}</p>
                  <p class="overview text-[#424242] tracking-[1px]" >
                    ${data.desc}
                  </p>
                  <div class="flex mt-[30px]">
                    <input class=" w-[30%] px-[20px] py-[5px] border bg-[#646363] inline-block" id="inputValue" type="number" value="1" />
                    <button class="bg-black text-white px-[40px] py-[20px] flex-1 inline-block" id="btnAddToCart">Add to cart</button>
                  </div>
                </div>
               
              </section>
              <section class="also mt-[20px]">
                <h3 class="tlt text-center text-[35px] text-[#5c5c5c]">You might also like</h3>
                <div class="box grid grid-cols-4 gap-x-[7rem]">
                  ${all.map((item)=> {
                    return `
                    <div class="product__box pt-[10px]">
                      <a href="/#/product/${item.id}" class="product__link">
                        <img src="${item.img}" alt="" class="img" />
                        <div class="text flex flex-col">
                        <span class="text-center text-[18px] text-[#2e2e2e] tracking-[2px]">${item.name}</span>
                        <span class="price text-center tracking-[2px] text-[14px]">$${item.price}</span>
                        </div>
                      </a>
                    </div>`
                  }).join('')}
                </div>
              </section>
            </div>
        </div>`;
  },
  afterRender(id) {
    Nav.afterRender();

    document
      .querySelector("#btnAddToCart")
      .addEventListener("click", async () => {
        const { data } = await get(id);
        addToCart({
          ...data,
          quantity: +document.querySelector("#inputValue").value
            ? +document.querySelector("#inputValue").value
            : 1,
            userId: JSON.parse(localStorage.getItem("user")).id,
        });
        reRender(Nav, '.header');
        toastr.success("Add to cart successfully!")
      });
  },
};
export default DetailProduct;
