function CounterButtons({onIncrement, onDecrement, onReset, canIncrement, canDecrement}) {
    return (
        <div className="flex justify-center gap-4 mb-6">
            <button
                onClick={onIncrement}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300"
                disabled={!canIncrement}
                aria-label="Increment count"
            >
                Increment
            </button>
            <button
                onClick={onDecrement}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors disabled:bg-red-300"
                disabled={!canDecrement}
                aria-label="Decrement count"
            >
                Decrement
            </button>
            <button
                onClick={onReset}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                aria-label="Reset count"
            >
                Reset
            </button>
        </div>
    );
}

export default CounterButtons;
