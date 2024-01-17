let cardsToShow = [];

const gridDiv$$ = document.querySelector('[data-function="grid"]');
const main$$ = document.querySelector("main");
const body$$ = document.querySelector("body");

// ----------------Booleans----------------//
const isloged = true;
const isAdmin = true;
const isEndGame = true;

// ----------------Booleans----------------//

//-----------------Pages-----------------//

let page = 1;
let collectionPage = 1;
//-----------------Pages-----------------//

//create an array cardsPicked to save the cards picked
let cardsPicked = [];
let cardsMatched = [];

//create a count for the attemps
let count = 0;
let score = 0;
// this variables are for the chronometer and endGame
let minutos = 0;
let segundos = 0;
//-------------------------chronometer-------------------------//
let intervalId;
let chronoDiv$$ = document.querySelector('[data-function="chronometer"]');
//-------------------------chronometer-------------------------//

//------------------------- navbar-------------------------//
const divCount2$$ = document.querySelector('[data-function="score"]');

const navbarHtml = () => {
  body$$.innerHTML = `    <div id="background-wrap">
  <div class="bubble x1"></div>
  <div class="bubble x2"></div>
  <div class="bubble x3"></div>
  <div class="bubble x4"></div>
  <div class="bubble x5"></div>
  <div class="bubble x6"></div>
  <div class="bubble x7"></div>
  <div class="bubble x8"></div>
  <div class="bubble x9"></div>
  <div class="bubble x10"></div>
</div>
  <div id="loading-screen">
    <div class="loading-spinner"></div>
    <p>Loading...</p>
</div>
  <nav class="navbar bg-gradient fixed-top" >
  <div class="container-fluid">
    <h3>Score:<span class="" data-function="score"> 0</span></h3>
    <h3>
      Attempts:<span class="spanAttempts" data-function="attempts"> 0</span>
    </h3>
        <h3>Chronometer: <span data-function="chronometer">00:00</span></h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" data-function="pauseButton" >Pause</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#" data-function="restartButton">Restart</a>
          </li> -->
          <li class="nav-item" data-function="startLi">
            <a class="nav-link" href="#" data-function="startButton">Start</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-function="newGameButton">New Game</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <!-- <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </div>
</nav>
<main>
<div class="user-login">
  <!-- <div class="logo">
    <img src="./assets/CBM_Logo-05.png" alt="Logo de CBM Retro Shop" />
  </div> -->
  <div class="login-flex">
    
    <div class="login-block">
      <h2>Log in</h2>
      <div class="login-form">
        <button class="form" type="submit">Log in</button>
      </div>
    </div>
  </div>
</div>
</main>`;
};
//------------------------- navbar-------------------------//

//-------------------------Levels-------------------------//
let level = 1;
//-------------------------Levels-------------------------//

//-------------------------contador-------------------------//
const divCount$$ = document.querySelector('[data-function="attempts"]');
const score$$ = document.querySelector('[data-function="score"]');
//-------------------------contador-------------------------//

//------------------------LandPage---------------------------//
const toggle = (boolean) => {
  boolean = !boolean;
};
const buttonPage = () => {
  try {
    const nextButton$$ = document.querySelector('[data-function="nextButton"]');
    nextButton$$.addEventListener("click", () => {
      page++;
      landPage();
    });
  } catch (error) {}
};
const landPage = () => {
  if (page === 1) {
    main$$.innerHTML = `

<div class="land-div">

  <div class="land-flex">
    
    <div class="land-block-one">
    <div class="logo">
    <img src="https://th.bing.com/th/id/OIG.JOqPVkohcFLpL1Orc56E?pid=ImgGn" alt="Logo" />
  </div> 
      <h2>Welcome to the  Ocean</h2>
      <p>This project was born from the idea of preserving the marine world.</p>
      <p> Through learning we want to bring young children closer to the wonders of the ocean, its importance and relevance.</p>
      <div class="div-button" >
        <button data-function="nextButton" class="next" type="button">Next</button>
      </div>
    </div>
  </div>
</div>
`;

    buttonPage();
  } else if (page === 2) {
    main$$.innerHTML = ` 
<div class="land-div">

  <div class="land-flex">
    
    <div class="land-block-two">
    <div class="logo">
    <img src="https://th.bing.com/th/id/OIG.JOqPVkohcFLpL1Orc56E?pid=ImgGn" alt="Logo" />
  </div> 
      <h2>What is it about?</h2>
      <p>Oceano is a memory game, where you have different decks of cards each with different types of marine animals, the idea is that as you advance in the game you get the cards of each deck.</p>
      <p> The game is currently in prototype status.</p>
      <div class="div-button">
      <button data-function="nextButton" class="next" type="button">Next</button>
    </div>
  </div>
</div>
`;
    buttonPage();
  } else if (page === 3) {
    main$$.innerHTML = ` 
<div class="land-div">

  <div class="land-flex">
    
    <div class="land-block-three">
    <div class="logo">
    <img src="https://th.bing.com/th/id/OIG.JOqPVkohcFLpL1Orc56E?pid=ImgGn" alt="Logo" />
  </div> 
      <h2>Oceano has the following functionalities:</h2>
      <p>Registration and login: </p>
      <p>When you register a deck collection is created where your progress and the different cards obtained will be saved.
      </p>
      <p>Different levels of difficulty: </p>
      <p>As you progress the number of cards will increase.</p>
      <div class="div-button">
      <button data-function="nextButton" class="next" type="button">Next</button>
      </div>
    </div>
  </div>
</div>
`;
    buttonPage();
  } else if (page === 4) {
    loginHtml();
    botonSubmit();
  }
};

//------------------------LandPage---------------------------//

//-------------------------Cardcomponent---------------------//

// const cardComponent = (cardImg, cardName, cardDescription = "") => {
//   const divTable$$ = document.querySelector(".list-table")
//   const div$$ = document.createElement("div");
//   const img$$ = document.createElement("img");
//   const divdo$$ = document.createElement("div");
//   const cardNameP$$ = document.createElement("p");
//   const cardDescriptionP$$ = document.createElement("p");
//   const divCol$$ = document.createElement("div");
//   const divRow$$ = document.querySelector(".selctor");

//   divCol$$.classList = "col-4";

//   div$$.classList = "card cardComponent";
//   div$$.setAttribute("style", "width: 18rem");

//   img$$.setAttribute("src", `${cardImg}`);
//   img$$.classList = "card-img-top imgComponent";
//   img$$.setAttribute("alt", `${cardName}`);

//   divdo$$.classList = "card-body";
//   cardNameP$$.classList = "card-text cardName";
//   cardNameP$$.textContent = `${cardName}`;

//   cardDescriptionP$$.classList = "card-text cardDescription";
//   cardDescriptionP$$.textContent = `${cardDescription}`;

//   div$$.appendChild(img$$);
//   divdo$$.appendChild(cardNameP$$);
//   divdo$$.appendChild(cardDescriptionP$$);
//   div$$.appendChild(divdo$$);
//   divCol$$.appendChild(div$$);
//   divRow$$.appendChild(divCol$$);
// };
const cardComponent = (cardImg, cardName, cardDescription = "") => {
  const div$$ = document.createElement("div");
  const img$$ = document.createElement("img");
  const divdo$$ = document.createElement("div");
  const cardNameP$$ = document.createElement("h2");
  const cardDescriptionP$$ = document.createElement("p");

  div$$.classList = "card cardComponent fadein";
  div$$.setAttribute("style", "width: 18rem");

  img$$.setAttribute("src", `${cardImg}`);
  img$$.classList = "card-img-top imgComponent";
  img$$.setAttribute("alt", `${cardName}`);

  divdo$$.classList = "card-body";
  cardNameP$$.classList = "card-text cardName";
  cardNameP$$.textContent = `${cardName}`;

  cardDescriptionP$$.classList = "card-text cardDescription";
  cardDescriptionP$$.textContent = `${cardDescription}`;

  div$$.appendChild(img$$);
  divdo$$.appendChild(cardNameP$$);
  divdo$$.appendChild(cardDescriptionP$$);
  div$$.appendChild(divdo$$);
 main$$.appendChild(div$$)

 document.addEventListener("click",()=>{
  div$$.classList='card cardComponent animati'
setTimeout(()=>{
  div$$.style.display = "none";
},1200)
})
};
//-------------------------Cardcomponent---------------------//

//------------------------CollectionComponent----------------//

const buttonCollection = ()=>{
  const button$$ = document.createElement("button");
  button$$.classList="button-class next";
  button$$.textContent="Next"
  button$$.setAttribute("type","button");
  button$$.addEventListener('click',()=>{
    if(collectionPage ===1){
  collectionPage++
    collectionComponent()
}else if(collectionPage ===2){
  collectionPage--
  collectionComponent()
}
  })

  return button$$
}

const collectionComponent = async () => {

  const divTable$$ = document.createElement("div");
  divTable$$.classList = "list-table container";
  const divRow$$ = document.createElement("div");
  divRow$$.classList = "row selctor";

  divTable$$.appendChild(divRow$$);
  main$$.appendChild(divTable$$);
  divTable$$.appendChild(buttonCollection());

  divRow$$.innerHTML=""

  const response = await fetch(`https://ocean-db.vercel.app/card`);
  const cards = await response.json();
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    if (i < 6 && collectionPage ===1) {
      cardComponent(element.img, element.name);
      
    } else if (i >= 6 && collectionPage ===2) {
      cardComponent(element.img, element.name);
    }else {
      console.log(element);
    }
  }

  
  console.log(collectionPage);
};
//------------------------CollectionComponent----------------//

//-------------------------Login-------------------------//

const loginHtml = () => {
  const main$$ = document.querySelector("main");
  main$$.innerHTML = `<form action="https://ocean-db.vercel.app/user/login" method="POST" class="user-login">
  <div class="logo">
  <img src="https://th.bing.com/th/id/OIG.JOqPVkohcFLpL1Orc56E?pid=ImgGn" alt="Logo" />
</div> 
  <div class="login-flex">
    
    <div class="login-block">
      <h2>Log in</h2>
      <div class="login-form">
        <label id="email-label"
          >Email <input id="email" name="email" type="email" required
        /></label>
        <label
          >Password<input
            id="password"
            name="password"
            type="password"
            
            required
        /></label>
        <button class="next" type="submit">Log in</button>
      </div>
    </div>
  </div>
</form>`;
};

const localpostFetch = async (formData) => {
  try {
    const response = await fetch("https://ocean-db.vercel.app/user/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result.success);
    if (result.success) {
      const token = result.token;

      localStorage.setItem("token", token);
    } else if (!result.success) {
      console.log("error email no existe");
      await localpostFetchRegister(formData);
      localpostFetch(formData);
    } else {
      console.error("error al enviar los datos");
    }
    return result;
  } catch (error) {
    console.error("Error al enviar los dato", error);
  }
};
const localpostFetchRegister = async (formData) => {
  try {
    const response = await fetch("https://ocean-db.vercel.app/user/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (response.ok) {
      console.log("datos enviados con exito");
    } else {
      console.error("error al enviar los datos");
    }
    console.log(response);
    return result;
  } catch (error) {
    console.error("Error al enviar los dato", error);
  }
};
const localgetFetch = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`https://ocean-db.vercel.app/user/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();
  return result;
};
const logOut = () => {
  const logOut$$ = document.querySelector("#logOut");
  logOut$$.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href =
      "https://retro-store-front.vercel.app/z_LOGIN/index-login.html";
  });
};

const botonSubmit = async () => {
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
    try {
      const result = await localpostFetch(formDataObject);
      if (result.success) {
        putCollectionUser();
        //  createCollection(result.userInfo._id,result.userInfo.username)
        ifLogged();
      }
    } catch (error) {
      console.error("error al enviar los datos" + error);
    }
  });
};

const ifLogged = () => {
  if (localStorage) {
    localgetFetch();
    newGame();
    document.querySelector("nav").removeAttribute("hidden");
  }
};
//-------------------------Login-------------------------//
//-------------------------Collection--------------------//
const getCollection = async () => {
  showLoadingScreen();
  const userInfo = await localgetFetch();
  const collectionId = userInfo.collection;
  if (collectionId) {
    const response = await fetch(
      `https://ocean-db.vercel.app/collection/id/${collectionId}`
    );
    const collection = await response.json();
    const deck = collection.deckId;
    const cardsId = deck[0].cards;
    const cards = await getCardsUser(cardsId);

    cards;

    onInit(cards);
    hideLoadingScreeen();
  } else {
    showLoadingScreen();
    const cardstwo = await getData();
    onInit(cardstwo);
    hideLoadingScreeen();
  }
};
const getCardsUser = async (cardsId) => {
  let cardsArray = [];
  for (let i = 0; i < cardsId.length; i++) {
    const element = cardsId[i];
    const response = await fetch(`https://ocean-db.vercel.app/card/id/${element}`);
    const cards = await response.json();
    cardsArray.push(cards);
  }
  // console.log(cardsArray);
  return cardsArray;
};
//-------------------------Collection--------------------//

//--------------------------Put method-------------------//

const createCollection = async (userId, userName) => {
  try {
    const formDataObject = {
      name: `${userName}'s Collection`,
      deckId: "659d5c728551ad13e4356aef",
      userId: `${userId}`,
    };

    const response = await fetch(`https://ocean-db.vercel.app/collection/`, {
      method: "POST",
      body: JSON.stringify(formDataObject),
      headers: {
        "content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.ok) {
      putUser(result.userId, result._id);
    } else {
      console.error("error al enviar los datos");
    }
    // console.log(response)
    return result;
  } catch (error) {
    console.error("Error ", error);
  }
};

const putCollectionUser = async () => {
  const result = await localgetFetch();
  if (result.collection) {
    console.log("collection exist");
  } else {
    console.log("collection dont exist");
    createCollection(result._id, result.username);
  }
};

const putUser = async (id, collectionId) => {
  try {
    const formDataObject = { collection: `${collectionId}` };

    const response = await fetch(`https://ocean-db.vercel.app/user/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(formDataObject),
      headers: {
        "content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.ok) {
      const token = result.token;
      console.log("response ok");
    } else {
      console.error("error al enviar los datos");
    }
    // console.log(response)
    return result;
  } catch (error) {
    console.error("Error al enviar los dato", error);
  }
};

//--------------------------Put method-------------------//

//--------------------Loading----------------------------//
const showLoadingScreen = () => {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "flex";
};

const hideLoadingScreeen = () => {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
};

const initialize = async (array) => {
  showLoadingScreen();

  hideLoadingScreeen();
};
//--------------------Loading----------------------------//

//---------------------Fetch API--------------------------//
const getData = async () => {
  let allCards = [];
  const response = await fetch(`https://ocean-db.vercel.app/card`);
  const cards = await response.json();
  // console.log(cards)
  for (const card of cards) {
    allCards.push(card);
    // allCards.push(card);
    // console.log("hello");
  }
  return allCards;
  // console.log(oceanCards6);
};
//---------------------Fetch API--------------------------//

//-------------------Levels---------------------------//
const levels = async (level = 1, array) => {
  let counterLevel = level - 1;
  // initialize()
  const cards = await array;

  // console.log(cards);

  for (let i = counterLevel; i < cards.length; i++) {
    const element = cards[i];

    if (level === 1) {
      lvl(element, level);
      return;
    } else if (level === 2) {
      lvl(element, level);
      return;
    } else if (level === 3) {
      lvl(element, level);
      return;
    } else if (level === 4) {
      lvl(element, level);
      return;
    } else if (level === 5) {
      lvl(element, level);
      return;
    } else if (level === 6) {
      lvl(element, level);
      return;
    } else if (level === 7) {
      lvl(element, level);
      return;
    } else if (level === 8) {
      lvl(element, level);
      return;
    } else if (level === 9) {
      lvl(element, level);
      return;
    }
  }
};
const lvl = (element, i) => {
  console.log(`Level: ${i}`);
  cardsToShow.push(element);
  const cardMap = mapped(cardsToShow);
  // const allcardMap = cardMap.concat(cardMap)
  createTable(cardMap.concat(cardMap));
  return;
};
//-------------------Levels---------------------------//

//-------------------- confeti-----------------------//
// global variables
const confeti = () => {
  const confetti = document.getElementById("confetti");
  const confettiCtx = confetti.getContext("2d");
  let container,
    confettiElements = [],
    clickPosition;

  // helper
  rand = (min, max) => Math.random() * (max - min) + min;

  // params to play with
  const confettiParams = {
    // number of confetti per "explosion"
    number: 70,
    // min and max size for each rectangle
    size: { x: [5, 20], y: [10, 18] },
    // power of explosion
    initSpeed: 25,
    // defines how fast particles go down after blast-off
    gravity: 0.65,
    // how wide is explosion
    drag: 0.08,
    // how slow particles are falling
    terminalVelocity: 6,
    // how fast particles are rotating around themselves
    flipSpeed: 0.017,
  };
  const colors = [
    { front: "#3B870A", back: "#235106" },
    { front: "#B96300", back: "#6f3b00" },
    { front: "#E23D34", back: "#88251f" },
    { front: "#CD3168", back: "#7b1d3e" },
    { front: "#664E8B", back: "#3d2f53" },
    { front: "#394F78", back: "#222f48" },
    { front: "#008A8A", back: "#005353" },
  ];

  setupCanvas();
  updateConfetti();

  confetti.addEventListener("click", addConfetti);
  window.addEventListener("resize", () => {
    setupCanvas();
    hideConfetti();
  });

  // Confetti constructor
  function Conf() {
    this.randomModifier = rand(-1, 1);
    this.colorPair = colors[Math.floor(rand(0, colors.length))];
    this.dimensions = {
      x: rand(confettiParams.size.x[0], confettiParams.size.x[1]),
      y: rand(confettiParams.size.y[0], confettiParams.size.y[1]),
    };
    this.position = {
      x: clickPosition[0],
      y: clickPosition[1],
    };
    this.rotation = rand(0, 2 * Math.PI);
    this.scale = { x: 1, y: 1 };
    this.velocity = {
      x: rand(-confettiParams.initSpeed, confettiParams.initSpeed) * 0.4,
      y: rand(-confettiParams.initSpeed, confettiParams.initSpeed),
    };
    this.flipSpeed = rand(0.2, 1.5) * confettiParams.flipSpeed;

    if (this.position.y <= container.h) {
      this.velocity.y = -Math.abs(this.velocity.y);
    }

    this.terminalVelocity = rand(1, 1.5) * confettiParams.terminalVelocity;

    this.update = function () {
      this.velocity.x *= 0.98;
      this.position.x += this.velocity.x;

      this.velocity.y += this.randomModifier * confettiParams.drag;
      this.velocity.y += confettiParams.gravity;
      this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
      this.position.y += this.velocity.y;

      this.scale.y = Math.cos(
        (this.position.y + this.randomModifier) * this.flipSpeed
      );
      this.color =
        this.scale.y > 0 ? this.colorPair.front : this.colorPair.back;
    };
  }

  function updateConfetti() {
    confettiCtx.clearRect(0, 0, container.w, container.h);

    confettiElements.forEach((c) => {
      c.update();
      confettiCtx.translate(c.position.x, c.position.y);
      confettiCtx.rotate(c.rotation);
      const width = c.dimensions.x * c.scale.x;
      const height = c.dimensions.y * c.scale.y;
      confettiCtx.fillStyle = c.color;
      confettiCtx.fillRect(-0.5 * width, -0.5 * height, width, height);
      confettiCtx.setTransform(1, 0, 0, 1, 0, 0);
    });

    confettiElements.forEach((c, idx) => {
      if (
        c.position.y > container.h ||
        c.position.x < -0.5 * container.x ||
        c.position.x > 1.5 * container.x
      ) {
        confettiElements.splice(idx, 1);
      }
    });
    window.requestAnimationFrame(updateConfetti);
  }

  function setupCanvas() {
    container = {
      w: confetti.clientWidth,
      h: confetti.clientHeight,
    };
    confetti.width = container.w;
    confetti.height = container.h;
  }

  function addConfetti(e) {
    const canvasBox = confetti.getBoundingClientRect();
    if (e) {
      clickPosition = [e.clientX - canvasBox.left, e.clientY - canvasBox.top];
    } else {
      clickPosition = [
        canvasBox.width * Math.random(),
        canvasBox.height * Math.random(),
      ];
    }
    for (let i = 0; i < confettiParams.number; i++) {
      confettiElements.push(new Conf());
    }
  }

  function hideConfetti() {
    confettiElements = [];
    window.cancelAnimationFrame(updateConfetti);
  }

  confettiLoop();
  function confettiLoop() {
    addConfetti();
    setTimeout(confettiLoop, 700 + Math.random() * 1700);
  }
};
//-----------------Confeti------------------------//

//----------------- asideCards---------------------//
const asideCards = (MatchedCards) => {
  const main$$ = document.querySelector("main");

  const cardssDiv$$ = document.querySelector('[data-function="cardsReady"]');
  let singlesCard = [];
  let cardMain$$ = document.createElement("div");
  cardMain$$.innerHTML = "";

  cardssDiv$$.appendChild(cardMain$$);
  main$$.appendChild(cardssDiv$$);

  if (
    MatchedCards.find((findedCard) => findedCard.name === MatchedCards.name)
  ) {
    return;
  } else {
    MatchedCards.forEach((element) => {
      singlesCard.push(element);
    });
  }
  // console.log(singlesCard);

  if (singlesCard) {
    setTimeout(() => {
      cardMain$$.classList = "cardMain fadein";

      let cardDiv$$ = document.createElement("div");
      cardDiv$$.className = `cardDiv  card__contenido`;

      let cardImg$$ = document.createElement("img");
      cardImg$$.setAttribute(
        "src",
        `${singlesCard[singlesCard.length - 1].img}`
      );
      cardImg$$.className = `cardImg`;

      let cardDiv2$$ = document.createElement("div");
      cardDiv2$$.className = `cardd descubierta`;
      // cardDiv2$$.innerHTML = "";
      cardDiv2$$.setAttribute(
        "data-id",
        singlesCard[singlesCard.length - 1].id
      );
      cardDiv2$$.appendChild(cardDiv$$);
      cardDiv$$.appendChild(cardImg$$);
      cardMain$$.appendChild(cardDiv2$$);
      setTimeout(() => {
        cardMain$$.classList.remove("fadein");
      }, 1500);


      cardMain$$.addEventListener("click",(e)=>{

        cardComponent(singlesCard[singlesCard.length - 1].img,singlesCard[singlesCard.length - 1].name,singlesCard[singlesCard.length - 1].description)
        e.stopPropagation()
      })

   
      //  cardDiv2$$.addEventListener("click",(event)=> flipCard(event,i))
    }, 1200);
  }
};
//------------------------Event click----------------//


//------------------------Event click----------------//

//----------------- asideCards---------------------//

// ----------------- flip ---------------------//

// this function select the elements whit class="card" and for each one of them give it a click event that change the event current target or the target clicked a new class called "descubierta"
const flipCard = (event, i, cardArray) => {
  let card = cardArray[i];
  // console.log(card);
  // const cardWon = cardsMatched.find(findedCard=> findedCard.name === card.name);

  cardsPicked.push(card);
  event.target.classList.add("descubierta");
  event.target.classList.add("selected");

  if (event.target.firstChild) {
    const cardImg = event.target.firstChild.firstChild;

    cardImg.setAttribute("src", card.img);
  }
  if (cardsPicked.length === 2) {
    setTimeout(compareCards(), 50);
  }
};
// ----------------- flip ---------------------//

//-------------------- contador ------------//
const contador = () => {
  count++;

  score$$.classList.add("pulseHearth");
  divCount$$.textContent = ` ${count}`;
  // setTimeout(()=>{
  //   score$$.classList.remove("pulseHearth")
  // },500)
};

const scorePlay = () => {
  score++;
  score$$.textContent = ` ${score}`;
  endFn();
};
//-------------------- contador ------------//
//------------------ comparador --------------------//

// this function compare the selected cards and compared it
const removeClass = () => {
  let firstCardDiv$$ = document.querySelectorAll(".selected");

  firstCardDiv$$[0].classList.remove("descubierta");
  firstCardDiv$$[1].classList.remove("descubierta");
  firstCardDiv$$[0].classList.remove("selected");
  firstCardDiv$$[1].classList.remove("selected");
};
const compareCards = () => {
  let firstCardDiv$$ = document.querySelectorAll(".selected");

  const firstCard = cardsPicked[0];
  const secondCard = cardsPicked[1];

  if (firstCard.id !== secondCard.id) {
    setTimeout(removeClass, 800);
    cardsPicked = [];

    //here goes the counter function
    contador();
  } else {
    setTimeout(() => {
      cardsMatched.push(cardsPicked[0]);
      firstCardDiv$$[0].classList.remove("selected");
      firstCardDiv$$[1].classList.remove("selected");
      firstCardDiv$$[0].classList.add("animati");
      firstCardDiv$$[1].classList.add("animati");
      // firstCardDiv$$[0].hidden = true;
      // firstCardDiv$$[1].hidden = true;
      cardsPicked = [];
      setTimeout(asideCards(cardsMatched), 5000);
      contador();
      scorePlay();
    }, 900);
  }
  // console.log(cardsPicked);
};
//------------------ comparador --------------------//

//--------------------- chronometer----------------//
const chronometer = () => {
  let minutos = 0;
  let segundos = 0;
  if (score === 0) {
    intervalId = setInterval(() => {
      segundos++;
      if (segundos < 10) {
        chronoDiv$$.textContent = `0${minutos}:0${segundos}`;
      } else if (segundos >= 10) {
        chronoDiv$$.textContent = `0${minutos}:${segundos}`;
        if (segundos > 59) {
          minutos++;
          segundos = 0;
          chronoDiv$$.textContent = `0${minutos}:0${segundos}`;
        }
      } else if (minutos > 9) {
        minutos++;
        chronoDiv$$.textContent = `${minutos}:0${segundos}`;
      }
    }, 1000);
  } else {
    clearInterval(intervalId);
  }
};
//--------------------- chronometer----------------//

//----------------endGame-------------------//
const endGame = () => {
  main$$.innerHTML = "";

  let endDiv$$ = document.createElement("div");
  endDiv$$.classList = "endDiv fadeInFoward";
  endDiv$$.id = "endDiv";

  let endImg$$ = document.createElement("img");
  endImg$$.classList = "endImg";
  endImg$$.setAttribute("src", "./assets/memoryGame/endGame.png");

  const canva = document.createElement("canvas");
  canva.id = "confetti";

  const nextLvlBtn$$ = document.createElement("button");
  nextLvlBtn$$.setAttribute("type", "button");
  nextLvlBtn$$.classList = "nextLvlBtn btn btn-primary";
  nextLvlBtn$$.id = "nextLvlBtn";
  nextLvlBtn$$.innerText = "Next level ¡Hurray! ";
  nextLvlBtn$$.onclick = nextLvl;

  const tryAgainBtn$$ = document.createElement("button");
  tryAgainBtn$$.setAttribute("type", "button");
  tryAgainBtn$$.classList = "tryAgainBtn btn btn-primary";
  tryAgainBtn$$.id = "tryAgainBtn";
  tryAgainBtn$$.innerText = "See new cards :)";
  tryAgainBtn$$.onclick = newGame;
  endDiv$$.appendChild(canva);
  endDiv$$.appendChild(endImg$$);
  endDiv$$.appendChild(tryAgainBtn$$);
  endDiv$$.appendChild(nextLvlBtn$$);
  main$$.appendChild(endDiv$$);
  confeti();

  const cardssDiv$$ = document.querySelector('[data-function="cardsReady"]');
  if (cardssDiv$$) {
    cardssDiv$$.style.display = "none";
  }
};

const endFn = () => {
  if (score === cardsToShow.length) {
    chronometer();
    endGame();
  }
};
//----------------endGame-------------------//

//------------------Start-restart----------------//

const nextLevel = () => {
  clearInterval(intervalId);
  segundos = 0;
  minutos = 0;
  count = 0;
  score = 0;
  divCount$$.textContent = ` ${count}`;
  divCount2$$.textContent = ` ${score}`;
  // cardssDiv$$.style.display = "block"
  getCollection();
};
const newGame = () => {
  const main$$ = document.querySelector("main");
  level = 1;
  cardsToShow = [];
  main$$.innerHTML = "";
  clearInterval(intervalId);
  segundos = 0;
  minutos = 0;
  count = 0;
  score = 0;
  divCount$$.textContent = ` ${count}`;
  divCount2$$.textContent = ` ${score}`;
  // cardssDiv$$.style.display = "block"
  getCollection();
};
const pause = () => {
  clearInterval(intervalId);
  startLi$$.style.display = "block";
};

const nextLvl = () => {
  level++;
  nextLevel();
  pauseButton$$.style.display = "block";
};

const start = () => {
  chronometer();
  startLi$$.style.display = "none";
};

//------------------Start-restart----------------//
//-------------------------restart selectors-----------------------------//

const restartButton$$ = document.querySelector(
  '[data-function="restartButton"]'
);
const pauseButton$$ = document.querySelector('[data-function="pauseButton"]');
const startButton$$ = document.querySelector('[data-function="startButton"]');
const newGameButton$$ = document.querySelector(
  '[data-function="newGameButton"]'
);
const startLi$$ = document.querySelector('[data-function="startLi"]');
startLi$$.style.display = "none";
pauseButton$$.style.display = "none";
pauseButton$$.onclick = pause;
newGameButton$$.onclick = newGame;
startButton$$.onclick = start;
//-------------------------restart selectors-----------------------------//

// ---------------- inicio   --------------------//

//this function create the table with the cards

const createTable = (cardArray) => {
  // console.log(cardArray);
  const main$$ = document.querySelector("main");
  cardArray.sort(() => 0.5 - Math.random());
  main$$.innerHTML = "";
  const divCards$$ = document.createElement("div");
  divCards$$.setAttribute("data-function", "cardsReady");
  divCards$$.classList = "cardsReady";

  const divGrid$$ = document.createElement("div");
  divGrid$$.setAttribute("data-function", "grid");
  divGrid$$.classList = "mesi";

  main$$.appendChild(divCards$$);
  main$$.appendChild(divGrid$$);

  let divTable$$ = document.createElement("div");
  divTable$$.className = `tableDiv mesa`;
  divGrid$$.appendChild(divTable$$);

  for (let i = 0; i < cardArray.length; i++) {
    const cardInfo = cardArray[i];
    // console.log(cardInfo.id);

    let cardDiv$$ = document.createElement("div");
    cardDiv$$.className = `cardDiv card__contenido`;

    let cardImg$$ = document.createElement("img");
    cardImg$$.setAttribute("src", ``);
    cardImg$$.className = `cardImg`;

    let cardDiv2$$ = document.createElement("div");
    cardDiv2$$.className = `cardd`;
    cardDiv2$$.setAttribute("data-id", cardInfo.id);
    cardDiv2$$.appendChild(cardDiv$$);
    cardDiv$$.appendChild(cardImg$$);
    divTable$$.appendChild(cardDiv2$$);
    cardDiv2$$.addEventListener("click", (event) =>
      flipCard(event, i, cardArray)
    );
  }
};

// ----------------------- Maping cards----------------//

const mapped = (noMapped) => {
  return noMapped.map((card) => ({
    name: card.name,
    img: card.img,
    id: card._id,
    description: card.description,
  }));
};

// ----------------------- Maping cards----------------//

//this is our initializator function

const onInit = async (cards) => {
  const allCards = await cards;

  levels(level, allCards);

  chronometer();
};
const initLogin = async () => {
  landPage();
  // buttonCollection();
  // collectionComponent();
  // const data  = await getData()
  // console.log(data[0].img);
  // cardComponent(data[0].img,data[0].name,data[0].description)
};
initLogin();
// ---------------- inicio   --------------------//
