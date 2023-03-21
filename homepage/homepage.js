// Array that contain my Left list icons/images and text
let leftMenuArray = [
  {
    link: "./homepage/homepage.html",
    icon: "fa-solid fa-house",
    text: "Home",
    img: "",
  },
  {
    link: "",
    icon: "fa-solid fa-magnifying-glass",
    text: "Search",
    img: "",
  },
  { link: "", icon: "fa-regular fa-compass", text: "Explore", img: "" },
  { link: "", icon: "fa-brands fa-google-play", text: "Reels", img: "" },
  { link: "", icon: "fa-brands fa-telegram", text: "Messages", img: "" },
  { link: "", icon: "fa-regular fa-heart", text: "Notifications", img: "" },
  { link: "", icon: "fa-regular fa-square-plus", text: "Create", img: "" },
  {
    link: "",
    icon: "fa-solid fa-store",
    text: "MarketPlace",
    img: "",
  },
  {
    link: "",
    icon: "",
    text: "Profile",
    img: "https://scontent.faoi2-2.fna.fbcdn.net/v/t1.18169-9/17951901_10212674090037079_8213872199446887612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Px2FvxjDslkAX-OvO4F&_nc_ht=scontent.faoi2-2.fna&oh=00_AfDP5qxGther6s9-LDPa9skdRvHnod2DIc41Y8AYdTYewQ&oe=64382625",
  },
];
// Array that contain my Top list images and names

let topMenuArray = [
  {
    link: "",
    name: "Dmijail",
    img: "https://scontent.faoi2-2.fna.fbcdn.net/v/t1.18169-9/17951901_10212674090037079_8213872199446887612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Px2FvxjDslkAX-OvO4F&_nc_ht=scontent.faoi2-2.fna&oh=00_AfDP5qxGther6s9-LDPa9skdRvHnod2DIc41Y8AYdTYewQ&oe=64382625",
  },
  {
    link: "",
    name: "Valentina",
    img: "https://scontent-mxp2-1.xx.fbcdn.net/v/t31.18172-8/14889892_10207569373449473_2164934244278341166_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=hHpRfstAWNgAX9vkL6J&_nc_ht=scontent-mxp2-1.xx&oh=00_AfBta_NK_sdsxi52iSlKb5Dvu9rP_JOQuiSG33LmJYdb3A&oe=64403E11",
  },
  {
    link: "",
    name: "Dmijail",
    img: "https://scontent-mxp2-1.xx.fbcdn.net/v/t1.6435-9/40523311_10212571687264192_1392724084386693120_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=_W17EGIDSzwAX-USMFU&_nc_ht=scontent-mxp2-1.xx&oh=00_AfAd1TVJCl82u5tZXr3AmwaRO568ZJ4RCE_yhD1vyd8Qyw&oe=64402F84",
  },
  {
    link: "",
    name: "Dmijail",
    img: "https://scontent.faoi2-2.fna.fbcdn.net/v/t1.18169-9/17951901_10212674090037079_8213872199446887612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Px2FvxjDslkAX-OvO4F&_nc_ht=scontent.faoi2-2.fna&oh=00_AfDP5qxGther6s9-LDPa9skdRvHnod2DIc41Y8AYdTYewQ&oe=64382625",
  },
  {
    link: "",
    name: "Dmijail",
    img: "https://scontent.faoi2-2.fna.fbcdn.net/v/t1.18169-9/17951901_10212674090037079_8213872199446887612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Px2FvxjDslkAX-OvO4F&_nc_ht=scontent.faoi2-2.fna&oh=00_AfDP5qxGther6s9-LDPa9skdRvHnod2DIc41Y8AYdTYewQ&oe=64382625",
  },
  {
    link: "",
    name: "Dmijail",
    img: "https://scontent.faoi2-2.fna.fbcdn.net/v/t1.18169-9/17951901_10212674090037079_8213872199446887612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Px2FvxjDslkAX-OvO4F&_nc_ht=scontent.faoi2-2.fna&oh=00_AfDP5qxGther6s9-LDPa9skdRvHnod2DIc41Y8AYdTYewQ&oe=64382625",
  },
  {
    link: "",
    name: "Dmijail",
    img: "https://scontent.faoi2-2.fna.fbcdn.net/v/t1.18169-9/17951901_10212674090037079_8213872199446887612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Px2FvxjDslkAX-OvO4F&_nc_ht=scontent.faoi2-2.fna&oh=00_AfDP5qxGther6s9-LDPa9skdRvHnod2DIc41Y8AYdTYewQ&oe=64382625",
  },
  {
    link: "",
    name: "Dmijail",
    img: "https://scontent.faoi2-2.fna.fbcdn.net/v/t1.18169-9/17951901_10212674090037079_8213872199446887612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Px2FvxjDslkAX-OvO4F&_nc_ht=scontent.faoi2-2.fna&oh=00_AfDP5qxGther6s9-LDPa9skdRvHnod2DIc41Y8AYdTYewQ&oe=64382625",
  },
];

// Selecting my LeftMenu UL wrapper
let listLeftMenu = document.querySelector("#listLeftMenu");
//Selecting my Stories Top List wrapper
let storiesList = document.querySelector("#storiesList");
//Function that add a custom Line to my UL for each voice in my array - they change elements if my element contains image instead of icons
function leftMenuCreator() {
  leftMenuArray.forEach((element) => {
    let li = document.createElement("li");
    li.classList.add("px-2", "py-3");
    if (element.icon != "") {
      li.innerHTML = `
    <div class="d-flex align-items-center">
    <a href="${element.link}" class="a-custom-style">
    <i class=" ${element.icon}  fa-solid fs-4"></i>
    <p class="mb-0 ms-2 fs-6 fw-normal d-md-inline d-none ">${element.text}</p>
    </div> `;
    } else {
      li.innerHTML = `
    <div class="d-flex align-items-start img-leftMenu-container">
       <img
        class="img-fluid rounded-5 border-black"
        src="${element.img}"
       />
      <p class="mb-0 ms-3 fs-6 fw-bold d-md-inline d-none ">${element.text}</p>
      </a>
     </div>   
    `;
    }
    listLeftMenu.appendChild(li);
  });
}
leftMenuCreator();

function topMenuCreator() {
  topMenuArray.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add("d-flex", "flex-column");
    div.innerHTML = `
    <div class="mx-2">
        <div class="rounded-circle stories-list">
            <img class="img-stories-list rounded-circle img-fluid"
             src="${element.img}"alt="" />
        </div>
        <div class="text-stories-list">
           <p>${element.name}</p>
        </div>
    </div>
    `;
    storiesList.appendChild(div);
  });
}
topMenuCreator();
