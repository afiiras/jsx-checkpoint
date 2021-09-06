import React from 'react';
import './App.css';
import './style.css';


function App() {
  return (
    <div className="App">
      <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Firas</h1>
    <br />
    <img src="./assets/download.jfif" alt="img-src" />
    <br />
    <img src="/public/assets/download (1).jfif" alt="img-pub" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
    </div>
  );
}

export default App;
