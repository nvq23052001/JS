import {increaseQuantity, decreaseQuantity, deleteProduct} from '../utils/cart';
import {reRender} from '../utils/rerender';
import instance from '../api/instance';

import Nav from '../components/nav';
const CartPage = {
    formatter : new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    
      }),
    render() {
        let cart = [];
        let userId = JSON.parse(localStorage.getItem('user')).id;

        if(localStorage.getItem('cart')) {
            const carts =  JSON.parse(localStorage.getItem('cart'));
            cart = carts.filter(cart=> cart.userId === userId);
            console.log(cart);
        }
        return /*html*/ `
        <div class="flex justify-center mb-[20px]">
            <a href="/">
                <img src="https://cdn.shopify.com/s/files/1/0031/1699/0564/files/logo-mobile-2x.png?22189"/>
            </a>
        </div>
        <div class="container w-[1000px] mx-[auto] my-[0]">
            <table class="w-[100%] border">
            <thead>
            <tr class="bg-[#4e4e4e]">
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
                    Total
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                    Img
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                </th>
                
            </tr>
            </thead>
            <tbody>
                ${cart.map((item, id) => /*html*/ `
                    <tr class="cart-tr">
                        <td class="text-center">${item.id+1}</td>
                        <td class="text-center">${item.name}</td>
                        <td class="text-center">${this.formatter.format(item.price)}</td>
                        <td class="text-center">${this.formatter.format(item.price * item.quantity)}</td>
                        <td>
                            <img src="${item.img}" alt="" class="w-[60%] mx-[auto]" />
                        </td>
                        <td class="text-center">
                            <div class="flex items-center">
                                <button data-id="${item.id}" class="btn btn-decrease border">-</button>
                                <input type="number" value="${item.quantity}" class="border w-[10%] h-[10%]"/>
                                <button data-id="${item.id}" class="btn btn-increase border">+</button>
                            </div>
                        </td>
                        <td>
                        <button data-id="${item.id}" data-id="${item.id}"n class="btn btn-remove border">Xóa</button>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
        <div class="flex justify-end">
            <span class="">Total price: <span>${this.formatter.format(cart.reduce((preValue, currValue)=> {
                return Number(preValue + (Number(currValue.price) * Number(currValue.quantity)));
            },0))}</span></span>
        </div>
        <div class="flex justify-end">
            <button class="border bg-[#2e2e2e] text-[white] px-[30px] py-[5px] mt-[10px]" id="pay">Pay</button>
        </div>
        </div>
        `
    },
    afterRender() {
        Nav.afterRender();

        const btns = document.querySelectorAll('.btn');
        const pay = document.querySelector('#pay');
        btns.forEach(btn=> {
            const id = btn.dataset.id;
            btn.addEventListener('click', ()=> {
                if(btn.classList.contains('btn-increase')){
                    increaseQuantity(id, ()=> reRender(CartPage, "#app"));
                } else if(btn.classList.contains('btn-decrease')){
                    decreaseQuantity(id, ()=> reRender(CartPage, "#app"));
                } else {
                    deleteProduct(id, ()=> reRender(CartPage, "#app"))
                }
            })
        });
        pay.addEventListener('click',async ()=> {
            try {
                await instance.post('/pays', ...JSON.parse(localStorage.getItem('cart')));
                console.log('thanh cong');
            } catch (error) {
                
            }
        })
    }
}

export default CartPage;