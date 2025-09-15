import React, { useState } from 'react';

interface Props {
  priceOfSingleVMPerHour: number;
}

export default function CostCalculator({ priceOfSingleVMPerHour }: Props) {
  const [vmNumber, setVmNumber] = useState<string>('1');

  const parsed = Number(vmNumber);
  const count = Number.isFinite(parsed) && parsed > 0 ? parsed : 0;

  const costPerHour = count * priceOfSingleVMPerHour;
  const costPerDay = costPerHour * 24;
  const costPerMonth = costPerDay * 30;
  const costPerYear = costPerHour * 8760;

  const format = (n: number) => {
    return Number.isInteger(n) ? n.toString() : Number.parseFloat(n.toFixed(6)).toString();
  };

  return (
    <div>
      <h1>VM Cost Calculator</h1>

      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmNumber}
        onChange={(e) => setVmNumber(e.target.value)}
      />

      <div>
        <p>Cost per hour: {format(costPerHour)}</p>
        <p>Cost per day: {format(costPerDay)}</p>
        <p>Cost per month: {format(costPerMonth)}</p>
        <p>Cost per year: {format(costPerYear)}</p>
      </div>
    </div>
  );
}
