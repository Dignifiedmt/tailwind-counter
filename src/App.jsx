import { useState, useRef } from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';
import LimitInput from './components/LimitInput';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(null); // null for unlimited
  const [error, setError] = useState('');
  const limitInputRef = useRef(null);

  const handleIncrement = () => {
    if (limit === null || count < limit) {
      setCount((prev) => prev + 1);
      setError('');
    } else {
      setError(`Cannot increment beyond limit of ${limit}`);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      setError('');
    } else {
      setError('Count cannot be negative');
    }
  };

  const handleReset = () => {
    setCount(0);
    setError('');
  };

  const handleSetLimit = (e) => {
    e.preventDefault();
    const inputValue = limitInputRef.current.value.trim();

    if (inputValue === '') {
      setLimit(null);
      setError('');
      return;
    }

    const newLimit = parseInt(inputValue, 10);
    if (isNaN(newLimit) || newLimit < 0) {
      setError('Please enter a valid positive number');
      return;
    }

    if (newLimit < count) {
      setCount(newLimit);
    }
    setLimit(newLimit);
    setError('');
    limitInputRef.current.value = ''; // Clear input
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Counter App
        </h1>
        <CounterDisplay count={count} limit={limit} />
        <ErrorMessage error={error} />
        <CounterButtons
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          canIncrement={limit === null || count < limit}
          canDecrement={count > 0}
        />
        <LimitInput onSubmit={handleSetLimit} inputRef={limitInputRef} />
      </div>
    </div>
  );
}

export default App;