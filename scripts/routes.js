const HOME_FILE_URL = '../pages/home.html';
let HOME_CONTENT = null;
const PORTFOLIO_FILE_URL = '../pages/portfolio.html';
let PORTFOLIO_CONTENT = null;
const CONTACT_FILE_URL = '../pages/contact.html';
let CONTACT_CONTENT = null;

$(document).ready(function() {
  $.get(HOME_FILE_URL, function(data) {
    HOME_CONTENT = data;
    router();
  }, 'html');
  $.get(PORTFOLIO_FILE_URL, function(data) {
    PORTFOLIO_CONTENT = data;
    router();
  }, 'html');
  $.get(CONTACT_FILE_URL, function(data) {
    CONTACT_CONTENT = data;
    router();
  }, 'html');
});

// Components
const HomeComponent = {
  render: () => {
    return HOME_CONTENT;
  }
} 

const PortfolioComponent = {
  render: () => {
    return PORTFOLIO_CONTENT;
  }
} 

const ContactComponent = {
  render: () => {
    return CONTACT_CONTENT;
  }
} 

const ErrorComponent = {
  render: () => {
    return `
      <section>
        <h1>Error</h1>
        <p>Oops! This page does not exist!</p>
      </section>
    `;
  }
}

// Routes 
var ROUTE_KEY = true;
const lockRouter = () => ROUTE_KEY = false;
const unlockRouter = () => ROUTE_KEY = true;

const routes = [
  { path: '/', component: HomeComponent, },
  { path: '/portfolio', component: PortfolioComponent, },
  { path: '/contact', component: ContactComponent, },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const router = () => {
  if (ROUTE_KEY) {
    lockRouter();
    //  Find the component based on the current path
    const path = parseLocation();

    // If there's no matching route, get the "Error" component
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};

    // Render the component in the "app" placeholder
    document.getElementById('pageContent').innerHTML = component.render();
    unlockRouter();
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);