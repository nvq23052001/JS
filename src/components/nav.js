import { listMenu } from "../data";
import { reRender } from "../utils/rerender";
const Nav = {
  render() {
    return ` <nav class="nav flex justify-between bg-orange-500 items-center">
        <ul class="nav__list ml-5 flex text-white py-3">
          ${listMenu
            .map((item) => {
              return ` <li class="nav__item px-5"><a href="${item.href}">${item.name}</a></li>`;
            })
            .join("")}
        </ul>
        <form action="" class="nav__form mr-5 text-white">
          <input type="text" class="nav__ip">
          <button class="nav__btn border bg-slate-400">Tìm kiếm</button>
        </form>
        <div class="nav__navigation">
        ${
          !JSON.parse(localStorage.getItem("user"))
            ? `<a href="/signup" class="nav__link text-white px-4 py-2">Sign up</a>
        <a href="/signin" class="nav__link text-white px-4 py-2">Sign in</a>`
            : `<div class="nav__link text-white px-4 py-2" id='user-name'>quyetnv</div>
        <button href="/admin/dashboard" id='logout' class="nav__link text-white px-4 py-2">Logout</button>`
        }
          
          
        </div>
      </nav>`;
  },
  afterRender() {
    const userName = document.querySelector("#user-name");
    const logout = document.querySelector("#logout");
    if (userName) {
      userName.innerHTML = JSON.parse(localStorage.getItem("user")).username;
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
