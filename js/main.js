// Logo animation using "Green Sock"

const logo = document.getElementById('logo');

    gsap.to(logo, {
        duration: 1, 
        x: 20, 
        rotation: 360, 
        scale: 2, 
        backgroundColor: "#F2D8D8", 
        ease: "power2.inOut", 
    });


//Burger menu

(function(){

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Earbuds Model
(() => {
  console.log("IIFE Fired");

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
        tittle: "Volume, your way",
        text: "Experience customizable audio control with our earbuds. Adjust the volume to suit your preferences and immerse yourself in your music or calls exactly how you like it.",
        image: "images/volume.png",
    },
    {
        tittle: "Play, Pause and More",
        text: "Take full control of your audio playback with ease. Play, pause, skip tracks, and even answer calls effortlessly, all at your fingertips.",
        image:"images/control.png",
    },
    {
        tittle: "All day comfort",
        text: "Enjoy exceptional comfort that lasts all day. Our earbuds are designed for extended wear, ensuring you can listen to your favorite tunes or make calls in complete comfort from morning to night.",
        image:"images/plastic_pin.png",
    },
    {
        tittle: "Charging fast",
        text: "Stay powered up and on the go. Our earbuds charge quickly, so you can spend less time waiting and more time enjoying your music or staying connected with your calls.",
        image:"images/battery.png",
    }
  ];

  //functions
  function modelLoaded() {
    console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      
      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.tittle;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      const imageElement = document.createElement('img');
      imageElement.src = infoBox.image;

      console.log(selected);
      console.log(infoBox.tittle);
      console.log(infoBox.text);

      selected.appendChild(titleElement);
      selected.appendChild(textElement);
      selected.appendChild(imageElement);

    })
  }

  loadInfo();

  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.