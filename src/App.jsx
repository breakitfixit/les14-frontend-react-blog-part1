import './App.css'
// import logo from './assets/logo-white.png'
import {Routes, Route, NavLink, useNavigate} from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import NewPost from './pages/newPostPage/NewPost.jsx';
import NotFound from './pages/notFoundPage/NotFound.jsx';
import Overview from './pages/overviewPage/Overview.jsx';
import logoMedium from './assets/logo-medium.png';
import Posts from './pages/postsPage/Posts.jsx';


function App() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navigation-bar">
                <div className="inner-navigation-bar">
                    <button type={"button"} onClick={() => navigate('/')}>
                        <img src={logoMedium} alt="logo with link to homepage"/>
                    </button>
                    <ul className="main-navigation">
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/">Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/overview">Overview
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/posts">
                                Alle Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/new">
                                Nieuwe post maken
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/overview" element={<Overview/>}/>
                    <Route path="/posts/:id" element={<Posts/>}/>
                    <Route path="/new" element={<NewPost/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                {/*
               <div className="page-container">
                <img src={logoMedium} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>
            */}
            </main>

        </>
)
}


export default App
