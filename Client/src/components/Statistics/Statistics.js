import React from "react";
import "./Statistics.css";
const Statistics = (props) => {
  const { amount, sold, unsold } = props.response;
  return (
    <div className="box">
      <div className="card">
        <div className="card-header text-center">Transctions Statistics</div>

        <div className="card-body text-center">
          <div className="cardText text-center">
            <p>Total Sale</p>
            <p>{amount}</p>
          </div>
          <div className="cardText text-center">
            <p>Total Sold Items</p>
            <p>{sold}</p>
          </div>
          <div className="cardText text-center">
            <p>Total Not Sold Items</p>
            <p>{unsold}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
