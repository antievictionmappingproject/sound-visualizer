import React, { useContext, useRef } from 'react';
import "./styles/Controls.scss";
import AudioPlaybackContext from './AudioPlaybackContext';

export default (props) => {
  const { volume, paused, setVolume, setPaused } = useContext(AudioPlaybackContext)
  // const volumeSliderRef = useRef(null)

  // function handleVolume(e) {
  //     const dims = volumeSliderRef.current.getBoundingClientRect()
  //     const { clientX, clientY } = e

  //     const pct = (dims.x)
  // }

  return(
    <div id="Controls">
      <div className="row-1">
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6">
              <g fill="none" fill-rule="evenodd">
                  <g fill="#000">
                      <path d="M45 285L45 286.486 46.551 286.486 46.551 287.752 48.222 287.752 48.222 289.413 49.617 289.413 49.617 291 51.306 291 51.306 289.413 52.867 289.413 52.867 288 54.445 288 54.445 286.486 56 286.486 56 285z" transform="translate(-45 -285) matrix(-1 0 0 1 101 0)"/>
                  </g>
              </g>
          </svg>
          <span>Oral History</span>
        </h1>
        <span id="TimeStamp">0:00/3:33</span>
      </div>
      <div className="row-2">
        <div className="playback-cnr">
          <span id="SkipBack" className="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11">
              <g fill="none" fill-rule="evenodd">
                <g fill="#000">
                  <path d="M64.479 320L64.479 331 65.701 331 65.701 329.796 67.051 329.796 67.051 328.559 68.207 328.559 68.207 327.289 69.471 327.289 69.471 326.089 70.682 326.089 70.682 331 71.957 331 71.957 329.796 73.256 329.796 73.256 328.559 74.527 328.559 74.527 327.289 75.716 327.289 75.716 326.089 76.959 326.089 76.959 331 79.479 331 79.479 320 76.959 320 76.959 324.918 75.716 324.918 75.716 323.607 74.527 323.607 74.527 322.543 73.256 322.543 73.256 321.269 71.979 321.269 71.979 320 70.682 320 70.682 324.918 69.471 324.918 69.471 323.607 68.207 323.607 68.207 322.543 67.051 322.543 67.051 321.269 65.701 321.269 65.701 320z" transform="translate(-64 -320) matrix(-1 0 0 1 143.958 0)"/>
                </g>
              </g>
            </svg>
          </span>
          <span id="Playback" className="button">
            {
              paused
              ? <div className="play" onClick={() => {
                setPaused(false)
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11">
                <polygon points="0,0 0,11 9,5.5" transform="translate(4)" />
              </svg>
            </div>
            : <div className="pause" onClick={() => {
              setPaused(true)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11">
              <g fill="none" fill-rule="evenodd">
                <g fill="#000">
                  <path d="M0 0L0 11.609 3.643 11.609 3.643 0zM6.187.012L6.187 11.621 9.83 11.621 9.83.012z" transform="translate(2.5)"/>
                </g>
              </g>
            </svg>
          </div>
        }
      </span>
      <span id="SkipForward" className="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11">
          <g fill="none" fill-rule="evenodd">
            <g fill="#000">
              <path d="M167.479 320L167.479 331 168.701 331 168.701 329.796 170.051 329.796 170.051 328.559 171.207 328.559 171.207 327.289 172.471 327.289 172.471 326.089 173.682 326.089 173.682 331 174.957 331 174.957 329.796 176.256 329.796 176.256 328.559 177.527 328.559 177.527 327.289 178.716 327.289 178.716 326.089 179.959 326.089 179.959 331 182.479 331 182.479 320 179.959 320 179.959 324.918 178.716 324.918 178.716 323.607 177.527 323.607 177.527 322.543 176.256 322.543 176.256 321.269 174.979 321.269 174.979 320 173.682 320 173.682 324.918 172.471 324.918 172.471 323.607 171.207 323.607 171.207 322.543 170.051 322.543 170.051 321.269 168.701 321.269 168.701 320z" transform="translate(-167 -320)"/>
            </g>
          </g>
        </svg>
      </span>
    </div>
    <span id="Share" className="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
          <g fill="none" fill-rule="evenodd">
              <g fill="#000">
                  <path d="M3.785 2.556L0 2.556 0 12.541 12.665 12.541 12.665 9.944 11.374 9.944 11.374 11.283 1.398 11.283 1.398 3.824 3.785 3.824z" transform="translate(-238 -319) translate(217 308) translate(21 11)"/>
                  <path d="M3.86 8.804L3.86 6.208 5.08 6.208 5.08 5.018 6.333 5.018 6.333 3.82 7.626 3.82 7.626 2.556 10.218 2.556 10.218 0 11.405 0 11.405 1.273 12.665 1.273 12.665 2.556 13.821 2.556 13.821 3.82 15.123 3.82 15.123 5.018 13.821 5.018 13.821 6.208 12.665 6.208 12.665 7.549 11.405 7.549 11.405 8.804 10.218 8.804 10.218 6.208 7.626 6.208 7.626 7.549 5.08 7.549 5.08 8.804z" transform="translate(-238 -319) translate(217 308) translate(21 11)"/>
              </g>
          </g>
      </svg>

    </span>
  </div>
  <div className="row-3">
    <span>Amplify</span>
    <div className="slider-cnr">
      <input type="range" step="0.01" onChange={e => setVolume(parseFloat(e.target.value))} value={volume} min="0" max="1" />
      {/* <svg ref={volumeSliderRef} width="100" height="10" viewBox="0 0 100 10" style={{overflow: 'hidden'}}>
      <rect x="0" y="0" width="100" height="10" stroke="black" strokeWidth="2" fill="none" />
      <rect onClick={handleVolume} transform={`translate(${100 * volume}, 0)`} x="-100" y="0" width="100" height="10" fill="red" />
      </svg> */}
    </div>
  </div>
  <div className="row-4">
    <h1>Join Your Local Tenants Union</h1>
    <span id="Location">Los Angeles, CA</span>
  </div>
  <div className="row-5">
    <div id="Transcript">
      <p><strong>Summary</strong></p>
      <p>Alex’s story contributes to the distinct and complex narratives of people who experience hardship and instability. This story captures how even while being well-informed about tenants’ rights, this knowledge still does not provide protection from extractive systems that seek to place profit over people, particularly in relation to housing. Alex brainstorms about what a more livable city looks and feels like.</p>
      <p><strong>Transcript</strong></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>
)
}
