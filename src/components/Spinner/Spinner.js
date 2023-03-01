import React from 'react';
import './Spinner.css';

const SpinnerComp = () => {
  return (
    <div className="flex spinner-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Spinner = React.memo(SpinnerComp);
export default Spinner;
