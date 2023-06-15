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


let showingSubMenu = false;

topMenuEl.addEventListener('click', function(evt){
  evt.preventDefault();  
  if(evt.target.localName !== 'a') {      
    return;
  }
  if(evt.target.getAttribute("class") === 'active'){
    evt.target.classList.remove('active')
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }
  for (let i of topMenuLinks) {i.classList.remove('active');}
  evt.target.classList.add('active')  
  let subLink;
  for(let i of menuLinks) {
    if(i.text === evt.target.textContent){
      subLink = i;
    }
  }  
  console.log(subLink)
  if (evt.target.textContent==="about"){
      showingSubMenu = false;
      mainEl.innerHTML = `<h1>about</h1>`
  }
  else {
      showingSubMenu = true;
  }

  let insideSubLinks = subLink.subLinks;
  console.log(insideSubLinks)

  function buildSubMenu(object) { 
    subMenuEl.innerHTML = '';
    for(let i = 0; i < object.length; i++) {
      const aTag = document.createElement("a"); 
      subMenuEl.appendChild(aTag);      
      aTag.setAttribute('href', object[i].href);
      aTag.textContent = object[i].text;      
    }
  }

  if(showingSubMenu === true) {
    buildSubMenu(insideSubLinks); 
    subMenuEl.style.top = '100%';
    
    
  } else {
    subMenuEl.style.top = 0;
  }    

  subMenuEl.addEventListener('click', function(evt){
    evt.preventDefault();
    if(evt.target.localName !== 'a') {      
      return;
    }    
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    for (let i of topMenuLinks) {i.classList.remove('active');} 
    // console.log(evt.target)
    mainEl.innerHTML = `<h1> ${evt.target.textContent} </h1>`;
    
  });
  
});


//   if(evt.target.getAttribute('class') === 'active'){
//     evt.target.classList.remove('active')
//     showingSubMenu = false;
//     subMenuEl.style.top = 0;
//     return;
//   }
//   topMenuLinks.classList.remove('active');
//   evt.target.classList.add('active')
//   console.log(evt.target.textContent)  
// });
// git add . FIRST STEP
// git commit -m "descriptive of changes"
// git push