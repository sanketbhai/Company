// hero-1 text-animation

// moving letter
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = "Robust Websites".replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
var textWrapper1 = document.querySelector('.ml11 .letters');
textWrapper1.innerHTML = "ABC Websites".replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");


anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 30],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  
  .add({
    delay:1000,
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 30],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter1',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })

  // await delay(1000);
// textWrapper.innerHTML = "ABC Websites".replace(/([^\x00-\x80]|\w)/g, "<span class='letter1'>$&</span>");

  
  



  