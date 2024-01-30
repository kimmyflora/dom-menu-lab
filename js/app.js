// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// 1.0
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

//2.0
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

//3.0
const navEl = document.querySelector('nav')
menuLinks.forEach(function (link) {
  const aEl = document.createElement('a');
  console.log(aEl)
  aEl.innerText = link.text;
  aEl.setAttribute('href', link.href);
  navEl.appendChild(aEl);
})

// 4.0
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//DOM part 2 

// 5.1 Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

//5.2 Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function (evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);
  // 5.3
  showingSubMenu = false;
  if (link.classList.contains('active')) {
    link.classList.remove('active');
    subMenuEl.style.top = '0'
    return;
  }

  //5.6 
  const foundLink = menuLinks.find(function(linkObj){
    return linkObj.text === link.textContent
  })
  
  if (foundLink.subLinks) {
    showingSubMenu = true;
  } 
  
  //5.7
  if (showingSubMenu) {
    buildSubMenu(foundLink.subLinks)
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0'
    mainEl.innerHTML = '<h1>about</h1>'
  }
  // // 5.4 add code to the bottom 
topMenuLinks.forEach(function (link) {
  link.classList.remove('active')

})

  link.classList.add('active')

}); 

// 5.8 
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = ''
    subLinks.forEach(function(subLink){
    const aEl = document.createElement('a')
    aEl.setAttribute('href', subLink.href);
    aEl.textContent = subLink.text;
    subMenuEl.appendChild(aEl);

    })
    }
  
// Task 6.0k
subMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== 'A') return;
  showingSubMenu = false;
  subMenuEl.style.top = '0';

  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });

  link.classList.add('active');

  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});
