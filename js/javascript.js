// class aktiv search
const searchForm = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document.querySelector('#search-button'). onclick = (e) => {
    searchForm.classList.toggle('active');
    searchbox.focus();
    e.preventDefault();
};



const navbarNav = document.querySelector ('.navbar-nav');
//ketika hamburger menu di kilk//

document.querySelector ('#hamburger-menu'). onclick = () => {
    navbarNav.classList.toggle('active');

};

// class aktiv shoping cart
const shopingcart = document.querySelector ('.shoping-cart');
document.querySelector('#shopping-cart-button'). onclick = (e) => {
shopingcart.classList.toggle('active')
e.preventDefault();
}

//klik di luar elemen 
const sb = document.querySelector ('#search-button');
const hm = document.querySelector ('#hamburger-menu');
const sc = document.querySelector ('#shopping-cart-button')

document.addEventListener('click', function (e){
if (!sb.contains(e.target) && !searchForm.contains(e.target)){
    searchForm.classList.remove('active');
}
if (!hm.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
}
if (!sc.contains(e.target) && !shopingcart.contains(e.target)){
    shopingcart.classList.remove('active');
}
});

//box item

const boxItem = document.querySelector('#item-detail-box')
const Itemboxbutton = document.querySelector('.box-item-button')
Itemboxbutton.forEach((btn) => {
    btn.onclick = (e) =>{
        const content = btn.getAttribute ('data-content');
        boxItem.style.display = 'flex';
        e.preventDefault ();
    };

})

// klik tombol close box
document.querySelector('.box .close-icon').onclick = (e) =>{
    boxItem.style.display ='none';
    e.preventDefault ();

}
// close di luar box
window.onclick = (e) =>  {
    if (e.target === boxItem){
        boxItem .style.display = 'none'
    }
}
