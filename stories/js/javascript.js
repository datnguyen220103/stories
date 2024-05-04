
// // add class
// function addClass(el, className){
//     var oldClass = el.getAttribute('class');
//     if(oldClass){
//         // khac null
//         if(oldClass.indexOf(className) === -1) 
//         //kiem tra ton tai class muon them khong: indexOf
//         {
//             var newClass = oldClass + " " + className;
//             el.setAttribute("class", newClass);
//         }
//     }else{
//         el.setAttribute("class", className);
//     }
// }
// // remove
// function removeClass(el, className){
//     var oldClass = el.getAttribute('class');
//     // console.log(el.classList.value);
//     if(oldClass){
//         var arroldClass = oldClass.split(" ");
//         var location = arroldClass.indexOf(className);
//         if(location!==-1){
//             arroldClass.splice(location,1);
//             var stringClass = arroldClass.join(" ");
//             el.setAttribute("class", stringClass);
//         }

//     }
// }

// console.log(body)
// addClass(body,"heheheheh");
// removeClass(body,"hoho")
// search
var btnSearchmain = document.querySelector(".btn-open-main-search");
console.log(btnSearchmain)
var body = document.querySelector("body");
btnSearchmain.addEventListener("click",function(event){
    if(body.classList.value.indexOf('open-main-search-form')===-1){
        body.classList.add('open-main-search-form')
    }else{
        body.classList.remove('open-main-search-form')
    }
})
// menu topic
var btnMenuTopic = document.querySelector('.btn-menu-topic')
var btnCloseTopic = document.querySelector('.btn-close-menu-topic')
var btnCloseTopic2 = document.querySelector('.background-gray')
btnMenuTopic.addEventListener("click",function(event){
    if(body.classList.value.indexOf('main-menu-topic-open')===-1){
        body.classList.add('main-menu-topic-open')
    }
})
btnCloseTopic.addEventListener("click",function(event){
    if(body.classList.value.indexOf('main-menu-topic-open')!=-1){
        body.classList.remove('main-menu-topic-open')
    }
})
btnCloseTopic2.addEventListener("click",function(event){
    if(body.classList.value.indexOf('main-menu-topic-open')!=-1){
        body.classList.remove('main-menu-topic-open')
    }
})
// function abc(el,value){
//     if(el.classList.value.indexOf(value)===-1){
//         el.classList.add(value);
//     }else{
//         el.classList.remove(value);
//     }
// }
// btnSearchmain.addEventListener("click",abc(body,"open-main-search-form"))
var btnBackTop = document.querySelector('#btn-back-top')
console.log(btnBackTop)
btnBackTop.addEventListener("click",()=>{
    document.body.scrollTop = 0,1000;
    document.documentElement.scrollTop = 0,1000;
})
document.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop <= 300){
        btnBackTop.style.display = "none";
    }else{
        btnBackTop.style.display = "block";
    }
})


var boxList = document.querySelector('.box-list')
var closeBoxlist = document.querySelector('.close-box-list')
document.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop <= 1300){
        boxList.style.display = "none";
    }else{
        boxList.style.display = "block";
    }
})
closeBoxlist.addEventListener("click",()=>{
    boxList.style.display = "none";
})
