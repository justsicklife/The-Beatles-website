# 비틀즈 정보 웹 사이트 
---
[사이트 주소](https://justsicklife.github.io/The-Beatles-website/)

        리액로 제작

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
![song](https://user-images.githubusercontent.com/59939039/107169748-fb62cd80-6a01-11eb-9c3b-2e3e329ef0fb.PNG)
#### Song 
    슬라이더에 담을 노래 역할
#### Discography
    비틀즈의 디스코 그래피에 있는 앨범들을 나열하여 효과적으로 보여줌
![discograpy](https://user-images.githubusercontent.com/59939039/107169750-fc93fa80-6a01-11eb-942f-646c4467e752.PNG)
#### Members
    비틀즈의 맴버들에 설명,역할,나이 정보들을 묶은거 
    Members.js 안에서 Member.js 를 import 하여 map 함수를 이용해
    여러개의 Member 컴포넌트를 리턴 해준다
##### 큰화면 버전
![member](https://user-images.githubusercontent.com/59939039/107169753-fd2c9100-6a01-11eb-9c02-0a9c43c8425a.PNG)
---
##### 모바일 버전
![membermobile](https://user-images.githubusercontent.com/59939039/107170452-b3dd4100-6a03-11eb-9d97-7be8597a0a25.PNG)
---
#### Member
    비틀즈의 맴버에 설명,역할,나이 정보를 나타내는 컴포넌트
#### LinkList
    비틀즈와 관련된 링크를 나열함
![link](https://user-images.githubusercontent.com/59939039/107169754-fd2c9100-6a01-11eb-8754-90c33b0413e0.PNG)
#### Navigation
    웹사이트에 navbar 이다.
---
##### 큰화면 버전 navbar
![navbar](https://user-images.githubusercontent.com/59939039/107170099-d4f16200-6a02-11eb-89ad-9e544ed50805.PNG)
---
##### 모바일 버전 navbar
![navbarmobile](https://user-images.githubusercontent.com/59939039/107170102-d6228f00-6a02-11eb-8704-16a21b1f872f.PNG)
#### Logo 
    웹사이트 navbar에 비틀즈 로고이다 
#### Summary
    웹사이트에서 처음보게 될 이미지
![summary](https://user-images.githubusercontent.com/59939039/107169758-fdc52780-6a01-11eb-8bca-a10d0bee505b.PNG)
#### Modal
    Alubm 정보를 나타내는 컴포넌트
    Album을 클릭하면 Modal 폴더에 있는 Modal.js 에 있는 Modal Box 가 화면에 보여지게 된다.
---
##### 큰화면 버전
![modal](https://user-images.githubusercontent.com/59939039/107169986-8e9c0300-6a02-11eb-950d-1f54184552b3.PNG)
---
##### 모바일 버전 
![modalmobile](https://user-images.githubusercontent.com/59939039/107170266-3c0f1680-6a03-11eb-953f-247001222cc6.PNG)
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
    MusicList 에서 map 함수를 이용해서 Music 컴포넌트 들을 리턴한다.
    노래의 제목과 가사를 담고있다.

### api 폴더 설명
#### img 폴더
    navbar에 들어갈 사진 로고가 들어있다 그게 logo.png
#### hooks 폴더
##### useMenuToggle.js
    navbar에 menu 버튼을 동작하게 할수있는 함수 
    onClick 과 작동해야할 menuRef 를 반환함
##### useScrollFadeIn.js
    스크롤을 하면 자연스럽게 컴포넌트 들이 미끄러지듯 나타나게 하는 함수
    매개변수에는 나타날 방향, 애니메이션 시간 , 애니메이션 딜레이 가 있다.
    반환값은 적용할 ref를 반환한다.
##### useNavLogoSticky
    스크롤이 지정한 높이에 있다면 navbar에 로고가 커지게 하는 함수 
    매게변수는 최소 크기 숫자, 최대 크기 숫자,실행 전 스타일 ,실행 후 스타일이다.
    반환값은 적용할 ref 를 반환한다.
#### initial 폴더
    노래,앨범,link,맴버 정보 객체들을 한곳에 집어넣은 파일이다.
