import React, { useState } from 'react';
import Scene from './Scene';
import Controls from './Controls';
import AudioPlaybackContext from './AudioPlaybackContext';
import "./index.scss";


export default (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(0.5);
  return (
    <AudioPlaybackContext.Provider value={{paused, setPaused, volume, setVolume}}>
      <div className="sound-visualizer">
        <Scene
          audioFilePath='https://ia801503.us.archive.org/6/items/alexint-edit-10-26_202011/alexint%20(edit%2010:26).mp3'
          timelineActions={[
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
