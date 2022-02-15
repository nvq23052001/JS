import Nav from "../../components/nav";
import { get } from "../../api/products";
import { addToCart } from "../../utils/cart";
const DetailProduct = {
  async render(id) {
    const { data } = await get(id);
    return `<div class="max-w-5xl mx-auto">
            <h1>${data.name}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
            <p>${data.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}</p>
            <p>
                <input type="number" id="inputValue"/>
                <button id="btnAddToCart" class="inline-block px-4 py-3 bg-indigo-500 text-white">
                    Add To cart
                </button>
                <input type="number" id="inputValue"/>
            </p>
        </div>`;
  },
  afterRender(id) {
    document
      .querySelector("#btnAddToCart")
      .addEventListener("click", async () => {
        const { data } = await get(id);
        addToCart({
          ...data,
          quantity: document.querySelector("#inputValue").value
            ? document.querySelector("#inputValue").value
            : 1,
        });
      });
  },
};
export default DetailProduct;
