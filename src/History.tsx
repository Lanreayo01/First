import React from 'react'
import './History.css'
import back from './assets/chevron-left.png'
import vector from './assets/Vector.png'

function History() {
  return (
    <div className='History'>
      <div className='history-top-side'>
        <div className='history-top-section'>
            <div><img className='back-button' src={back}/></div>
            <div className='top-header'> History</div>
        </div>
      </div>
      <div className='history-main'>
      <div className='history-body'>
        <div><img src={vector}/> </div>
        <div><h2>No history yet</h2></div>
        <div><p>hit the orange button down<br/> below to create an order</p></div>
      </div>
      </div>
    </div>
  )
}

export default History
