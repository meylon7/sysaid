import React from 'react'
import Calculator from "../features/calculator/Calculator";
import Header from '../common/components/Header';
import History from '../pages/History';
import '../styles/tab.css'
const Main = () => {

  return (
    <>
      <Header />
      <div className="tabs">
        <input type="radio" name="tabs" id="tab1" checked />
        <label htmlFor="tab1">
          <span>Calculator</span>
        </label>
        <input type="radio" name="tabs" id="tab2" />
        <label htmlFor="tab2">
          <span>History</span>
        </label>

        <div id="tab-content1" className="tab-content">
          <Calculator />
        </div>
        <div id="tab-content2" className="tab-content">
          <History />
        </div>
      </div>
    </>
  )
}

export default Main