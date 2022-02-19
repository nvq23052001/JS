import { getAll, remove } from "../../../api/products";

import HeaderAdmin from "../../../components/header_admin";
import NavAdmin from "../../../components/nav_admin";
import { reRender } from "../../../utils/rerender";
const ProductsAdmin = {
  async render() {
    const { data } = await getAll();

    const truncate = (srt, n) => {
        return srt?.length > n ? srt.substr(0, n - 1) + '...' : srt;
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

      });

    return /* html */ `
    ${HeaderAdmin.render()}
    <main class="app__admin shadow-xl bg-gray-800 flex flex-col md:flex-row">
    ${NavAdmin.render()}
    <div class="admin bg-gray-800 font-sans leading-normal tracking-normal mt-12 w-full">
            <section class='basis-full'>
                <div id="main" class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
    
            <div class="bg-gray-800 pt-3">
                <div class="flex items-center justify-between rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h1 class="font-bold pl-2">Sản phẩm</h1>
                    <a href="/admin/product/add" class="btn bg-white-800 rounded border py-2 px-3.5">
                        Add
                    </a>
                </div>
            </div>
                    <div class="w-full flex flex-col">
                    <div class="">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                    STT
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                    Description
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                    Img
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                    Img model
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                                </th>
                                
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                ${data
                                  .map((item, index) => {
                                    return /*html*/ `
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-center">
                                                <div class="text-sm text-gray-500">${
                                                  index + 1
                                                }</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-500">${
                                                  item.name
                                                }</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-500">${
                                                  formatter.format(item.price)
                                                }</div>
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="text-sm text-gray-500">${
                                                    truncate(item.desc,200)
                                                }</div>
                                            </td>
                                            <td class="">
                                              <img class="h-15 w-15" src="${
                                                item.img
                                              }" alt="">
                                            </td>
                                            <td class="text-center">
                                              <img class="h-[50%] w-[50%] mx-[auto] my-[0]" src="${
                                                item.imgModel
                                              }" alt="">
                                            </td>
                                            <td scope="col" class="relative px-[10px] py-[5px]">
                                                <a class="bg-cyan-300 text-slate-100 rounded border py-2 px-3.5" href="/admin/product/${
                                                  item.id
                                                }/edit">Edit</a>
                                            </td>
                                            <td scope="col" class="relative px-[10px] py-[5px]">
                                                <button data-id=${
                                                  item.id
                                                } class="bg-red-600 text-slate-100 rounded border py-2 px-3.5" id='btn'>Delete</button>
                                            </td>
                                        </tr>
                                            `;
                                  })
                                  .join("")}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        </main>
    `;
  },

  afterRender() {
    HeaderAdmin.afterRender();

    const btns = document.querySelectorAll("#btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", async (e)  => {
        e.preventDefault();
        const confirm = window.confirm(
          "Are you sure you want to delete this ?"
        );
        let id = btn.dataset["id"];

        if (confirm) {
          await remove(id);
          reRender(ProductsAdmin, '.app__admin')
        }
      });
    });
  },
};

export default ProductsAdmin;