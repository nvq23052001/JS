import { listMenu } from "../data";
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
        <a href="/sign-up" class="nav__link text-white px-4 py-2">Sign up</a>
        <a href="/sign-in" class="nav__link text-white px-4 py-2">Sign in</a>
        <a href="/admin/dashboard" class="nav__link text-white px-4 py-2">Admin</a>
        </div>
      </nav>`;
  },
};

export default Nav;
