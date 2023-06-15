// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let mainEl = document.querySelector('main');
// console.log(mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.setAttribute('class', 'flex-ctr');

let topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.setAttribute('class', 'flex-around');

for(let i = 0; i < menuLinks.length; i++){
    const aTag = document.createElement("a");
    topMenuEl.appendChild(aTag);
    aTag.setAttribute('href', menuLinks[i].href);
    aTag.textContent = menuLinks[i].text;      
}



let subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.setAttribute('class', 'flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0;

const topMenuLinks = document.querySelectorAll('a')
console.log(topMenuLinks);

let showingSubMenu = false;

topMenuEl.addEventListener('click', function(evt){
  evt.preventDefault();  
  if(evt.target.localName !== 'a') {      
    return;
  }
  if(evt.target.getAttribute(className) === 'active'){
    evt.target.classList.remove('active')
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }
  topMenuLinks.classList.remove('active');
  evt.target.classList.add('active')
  console.log(evt.target.textContent)  
});
// git add . FIRST STEP
// git commit -m "descriptive of changes"
// git push