import axios from "axios";
import Nav from "../components/nav";
import Footer from '../components/footer';

import instance from '../api/instance';
import data from "../data";
const Profile = {
    async render() {
        let userId = JSON.parse(localStorage.getItem('user')).id;

      const {data} = await instance.get(`users/${userId}?_embed=pays`);
      
      const {data: pay} = await instance.get(`pays`);
      
      let payFilter = pay.filter(a=> {
        return a.userId === userId
    })
    let payProduct = payFilter.map(b=> {
        return b.products
    })

      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

      });

    return /* html */ `
        <div class="min-h-[100vh] bg-[#fafafa]"> 
            <div id="header">
                ${Nav.render()}
            </div>
            <div class="container w-[1200px] mx-[auto] my-[0]">
              <section class="profile mt-[10rem]">
                <div class="info">
                    <h3 class="info_h3 font-semibold text-[16px] tracking-[2px] ">ACCOUNT DETAIL</h3>
                    <p class='user-detail italic text-[#424242] font-thin'>${data.username}</p>
                    <p class='user-detail italic text-[#424242] font-thin'>${data.email}</p>
                </div>
                <div class="">
                    <div class="">
                        <p class="you text-[60px] font-thin">Your Order</p>
                        ${data.pays.length > 0 ? `<table class='w-[100%]'>
                        <thead class="bg-gray-50">
                            <tr>
                            <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                
                            </th>
                            <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                               
                            </th>
                            <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                
                            </th>
                            <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                
                            </th>
                        </thead>
                        <tbody class="you__list bg-white ">
                            ${payProduct.map(products=> {
                                return products.map(product=> {
                                   return `
                                   <tr>
                                   <td class="ml-[20px]">
                                       <div class="you-box w-[6rem] h-[6rem] rounded-[8px] relative">
                                           <div class="you-wrapper w-[100%] h-[100%] overflow-hidden rounded-[8px] relative">
                                               <img src="${product.img}" alt="" />
                                           </div>
                                           <span class='you-quantity inline-block w-[20px] h-[20px] text-center absolute top-[-10%] right-[-10%] bg-[#757373e6] rounded-[50%]'>${product.quantity}</span>
                                       </div>
                                       
                                   </td>
                                   <th>
                                       <p class="you-name text-[12px]">${product.date}</p>
                                       
                                   </th>
                                   <th>
                                       <p className="you-name">${product.name}</p>
                                       
                                   </th>
                                   <th>
                                       <p className="you-name">${formatter.format(product.price)}</p>
                                       
                                   </th>
                               </tr>
                                   `
                                }).join('');
                            })}
                        </tbody>
                    </table>` : `<p class='ml-[30px] text-[#868181]'>You haven't placed any orders yet.</p>`}
                    </div>   
                </div>
                
              </section>
            </div>
        </div>
        ${Footer.render()}

        `;
  },
  afterRender() {
    Nav.afterRender();
  },
};

export default Profile;
