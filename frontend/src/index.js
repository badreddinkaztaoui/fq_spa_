import Home from './js/views/Home';
import Chat from './js/views/Chat';
import Game from './js/views/Game';
import Gambling from './js/views/Gambling';
const routes = {
    "/": { path: '/', title: 'Home', component: Home},
    "/chat": { path: '/chat', title: 'Chat', component: Chat},
    "/game": { path: '/game', title: 'Game', component: Game},
    "/gambling" : { path: '/gamblin', title: 'Gambling', component: Gambling},
}

const router = () => {

    const root = document.getElementById("root");
    const view = routes[window.location.pathname];

    if (view) {
        document.title = view.title;
        root.innerHTML = view.component();
    } else {
        root.innerHTML = "<h1>404 - Page Not Found</h1>";
    }
}

const navigateTo = url => {
    window.history.pushState(null, null, url);
    router();
}

window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});

window.addEventListener('popstate', router);
window.addEventListener("DOMContentLoaded", router);