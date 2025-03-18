// cnst jsPractise = () => {
    // var parent = document.querySelector(".parent"); 
// parent.addEventListener("click",function(details){
//     if(details.target.id === "play"){
//         console.log("play song");
//     }
//     else if(details.target.id === "pause"){
//         console.log("pause song");
//     }
// });


// var evt = new Event("chacha");

// document.querySelector(".parent")
// .addEventListener("chacha",function(){
//     alert("bola yaar rasta ma hayi gadi chlawat hayi bola");
// });

// document.querySelector(".parent").dispatchEvent(evt);

// function abc(){
//     var a = 12;
//     return function(){
//         console.log(a); 
//     };
// };
// var ab = abc();
// ab();


//abc function gives us grade according to our score...

// function abc(){
//     let score = prompt("enter your score... (0-100)");
// let grade;

// if(score >= 90 && score <=100) {
//     grade = "A";
// }else if(score >= 70 && score <=89) {
//     grade = "B";
// }else if(score >= 60 && score <=69) {
//     grade = "C";
// }else if(score >= 50 && score <=59) {
//     grade = "D";
// }else if(score >= 0 && score <=49) {
//     grade = "E";
// }

// console.log("your score is :", score, "and", "ypur grade is :", grade);
// };
// abc();
 

// for loop patter
// for(letValue; stoping condition; jab tak aanswer na mile tab tak ka kya karya hona chahiye...)
// these are the three rules in for loop 

// let userNum = prompt("Guess the right Num...")
// for(let gameNum = "25"; userNum !== gameNum; userNum = prompt("You guessed wrong num. Try again...")) {   

// }
// console.log("you won you guessed right num");

// let fullName = prompt("Enter your full name here...");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);  

// let heroes = [ "hanuman ji", "shankar ji", "bisnu ji", "brmha ji" ];
// heroes.forEach(elem => {
//     console.log(elem);
// });


// for(let elem = 0; elem < heroes.length; elem++){
//     console.log(heroes[elem]);
// };

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// marks.forEach(elem => {
//     sum += elem;
// });
// let avgMarks = sum / marks.length;  
// console.log(`avg marks of student is ${avgMarks}`)   


// let prices = [ 250, 645, 300, 900, 50 ];
// let offer;
// let idx  = 1;
// prices.forEach(elem => {
//     offer = elem * 10 / 100;
//     console.log(`value of ${idx++} item is ${elem - offer}`);
// });


// let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];

// companies.shift();
// companies.splice(1,1,"Ola");
// companies.push("amazon");


// let abc = (a, b) => {
//     return a + b;
// }
// let sum = abc(14, 6);
// console.log(sum);


// function xyz(x, y) {
//     let sum = x + y;
//     return sum;
// }
// let s = xyz(98,2);
// console.log(s);

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count)
// }
// countVowels(prompt("type here for vowels..."))

// const countVowels = (str) => {
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// let arr = ["bittu", "arya veer", "aryan", "shaurya"]

// arr.forEach((elem, idx, arr) => {
//     console.log(elem, idx, arr);
// });

// let arr = [1, 2, 3, 4, 5]

// arr.forEach((elem )=> {
//     console.log(elem * elem);
// });


// let array = [1,2,3,4,5,6,7,8,9]

// array.map((element) => {
//     console.log(element * element)
// });

// let array = [1,2,3,4,5,6,7,8,9]

// let evenArr = array.filter((element) => {
//     return element % 2 === 0;
// });

// console.log(evenArr);


// let array = [1,2,3,4]

// let output =  array.reduce((res, curr ) => {
//     return res > curr ? res : curr;
// });

// console.log(output);



// let array = [50, 70, 89, 90, 98, 94, 95]

// array.filter((element) => {
//     if(element >= 90){
//         console.log("you are in 1st grade", element);
//     }else if(element < 90){
//         console.log("you are in 2nd grade", element);
//     }
// });

// let colOfMeth = () => {
//     let n = prompt("Give me a number...");
// let arr = [];
// for(let i = 1; i<=n; i++){
//     arr[i-1] = i;
// }

// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log("sum is ", sum);

// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });

// console.log("factorial is ", factorial);
// }
// colOfMeth();

// let btn = document.createElement("button");
// btn.innerText = "Click me!";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// btn.style.padding = "2vh 5vw";
// btn.style.borderRadius = "5px";
// btn.style.border = "none";
// btn.style.boxShadow = "0 0 5px black";
// btn.style.cursor = "pointer";
// btn.style.fontSize = "2.5vw";
// document.querySelector("body").prepend(btn);

// let para = document.querySelector(".content");
// let class2 = document.querySelector(".newClass");

// para.append(class2);

// para.classList.add("new");

// let moodBtn = document.querySelector(".mood");
// let body = document.querySelector("body");
// let mood = "light";

// moodBtn.addEventListener("click", () => {
//     if(mood === "light") {
//         body.style.backgroundColor = "black";
//         moodBtn.style.border = "1px solid white";
//         moodBtn.style.color = "white";
//         mood = "dark";
        
//     }else {
//         body.style.backgroundColor = "white";
//         moodBtn.style.border = "1px solid black";
//         moodBtn.style.color = "black";
//         mood = "light";
//     }
// })


// let fnc = (a, b) => {
//     setTimeout( () => {
//         console.log(a)
//         if(b){
//             console.log(b);
//         };
//     },2000)
// }
// fnc(1, () => {
//     fnc(2);
// });

// function abc(a,b) {
//     setTimeout( () => {
//         console.log("data",a)
    
//     }, 2000)
//     setTimeout( () => {
//         console.log(b)
//     }, 4000)
// };

// abc(1,2);

// function getData(dataId, getNextData) {
//     setTimeout( () => {
//         console.log('data', dataId)
//         if(getNextData) {
//             getNextData();
//         };
       
//     },2000)
// };

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

// let getPromise = () => {
//     return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success...");
// })};

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promiss fullfilled", res);
// });

// let pr1 = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("I am promise1...");
//             resolve("data 1 success");
//         },4000);
//     });
// };

// let pr2 = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("I am promise2...");
//             resolve("data 2 success");
//         },4000);
//     });
// };

// promiss chainning

// console.log("fetching data 1...");
// let p1 = pr1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data 2...");
//     let p2 = pr2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });

// function hello(dataId) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log(dataId);
//             resolve("success...");
//         },2000);
//     });
// };

// async function getRes() {
//     setTimeout(() => {
//         console.log("fetching data 1");
//     },1000)
//     await hello(1);
//     setTimeout(() => {
//         console.log("fetching data 2");
//     },1000)
//     await hello(2);
//     setTimeout(() => {
//         console.log("fetching data 3");
//     },1000)
//     await hello(3);
//     setTimeout(() => {
//         console.log("fetching data 4");
//     },1000)
//     await hello(4);
//     setTimeout(() => {
//         console.log("fetching data 5");
//     },1000)
//     await hello(5);
//     setTimeout(() => {
//         console.log("fetching data 6");
//     },1000)
//     await hello(6);

// };
// getRes();

// ye alag hai bhai ife naam hai iska...
// (() => {
//     console.log("hlw");
// })();

// const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//     console.log("geting  data...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     let val = data[0].text;
//     const body = document.querySelector("body");
//     let h1 = document.createAttribute("h1").textContent = val;
//     body.append(h1);

// };

// getFacts();

// let prnt1 = document.querySelector("body");
// let btn1 = document.querySelector(".btn1");
// let inp1 = document.querySelector(".inp1");



// btn1.addEventListener("click" , () => {
//     let para = document.createElement("p");


//         if (inp1.value === "Bittu Gupta" || inp1.value === "Deepak Gupta") {
//             para.textContent = "This user is already exist in our server...";
//         }else if (inp1.value === "" || inp1.value === " ") {
//             para.textContent = "Fill the bar...";
//         }else {
//             para.textContent = "Congratulations your account is ready...";
//         }
//     prnt1.appendChild(para);
// });
// }

function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);
  
  
  ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  
  ScrollTrigger.refresh();
  
  }
  init()

document.addEventListener('mousemove', (e) => {
    const homeContent = document.querySelector('.home-content');
    const x = (window.innerWidth / 6 - e.pageX) / 30;
    const y = (window.innerHeight / 8 - e.pageY) / 30;
    
    homeContent.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

const contact = document.querySelector(".header .navbar a:nth-child(4)");
const hContact = document.querySelector(".header .contact");
const cross = document.querySelector(".header .contact .top i");

contact.addEventListener("click", () => {
    // hContact.style.display = "block";
    hContact.style.right = "0%";
});
cross.addEventListener("click", () => {
    // hContact.style.display = "block";
    hContact.style.right = "-100%";

});

// Text Animation

let tl = gsap.timeline({
    
    scrollTrigger:{
        trigger:"#about",
        scroller:".wrapper",
        // markers:true,
        start:"top 80%",
        end:"top top",
        scrub:1,
        // pin:true,
    },
});

tl.from("#about ul li", {
    y: 200,
    opacity: 0,
    duration:1,
    stagger: 0.3 
});
