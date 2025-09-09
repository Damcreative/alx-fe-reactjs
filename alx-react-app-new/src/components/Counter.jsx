import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(prev - 1, -9999)); // allows negatives; change if you want to block
  const reset = () => setCount(0);

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '16px',
      margin: '16px auto',
      maxWidth: '360px',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
    }}>
      <h2 style={{ margin: '0 0 8px' }}>Counter</h2>

      <p style={{ fontSize: '28px', fontWeight: '600', margin: '8px 0' }}>
        {count}
      </p>

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={increment}
          style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '6px' }}
        >
          Increment
        </button>

        <button
          onClick={decrement}
          style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '6px' }}
        >
          Decrement
        </button>

        <button
          onClick={reset}
          style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '6px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
