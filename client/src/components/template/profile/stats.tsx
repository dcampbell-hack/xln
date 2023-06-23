import React, { useState, useEffect } from 'react'
import Chart from "../../utils/charts";

const Stats: React.FC = () => {
    return <div className="stats-container">
      <div className="stats-chart-container">
        <div className="stats-chart-price">
          <h1>$100,000,000</h1>
          <p>+$43.29(+0.04) Today</p>
        </div>
        <div className="stats-chart">
          <Chart type="line" chartData={{ label: "Label", distribution: [] }} />
        </div>
      </div>
      <div  className="stats-list-panel">
        <div className="stats-header"></div>
        <div className="stats-list-tokens"></div>
      </div>
    </div>;
  };

  export default Stats