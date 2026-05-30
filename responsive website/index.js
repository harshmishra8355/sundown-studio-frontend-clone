// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });

var elemC = document.querySelector("#elem-container")
var fixedImage = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
  fixedImage.style.display ="block"
})
elemC.addEventListener("mouseleave",function(){
  fixedImage.style.display ="none"
})


// this is longer version --->

// var elem1 = document.querySelector('#elem1')
// elem1.addEventListener("mouseenter",function(){
//   var image1 = elem1.getAttribute("data-image")
//   fixedImage.style.backgroundImage = `url(${image1})`
// })

// var elem2 = document.querySelector('#elem2')
// elem2.addEventListener("mouseenter",function(){
//   var image2 = elem2.getAttribute("data-image")
//   fixedImage.style.backgroundImage = `url(${image2})`
// })

// var elem3 = document.querySelector('#elem3')
// elem3.addEventListener("mouseenter",function(){
//   var image3 = elem3.getAttribute("data-image")
//   fixedImage.style.backgroundImage = `url(${image3})`
// })

// var elem4 = document.querySelector('#elem4')
// elem4.addEventListener("mouseenter",function(){
//   var image4 = elem4.getAttribute("data-image")
//   fixedImage.style.backgroundImage = `url(${image4})`
// })


// var elem5 = document.querySelector('#elem5')
// elem5.addEventListener("mouseenter",function(){
//   var image5 = elem5.getAttribute("data-image")
//   fixedImage.style.backgroundImage = `url(${image5})`
// })

// var elem6 = document.querySelector('#elem6')
// elem6.addEventListener("mouseenter",function(){
//   var image6 = elem6.getAttribute("data-image")
//   fixedImage.style.backgroundImage = `url(${image6})`
// })


// This is shorter version --->
var elems = document.querySelectorAll(".elem")

elems.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
    console.log(image)
    fixedImage.style.backgroundImage=`url(${image})`
  })
})


var h1s = document.querySelectorAll("#part1 h1")
var ps = document.querySelectorAll("#part2 p")
var imgs = document.querySelectorAll("#image_part img")

h1s[0].addEventListener("mouseenter", function () {
    ps[0].style.display = "block"
    ps[1].style.display = "none"
    ps[2].style.display = "none"

    imgs[0].style.display = "block"
    imgs[1].style.display = "none"
    imgs[2].style.display = "none"
})

h1s[1].addEventListener("mouseenter", function () {
    ps[0].style.display = "none"
    ps[1].style.display = "block"
    ps[2].style.display = "none"

    imgs[0].style.display = "none"
    imgs[1].style.display = "block"
    imgs[2].style.display = "none"
})

h1s[2].addEventListener("mouseenter", function () {
    ps[0].style.display = "none"
    ps[1].style.display = "none"
    ps[2].style.display = "block"

    imgs[0].style.display = "none"
    imgs[1].style.display = "none"
    imgs[2].style.display = "block"
})