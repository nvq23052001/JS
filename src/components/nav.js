import { listMenu } from "../data";
import { reRender } from "../utils/rerender";

const Nav = {
  render() {
    return /*html*/ `
    <header class="header">
      <div class="header__title bg-black flex items-center justify-center  h-[41px]">
        <p class='text-white font-semibold'>Free shipping order over $100 in the us</p>
      </div>
      <nav class="nav sticky top-0">
      <ul class="header__list transition-all h-[70px] bg-white flex items-center justify-center sticky top-0">
        <li class="header__item mx-[30px]">
          <a href="" class="header__link uppercase">
            Shop
          </a>
        </li>
        <li class="header__item mx-[30px]">
          <a href="" class="header__link uppercase">
            Hat repair 
          </a>
        </li>
        <li class="header__item mx-[30px]">
          <a href="" class="header__link uppercase">
            Custom 
          </a>
        </li>
          <a href="" class="header__link mx-[30px]">
            <img src="../../img/logo-small.png" alt="" class="header__img w-[60px] h-[46px] object-cover " />
          </a>
        <li class="header__item mx-[30px] uppercase">
          <a href="" class="header__link">
            W&W Culture
          </a>
        </li>
        <li class="header__item mx-[30px] uppercase">
          <a href="" class="header__link">
            Underneath my hat
          </a>
        </li>
      </ul>

      <div class="info px-[1rem] flex items-center absolute right-0 top-[50%] translate-y-[-50%] text-xs">
        ${
          localStorage.getItem("user")
            ? `<p class="info__name px-[1rem] hover:translate-x-[5px] transition-all duration-300" id='user-name'>Welcome quyet!</p>
        <p class="info__logout px-[1rem] hover:translate-x-[5px] transition-all duration-300 cursor-pointer" id='logout'>Logout</p>
        <a href="" class="cart">
          <i class="fa-solid fa-cart-arrow-down"></i>
        </a>`
            : `<a href="/signin" class="px-[1rem] hover:translate-x-[5px] transition-all duration-300 cursor-pointer">Login</a>
        <a href="signup" class="px-[1rem] hover:translate-x-[5px] transition-all duration-300 cursor-pointer">Register</a>`
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
        reRender(Nav, ".nav");
      });
    }
  },
};

export default Nav;
