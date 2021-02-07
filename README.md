# 비틀즈 정보 웹 사이트 
---
[사이트 주소](https://justsicklife.github.io/The-Beatles-website/)

## 컴포넌트들에 폴더 구조 
* Songs 
  * SongsList
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
  노래를 슬라이더 안에 넣어서 효과적으로 만듬
  ---
#### Discography
  비틀즈의 디스코 그래피에 있는 앨범들을 나열하여 효과적으로 보여줌
  ---
#### Members
  비틀즈의 맴버들에 설명,역할,나이 정보들을 묶은거 
  Members.js 안에서 Member.js 를 import 하여 map 함수를 이용해
  여러개의 Member 컴포넌트를 리턴 해준다
  ---
#### Member
  비틀즈의 맴버에 설명,역할,나이 정보를 나타내는 컴포넌트
  ---
#### LinkList
  비틀즈와 관련된 링크를 나열함
  ---
#### Navigation
  웹사이트에 navbar 
  ---
#### Summary
  웹사이트에서 처음보게 될 이미지
  ---
#### Modal
   Discography 안에 있는 폴더인 Album.js 파일에 있는 Album_Box class 를 클릭하면 
   Modal 폴더에 있는 Modal.js 에 있는 Modal Box 가 화면에 보여지게 된다.
   ---
#### 
