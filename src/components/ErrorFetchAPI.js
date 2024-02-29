const ErrorFetchAPI = ({err}) => {
    console.log(err);
    return (
        <div className="text-center p-4">
            <h3 className="text-2xl text-red-700 font-bold mb-2">Oops! Unable to load the page!</h3>
            <p className="text-yellow-500">{err.originalStatus}: {err.status}</p>
        </div>
    )
}

export default ErrorFetchAPI;