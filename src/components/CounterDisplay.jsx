function CounterDisplay({count, limit}) {
    return (
        <div className="text-center mb-6">
            <p className="text-4xl font-semibold text-blue-600">{count}</p>
            {limit !== null && <p className="text-sm text-gray-500 mt-1">Limit: {limit}</p>}
        </div>
    );
}

export default CounterDisplay;
