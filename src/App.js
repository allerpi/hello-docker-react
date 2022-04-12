import './App.css';

import { useReactMediaRecorder } from "react-media-recorder";

function App() {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ screen: true, audio: false, blobPropertyBag: {type: "video/mp4"}});

  return (
    <div>
      <h1 className='center'>React Screen Recorder</h1>
      <p id='status' >Status: {status.replace('_', ' ')}</p>
      <div className='buttons'>
        <button onClick={startRecording} id='start' className='center'>Start Recording</button>
        <div id='space'></div>
        <button onClick={stopRecording} id='stop' className='center'>Stop Recording</button>
      </div>
      <RecordedVideo blobUrl={mediaBlobUrl} />
    </div>
  );
};

function RecordedVideo(props) {
  if(props.blobUrl) {
    const downloadName = 'screen-recording-'+ new Date().toUTCString();
    console.log(props.blobUrl);
    return (
      <div>
        <video src={props.blobUrl} controls width='600px'/>
        <div id='link'>
        <a download={downloadName} href={props.blobUrl}>Download</a>
        </div>
      </div>
    );
  } else {
    return (
      <div id='no-video'>
        No recording to display
      </div>
    );
  }
}

export default App;
