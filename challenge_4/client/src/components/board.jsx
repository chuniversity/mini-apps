import React from 'react';
import App from './app.jsx';

var Board = ({ MouseOver, MouseOut, MouseClick, Play1 }) => (
  <>
    <div className="thedrop">
      <div className="dropcolumn">
        <div className="dsq" id="dsq1" data-col="1" onMouseOver={MouseOver} onMouseLeave={MouseOut} onClick={MouseClick} />
        <div className="dsq" id="dsq3" data-col="2" onMouseOver={MouseOver} onMouseLeave={MouseOut} onClick={MouseClick} />
        <div className="dsq" id="dsq4" data-col="3" onMouseOver={MouseOver} onMouseLeave={MouseOut} onClick={MouseClick} />
        <div className="dsq" id="dsq5" data-col="4" onMouseOver={MouseOver} onMouseLeave={MouseOut} onClick={MouseClick} />
        <div className="dsq" id="dsq6" data-col="5" onMouseOver={MouseOver} onMouseLeave={MouseOut} onClick={MouseClick} />
        <div className="dsq" id="dsq7" data-col="6" onMouseOver={MouseOver} onMouseLeave={MouseOut} onClick={MouseClick} />
        <div className="dsq" id="dsq7" data-col="7" onMouseOver={MouseOver} onMouseLeave={MouseOut} onClick={MouseClick} />
      </div>

    </div>
    <div className="theboard">
      <div id="column1">
        <div className="sq" id="sq11" data-col="1" data-row="1" />
        <div className="sq" id="sq12" data-col="1" data-row="2" />
        <div className="sq" id="sq13" data-col="1" data-row="3" />
        <div className="sq" id="sq14" data-col="1" data-row="4" />
        <div className="sq" id="sq15" data-col="1" data-row="5" />
        <div className="sq" id="sq16" data-col="1" data-row="6" />
      </div>
      <div id="column2">
        <div className="sq" id="sq21" data-col="2" data-row="1" />
        <div className="sq" id="sq22" data-col="2" data-row="2" />
        <div className="sq" id="sq23" data-col="2" data-row="3" />
        <div className="sq" id="sq24" data-col="2" data-row="4" />
        <div className="sq" id="sq25" data-col="2" data-row="5" />
        <div className="sq" id="sq26" data-col="2" data-row="6" />
      </div>
      <div id="column3">
        <div className="sq" id="sq31" data-col="3" data-row="1" />
        <div className="sq" id="sq32" data-col="3" data-row="2" />
        <div className="sq" id="sq33" data-col="3" data-row="3" />
        <div className="sq" id="sq34" data-col="3" data-row="4" />
        <div className="sq" id="sq35" data-col="3" data-row="5" />
        <div className="sq" id="sq36" data-col="3" data-row="6" />
      </div>
      <div id="column4">
        <div className="sq" id="sq41" data-col="4" data-row="1" />
        <div className="sq" id="sq42" data-col="4" data-row="2" />
        <div className="sq" id="sq43" data-col="4" data-row="3" />
        <div className="sq" id="sq44" data-col="4" data-row="4" />
        <div className="sq" id="sq45" data-col="4" data-row="5" />
        <div className="sq" id="sq46" data-col="4" data-row="6" />
      </div>
      <div id="column5">
        <div className="sq" id="sq51" data-col="5" data-row="1" />
        <div className="sq" id="sq52" data-col="5" data-row="2" />
        <div className="sq" id="sq53" data-col="5" data-row="3" />
        <div className="sq" id="sq54" data-col="5" data-row="4" />
        <div className="sq" id="sq55" data-col="5" data-row="5" />
        <div className="sq" id="sq56" data-col="5" data-row="6" />
      </div>
      <div id="column6">
        <div className="sq" id="sq61" data-col="6" data-row="1" />
        <div className="sq" id="sq62" data-col="6" data-row="2" />
        <div className="sq" id="sq64" data-col="6" data-row="3" />
        <div className="sq" id="sq65" data-col="6" data-row="4" />
        <div className="sq" id="sq66" data-col="6" data-row="5" />
        <div className="sq" id="sq67" data-col="6" data-row="6" />
      </div>
      <div id="column7">
        <div className="sq" id="sq71" data-col="7" data-row="1" />
        <div className="sq" id="sq72" data-col="7" data-row="2" />
        <div className="sq" id="sq73" data-col="7" data-row="3" />
        <div className="sq" id="sq74" data-col="7" data-row="4" />
        <div className="sq" id="sq75" data-col="7" data-row="5" />
        <div className="sq" id="sq76" data-col="7" data-row="6" />
      </div>
    </div >
  </ >
);


export default Board;
