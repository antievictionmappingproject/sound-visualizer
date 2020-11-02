import React, {useState} from 'react';
import Scene from './Scene';

export default (props) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="sound-visualizer">
      <Scene timelineActions={[
        {seconds: 5, action: () => setShowPopup(true)},
        {seconds: 10, action: () => setShowPopup(false)}
      ]} />
      <div className="pop-up" style={{opacity: showPopup ? 1 : 0}}>
        <a href="">i'm a popup</a>
      </div>
    </div>
  );
}
