fetch;
let scores={
}


fetch("https://api.unsplash.com/photos/?client_id=ae9880ce2c3b759e0c6331b469c14601b50b0e60a59c00441ad86cb66067e3ed&per_page=40&page=1")
  .then((response) => response.json())
  .then((data) => {



    console.log(data);
    // Selecting the Card Wrapper
    let cardWrapper = document.querySelector("#cardWrapper");
    // Function that call imgs from my file Json and attack a card for each of them.
    function showcards() {
      data.forEach((element) => {
        let div = document.createElement("div");
        scores[element.id]=0;
        div.classList.add("position-relative","img-box");
        div.innerHTML = `
        <div class="position-absolute z-21   card-like h-100 w-100 p-2" data-id="${element.id}">
                    <div
                      class="h-100 w-100 d-flex align-items-center justify-content-center text-white"
                    >
                      <i class="fs-3 fa-solid fa-heart mx-3"></i
                      > <span class="jsScore" >${scores[element.id]}</span><i class="fs-3 mx-3 fa-solid fa-comment"></i>
                    </div>
                  </div>
<img loading="lazy"  class="img-fluid"
src="${element.urls.thumb}"
alt="" />
`;
        cardWrapper.appendChild(div);
        let divScore= document.querySelector(`div[data-id="${element.id}"]`)
        let jsScore=divScore.querySelector(`.jsScore`)
        divScore.addEventListener("click",()=>{
            scores[element.id]+=1;
            console.log(scores);
            jsScore.innerHTML=`${scores[element.id]}`
         
        })
      });
    }
        showcards();

// Array that contain my Left list icons/images and text
  let leftMenuArray= [
  {icon:"fa-solid fa-house",
    text:"Home",
    img: "",
  },
    {icon:"fa-solid fa-magnifying-glass ",
    text:"Search",
    img:"",
  },
    {icon:"fa-regular fa-compass",
    text:"Explore",
    img:"",
  },
    {icon:"fa-brands fa-google-play",
    text:"Reels",
    img:"",
  },
    {icon:"fa-brands fa-telegram ",
    text:"Messages",
    img:"",
  },
    {icon:"fa-regular fa-heart",
    text:"Notifications",
    img:"",
  },
    {icon:"fa-regular fa-square-plus",
    text:"Create",
    img:"",
  },
  {icon:"",
    text:"Profile",
    img:"https://scontent.faoi2-2.fna.fbcdn.net/v/t1.18169-9/17951901_10212674090037079_8213872199446887612_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Px2FvxjDslkAX-OvO4F&_nc_ht=scontent.faoi2-2.fna&oh=00_AfDP5qxGther6s9-LDPa9skdRvHnod2DIc41Y8AYdTYewQ&oe=64382625",
  },
  ]
  // Selecting my LeftMenu UL
  let listLeftMenu=document.querySelector("#listLeftMenu")
//Function that add a custom Line to my UL for each voice in my array - they change elements if my element contains image instead of icons
  function leftMenuCreator(){
    leftMenuArray.forEach((element)=>{

        let li= document.createElement("li")
        li.classList.add("p-3")
        if(element.icon!=""){
        li.innerHTML=`
        <div class="d-flex align-items-center">
        <i class=" ${element.icon}  fa-solid fs-4"></i>
        <p class="mb-0 ms-3 fs-6 fw-normal d-md-inline d-none ">${element.text}</p>
        </div> `
      }else{
        li.innerHTML=`
        <div class="d-flex align-items-start img-leftMenu-container">
           <img
            class="img-fluid rounded-5 border-black"
           src="${element.img}"
            alt=""
           />
          <p class="mb-0 ms-3 fs-6 fw-bold d-md-inline d-none ">${element.text}</p>
         </div>   
        `
      }
      listLeftMenu.appendChild(li);
     
    })
  } 
  leftMenuCreator(); 
});
