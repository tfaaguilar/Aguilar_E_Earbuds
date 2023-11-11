// Logo animation using "Green Sock"

const logo = document.getElementById('logo');

gsap.to(logo, {
    duration: 1, 
    x: 20, 
    scale: 2, // Aumentar el tamaño al doble
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
        text: "Enjoy exceptional comfort. Our earbuds are designed for extended wear, ensuring you can listen to your favorite tunes or make calls in complete comfort from morning to night.",
        image:"images/plastic.png",
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
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  function showInfo() {
  let selected = document.querySelector(`#${this.slot}`);
  gsap.to(selected, { scale: 1.1, duration: 0.3 });
  gsap.to(selected, 1, { autoAlpha: 1 });
}

function hideInfo() {
  let selected = document.querySelector(`#${this.slot}`);
  gsap.to(selected, { scale: 1, duration: 0.3 });
  gsap.to(selected, 1, { autoAlpha: 0 });
}
})();


// Scrolling

(() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1900;
    canvas.height = 1060;

    const frameCount = 501;

    const images = []; 
    const buds = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = document.createElement("img");
        // need to recreate a string: images/explode_0001.webp
        img.src = `images/EB1_${(i + 1).toString().padStart(4, '0')}.jpg`;
        images.push(img);
    }
    
    gsap.to(buds, {
        frame: 500,
        snap: "frame", // to get full numbers instead of decimals
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
          start: "top top",
            end: "bottom 20",
            markers: false
        },
        onUpdate: render
    })

    images[0].addEventListener("onload", render);

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }
})();

//X-RAY view

(() => {
    let imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;


        function onDown(){
            dragging = true;
            console.log("set to true")
        }


        function onUp(){
            dragging = false;
            console.log("set to flase")
        }


        function onMove(event) {
            //console.log("on moved called");
            if(dragging===true){
                    //console.log("dragging");
                    let x = event.clientX - imageCon.getBoundingClientRect().left;

                    if(x < min){
                        x = min;
                    }
                    else if(x >  max){
                        x = max-15;
                    }

                    drag.style.left = x + "px";
                    left.style.width = x + "px";
            }

        }

        drag.addEventListener('mousedown',onDown);
        document.body.addEventListener('mouseup',onUp);
        document.body.addEventListener('mousemove',onMove);
})();