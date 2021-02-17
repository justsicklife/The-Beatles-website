import { useState, useCallback, useEffect, useRef } from 'react';
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
  const [memberArray, setMemberArray] = useState(initialObj.initialMemberArray)
  const [discography, setDiscography] = useState(initialObj.initialDiscography);
  const [summaryObj, setSummaryObj] = useState(initialObj.initialSummary);
  const [songsObj, setSongsObj] = useState(initialObj.initialSongs);
  const [linkObj, setLinkObj] = useState(initialObj.initialLinkObj);
  const [isModal, setIsModal] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(null);
  const [musicIndex, setMusicIndex] = useState(null);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [songIndex, setSongIndex] = useState(0);

  const songListRef = useRef();
  const songBoxWidth = useRef();
  const songBoxRef = useRef();
  const songIndexRef = useRef(0);

  const songSlideButton = (direction) => {
    if (songIndex === 0 && direction === -1) return;
    if (songIndex === songsObj.length - 1 && direction === 1) return;
    const nextIndex = songIndex + direction;
    setSongIndex(nextIndex);
    songIndexRef.current = nextIndex;
  }

  const windowResizeEvenet = () => {
    if (songBoxWidth.current == songBoxRef.current.clientWidth) return
    songBoxWidth.current = songBoxRef.current.clientWidth;
    songListRef.current.style.transform = `translateX(${songIndexRef.current * -songBoxWidth.current}px)`;
    for (let i = 0; i < songListRef.current.children.length; i++) {
      songListRef.current.children[i].style.maxWidth = `${songBoxWidth.current}px`;
    }
    songListRef.current.style.width = `${songsObj.length * songBoxWidth.current}px`
  }

  useEffect(() => {
    songListRef.current.style.transform = `translateX(${songIndex * -songBoxWidth.current}px)`;
  }, [songIndex]);

  useEffect(() => {
    windowResizeEvenet();
    window.addEventListener('resize', windowResizeEvenet);
    window.addEventListener('reset', windowResizeEvenet);
    return () => {
      window.removeEventListener('resize', windowResizeEvenet);
      window.removeEventListener('reset', windowResizeEvenet);
    }
  }, []);

  const onClickMember = (index) => {
    if (currentMemberIndex === index) return
    setCurrentMemberIndex(index);
  }

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
          <Songs
            songs={songsObj}
            songIndex={songIndex}
            discography={discography}
            songListRef={songListRef}
            songBoxRef={songBoxRef}
            songSlideButton={songSlideButton}
          />
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
            memberArray={memberArray}
            memberIndex={currentMemberIndex}
            onClickMember={onClickMember}
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
