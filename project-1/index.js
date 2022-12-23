let elList = document.querySelectorAll("nav > ul > li");

console.log(elList);

elList.forEach(el =>  { 
    let childEl = el.querySelector(".nav-submenu");
    if(childEl){
        setTimeout(() => {
            childEl.style.opacity = 0;
        }, 10);
        childEl.style.display = 'none';
    }
});
elList.forEach(el => el.addEventListener("mouseenter", function() {
    el.classList.add("nav-a-hover");
    let childEl = el.querySelector(".nav-submenu");
    if(childEl){
        setTimeout(() => {
            childEl.style.opacity = 1;
        }, 10);
        childEl.style.display = 'block';
    }
}));
elList.forEach(el => el.addEventListener("mouseleave", function() {
    el.classList.remove("nav-a-hover");
    let childEl = el.querySelector(".nav-submenu");
    if(childEl){
        setTimeout(() => {
            childEl.style.opacity = 0;
        }, 10);
        childEl.style.display = 'none';
    }
}));