let links = document.querySelectorAll(".navbar-nav li a");
console.log(links);

links.forEach((link) => {
  link.addEventListener("click", remove);
});

function remove() {
  links.forEach((ele) => {
    ele.classList.remove("active");
  });
  this.classList.add("active");
}

// //**************** */ start get started *************************

let myGetstarted = document.querySelector(".get-started");
let myBotton = document.querySelector(".get-started .btn");
console.log(myBotton);
window.addEventListener("scroll", function () {
  if (window.scrollY > myGetstarted.offsetTop) {
    myBotton.classList.add("trans");
  } else {
    myBotton.classList.remove("trans");
  }
});

// //**************** */ end get started *************************
// //**************** */ start our services *************************
let myServices = document.querySelector(".our-services");
let myCols = document.querySelectorAll(".our-services .col-cont .images img");
window.addEventListener("scroll", function () {
  if (window.scrollY >= myServices.offsetTop - 300) {
    myCols.forEach((col) => {
      col.classList.add("skew-col");
    });
  } else {
    myCols.forEach((col) => {
      col.classList.remove("skew-col");
    });
  }
});
// //**************** */ end our services *************************

// //**************** */ start our videos *************************
let myVideos = document.querySelector(".our-video");
let myWise = document.querySelector(".our-video .wise");
let featCont = document.querySelector(".features .feat-cont");
let featTop = document.querySelectorAll(".features .col-cont.one");
let featBot = document.querySelectorAll(".features .col-cont.two");
let featuresRow = document.querySelector(".features .row");
console.log(featBot);
window.addEventListener("scroll", function () {
  if (window.scrollY >= myVideos.offsetTop - 600) {
    myWise.classList.add("wise-ani");
  } else {
    myWise.classList.remove("wise-ani");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= myVideos.offsetTop + 200) {
    featCont.classList.add("feat-ani");
    featTop.forEach((ele) => {
      ele.classList.add("feat-anime-top");
    });
  } else {
    featCont.classList.remove("feat-ani");
    featTop.forEach((ele) => {
      ele.classList.remove("feat-anime-top");
    });
  }
});
// //**************** */ end about us *************************

// //**************** */ start features *************************
window.addEventListener("scroll", function () {
  if (window.scrollY >= featuresRow.offsetTop) {
    featBot.forEach((ele) => {
      ele.classList.add("feat-anime-bot");
    });
  } else {
    featBot.forEach((ele) => {
      ele.classList.remove("feat-anime-bot");
    });
  }
});
// //**************** */ start stat *************************
let stat = document.querySelector(".stat");
let myStatRow = document.querySelector(".stat .row");
window.addEventListener("scroll", function () {
  if (window.scrollY >= featuresRow.offsetTop + 400) {
    myStatRow.classList.add("Row-anime");
  } else {
    myStatRow.classList.remove("Row-anime");
  }
});
// //**************** */ end stat *************************
// //**************** */ start our testimonials *************************
let ourTesti = document.querySelector(".our-testimonials");
let ourTestTop = document.querySelectorAll(".our-testimonials .row .one");
let ourTestBot = document.querySelectorAll(".our-testimonials .row .two");
window.addEventListener("scroll", function () {
  if (window.scrollY >= stat.offsetTop + 100) {
    ourTestTop.forEach((ele) => {
      ele.classList.add("our-anime-top");
    });
  } else {
    ourTestTop.forEach((ele) => {
      ele.classList.remove("our-anime-top");
    });
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= ourTesti.offsetTop + 400) {
    ourTestBot.forEach((ele) => {
      ele.classList.add("our-anime-bot");
    });
  } else {
    ourTestBot.forEach((ele) => {
      ele.classList.remove("our-anime-bot");
    });
  }
});
// //**************** */ end our testimonials *************************
// //**************** */ start our blog *************************
let myBlog = document.querySelector(".blog");
let blogCont = document.querySelector(".blog .feat-cont");
let ourBlogs = document.querySelectorAll(".blog-cont");

window.addEventListener("scroll", function () {
  if (window.scrollY >= myBlog.offsetTop - 600) {
    blogCont.classList.add("feat-ani");
  } else {
    blogCont.classList.remove("feat-ani");
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= myBlog.offsetTop - 200) {
    ourBlogs.forEach((blog) => {
      blog.classList.add("blog-anime");
    });
  } else {
    ourBlogs.forEach((blog) => {
      blog.classList.remove("blog-anime");
    });
  }
});

// //**************** */ end our blog *************************
// //**************** */  start contact *************************

let myContact = document.querySelector(".contact");
let contactCont = document.querySelector(".contact .feat-cont");
let contactForm = document.querySelector(".contact .container .row");

window.addEventListener("scroll", function () {
  if (window.scrollY >= myContact.offsetTop - 600) {
    contactCont.classList.add("feat-ani");
  } else {
    contactCont.classList.remove("feat-ani");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= myContact.offsetTop - 200) {
    contactForm.classList.add("feat-ani");
  } else {
    contactForm.classList.remove("feat-ani");
  }
});

// //**************** */ end contact *************************

// let myTeam = document.querySelector(".team");
// let myBoxs = document.querySelectorAll(".team .row .col-md-6");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= myTeam.offsetTop - 100) {
//     myBoxs.forEach((box) => {
//       box.classList.add("box-anime");
//     });
//   }
// });
// //**************** */ end about us *************************

// //**************** */ start sponsore *************************
// let mySponsore = document.querySelector(".sponsore");
// let myContainer = document.querySelector(".sponsore .container");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= mySponsore.offsetTop - 300) {
//     myContainer.classList.add("cont");
//   }
// });
// //**************** */ end sponsore *************************

// //**************** */ start blog *************************
// let myBlog = document.querySelector(".blog");
// let myBlogCols = document.querySelectorAll(".blog .row .col-md-6");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= myBlog.offsetTop - 200) {
//     myBlogCols.forEach((blogCol) => {
//       blogCol.classList.add("blog-col-anime");
//     });
//   }
// });
// //**************** */ end blog *************************
