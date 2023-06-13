// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector('main');
console.log(mainEl);

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

// git add . FIRST STEP
// git commit -m "descriptive of changes"
// git push