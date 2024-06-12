import './Posts.css'
import {useParams} from "react-router-dom";

function Posts() {
    const { id } = useParams();

    return (
        <div>Het posts nummer is {id}</div>
    )
}

export default Posts