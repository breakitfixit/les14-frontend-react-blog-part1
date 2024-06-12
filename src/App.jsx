import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import NewPost from './pages/newPostPage/NewPost.jsx';
import NotFound from './pages/notFoundPage/NotFound.jsx';
import Overview from './pages/overviewPage/Overview.jsx';
import logoMedium from './assets/logo-medium.png';
import Posts from './pages/postsPage/Posts.jsx';


function App() {
    return (
        <>
            <nav>
            {/*<div /!*className="page-container"*!/>*/}
            {/*    /!*<img src={logoMedium} alt="Company logo"/>*!/*/}
            {/*    /!*<h1>Begin hier met het maken van jouw blog-applicatie!</h1>*!/*/}
            {/*</div>*/}
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/overview" element={<Overview/>}/>
                    <Route path="/posts/:id" element={<Posts/>} />
                    <Route path="/new" element={<NewPost/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </>

)
}


export default App
