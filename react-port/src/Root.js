import React, { useState } from 'react';
import Scene from './Scene';
import Controls from './Controls';
import AudioPlaybackContext from './AudioPlaybackContext';

export default (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(0.5);
  return (
    <AudioPlaybackContext.Provider value={{paused, setPaused, volume, setVolume}}>
      <div className="sound-visualizer">
        <Scene timelineActions={[
          {seconds: 1, action: () => {setShowPopup(true)}},
          {seconds: 3, action: () => {setShowPopup(false)}},
        ]} />
        <Controls />
        <div className="pop-up" style={{opacity: showPopup ? 1 : 0}}>
          <a href="">i'm a popup</a>
        </div>
      </div>
    </AudioPlaybackContext.Provider>
  );
}
