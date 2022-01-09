import data from "../data";

const HomePage = {
  print() {
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
          <img src="${item.img}" alt="" class="news__item-img">
          <h3 class="heading-3 text-lg text-orange-600">
            ${item.title}
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
      <h2 class="heading-2 text-xl py-5">Tin tức học tập</h2>
      <div class="news__des grid grid-cols-3 gap-8">
        <div class="news__item p-2 border border-gray-400">
          <img src="./img/hotel-1.jpg" alt="" class="news__item-img">
          <h3 class="heading-3 text-lg text-orange-600">
            Vinh danh 295 Fpoly học kỳ Spring 2018
          </h3>
          <p class="news__item-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum doloremque
            veritatis magnam omnis, facere rem labore assumenda praesentium mollitia ipsa nam voluptates recusandae,
          </p>
        </div>
        <div class="news__item p-2 border border-gray-400">
          <img src="./img/hotel-1.jpg" alt="" class="news__item-img">
          <h3 class="heading-3 text-lg text-orange-600">
            Vinh danh 295 Fpoly học kỳ Spring 2018
          </h3>
          <p class="news__item-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum doloremque
            veritatis magnam omnis, facere rem labore assumenda praesentium mollitia ipsa nam voluptates recusandae,
          </p>
        </div>
        <div class="news__item p-2 border border-gray-400">
          <img src="./img/hotel-1.jpg" alt="" class="news__item-img">
          <h3 class="heading-3 text-lg text-orange-600">
            Vinh danh 295 Fpoly học kỳ Spring 2018
          </h3>
          <p class="news__item-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum doloremque
            veritatis magnam omnis, facere rem labore assumenda praesentium mollitia ipsa nam voluptates recusandae,
          </p>
        </div>
      </div>
    </div>
  </div>
    `;
  },
};

export default HomePage;
