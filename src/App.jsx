import './App.css'
// import logo from './assets/logo-white.png'
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import NewPost from './pages/newPostPage/NewPost.jsx';
import NotFound from './pages/notFoundPage/NotFound.jsx';
import Overview from './pages/overviewPage/Overview.jsx';
import PostDetail from './pages/postDetailsPage/PostDetails.jsx'; // Importeer de component die u wilt weergeven
// import posts from '../../constants/data.json';
// import logoMedium from './assets/logo-medium.png';


function App() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <nav className="navigation-bar">
                <button type={"button"} onClick={() => navigate('/')}></button>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/overview">Alle posts</Link></li>
                    <li><Link to="/new">Nieuwe post</Link></li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/overview" element={<Overview/>}/>
                    <Route path="/overview/:id" element={<PostDetail/>}/>
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

        </div>
    )
}


export default App
