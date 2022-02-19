import data from "../../data";
import HeaderAdmin from "../../components/header_admin";
import NavAdmin from "../../components/nav_admin";
const Dashboard = {
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
                    <h1 class="font-bold pl-2">Dashboard</h1>
                </div>
            </div>
                    <div class="w-full flex flex-col">
                    <div class="">
                        Dashboard
                    </div>
                    </div>
                </div>
            </section>
        </div>
        </main>
    `;
  },
  afterRender: function() {
    HeaderAdmin.afterRender();
  }
};

export default Dashboard;
