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
      </nav>`;
  },
};

export default Nav;
