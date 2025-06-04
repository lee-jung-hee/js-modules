let button = document.querySelectorAll("button");

for (const item of button) {
  item.addEventListener("click", function (e) {
    let tagName = item.id;
    let makeElement = document.createElement(tagName);
    document.querySelector("body").append(makeElement);
  });
}
