import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState(null);
  const [index, setIndex] = useState('');

  const renderSeenIndexes = () => {
    return seenIndexes.map(({ number }) => number).join(', ');
  };

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      )
    }

    return entries;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', { index });

    setIndex('');
  };

  useEffect(() => {
    const fetchValues = async () => {
      const vs = await axios.get('/api/values/current');
      setValues(vs.data)
    };
  
    const fetchIndexes = async () => {
      const idxes = await axios.get('/api/values/all');
      setSeenIndexes(idxes.data);
    };

    fetchValues();
    fetchIndexes();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter your index:</label>
        <input type="text" name="" id="" value={index} onChange={event => setIndex(event.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated values:</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;
