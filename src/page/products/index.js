import axios from "axios";
import { getAll } from "../../api/products";
import Nav from "../../components/nav";

const ProductsPage = {
  async render() {
    const { data } = await getAll();
    console.log(data);
    return /* html */ `
        <div class="max-w-5xl mx-auto"> 
            <div id="header">
                ${Nav.render()}
            </div>
            <div class="news">
                <h2 class="text-2xl font-semibold my-4">Sản phẩm</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data
                      .map(
                        (product) => `
                        <div class="border p-4">
                            <a href="/product/${product.id}">
                                <img src="${product.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a  href="/product/${
                              product.id
                            }"class="font-semibold text-lg text-orange-500">${
                          product.name
                        }</a></h3>
                            <p>${product.desc}</p>
                            <p>${product.price.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })}</p>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
        `;
  },
  afterRender() {},
};

export default ProductsPage;
