import data from "../../../data";
import HeaderAdmin from "../../../components/header_admin";
import NavAdmin from "../../../components/nav_admin";

const EditNew = {
  render(id) {
    const newFind = data.find((item) => item.id === id);
    console.log(newFind);
    console.log(newFind.title);
    return /* html */ `
            ${HeaderAdmin.render()}
            <main class="app__admin flex flex-col md:flex-row">
            ${NavAdmin.render()}
            <div class='bg-gray-800 font-sans leading-normal tracking-normal mt-12 w-full'>
              <div>
                  <div class="bg-gray-800 pt-3">
                      <div class="flex justify-between rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                          <h1 class="font-bold pl-2">Edit New</h1>
                      </div>
                  </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-6">
              <div class="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-3 gap-6">
                          <div class="col-span-3 sm:col-span-2">
                          <label for="title" class="block text-sm font-medium text-gray-700">
                              Title
                          </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                              <input value='${
                                newFind.title
                              }' type="text" name="title" id="title" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Title">
                          </div>
                          </div>
                      </div>
          
                      <div>
                          <label for="description" class="block text-sm font-medium text-gray-700">
                          Description
                          </label>
                          <div class="mt-1">
                          <textarea id="description" name="description" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Description">${
                            newFind.description
                          }</textarea>
                          </div>
                      </div>
          
                      <div>
                          <label class="block text-sm font-medium text-gray-700">
                          Cover photo
                          </label>
                          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div class="space-y-1 text-center">
                              <div class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <img src="${newFind.img}" alt="" />
                              </div>
                              <div class="flex text-sm text-gray-600">
                                  <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                      <span>Change a file</span>
                                      <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                  </label>
                                  <p class="pl-1">or drag and drop</p>
                              </div>
                              <p class="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                              </p>
                          </div>
                          </div>
                      </div>
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Save
                      </button>
                      </div>
                  </div>
                  </form>
              </div>
              </div>
          </div>
        </div>
        </div>
        </main>
          `;
  },
};
export default EditNew;