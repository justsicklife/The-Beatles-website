# 비틀즈 정보 웹 사이트 
---
[사이트 주소](https://justsicklife.github.io/The-Beatles-website/)

## 컴포넌트들에 폴더 구조 
* Songs 
  * Song
* Discography
  * Album
* Members
  * Member
* LinkList
  * Link
* Navigation
  * Logo
* Modal
  * Audio
    * Explanation
  * MusicList
    * Music
* Summary
---

### 대표 컴포넌트 설명
#### Songs
    노래를 담을 슬라이더 역할 
#### Song 
    슬라이더에 담을 노래 역할
#### Discography
    비틀즈의 디스코 그래피에 있는 앨범들을 나열하여 효과적으로 보여줌
#### Members
    비틀즈의 맴버들에 설명,역할,나이 정보들을 묶은거 
    Members.js 안에서 Member.js 를 import 하여 map 함수를 이용해
    여러개의 Member 컴포넌트를 리턴 해준다
#### Member
    비틀즈의 맴버에 설명,역할,나이 정보를 나타내는 컴포넌트
#### LinkList
    비틀즈와 관련된 링크를 나열함
#### Navigation
    웹사이트에 navbar 
#### Logo 
    웹사이트 navbar에 비틀즈 로고이다 
#### Summary
    웹사이트에서 처음보게 될 이미지
#### Modal
    Album을 클릭하면 Modal 폴더에 있는 Modal.js 에 있는 Modal Box 가 화면에 보여지게 된다.
#### Audio
    클릭한 앨범 이미지와 선택한 노래를 들을수 있는 버튼 물론 노래는 안나온다. 
    노래넣으면 폴매카트니 가 나같은 애는 그냥 가만이 놔두갰지만 혹시 몰라서 안넣었다.
#### Explanation
    노래의 제목과 가사가 써져있는 박스 만약 아무런 노래를 선택하지 않았다면 렌더링 되지 않는다.
    그리고 화면 크기가 작다면 보이지 않는다.
#### MusicList
    앨범에 수록된 노래들을 감싸는 컴포넌트이다.
#### Music
    MusicList 컴포넌트 안에서 수록된 노래수 만큼 렌더 된다.
    노래의 제목과 가사를 담고있다.
    
    
