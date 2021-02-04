import { useState, useCallback } from 'react';
import './App.css';
import Discography from './Component/Discography/Discography.js';
import Modal from './Component/Modal/Modal.js';
import * as initialObj from './api/Initial/InitialObj';
import Members from './Component/Members/Members.js';
import Navigation from "./Component/Navigation/Navigation.js";
import Summarry from "./Component/Summary/Summary.js";
import Songs from "./Component/Songs/Songs.js";

function App() {
  const [sliderObj, setSliderObj] = useState(initialObj.initialSliderObj)
  const [discography, setDiscography] = useState(initialObj.initialDiscography);
  const [summaryObj, setSummaryObj] = useState(initialObj.initialSummary);
  const [songsObj, setSongsObj] = useState(initialObj.initialSongs);
  const [isModal, setIsModal] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(null);
  const [musicIndex, setMusicIndex] = useState(null);

  const modalClickToggle = useCallback(
    (index = null) => {
      if (index !== null) {
        setAlbumIndex(index);
      }
      setIsModal(!isModal);
      setMusicIndex(null);
    },
    [albumIndex]
  );

  const musicClickToggle = useCallback(
    (index) => {
      if (index === musicIndex) {
        setMusicIndex(null);
        return
      }
      setMusicIndex(index);
    },
    [musicIndex]
  );

  // 반응형으로 navbar 메뉴 처럼 만들기
  // 모달창 어떻게하지.

  return (
    <div className="App">
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <Summarry summaryObj={summaryObj} />
        <a id="songs_bookmark">
          <Songs songs={songsObj} />
        </a>
        <a id="discography_bookmark">
          <Discography
            discography={discography}
            musicClickToggle={musicClickToggle}
            modalClickToggle={modalClickToggle}
          />
        </a>
        <a id="members_bookmark"
        >
          <Members
            sliderObj={sliderObj}
          />
        </a>
      </main>
      {isModal ? <Modal
        modalClickToggle={modalClickToggle}
        musicClickToggle={musicClickToggle}
        albumIndex={albumIndex}
        musicIndex={musicIndex}
        discography={discography}
      />
        : null}
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
