const card = document.querySelectorAll(".cards");
let cardElement = [];
let number = 129;
for (let i = 0; i < 6; i++) {
  cardElement[i] = document.createElement("div");
  cardElement[i].classList.add("col");
  cardElement[i].innerHTML = `
  <div class="card rounded-5">
    <img
      src="assets/img/3/asset ${number}.jpeg"
      class="card-img-top square-img"
      alt="Card image 1"
      style="border-radius: 30px;" />
    <div class="card-body">
      <p class="card-title">
        <span class="fa fa-star checked" style="color: #c78149"></span>
        4.8|126
      </p>
      <h6 class="card-text" style="color: #0a3f27">
        Lucky jade plant <br />
        $499
        <span
          style="color: #6c6c6c; text-decoration: line-through">699</span>
      </h6>
      <a
        href="#"
        class=" "
        style="
      color: rgb(249, 240, 227);
      display: flex;
      flex-direction: row-reverse;
      gap: 10px;
      justify-content: center;
      align-items: center;
      padding: 10px 10px;
      border-radius: 25px;
      background: #1c6644;
      border: 1px solid #39433e;
      text-decoration: none;
    ">
        ADD TO BASKET</a>
    </div>
  </div>
`;
  number++;
  card.forEach((cardParent) => {
    cardParent.append(cardElement[i].cloneNode(true));
  });
}
