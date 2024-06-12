import './Posts.css'
import {useParams} from "react-router-dom";

function Posts() {
    const { id } = useParams();

    return (
        <div>Posts ID = {id}</div>
    )
}

export default Posts