const menuIcon=document.querySelector(".hamburger")
const noneMenu=document.querySelector('.noneMenu')
const exitIcon=document.querySelector(".exitIcon")

menuIcon.addEventListener('click',()=>{

  noneMenu.classList.add("noneMenuFlex")


})

exitIcon.addEventListener('click',()=>{
  noneMenu.classList.toggle('noneMenuFlex')
})