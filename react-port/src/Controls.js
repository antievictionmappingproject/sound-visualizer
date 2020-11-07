import React, { useContext, useRef } from 'react';
import "./styles/Controls.css"
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
            <div className="playback-cnr">
                <span id="SkipBack" className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 11">
                        <title>Rewind</title>
                        <polygon id="BACK-BUTTON" points="15 0 15 11 13.78 11 13.78 9.8 12.43 9.8 12.43 8.56 11.27 8.56 11.27 7.29 10.01 7.29 10.01 6.09 8.8 6.09 8.8 11 7.52 11 7.52 9.8 6.22 9.8 6.22 8.56 4.95 8.56 4.95 7.29 3.76 7.29 3.76 6.09 2.52 6.09 2.52 11 0 11 0 0 2.52 0 2.52 4.92 3.76 4.92 3.76 3.61 4.95 3.61 4.95 2.54 6.22 2.54 6.22 1.27 7.5 1.27 7.5 0 8.8 0 8.8 4.92 10.01 4.92 10.01 3.61 11.27 3.61 11.27 2.54 12.43 2.54 12.43 1.27 13.78 1.27 13.78 0 15 0" style={{fillRule: `evenodd`}}/>
                    </svg>
                </span>
                <span id="Playback" className="button">
                    {
                        paused
                            ? <div className="play" onClick={() => {
                                    setPaused(false)
                                }}><img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uO3RleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjtpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyIgdmlld0JveD0iMCAwIDQxOCA0NzgiIHg9IjBweCIgeT0iMHB4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgCiAgICAuZmlsMCB7ZmlsbDojMDAwMDAwfQogICAKICA8L3N0eWxlPjwvZGVmcz48Zz48cGF0aCBjbGFzcz0iZmlsMCIgZD0iTTQxMCAyNTNsLTM4NiAyMjNjLTExLDYgLTI0LC0yIC0yNCwtMTRsMCAtNDQ2YzAsLTEyIDEzLC0yMCAyNCwtMTRsMzg2IDIyM2MxMSw2IDExLDIyIDAsMjh6Ij48L3BhdGg+PC9nPjwvc3ZnPg==" /></div>
                            : <div className="pause" onClick={() => {
                                    setPaused(true)
                                }}><img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5wYXVzZSwgbXVzaWMsIHJlY29yZCwgbXVsdGltZWRpYSwgZW50ZXJwcmljZTwvdGl0bGU+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48cmVjdCB4PSIxNy41NiIgeT0iMSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjMwIiByeD0iMy4wOCI+PC9yZWN0PjxyZWN0IHg9IjIuNDQiIHk9IjEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzMCIgcng9IjMuMDgiPjwvcmVjdD48L2c+PC9zdmc+" /></div>
                    }
                </span>
                <span id="SkipForward" className="button"><img style={{transform: `scaleX(-1)`}} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjAiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uO3RleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjtpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyIgdmlld0JveD0iMCAwIDEwMDAwIDEwMDAwIiB4PSIwcHgiIHk9IjBweCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIAogICAgLmZpbDAge2ZpbGw6IzAwMDAwMDtmaWxsLXJ1bGU6bm9uemVyb30KICAgCiAgPC9zdHlsZT48L2RlZnM+PGc+PHBhdGggY2xhc3M9ImZpbDAiIGQ9Ik0zMTY0IDQ4MjZsODY0IC00OTkgODY2IC01MDBjOTUsLTU1IDIxNywtMjMgMjczLDczIDE4LDMxIDI3LDY2IDI3LDEwMGwwIDAgMCA2NjEgNTc3IC0zMzQgODY3IC01MDBjOTUsLTU1IDIxNywtMjMgMjcyLDczIDE4LDMxIDI3LDY2IDI3LDEwMGwxIDAgMCAxMDAwIDAgMTAwMGMwLDExMCAtOTAsMjAwIC0yMDAsMjAwIC00MiwwIC04MCwtMTMgLTExMiwtMzRsLTg1NSAtNDk0IC01NzcgLTMzMyAwIDY2MWMwLDExMCAtOTAsMjAwIC0yMDAsMjAwIC00MSwwIC04MCwtMTMgLTExMiwtMzRsLTg1NCAtNDk0IC04NjYgLTUwMGMtOTUsLTU1IC0xMjgsLTE3NyAtNzMsLTI3MiAxOSwtMzIgNDUsLTU3IDc1LC03NHoiPjwvcGF0aD48L2c+PC9zdmc+"/></span>
            </div>
            <div className="slider-cnr">
                <input type="range" step="0.01" onChange={e => setVolume(parseFloat(e.target.value))} value={volume} min="0" max="1" />
                {/* <svg ref={volumeSliderRef} width="100" height="10" viewBox="0 0 100 10" style={{overflow: 'hidden'}}>
                    <rect x="0" y="0" width="100" height="10" stroke="black" strokeWidth="2" fill="none" />
                    <rect onClick={handleVolume} transform={`translate(${100 * volume}, 0)`} x="-100" y="0" width="100" height="10" fill="red" />
                </svg> */}
            </div>
        </div>
    )
}