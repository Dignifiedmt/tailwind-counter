function ErrorMessage({error}) {
    if (!error) return null;
    return (
        <p className="text-red-500 text-sm text-center mb-4" id="limit-error">
            {error}
        </p>
    );
}

export default ErrorMessage;
