import data from "../../../data";
import HeaderAdmin from "../../../components/header_admin";
import NavAdmin from "../../../components/nav_admin";
const News = {
  render() {
    return /* html */ `
    ${HeaderAdmin.render()}
    <main class="app__admin flex flex-col md:flex-row">
    ${NavAdmin.render()}
    <div class="admin bg-gray-800 font-sans leading-normal tracking-normal mt-12 w-full">
            <section class='basis-full'>
                <div id="main" class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
    
            <div class="bg-gray-800 pt-3">
                <div class="flex items-center justify-between rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h1 class="font-bold pl-2">NEWS</h1>
                    <a href="/admin/news/add" class="btn bg-white-800 rounded border py-2 px-3.5">
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
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    STT
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Img
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                                </th>
                                
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                ${data
                                  .map((item) => {
                                    return `
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-500">${item.id}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-500">${item.title}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-500">${item.description}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                            <img class="h-10 w-10 rounded-full" src="${item.img}" alt="">
                                            </td>
                                            <td scope="col" class="relative px-6 py-3">
                                                <a class=" rounded border py-2 px-3.5" href="/admin/news/${item.id}/edit">Edit</a>
                                            </td>
                                            <td scope="col" class="relative px-6 py-3">
                                                <a class=" rounded border py-2 px-3.5"  href="">Delete</a>
                                            </td>
                                        </tr>
                                            `;
                                  })
                                  .join()}
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
};

export default News;
