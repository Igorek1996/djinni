function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("blog");
const quantity = document.getElementById("quantity");
const url = "https://picsum.photos/v2/list?page=1&limit=9";

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let results = data;
    quantity.innerHTML = results.length;

    results.map(function (result) {
      let li = document.createElement("div");
      li.classList.add("col-md-6", "col-sm-12", "mb-4");
      let card = document.createElement("div");
      card.classList.add("blog__card", "js-blog__card", "card", "h-100");
      let img = document.createElement("img");
      img.classList.add("blog__card-img", "js-blog__card-img", "card-img-top");
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      let title = document.createElement("h5");
      title.classList.add("card-title");
      let info = document.createElement("div");
      info.classList.add("blog__card-info", "js-blog__card-info", "my-2");
      let text = document.createElement("p");
      text.classList.add("blog__card-text", "js-blog__card-text");
      let readmore = document.createElement("a");
      readmore.classList.add("blog__card-more", "js-blog__card-more");
      let footer = document.createElement("div");
      footer.classList.add(
        "blog__card-footer",
        "card-footer",
        "p-3",
        "d-flex",
        "bg-transparent"
      );
      let save = document.createElement("button");
      save.classList.add("btn", "btn-primary");
      let share = document.createElement("button");
      share.classList.add("btn", "btn-outline-secondary");
      img.src = result.download_url;
      img.alt = result.download_url;
      readmore.innerHTML = "Show more...";
      title.innerHTML = `${result.id}. ${result.author}`;
      text.innerHTML =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      save.innerHTML = "Save to collection";
      share.innerHTML = "Share";
      append(footer, save);
      append(footer, share);
      append(card, img);
      append(info, text);
      append(cardBody, title);
      append(cardBody, info);
      append(cardBody, readmore);
      append(card, cardBody);
      append(card, footer);
      append(li, card);
      append(ul, li);

      return results;
    });

    readMore();
  })
  .catch(function (error) {
    console.log(error);
  });

function readMore() {
  const cards = document.querySelectorAll(".js-blog__card");
  const lines = 2;
  cards.forEach((card) => {
    const info = card.querySelector(".js-blog__card-info");
    const text = card.querySelector(".js-blog__card-text");
    const readMoreBtn = card.querySelector(".js-blog__card-more");

    const lineHeight = parseInt(
      window.getComputedStyle(text).getPropertyValue("line-height")
    );
    const height = lines * lineHeight;
    info.style.maxHeight = `${height}px`;
    if (text.clientHeight <= height) {
      readMoreBtn.style.display = "none";
    }
    readMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      info.style.maxHeight = "none";
      readMoreBtn.style.display = "none";
    });
  });
}
