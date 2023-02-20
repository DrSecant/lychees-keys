const { Zoom, List, Fab, Box } = window['MaterialUI'];
const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const HashRouter = ReactRouterDOM.HashRouter;

const App = () => (
    <HashRouter>
        {/* Header */}
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <div class="header">
                <div class="logo-wrapper">
                    <img class="logo" src="https://cdn.glitch.global/b5f62b77-7a2a-4959-912b-e003c8a30e5e/NewLogo-01.svg?v=1674705919462" />
                </div>
                <nav class="menu">
                    <ul class="nav-links">
                        {/* Home */}
                        <li class="nav-link"><Link to="/">Portfolio</Link></li>
                        {/* Portfolio */}
                        <li class="nav-link"><Link to="/reel">Reel</Link></li>
                        {/* Contact */}
                        <li class="nav-link"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </Slide>

        {/* Page Body */}
        <div id="pageContent">
            <Route path="/" exact component={Portfolio} />
            <Route path="/reel" component={Reel} />
            <Route path="/contact" component={Contact} />
        </div>

        {/* Footer */}
        <Box className="fab-menu">
            <Zoom in={true} mountOnEnter unmountOnExit>
                <Fab>
                    <i className="fa-brands fa-vimeo-v fa-xl"></i>
                </Fab>
            </Zoom>
            <Zoom in={true} mountOnEnter unmountOnExit>
                <Fab>
                    <i className="fa-brands fa-instagram fa-xl"></i>
                </Fab>
            </Zoom>
            <Zoom in={true} mountOnEnter unmountOnExit>
                <Fab>
                    <i className="fa-solid fa-envelope fa-xl"></i>
                </Fab>
            </Zoom>
        </Box>
    </HashRouter>
);

ReactDOM.render(<App />, document.querySelector('#root'));