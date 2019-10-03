/*
  - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
  - there is **NO** need to specify the type of hit (single, double, etc).
  - changes recorded on this component should update the information shown by the `Display` component.
*/
import React from 'react';

const Dashboard = ({ strikes, balls, foul, clearStats }) => {
  return (
    <div>
      <button
        onClick={strikes}>
        Strike
      </button>
      <button
        onClick={balls}>
        Ball
      </button>
      <button
        onClick={foul}>
        Foul
      </button>
      <button
        onClick={clearStats}>
        Clear Stats
      </button>
    </div>
  );
}

export default Dashboard;