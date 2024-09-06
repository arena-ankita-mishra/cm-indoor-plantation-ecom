const generateCard = [
  {
    img: "new image/asset 16.jpeg",
    title: "Snake Plant - Golden Hahnii",
    rating: 4.8,
    price: 499,
    oldPrice: 699,
  },
  {
    img: "new image/asset 21.jpeg",
    title: "Broken Heart Plant",
    rating: 4.3,
    price: 345,
    oldPrice: 400,
  },
  {
    img: "new image/asset 29.jpeg",
    title: "Money Plant Variegated",
    rating: 4.6,
    price: 350,
    oldPrice: 420,
  },
  {
    img: "new image/asset 30.jpeg",
    title: "Money Tree",
    rating: 4.2,
    price: 300,
    oldPrice: 350,
  },
  {
    img: "new image/asset 34.jpeg",
    title: "Variegated Jade Mini Plant",
    rating: 4.8,
    price: 400,
    oldPrice: 450,
  },
  {
    img: "new image/asset 15.jpeg",
    title: "Anthurium Red Plant",
    rating: 4.9,
    price: 450,
    oldPrice: 600,
  },
  {
    img: "new image/asset 22.jpeg",
    title: "Ficus Bonsai Plant",
    rating: 4.8,
    price: 500,
    oldPrice: 699,
  },
  {
    img: "new image/asset 23.jpeg",
    title: "Syngonium Pink Plant",
    rating: 4.8,
    price: 499,
    oldPrice: 699,
  }, // ... (rest of the cards)
  {
    img: "new image/asset 16.jpeg",
    title: "Snake Plant - Golden Hahnii",
    rating: 4.8,
    price: 499,
    oldPrice: 699,
  },
  {
    img: "new image/asset 21.jpeg",
    title: "Broken Heart Plant",
    rating: 4.3,
    price: 345,
    oldPrice: 400,
  },
  {
    img: "new image/asset 29.jpeg",
    title: "Money Plant Variegated",
    rating: 4.6,
    price: 350,
    oldPrice: 420,
  },
  {
    img: "new image/asset 30.jpeg",
    title: "Money Tree",
    rating: 4.2,
    price: 300,
    oldPrice: 350,
  },
  {
    img: "new image/asset 34.jpeg",
    title: "Variegated Jade Mini Plant",
    rating: 4.8,
    price: 400,
    oldPrice: 450,
  },
  {
    img: "new image/asset 15.jpeg",
    title: "Anthurium Red Plant",
    rating: 4.9,
    price: 450,
    oldPrice: 600,
  },
  {
    img: "new image/asset 22.jpeg",
    title: "Ficus Bonsai Plant",
    rating: 4.8,
    price: 500,
    oldPrice: 699,
  },
  {
    img: "new image/asset 23.jpeg",
    title: "Syngonium Pink Plant",
    rating: 4.8,
    price: 499,
    oldPrice: 699,
  }, // ... (rest of the cards)
];
function generateCards(cards) {
  return cards

    .map((card) => {
      return `
        <div class="col">
          <div class="card rounded-5">
            <img
              src="${card.img}"
              class="card-img-top"
              alt="Card image 1"
              style="border-radius: 30px" />
            <div class="card-body">
              <p class="card-title">
                <span class="fa fa-star checked" style="color: #c78149"></span>
                ${card.rating}|126
              </p>
              <h6 class="card-text" style="color: #0a3f27">
                ${card.title} <br />
                $${card.price}
               <span
                  style="color: #6c6c6c; text-decoration: line-through">$${card.oldPrice}</span>
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

        </div>

      `;
    })

    .join("");
}

const cardContainers = document.querySelectorAll(".card-container");
generateCard.forEach((card, index) => {
  const cardHTML = generateCards([card]); // generate HTML for each card
  cardContainers[index].innerHTML = cardHTML; // append to the corresponding container
});
