// src/pages/PostDetail.jsx
import {Link, useParams } from "react-router-dom";
import post from "../../constants/data.json";
import overview from "../overviewPage/Overview.jsx";

function PostDetails() {
    const { id } = useParams();
    const postDetails = post.find((p) => p.id === Number(id));

    return (
        <div>
            <h2>{postDetails.title}</h2>
            <h3>{postDetails.subtitle}</h3>
            <p>Geschreven door {postDetails.author} op {postDetails.created}</p>
            <p>{postDetails.content}</p>
            <p>{postDetails.comments} reacties - {postDetails.shares} keer gedeeld</p>
            <p><Link to={'/overview'}>naar de overzichtspagina</Link></p>
        </div>
    );
}

export default PostDetails;