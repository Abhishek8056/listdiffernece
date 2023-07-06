import React, { useState } from 'react';

const ListDifferenceApp = () => {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [result, setResult] = useState({
    onlyInA: [],
    onlyInB: [],
    inBoth: [],
    combined: []
  });

  const computeDifferences = () => {
    const arrA = listA.split('\n').map(item => item.trim());
    const arrB = listB.split('\n').map(item => item.trim());

    const onlyInA = arrA.filter(item => !arrB.includes(item));
    const onlyInB = arrB.filter(item => !arrA.includes(item));
    const inBoth = arrA.filter(item => arrB.includes(item));
    const combined = [...new Set([...arrA, ...arrB])];

    setResult({
      onlyInA,
      onlyInB,
      inBoth,
      combined
    });
  };

  return (
    <div class="wrapper">
      <div data-reactroot>
        <div>
          <div class="container">
            <div>
              <h2>List Difference Application</h2>
              <div>
                <label>List A:</label>
                <textarea
                  rows={5}
                  value={listA}
                  onChange={e => setListA(e.target.value)}
                />
              </div>
              <div>
                <label>List B:</label>
                <textarea
                  rows={5}
                  value={listB}
                  onChange={e => setListB(e.target.value)}
                />
              </div>
              <button onClick={computeDifferences}>Compute</button>
              <h3>Results:</h3>
              <div>
                <h4>Items present only in A:</h4>
                <ul>
                  {result.onlyInA.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Items present only in B:</h4>
                <ul>
                  {result.onlyInB.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Items present in both A and B:</h4>
                <ul>
                  {result.inBoth.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Items combining both A and B (unique):</h4>
                <ul>
                  {result.combined.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ListDifferenceApp;
