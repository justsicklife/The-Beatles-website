import { useState, useCallback, useEffect } from 'react';
import './App.css';
import Discography from './Component/Discography/Discography.js';
import Modal from './Component/Modal/Modal.js';
import * as initialObj from './api/Initial/InitialObj';
import Members from './Component/Members/Members.js';
import Navigation from "./Component/Navigation/Navigation.js";
import Summarry from "./Component/Summary/Summary.js";
import Songs from "./Component/Songs/Songs.js";
import LinkList from "./Component/LinkList/LinkList.js";

function App() {
  const [sliderObj, setSliderObj] = useState(initialObj.initialSliderObj)
  const [discography, setDiscography] = useState(initialObj.initialDiscography);
  const [summaryObj, setSummaryObj] = useState(initialObj.initialSummary);
  const [songsObj, setSongsObj] = useState(initialObj.initialSongs);
  const [linkObj, setLinkObj] = useState(initialObj.initialLinkObj);
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

  return (
    <div className="App">
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <Summarry summaryObj={summaryObj} />
        <div id="songs_bookmark">
          <Songs songs={songsObj} />
        </div>
        <div id="discography_bookmark">
          <Discography
            discography={discography}
            musicClickToggle={musicClickToggle}
            modalClickToggle={modalClickToggle}
          />
        </div>
        <div id="members_bookmark"
        >
          <Members
            sliderObj={sliderObj}
          />
        </div>
        <div id="link_bookmark">
          <LinkList linkList={linkObj} />
        </div>
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
        <div className="github_link"><a target="_blank" href="https://github.com/justsicklife/The-Beatles-website"><i className="fab fa-github"></i></a></div>
      </footer>
    </div>
  );
}

export default App;
