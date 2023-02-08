// Data files for the speakers
let speakers = [
  {
    name: "Nia Johnson.",
    description: "Senior web developer at Google.",
    expanded: `Senior web developer at Google, delivering exceptional websites with expertise in HTML,
        CSS, JavaScript, and web development technologies.`,
    image: "./Graphics/people/nia.jpeg",
  },

  {
    name: "Kenneth Williams.",
    description: "UI/UX Designer at Kentucky.",
    expanded: ` Senior UI/UX web Designer and Advicer, delivering exceptional websites with expertise in HTML,
        CSS, JavaScript, and web development technologies.`,
    image: "./Graphics/people/kenneth.jpeg",
  },

  {
    name: "Mark Ruffalo.",
    description: "Senior web developer at Microsoft",
    expanded: `Senior web developer at Microsoft, delivering exceptional websites with expertise in HTML,
        CSS, JavaScript, and web development technologies.`,
    image: "./Graphics/people/Mark.jpeg",
  },

  {
    name: "Amy Smith.",
    description: "UI/UX Designer at Los Angeles.",
    expanded: ` Senior UI/UX web Designer and Advicer, delivering exceptional websites with expertise in HTML,
        CSS, JavaScript, and web development technologies.`,
    image: "./Graphics/people/Amy.jpeg",
  },

  {
    name: "Lian Adams.",
    description: "Senior Product Designer in Germany",
    expanded: ` Senior Product Designer and developer, delivering exceptional websites with expertise in HTML,
        CSS, JavaScript, and web development technologies.`,
    image: "./Graphics/people/Lian.jpeg",
  },

  {
    name: "Amanda Cole.",
    description: "Backend Developer for Amazon in United States.",
    expanded: ` Beckend developer and Mentor, delivering exceptional websites with expertise in HTML,
        CSS, JavaScript, and web development technologies.`,
    image: "./Graphics/people/amanda.jpeg",
  },
];

// The speaker section target
let mainSpeakers = document.querySelector(".main-speakers");
mainSpeakers.style.alignItems = "center";
mainSpeakers.style.display = "grid";

// Expandedd description style
let descriptionStyle = {
  position: "relative",
  marginLeft: "10px",
  marginBottom: "16px",
  fontFamily: "Lato",
  fontSize: '0.8rem'
};

// Checker background style
let chessStyle = {
  position: "absolute",
  source: "./Graphics/checkers.svg",
  width: "65px",
  zIndex: "1",
  top: "-15px",
  left: "11px",
};

// The image speaker style

let speakersImageStyle = {
  width: "120px",
  marginLeft: "20px",
  zIndex: "1",
  position: "relative",
};

// The see more button that is clicked to reveal the remaining speakers section
let seemore = document.querySelector("#seemore");
seemore.addEventListener("click", function () {
  mainSpeakers.innerHTML = "";
  seemore.style.opacity = '0'
  main(6);
});

// The function that shows all speakers and make them grids on breakpoint
let body = document.querySelector('body');
body.addEventListener('click', gridify)
function gridify() {
  if (window.innerWidth >= 768) {
    mainSpeakers.style.gridTemplateColumns = "1fr 1fr";
    
  } else if (window.innerWidth <= 768) {
    mainSpeakers.style.gridTemplateColumns = "1fr";
  }
}

// The function that creates and append the elements
function main(count) {

  for (let i = 0; i < count; i++) {
    /* The wrapper that covers all of each speaker
   elements. This is the master div
   */ 
    let overAll = document.createElement("div");
    overAll.style.display = "flex";
    overAll.style.alignItems = "center";
    mainSpeakers.appendChild(overAll);

    /* The wrapper div that combines the checker
    image and the speaker image
    */
    let pictureWrapper = document.createElement("div");
    pictureWrapper.style.position = "relative";
    pictureWrapper.style.marginBottom = "30px";
    overAll.appendChild(pictureWrapper);

    // The info about the speaker
    let descriptionCon = document.createElement("div");
    descriptionCon.style.marginBottom = "30px";
    overAll.appendChild(descriptionCon);

    // The pic inside the div element

    // The checker image
    let chess = document.createElement("img");
    chess.setAttribute("class", "chess");
    chess.src = chessStyle.source;
    Object.assign(chess.style, chessStyle);
    pictureWrapper.appendChild(chess);

    // The speaker image
    let speaker = document.createElement("img");
    speaker.src = speakers[i].image;
    Object.assign(speaker.style, speakersImageStyle);
    pictureWrapper.appendChild(speaker);

    // The information of the speaker

    // name
    let name = document.createElement("h3");
    Object.assign(name.style, descriptionStyle);
    name.innerHTML = speakers[i].name;
    name.style.fontWeight = "600";
    descriptionCon.appendChild(name);

    // Description
    let description = document.createElement("h6");
    Object.assign(description.style, descriptionStyle);
    description.style.color = "#ec5242";
    description.style.marginTop = "-10px";
    description.style.fontWeight = '600'
    description.innerHTML = speakers[i].description;
    descriptionCon.appendChild(description);

    // The last description text
    let expand = document.createElement("h6");
    Object.assign(expand.style, descriptionStyle);
    expand.style.color = "#272a31";
    expand.innerHTML = speakers[i].expanded;
    descriptionCon.appendChild(expand);
  }
}

// The function that automatically adjust the position 
// Of the elements on breakpoint
if(window.innerWidth >= 768) {
    window.onload = main(4)
    mainSpeakers.style.gridTemplateColumns = "1fr 1fr";
}
else {
    window.onload = main(2);
}