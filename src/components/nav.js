import { listMenu } from "../data";
import { reRender } from "../utils/rerender";

const Nav = {
  render() {

    return /*html*/ `
    <header class="header">
      <div class="header__title bg-black flex items-center justify-center  h-[41px]">
        <p class='text-white font-semibold'>Free shipping order over $100 in the us</p>
      </div>
      <form action="#" method="" class='search border un-exist relative'>
        <input type="text" class="search__ip w-[100%] px-[15px] py-[20px] text-center" placeholder="Where are you looking for?"/>
        <span class="close cursor-pointer absolute top-[50%] translate-y-[-50%] right-[20px]">X</span>
      </form>
      <nav class="nav sticky top-0">
      <ul class="header__list transition-all h-[70px] bg-white flex items-center justify-center sticky top-0">
        <li class="header__item mx-[30px]">
          <a href="/#/products/3" class="header__link uppercase">
            Shop
          </a>
        </li>
        <li class="header__item mx-[30px]">
          <a href="/#/products/1" class="header__link uppercase">
            Shop women's
          </a>
        </li>
          <a href="/" class="header__link mx-[30px]">
            <img src="../../img/logo-small.png" alt="" class="header__img w-[60px] h-[46px] object-cover " />
          </a>
        <li class="header__item mx-[30px] uppercase">
          <a href="/#/products/2" class="header__link">
              Shop Men's
          </a>
        </li>
        <li class="header__item mx-[30px] uppercase">
          <a href="" class="header__link">
          W&W Culture
          </a>
        </li>
      </ul>

      <div class="info px-[1rem] flex items-center absolute right-0 top-[50%] translate-y-[-50%] text-xs">
        ${
          localStorage.getItem("user")
            ? `<a href="/#/profile"><p class="info__name px-[1rem] hover:translate-x-[5px] transition-all duration-300" id='user-name'>!</p></a>
        <p class="info__logout px-[1rem] hover:translate-x-[5px] transition-all duration-300 cursor-pointer" id='logout'>Logout</p>
        <a href="/#/cart" class="cart p-[10px] relative">
          <i class="fa-solid fa-cart-arrow-down text-[16px]"></i>
          <span class='quantity'>${JSON.parse(localStorage.getItem('cart'))?.length || 0}</span>
        </a>
        <i class="search-icon fa-solid fa-magnifying-glass text-[16px] px-[10px] cursor-pointer"></i>
        `
            : `<a href="/signin" class="px-[1rem] hover:translate-x-[5px] transition-all duration-300 cursor-pointer">Login</a>
        <a href="signup" class="px-[1rem] hover:translate-x-[5px] transition-all duration-300 cursor-pointer">Register</a>
        <i class="search-icon fa-solid fa-magnifying-glass text-[16px] px-[10px] cursor-pointer"></i> 
        `
        }
          
      </div>
      </nav>
      
      
    </header>
    `;
  },
  afterRender() {
    const user = document.querySelector("#user-name");
    const logout = document.querySelector("#logout");
    if (user) {
      user.innerHTML = `Wellcome ${
        JSON.parse(localStorage.getItem("user")).username
      }`;
    }
    if (logout) {
      logout.addEventListener("click", () => {
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        reRender(Nav, ".header");
      });
    }
    const iconSearch = document.querySelector('.search-icon');
    const search = document.querySelector('.search');
    const close = document.querySelector('.close');
    const searchBtn = document.querySelector('.search__ip');  
    search.addEventListener('submit', (e)=> {
      e.preventDefault();
      document.location.href=`/#/search/${searchBtn.value}`;
    })

    iconSearch.addEventListener("click", () => {
      search.classList.toggle('un-exist');
    })

    close.addEventListener("click", () => {
      search.classList.toggle('un-exist');
    })
  },

  
};

export default Nav;
