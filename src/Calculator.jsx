import React from 'react'

export default function Calculator() {
  const [count, setCount] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);
  const [number, setNumber] = React.useState(0);
  const inputRef = React.useRef(null);
  const [start, setStart] = React.useState(false)

  const startCounter = (event) => {
    event.preventDefault();
    const numberToAdd = (number / 60) / 60;
    inputRef.current.value = '';
    if (intervalId) return;
    const id = setInterval(() => {
      setCount(prevCount => +((prevCount + +(numberToAdd)).toFixed(3)));
    }, 1000);
    setIntervalId(id);
    setStart(prev => !prev)
  };

  const stopCounter = (event) => {
    event.preventDefault();
    clearInterval(intervalId);
    setIntervalId(null);
    setCount(0);
    setStart(false)
  };

  const pauseCounter = (event) => {
    event.preventDefault();
    clearInterval(intervalId);
    setIntervalId(null);
    setStart(prev => !prev)
  };

  React.useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="calculator--container">
      <form className="form--container">
        <div className='label--container'>
          <label className="calculator--label" htmlFor="number">Enter your hourly rate</label>
        </div>
        <div className='input--container'>
          <input
            ref={inputRef}
            className="calculator--input"
            type="text"
            id='number'
            //value={number}
            onChange={event => setNumber(event.target.value)}
          />
        </div>
        <div className="button--container">
          {!start && <button className="calculator--button" type="submit" onClick={startCounter}>Start Tracker</button>}
          {start && <button type="submit" onClick={pauseCounter}>Pause</button>}
          <button type="submit" onClick={stopCounter}>Restart</button>
        </div>
      </form>
      <div className="res">results:{count}</div>
    </div>
  )
}