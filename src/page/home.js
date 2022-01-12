import data, { act } from "../data";
const HomePage = {
  render() {
    return `
    <div class="banner ">
        <img src="./img/nat-10.jpg" alt="" class="banner__img h-80 w-full object-cover mt-3">
    </div>

    <div class="news">
      <h2 class="heading-2 text-xl py-5">Tin tức học tập</h2>
      <div class="news__des grid grid-cols-3 gap-8">
        ${data
          .map((item) => {
            return `<div class="news__item p-2 border border-gray-400">
          <a href='/news/${item.id}'>
            <img src="${item.img}" alt="" class="news__item-img">
          </a>
          <h3 class="heading-3 text-lg text-orange-600">
            <a href='/news/${item.id}'>
            ${item.title}
            </a>
          </h3>
          <p class="news__item-p">
          ${item.description}
          </p>
        </div>`;
          })
          .join("")}
      </div>
    </div>
    <div class="news">
      <h2 class="heading-2 text-xl py-5">Hoạt động sinh viên</h2>
      <div class="news__des grid grid-cols-3 gap-8">
      ${act
        .map((item) => {
          return `<div class="news__item p-2 border border-gray-400">
        <a href='/news/${item.id}'>
          <img src="${item.img}" alt="" class="news__item-img">
        </a>
        <h3 class="heading-3 text-lg text-orange-600">
          <a href='/news/${item.id}'>
          ${item.title}
          </a>
        </h3>
        <p class="news__item-p">
        ${item.description}
        </p>
      </div>`;
        })
        .join("")}
      </div>
    </div>
  </div>
    `;
  },
};

export default HomePage;
