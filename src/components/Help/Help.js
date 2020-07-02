import React from 'react';
import './Help.css'

const Help = () => {
  return (
      <div className={"Help"}>
        <h4>Keyboard shortcuts</h4>
        <ul>
          <li><b>v</b>&rarr; Kick</li>
          <li><b>d</b>&rarr; Snare</li>
          <li><b>f</b>&rarr; Hi Tom</li>
          <li><b>g</b>&rarr; Middle Tom</li>
          <li><b>h</b>&rarr; Low Tom</li>
          <li><b>e</b>&rarr; Hi Hat</li>
          <li><b>r</b>&rarr; Crash</li>
          <li><b>y</b>&rarr; Ride</li>
        </ul>
      </div>
  )
}

export default Help;
