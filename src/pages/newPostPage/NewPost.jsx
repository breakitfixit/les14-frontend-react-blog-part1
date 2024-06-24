import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import './NewPost.css'
import DateConversion from "../../helpers/DateConversion.jsx";

function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();


    // function handleFormSubmit(data) {
    //
    //     console.log(data);
    // }

    function handleFormSubmit(data) {
        const newData = {
            ...data,
            shares: 0,
            comments: 0,
            created: DateConversion(new Date().toISOString()),
        };
        console.log(newData)
        navigate('/overview');
    }


    return (
        // Titel
        // Subtitel
        // Auteur
        // Bericht
        <div className={"new-post"}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>

                <label htmlFor="title-field">
                    Titel:<br/>
                    <input
                        className="input-small"
                        type="text"
                        id="title-field"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                        })}
                    />
                </label>
                {errors.title && <p>{errors.title.message}</p>}
                <br/>
                <label htmlFor="subtitle-field">
                    Subtitel:<br/>
                    <input
                        className="input-small"
                        type="text"
                        id="subtitle-field"
                        {...register("subtitle", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                        })}
                    />
                    {errors.subtitle && <p>{errors.subtitle.message}</p>}
                </label>
                <br/>
                <label htmlFor="author-field">
                    Auteur:<br/>
                    <textarea
                        className="input-small"
                        id="author-field"
                        {...register("author", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                        })}
                    >
                    </textarea>
                    {errors.author && <p>{errors.author.message}</p>}
                </label>
                <br/>
                <label htmlFor="content-field">
                    Bericht:<br/>
                    <textarea
                        className="input-large"
                        id="content-field"
                        placeholder="Laat je bericht achter"
                        rows="4"
                        cols="40"
                        {...register("message", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                            minLength: {
                                value: 300,
                                message: 'Het bericht moet minimaal 300 tekens bevatten',
                            },
                            maxLength: {
                                value: 2000,
                                message: 'Het bericht mag maximaal 2000 tekens bevatten',
                            },
                        })}
                    ></textarea>
                    {errors["message"] && <p>{errors["message"].message}</p>}
                </label>
                <br/>
                <button
                    type="submit">
                    Versturen
                </button>
            </form>
        </div>
    )
        ;


}


export default NewPost