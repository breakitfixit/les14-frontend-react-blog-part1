import "./Overview.css"
import post from "../../constants/data.json"
import {useParams, Link} from "react-router-dom";

function Posts() {
    // const { id } = useParams();

    return (
        <>
            <h1>Check hieronder een van de {post.length} posts!</h1>
            <ul className="posted-content">
                {post.map((posts) => (
                    <li key={posts.id}>
                        <Link to={`/overview/${posts.id}`}>{posts.title} </Link>({posts.author})
                        <br/>
                        {posts.comments.length} reacties - {posts.shares} keer gedeeld
                        <br/>
                    </li>
                ))}
            </ul>
            {/*<div>Posts ID = {id}</div>*/}
        </>


    )
}

export default Posts