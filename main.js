fetch;

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => {
    let cardWrapper = document.querySelector("#cardWrapper");
    function showcards() {
      data.forEach((element) => {
        let div = document.createElement("div");
        div.classList.add("col-4", "p-2", "position-relative");
        div.innerHTML = `
        <div class="position-absolute card-like h-100 w-100 p-2">
                    <div
                      class="h-100 w-100 d-flex align-items-center justify-content-center text-white"
                    >
                      <i class="fs-3 fa-solid fa-heart mx-3"></i
                      ><i class="fs-3 mx-3 fa-solid fa-comment"></i>
                    </div>
                  </div>
<img loading="lazy"  class="img-fluid"
src="${element.url}"
alt="" />
`;
        cardWrapper.appendChild(div);
      });
    }
      showcards();
  });
let leftMenu= [
  {icon:"fa-house",
    text:"Home"},
    {icon:"fa-magnifying-glass",
    text:"Search"},
    {icon:"fa-compass",
    text:"Explore"},
    {icon:"fa-google-play",
    text:"Reels"},
    {icon:"fa-telegram",
    text:"Messages"},
    {icon:"fa-house",
    text:"Notifications"},
    {icon:"fa-house",
    text:"Create"},
]
