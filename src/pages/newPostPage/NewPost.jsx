import {useForm} from 'react-hook-form';
import {useParams} from "react-router-dom";
import './NewPost.css'

function NewPost() {
    const { register, handleSubmit } = useForm();



    function handleFormSubmit(data) {
        console.log(data);
    }


    return(
        // Titel
        // Subtitel
        // Auteur
        // Bericht
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label htmlFor="title-field">
                Titel:
                <input
                    type="text"
                    id="title-field"
                    {...register("title")}
                />
            </label>

            <label htmlFor="subtitle-field">
                Subtitel:
                <input
                    type="text"
                    id="subtitle-field"
                    {...register("subtitle")}
                />
            </label>

            <label htmlFor="author-field">
                Auteur:
                <textarea
                    id="author-field"
                    rows="4"
                    cols="40"
                    placeholder="Laat je bericht achter"
                    {...register("author-content")}
                >
        </textarea>
            </label>

            <label htmlFor="content-field">
                Bericht:
                <textarea
                    {...register("message-content", {
                        required: true,
                        minlength: 300,
                        maxLength: 2000,
                    })}
                ></textarea>
            </label>

            <button type="submit">
                Versturen
            </button>
        </form>
    );


}


export default NewPost