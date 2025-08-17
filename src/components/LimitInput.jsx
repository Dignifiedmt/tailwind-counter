function LimitInput({onSubmit, inputRef}) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col items-center">
            <label htmlFor="limitInput" className="text-sm text-gray-600 mb-2">
                Set Count Limit (leave blank for unlimited)
            </label>
            <div className="flex gap-2 w-full">
                <input
                    id="limitInput"
                    type="number"
                    min="0"
                    ref={inputRef}
                    placeholder="Enter limit"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-describedby="limit-error"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                    aria-label="Set limit"
                >
                    Set
                </button>
            </div>
        </form>
    );
}

export default LimitInput;
