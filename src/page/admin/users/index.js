import { getAll, remove } from "../../../api/post";
import instance from '../../../api/instance';
import HeaderAdmin from "../../../components/header_admin";
import NavAdmin from "../../../components/nav_admin";
const USersAdmin = {
  async render() {
    const { data } = await instance.get('/users');
    console.log(data);
    return /* html */ `
    ${HeaderAdmin.render()}
    <main class="app__admin shadow-xl bg-gray-800 flex flex-col md:flex-row">
    ${NavAdmin.render()}
    <div class="admin bg-gray-800 font-sans leading-normal tracking-normal mt-12 w-full">
            <section class='basis-full'>
                <div id="main" class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
    
            <div class="bg-gray-800 pt-3">
                <div class="flex items-center justify-between rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h1 class="font-bold pl-2">USERS</h1>
                </div>
            </div>
                    <div class="w-full flex flex-col">
                    <div class="">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    STT
                                </th>
                                <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    name
                                </th>
                                <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Competence
                                </th>
                                <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                ${data
                                  .map((item, index) => {
                                    return `
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-center border">
                                                <div class="text-sm text-gray-500">${index+1}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-center border">
                                                <div class="text-sm text-gray-500">${item.username}</div>
                                            </td>
                                            <td class="px-6 py-4 text-center border">
                                                <div class="text-sm text-gray-500">${item.email}</div>
                                            </td>
                                            <td class="px-6 py-4 text-center border">
                                                <span class="inline-block text-sm text-gray-500 border rounded-full p-[5px] bg-orange-300">${item.id ===1 ? "ADMIN" : 'MEMBER'}</span>
                                            </td>
                                            <td scope="col" class="relative text-center px-6 py-3">
                                                <a class="bg-cyan-300 text-slate-100 rounded border py-2 px-3.5" href="/admin/news//edit">Edit</a>
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
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const confirm = window.confirm(
          "Are you sure you want to delete this ?"
        );
        let id = btn.dataset["id"];

        if (confirm) {
          remove(id);
        }
      });
    });
  },
};

export default USersAdmin;
