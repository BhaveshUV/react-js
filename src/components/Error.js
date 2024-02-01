import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div id="error">
            <h3>Oops! Unable to load the page!</h3>
            <p>{err.status}: {err.statusText}</p>
        </div>
    )
}

export default Error;