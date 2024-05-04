var btnSearchmain = document.querySelector(".btn-open-main-search");
var body = document.querySelector("body");
var btnMenuTopic = document.querySelector('.btn-menu-topic')
var btnCloseTopic = document.querySelector('.btn-close-menu-topic')
var btnCloseTopic2 = document.querySelector('.background-gray')
var btnBackTop = document.querySelector('#btn-back-top')
var boxList = document.querySelector('.box-list')
var closeBoxlist = document.querySelector('.close-box-list')

function addremove(el,eladd, className){
    el.addEventListener("click",()=>{
        if(eladd.classList.value.indexOf(className)===-1){
            eladd.classList.add(className)
        }else{
            eladd.classList.remove(className)
        }
    })
}

addremove(btnSearchmain,body,'open-main-search-form')