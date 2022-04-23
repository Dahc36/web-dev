const NAV_LINKS = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', href: 'about.html' },
  { label: 'Contact', href: 'contact.html' },
];

function renderNavBar() {
  const navList = document.createElement('ul');
  navList.setAttribute('class', 'nav');
  for (const link of NAV_LINKS) {
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', link.href);
    linkElement.innerHTML = link.label;

    if (window.location.href.split('/').pop() === link.href) {
      linkElement.setAttribute('class', 'active');
    }

    const listItem = document.createElement('li');
    listItem.appendChild(linkElement);
    navList.appendChild(listItem);
  }

  const navRoot = document.getElementById('nav-bar');
  navRoot.setAttribute('class', 'nav-bar');

  navRoot.appendChild(navList);

  const logo = document.createElement('img');
  logo.setAttribute('src', 'images/logo.svg');
  logo.setAttribute('width', '25%');
  logo.setAttribute('alt', 'Logo');
  navRoot.appendChild(logo);
}

renderNavBar();
