// src/App.tsx
import React from 'react';
import CostCalculator from './CostCalculator';

function App() {
  // You can change 0.5 to any price per hour you want to test
  return <CostCalculator priceOfSingleVMPerHour={0.5} />;
}

export default App;
