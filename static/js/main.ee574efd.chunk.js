(this.webpackJsonpbetles=this.webpackJsonpbetles||[]).push([[0],[,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t(1),o=t.n(i),l=t(4),r=t.n(l),s=t(2),c=(t(10),t(11),t.p+"static/media/logo.2f17021d.png");function d(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"logo_bar",children:Object(n.jsx)("span",{className:"logo_bar_wrap",children:Object(n.jsx)("img",{className:"logo_bar_img",src:c})})})})}var u=o.a.memo(d),h=(t(12),t(13),t(14),t(15),function(e){var a=e.album,t=e.albumIndex,o=Object(i.useContext)(N).modalClickToggle,l=a.release,r=l.getFullYear(),s=l.getMonth(),c=l.getDate();return Object(n.jsx)("div",{onClick:function(){o(t)},className:"Album",children:Object(n.jsxs)("div",{className:"Album_wrap",children:[Object(n.jsx)("span",{className:"Album_img",children:Object(n.jsx)("img",{src:a.image})}),Object(n.jsxs)("div",{className:"Album_back_side_wrap",children:[Object(n.jsx)("div",{className:"Album_back_side_name",children:Object(n.jsxs)("span",{children:["\uc774\ub984: ",a.name]})}),Object(n.jsx)("div",{className:"Album_back_side_release",children:Object(n.jsxs)("span",{children:["\ubc1c\ub9e4\uc77c: ","".concat(r,"\ub144 ").concat(s,"\uc6d4 ").concat(c,"\uc77c")]})}),Object(n.jsx)("div",{className:"Album_back_side_play_time",children:Object(n.jsxs)("span",{children:["\uc7ac\uc0dd \uc2dc\uac04: ","".concat(a.playTime[0],"\ubd84 ").concat(a.playTime[1],"\ucd08")]})})]}),Object(n.jsx)("div",{className:"Album_name",children:Object(n.jsx)("span",{children:a.name})})]})})}),m=function(){var e=Object(i.useContext)(N).discography;return Object(n.jsx)("div",{className:"Discography",children:Object(n.jsxs)("div",{className:"Discography_wrap",children:[Object(n.jsx)("div",{className:"Discography_text_wrap",children:Object(n.jsx)("p",{children:"Discography"})}),Object(n.jsx)("div",{className:"Discography_Album_wrap",children:e.map((function(e,a){return Object(n.jsx)(h,{album:e,albumIndex:a},a)}))})]})})},p=o.a.memo(m),g=(t(16),t(17),t(18),function(){var e=Object(i.useContext)(N),a=e.discography,t=e.albumIndex;return Object(n.jsx)("div",{className:"Modal_audio_image_wrap",children:Object(n.jsx)("span",{children:Object(n.jsx)("img",{src:a[t].image})})})}),b=(t(19),function(){return Object(n.jsx)("div",{className:"Modal_audio_play_wrap",children:Object(n.jsx)("audio",{controls:!0})})}),j=(t(20),t(21),function(){var e=Object(i.useContext)(N),a=e.discography,t=e.albumIndex,o=e.musicIndex;return Object(n.jsx)("div",{className:"Modal_audio_Explanation_title_wrap",children:Object(n.jsx)("div",{className:"Modal_audio_Explanation_title",children:Object(n.jsx)("span",{children:a[t].track[o]})})})}),y=(t(22),function(){return Object(n.jsx)("div",{className:"Modal_audio_Explanation_Description_wrap",children:Object(n.jsx)("div",{className:"Modal_audio_Explanation_Description",children:Object(n.jsx)("span",{children:"\ube44\ud2c0\uc988"})})})}),x=function(){return Object(n.jsxs)("div",{className:"Modal_audio_Explanation_wrap",children:[Object(n.jsx)(j,{}),Object(n.jsx)(y,{})]})},_=function(){return Object(n.jsxs)("div",{className:"Modal_audio_wrap",children:[Object(n.jsxs)("div",{className:"Modal_audio_image_play_wrap",children:[Object(n.jsx)(g,{}),Object(n.jsx)(b,{})]}),Object(n.jsx)("div",{className:"Modal_audio_Explanation",children:Object(n.jsx)(x,{})})]})},O=(t(23),function(e){var a=e.music,t=e.index,o=Object(i.useContext)(N),l=o.musicClickToggle,r=o.musicIndex;return Object(n.jsx)("li",{className:t===r?"active music":"music",onClick:function(){l(t)},children:a})}),v=o.a.memo(O),w=(t(24),function(){var e=Object(i.useContext)(N),a=e.discography,t=e.albumIndex;return Object(n.jsx)("div",{className:"Modal_Music_List",children:Object(n.jsx)("ul",{className:"Modal_Music_List_wrap",children:a[t].track.map((function(e,a){return Object(n.jsx)(v,{music:e,index:a},a)}))})})}),M=function(){var e=Object(i.useContext)(N).modalClickToggle;return Object(n.jsx)("div",{className:"Modal",children:Object(n.jsxs)("div",{className:"Modal_wrap",children:[Object(n.jsx)(_,{}),Object(n.jsx)(w,{}),Object(n.jsx)("div",{onClick:e,className:"Modal_Exit_Button",children:Object(n.jsx)("i",{className:"fas fa-external-link-square-alt"})})]})})},f=[{name:"Ringo Starr",bestSong:"Octopus man",image:"https://i.pinimg.com/originals/be/39/14/be3914b9effdc598f430f6aa5e097a42.jpg",birth:new Date(1940,6,7),dead:null,explain:["\ub9ac\ucc98\ub4dc \uc2a4\ud0c0\ud0a4 \uacbd(Sir Richard Starkey, MBE, 1940\ub144 7\uc6d4 7\uc77c ~ )\uc740 \ub9c1\uace0 \uc2a4\ud0c0(Ringo Starr)\ub85c \uc54c\ub824\uc9c4 \uc601\uad6d\uc758 \ub4dc\ub7ec\uba38, \uac00\uc218, \uc791\uace1\uac00, \ubc30\uc6b0\ub2e4. \ube44\ud2c0\uc988\uc758 \ub4dc\ub7ec\uba38\ub85c \ud65c\ub3d9\ud574 \uc138\uacc4\uc801\uc778 \uc720\uba85\uc138\ub97c \ud68d\ub4dd\ud588\ub2e4. \ub300\uac1c \ud55c \uc74c\ubc18\uc758 \ud55c \uace1\uc5d0\uc11c \ub9ac\ub4dc \ubcf4\uceec\ub85c \ucc38\uc5ec\ud588\uace0, \uadf8\uc911\uc5d0\ub294 \u3008With a Little Help from My Friends\u3009, \u3008Yellow Submarine\u3009, \u3008Good Night\u3009, \uadf8\ub4e4\uc774 \ucee4\ubc84\ud55c \u3008Act Naturally\u3009 \ub4f1\uc774 \uc788\ub2e4. \ube44\ud2c0\uc988 \ub178\ub798 \u3008Don't Pass Me By\u3009, \u3008Octopus's Garden\u3009\ub97c \uc37c\uace0, \u3008What Goes On\u3009\uacfc \u3008Flying\u3009 \ub4f1\uc5d0\uc11c\ub294 \uacf5\ub3d9 \uc791\uace1\uac00\ub85c \uae30\ub85d\ub418\uc5c8\ub2e4.\n            \uc720\ub144\uae30 \ubaa9\uc228\uc744 \uc704\ud611\ubc1b\ub294 \ubcd1\uc744 \uc553\uc740 \uc801\uc774 \uc788\uc5c8\uace0, \uc7a5\uae30\uac04\uc758 \uc785\uc6d0\uc73c\ub85c \ud559\uad50 \uc7ac\uc801\uc744 \ud3ec\uae30\ud574\uc57c \ud588\ub2e4. 1955\ub144 \ub178\ub3d9\uc790 \uc77c\uc744 \uc2dc\uc791\ud574 \ub9ac\ubc84\ud480\uc758 \uc7a5\ube44 \uc81c\uc870\uc0ac\uc5d0\uc11c \uacac\uc2b5\uc9c1\uc744 \uc9c0\ub0c8\uace0 \uc601\uad6d \uad6d\uc720 \ucca0\ub3c4\uc5d0\uc11c \uc7a0\uc2dc \uadfc\ubb34\ud588\ub2e4. \uadf8 \uc9c1\ud6c4 \uc601\uad6d \uc2a4\ud0a4\ud480 \uc5f4\ud48d\uc5d0 \uad00\uc2ec\uc744 \uac00\uc84c\uace0 \uc7a5\ub974\uc5d0 \ub300\ud55c \uac15\ub82c\ud55c \uc874\uacbd\uc744 \uc2ec\uc18d\uc5d0 \uae30\ub974\uae30 \uc2dc\uc791\ud55c\ub2e4. 1957\ub144 \uc790\uc2e0\uc758 \uccab \ubc34\ub4dc\uc778 \uc5d0\ub514 \ud074\ub808\uc774\ud2bc \uc2a4\ud0a4\ud50c \ubc34\ub4dc\ub97c \uacf5\ub3d9\uacb0\uc131\ud588\ub2e4.","1958\ub144 \ubbf8\uad6d \ub85c\ud070\ub864\uc5d0 \uc2a4\ud0a4\ud480 \uc5f4\ud48d\uc774 \ubb34\ub98e\uc744 \uafc7\uac8c \ub418\uae30 \uc804\uae4c\uc9c0 \uba87\uba87 \uc77c\ub958 \uc9c0\uc5ed \uacf5\uc5f0\uc7a5\uc5d0\uc11c \ucd9c\uc5f0\uacc4\uc57d\uc744 \ub9fa\uc5c8\ub2e4.\n            1960\ub144 \ube44\ud2c0\uc988\uac00 \uacb0\uc131\ub410\uc744 \ub54c \uc2a4\ud0c0\ub294 \ub2e4\ub978 \ub9ac\ubc84\ud480 \ubc34\ub4dc\uc778 \ub85c\ub9ac \uc2a4\ud1b0 \uc564 \ub354 \ud5c8\ub9ac\ucf00\uc778\uc2a4\uc758 \uc77c\uc6d0\uc774\uc5c8\ub2e4. \uadf8 \ubc34\ub4dc\uc640 \uc601\uad6d \ubc0f \ud568\ubd80\ub974\ud06c\uc5d0\uc11c \uc900\uc218\ud55c \uc131\uc801\uc744 \uac70\ub454 \uc774\ud6c4 \ud5c8\ub9ac\ucf00\uc778\uc2a4\ub97c \ud0c8\ud1f4\ud574 \ud53c\ud2b8 \ubca0\uc2a4\ud2b8 \uc790\ub9ac\ub97c \ub300\uccb4\ud558\uc5ec 1962\ub144 8\uc6d4 \ube44\ud2c0\uc988\uc5d0 \ud569\ub958\ud588\ub2e4. \uc2a4\ud0c0\ub294 \ube44\ud2c0\uc988 \uc601\ud654\ub4e4\uacfc \uc5ec\ub7ec \ub2e4\ub978 \uc791\ud488\uc5d0\uc11c \uc8fc\uc5ed\uc744 \uc5f0\uae30\ud588\ub2e4. 1970\ub144 \ube44\ud2c0\uc988\uc758 \ud574\uc0b0 \uc774\ud6c4 \ubbf8\uad6d 4\uc704 \u3008It Don't Come Easy\u3009, 1\uc704 \u3008Photograph\u3009, \u3008You're Sixteen\u3009 \ub4f1 \uc131\uacf5\ud55c \uc2f1\uae00\uc744 \uba87 \uc7a5 \ubc1c\ud45c\ud588\ub2e4. 1972\ub144 \uc601\uad6d\uc5d0\uc11c \uc790\uc2e0\uc758 \uac00\uc7a5 \uc131\uacf5\ud55c \uc2f1\uae00 \u3008Back Off Boogaloo\u3009 (\uc601\uad6d 2\uc704)\ub97c \ubc1c\ud45c\ud588\ub2e4. 1973\ub144 \uc74c\ubc18 \u300aRingo\u300b\ub85c \uc0c1\uc5c5\uc801 \ubc0f \ube44\ud3c9\uc801 \uc131\uacf5\uc744 \uc774\ub8e9\ud588\ub2e4. \uc774 \uc74c\ubc18\uc740 \uc601\ubbf8 \ubaa8\ub450\uc5d0\uc11c 10\uc704 \ub0b4\ub85c \uc9c4\uc785\ud588\ub2e4. \uc218\ub9ce\uc740 \ub2e4\ud050\uba58\ud130\ub9ac \ubc0f \ud154\ub808\ube44\uc804 \uc1fc\uc5d0\uc11c\ub3c4 \ucd9c\uc5f0\ud588\ub2e4. \uc544\ub3d9\uc6a9 \ud154\ub808\ube44\uc804 \ud504\ub85c\uadf8\ub7a8 \u300a\ud1a0\ub9c8\uc2a4\uc640 \uce5c\uad6c\ub4e4\u300b \uccab \uc2dc\uc98c 2\uae4c\uc9c0 \ub098\ub808\uc774\ud130\ub97c \ub9e1\uc558\uace0, PBS\uc758 \uc544\ub3d9\uc6a9 \ud154\ub808\ube44\uc804 \uc2dc\ub9ac\uc988 \u300a\uc0e4\uc774\ub2dd \ud0c0\uc784 \uc2a4\ud14c\uc774\uc158\u300b\uc758 \uccab \uc2dc\uc98c \uac00\uc6b4\ub370 \u3008Mr Conductor\u3009\uc5d0\uc11c \uc5f0\uae30\ud588\ub2e4. 1989\ub144\ubd80\ud130 12\ubc88\uc758 \ubcc0\ud615\uc774 \uc874\uc7ac\ud55c \ub9c1\uace0 \uc2a4\ud0c0 & \ud788\uc988 \uc62c\uc2a4\ud0c0 \ubc34\ub4dc\uc640 \uc21c\ud68c\uacf5\uc5f0\uc744 \ud558\uace0 \uc788\ub2e4.",,'\uc2a4\ud0c0\uc758 \uc74c\uc545\uc5d0 \ub300\ud55c \ucc3d\uc870\uc801 \uacf5\ud5cc\uc740 \ub2e4\ub978 \ub4dc\ub7ec\uba38\ub85c\ubd80\ud130 \ucc2c\uc0ac\ub97c \ubc1b\uc558\uc73c\uba70, \ud544 \ucf5c\ub9b0\uc2a4\ub294 \uadf8\ub97c "\uc704\ub300\ud55c \uc74c\uc545\uac00"\ub85c \ub192\uc774 \ubd88\ub800\uace0,[4] \uc2a4\ud2f0\ube0c \uc2a4\ubbf8\uc2a4\ub294 "\ub9c1\uace0 \uc774\uc804\uc5d0, \ub4dc\ub7fc \uc2a4\ud0c0\ub294 \uc194\ub85c \ub2a5\ub825 \ubc0f \uae30\uad50\ub85c \ud310\ub2e8\ubc1b\uc558\ub2e4. \ub9c1\uace0\uc758 \uc720\uba85\uc138\ub294 \uc0c8\ub85c\uc6b4 \ud328\ub7ec\ub2e4\uc784\uc744 \uac1c\ucc99\ud588\ub2e4 ... \uc6b0\ub9ac\ub294 \ub4dc\ub7ec\uba38\ub97c \uc791\uace1 \uce21\uba74\uc5d0\uc11c \ub3d9\ub4f1\ud55c \ucc38\uc5ec\uc790\ub85c \uc5ec\uae30\uac8c \ub418\uc5c8\ub2e4 ... \uadf8\uc758 \ud30c\ud2b8\ub294 \ub178\ub798\uc5d0\uc11c \ub108\ubb34\ub098 \ub3c4\ub4dc\ub77c\uc838 \ubcf4\uc774\uba70 \ub2f9\uc2e0\uc740 \ub9c1\uace0\uc758 \ub4dc\ub7fc \ud30c\ud2b8\ub9cc \ub4e3\ub294\ub2e4 \ud574\ub3c4 \ub178\ub798\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc54c \uc218 \uc788\uc744 \uac83\uc774\ub2e4."\ub77c\uace0 \uadf8\ub97c \ud3c9\uac00\ud588\ub2e4.[5] 1998\ub144 \u300a\ubaa8\ub358 \ub4dc\ub7ec\uba38\u300b \uba85\uc608\uc758 \uc804\ub2f9\uc5d0 \ud5cc\uc561\ub418\uc5c8\ub2e4.[6] 2011\ub144 \u300a\ub864\ub9c1 \uc2a4\ud1a4\u300b \ub3c5\uc790\uc5d0 \uc758\ud574 \uc5ed\ub300 5\ubc88\uc9f8\ub85c \uc704\ub300\ud55c \ub4dc\ub7ec\uba38\ub85c \uc120\uc815\ub418\uc5c8\ub2e4. 1988\ub144 \ube44\ud2c0\uc988\uc758 \uc77c\uc6d0\uc73c\ub85c \ub85c\ud070\ub864 \uba85\uc608\uc758 \uc804\ub2f9\uc5d0 \ud5cc\uc561\ub418\uc5c8\uace0, 2015\ub144 \uc194\ub85c \uacbd\ub825\uc744 \ud1b5\ud574 \ud5cc\uc561\ub3fc \ub450 \ucc28\ub840 \uc774\uc0c1 \ud5cc\uc561\ub41c 21\uba85\uc758 \uacf5\uc5f0\uc790 \uc911 \ud55c \uba85\uc774 \ub418\uc5c8\ub2e4.']},{name:"Jhon Lennon",bestSong:"Strawberry field forever",image:"https://lh3.googleusercontent.com/proxy/K5fXzAirL8U-S--FIsoNw64E7aY1__ca0zEwW72EFhSFCMRJ0XAP60T05AQA9xsHrWqKXsAp2fSQAOucTIu6HylaBJ6BH4wozzTc1E_7VwYsbRhHuKSL8g9Kbn2nD32FgC3aXXn2JSqOX9B7r9ETptra8Uy36_A92INn_cycPXjW",birth:new Date(1940,9,9),dead:new Date(1980,11,6),explain:["1940\ub144 10\uc6d4 9\uc77c ~ 1980\ub144 12\uc6d4 8\uc77c)\uc740 \uc601\uad6d\uc758 \uc2f1\uc5b4\uc1a1\ub77c\uc774\ud130\uc774\uc790 \ub300\uc911\uc74c\uc545 \uc0ac\uc0c1 \uac00\uc7a5 \uc131\uacf5\ud55c \ubc34\ub4dc\uc774\uc790 \uac00\uc7a5 \uc601\ud5a5\ub825 \uc788\ub294 \ub85d \ubc34\ub4dc\uc778 \ube44\ud2c0\uc988\uc758 \ucc3d\ub9bd \uba64\ubc84\ub2e4. \uadf8\ub294 \ub3d9\ub8cc \ud3f4 \ub9e4\uce74\ud2b8\ub2c8\uc640 \ud568\uaed8 \uac00\uc7a5 \uc704\ub300\ud55c \ud30c\ud2b8\ub108\uc2ed \uc911 \ud558\ub098\ub85c \uac04\uc8fc\ub418\ub294 \uc791\uace1 \ud30c\ud2b8\ub108\uc2ed\uc744 \ub9fa\uc5c8\ub2e4.","\ub9ac\ubc84\ud480\uc5d0\uc11c \ub098\uace0 \uc790\ub780 \ub808\ub17c\uc740 \uccad\uc18c\ub144\uae30\uc5d0 \ub300\uc720\ud589\ud55c \uc2a4\ud0a4\ud50c\uc5d0 \ud3b8\uc2b9\ud558\uc5ec \uadf8\uc758 \uccab \ubc34\ub4dc\uc778 \ucffc\ub9ac\uba58\uc744 \uacb0\uc131\ud558\uc600\uace0 1960\ub144\uc5d0 \uc774\ub984\uc744 \ube44\ud2c0\uc988\ub85c \ubc14\uafb8\uc5b4 \ud65c\ub3d9\ud588\ub2e4. 1970\ub144 \ube44\ud2c0\uc988 \ud574\uccb4 \ub4a4 \ub808\ub17c\uc740 \u300aJohn Lennon/Plastic Ono Band\u300b, \u300aImagine\u300b \ub4f1\uc758 \uc74c\ubc18\uacfc \u3008Give Peace a Chance\u3009, \u3008Working Class Hero\u3009, \u3008Imagine\u3009 \ub4f1\uc758 \uace1\uc744 \ubc1c\ud45c\ud558\uba74\uc11c \uc0b0\ubc1c\uc801\uc778 \uc194\ub85c \ud65c\ub3d9\uc744 \ubc8c\uc600\ub2e4.",'1969\ub144 \uc624\ub178 \uc694\ucf54\uc640 \uacb0\ud63c\ud55c \ud6c4 \ubbf8\ub4e4 \ub124\uc784\uc5d0 "\uc624\ub178"\ub97c \ucd94\uac00\ud55c \uadf8\ub294 1975\ub144\ubd80\ud130 \uc544\ub4e4 \uc200\uc744 \ub3cc\ubcf4\uae30 \uc704\ud574 \uc74c\uc545 \ud65c\ub3d9\uc744 \uc911\ub2e8\ud588\uace0, 1980\ub144 \u300aDouble Fantasy\u300b\ub97c \ubc1c\ud45c\ud558\uba74\uc11c \ubcf5\uadc0\ud588\uc73c\ub098 \uac19\uc740 \ud574 12\uc6d4 \ub9c8\ud06c \ucc44\ud504\uba3c\uc774 \uc3dc \ucd1d\uc5d0 \ub9de\uc544 \ud5a5\ub144 40\uc138\uc758 \ub098\uc774\uc5d0 \uc0ac\ub9dd\ud588\ub2e4.',"\ub808\ub17c\uc758 \ub9c8\uc9c0\ub9c9 \uc74c\ubc18\uc774 \ub41c \u300aDouble Fantasy\u300b\ub294 1982\ub144\uc5d0 \uc5f4\ub9b0 \uc81c24\ud68c \uadf8\ub798\ubbf8 \uc5b4\uc6cc\ub4dc\uc5d0\uc11c \uc62c\ud574\uc758 \uc74c\ubc18\uc744 \uc218\uc0c1\ud588\ub2e4. \ub808\ub17c\uc740 \uc790\uc2e0\uc758 \ubc18\ud56d\uc801\uc778 \uc131\ud5a5\uacfc \ud1b5\ub82c\ud55c \uc7ac\uce58\ub97c \uc74c\uc545, \uae00, \uadf8\ub9bc, \uc601\ud654, \uc778\ud130\ubdf0\ub97c \ud1b5\ud574 \ud45c\ud604\ud588\ub2e4.","1971\ub144 \ubbf8\uad6d \ub9e8\ud574\ud2bc\uc73c\ub85c \uc774\uc8fc\ud55c \ub4a4\ub85c \uccb4\ub958 \uc804\ubc18\uc5d0 \uac78\uccd0 \ub17c\ub780\uc774 \ub418\ub294 \uc815\uce58\uc801 \ubc0f \ud3c9\ud654 \uc6b4\ub3d9\uc744 \uc804\uac1c\ud588\uc73c\uba70 \uadf8\uc758 \ubca0\ud2b8\ub0a8 \uc804\uc7c1\uc5d0 \ub300\ud55c \ube44\ud310\uc740 \ub9ac\ucc98\ub4dc \ub2c9\uc2a8 \ud589\uc815\ubd80\uac00 \uadf8\ub97c \ucd94\ubc29\ud558\uae30 \uc704\ud55c \uc624\ub79c \uc2dc\ub3c4\ub97c \ub0b3\uc558\uace0, \ud55c\ud3b8 \uadf8\uac00 \uc791\uace1\ud55c \uace1\ub4e4\uc740 \ubc18\uc804\uc7c1 \uc6b4\ub3d9\uc758 \uc564\uc12c\uc73c\ub85c \ucc44\ud0dd\ub418\uac70\ub098 \ub354 \ud070 \ubc18\ubb38\ud654\ub97c \uad6c\ucd95\ud558\ub294\ub370 \uc77c\uc870\ud55c\ub2e4."]},{name:"Paul McCartney",bestSong:"Rocky Raccoon",image:"https://upload.wikimedia.org/wikipedia/commons/0/00/Paul_McCartney_Headshot_%28cropped%29.jpg",birth:new Date(1942,5,18),dead:null,explain:["\uc81c\uc784\uc2a4 \ud3f4 \ub9e4\uce74\ud2b8\ub2c8 \uacbd(Sir[2] James Paul McCartney, CH[3], MBE[4], 1942\ub144 6\uc6d4 18\uc77c ~ )\uc740 \ube44\ud2c0\uc988\uc640 \uc719\uc2a4\uc758 \uc804 \uba64\ubc84\ub85c \uac00\uc7a5 \uc798 \uc54c\ub824\uc9c4 \uc601\uad6d\uc758 \uc2f1\uc5b4\uc1a1\ub77c\uc774\ud130, \uc2dc\uc778, \uc791\uace1\uac00, \uba40\ud2f0\ud50c\ub808\uc774\uc5b4, \uc0ac\uc5c5\uac00, \ub179\uc74c \ud504\ub85c\ub4c0\uc11c, \uc601\ud654 \ud504\ub85c\ub4c0\uc11c, \ud654\uac00, \uadf8\ub9ac\uace0 \ub3d9\ubb3c \uad8c\ub9ac\uc640 \ud3c9\ud654 \uc6b4\ub3d9\uac00\uc774\ub2e4. \uc874 \ub808\ub17c, \uc870\uc9c0 \ud574\ub9ac\uc2a8, \ub9c1\uace0 \uc2a4\ud0c0\uc640 \ud568\uaed8 \uacb0\uc131\ud55c \ube44\ud2c0\uc988\uc758 \uba64\ubc84\ub85c\uc11c \uad6d\uc81c\uc801\uc778 \uba85\uc131\uc744 \ub5a8\uce5c \uadf8\ub294 \ub3d9\ub8cc \ub808\ub17c\uacfc \ud568\uaed8 \uac00\uc7a5 \ud601\uc2e0\uc801\uc774\uace0 \uc131\uacf5\uc801\uc778 \ud30c\ud2b8\ub108\uc2ed\uc73c\ub85c \uac04\uc8fc\ub418\ub294 \uc791\uace1 \ud30c\ud2b8\ub108\uc2ed\uc744 \ub9fa\uc5c8\uc73c\uba70, \ub85d \uc74c\uc545\uc0ac\uc5d0\uc11c \uac00\uc7a5 \uc720\uba85\ud55c \uace1\ub4e4\uc744 \uc5ec\ub7ff \uc791\uace1\ud588\ub2e4.[5] \ube44\ud2c0\uc988 \ud0c8\ud1f4 \uc774\ud6c4\ub85c\ub294 \uc131\uacf5\uc801\uc778 \uc194\ub85c \ud65c\ub3d9\uc744 \uac1c\uc2dc\ud558\uc600\uace0 \uc790\uc2e0\uc758 \uccab \uc544\ub0b4 \ub9b0\ub2e4 \uc774\uc2a4\ud2b8\uba3c\uacfc \uc2f1\uc5b4\uc1a1\ub77c\uc774\ud130 \ub370\ub2c8 \ub808\uc778\uacfc \uc9dd\uc744 \uc9c0\uc5b4 \ubc34\ub4dc \uc719\uc2a4\ub97c \uacb0\uc131\ud588\ub2e4. \uc601\ud654 \uc74c\uc545, \ud074\ub798\uc2dd, \uc804\uc790 \uc74c\uc545\uae4c\uc9c0 \uc190\uae38\uc744 \ubed7\uc5c8\uc73c\uba70 \ub610\ud55c \uc194\ub85c \uc2dc\uae30 \uc218\ub9ce\uc740 \uace1\ub4e4\uc744 \ubc1c\ud45c\ud588\ub2e4. \ub610\ud55c \uad6d\uc81c\uc801\uc778 \uc790\uc120 \ub2e8\uccb4\ub97c \uc9c0\uc6d0\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucc38\uc5ec\ud558\uace0 \uc788\ub2e4.","\u300a\uae30\ub124\uc2a4 \uc6d4\ub4dc \ub808\ucf54\ub4dc\u300b\ub294 \uadf8\uc758 \uace8\ub4e0 \ub514\uc2a4\ud06c 60\uac1c \ubcf4\uc720 \ubc0f 100\ub9cc \uc7a5\uc758 \uc2f1\uae00 \ud310\ub9e4\ub7c9\uc744 \ud1b5\ud574 \ub9e4\uce74\ud2b8\ub2c8\ub97c \ub300\uc911\uc74c\uc545 \uc5ed\uc0ac\uc0c1 \uac00\uc7a5 \uc131\uacf5\uc801\uc778 \uc74c\uc545\uac00 \uacb8 \uc791\uace1\uac00\ub85c \uae30\ub85d\ud588\ub2e4.[6] \uadf8\ub294 \ub2e8\ub3c5 \ud639\uc740 \uacf5\ub3d9 \uc791\uace1\ud55c 32\uace1\uc744 \ube4c\ubcf4\ub4dc \ud56b 100 \uc815\uc0c1\uc5d0 \uc62c\ub824\ub193\uc558\uace0 RIAA\ub294 \uadf8\uac00 \ubbf8\uad6d \ub0b4\uc5d0\uc11c\ub9cc 2009\ub144 \uae30\uc900 2550\ub9cc \uc7a5\uc758 \uc7a5\uc758 \uc74c\ubc18\uc744 \ud314\uc544\uce58\uc6e0\ub2e4\uace0 \ubc1c\ud45c\ud588\ub2e4. \uadf8\uc758 \uace1 \u3008Yesterday\u3009\ub294 3,700\uba85\uc774 \ub118\ub294 \uc544\ud2f0\uc2a4\ud2b8\uc5d0 \uc758\ud574 \ucee4\ubc84\ub418\uc5b4 \uac00\uc7a5 \ub9ce\uc774 \ucee4\ubc84\ub418\uc5c8\uace0 \ubbf8\uad6d \ud154\ub808\ube44\uc804\uacfc \ub77c\ub514\uc624\uc5d0\uc11c 7,000,000\ubc88\uc774 \ub118\ub294 \ubc29\uc1a1 \ud69f\uc218\ub97c \uae30\ub85d\ud588\ub2e4. \uc719\uc2a4\uac00 1977\ub144\uc5d0 \ucd9c\uc2dc\ud55c \u3008Mull of Kintyre\u3009\ub294 \uc601\uad6d\uc5d0\uc11c\ub294 \ucc98\uc74c 2\ubc31\ub9cc \uc7a5\uc774 \ub118\ub294 \ud310\ub9e4\uace0\ub97c \uc138\uc6e0\ub2e4\ub294 \uc77c\ub85c \uae30\ub85d\ub41c \uc2f1\uae00\uc774\uba70 \uc601\uad6d\uc758 \ube44\uc790\uc120 \uc2f1\uae00\ub85c\uc11c\ub294 \uc5ec\uc804\ud788 \uac00\uc7a5 \ub9ce\uc774 \ud314\ub9b0 \uc2f1\uae00\ub85c \ub0a8\uc558\ub2e4.[7] 1988\ub144 \ube44\ud2c0\uc988\uc758 \uba64\ubc84\ub85c\uc11c 1999\ub144 \uc194\ub85c \uac00\uc218\ub85c\uc11c \ub85c\ud070\ub864 \uba85\uc608\uc758 \uc804\ub2f9\uc5d0 \ub450 \ucc28\ub840 \uc785\uc131\ud588\uc73c\uba70,[8][9][10] \uadf8\ub798\ubbf8 \uc5b4\uc6cc\ub4dc\uc5d0\uc11c 21\ucc28\ub840 \uc218\uc0c1\ud588\ub2e4. 1992\ub144 \ud3f4\ub77c\uc74c\uc545\uc0c1\uc758 \uccab \uc218\uc0c1\uc790\uac00 \ub418\uae30\ub3c4 \ud588\ub2e4.[12] \ub9e4\uce74\ud2b8\ub2c8\ub294 1965\ub144 \ube44\ud2c0\uc988\uc758 \uba64\ubc84\ub85c\uc11c \ub300\uc601 \uc81c\uad6d \ud6c8\uc7a5 5\ub4f1\uae09(MBE)\uc744 \ubc1b\uc558\uace0[4] 1997\ub144\uc5d0 \ub2e8\ub3c5\uc73c\ub85c \uae30\uc0ac\uc791\uc704(Knight Bachelor)\uc5d0 \uc11c\uc784\ub41c \ub370 \uc774\uc5b4[2] 2017\ub144 \ucef4\ud328\ub2c8\uc5b8 \uc624\ube0c \uc544\ub108(Order of the Companions of Honour)\ub97c \ubc1b\uc558\ub2e4.","1998\ub144 \ub9b0\ub2e4\uc758 \uc8fd\uc74c \uc774\ud6c4\ub85c \ub9e4\uce74\ud2b8\ub2c8\ub294 2002\ub144 \ud5e4\ub354 \ubc00\uc2a4\uc640 \uacb0\ud63c\ud558\uc600\uc73c\ub098, 2008\ub144 \uc774\ud63c\uc744 \ud55c\ub2e4. \ub9e4\uce74\ud2b8\ub2c8\ub294 \uc0c8\ub86d\uac8c \ub0b8\uc2dc \uc26c\ubca8\uc744 \ub3d9\ubc18\uc790\ub85c \ub9de\uc544\ub4e4\uc600\ub2e4. \ud604\uc7ac\uae4c\uc9c0 \uc138 \ubc88 \uacb0\ud63c\ud55c \uadf8\ub294 \ub2e4\uc12f \uc790\uc2dd\uc758 \uc544\ubc84\uc9c0\uc774\ub2e4. \uba85\uc0c1\uc744 \uacf5\ubd80\ud55c \ub9e4\uce74\ud2b8\ub2c8\ub294 \uac00\ub054\uc529 1967\ub144 \ub9c8\ud558\ub9ac\uc2dc \ub9c8\ud5e4\uc26c \uc694\uae30\uac00 \uc138\ubbf8\ub098 \ub54c \uac00\ub974\uccd0 \uc900 \ub9cc\ud2b8\ub77c\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4. \ub9e4\uce74\ud2b8\ub2c8\ub294 \ub3d9\ubb3c \uad8c\ub9ac\uc640, \ucc44\uc2dd\uc8fc\uc758, \uc74c\uc545 \uad50\uc721\uc758 \uc9c0\uc9c0\uc790\uc774\ub2e4. \uadf8\ub294 \uc9c0\ub8b0, \ubb3c\uac1c \uc0ac\ub0e5, \uc81c3\uc138\uacc4\uc758 \ubd80\ucc44\ub97c \uadfc\uc808\ud558\ub294 \ucea0\ud398\uc778\uc5d0\uc11c\ub3c4 \ud65c\ub3d9\ud558\uace0 \uc788\ub2e4. \uc5ec\uc804\ud788 \ucd95\uad6c \ud32c\uc744 \uc790\ucc98\ud558\uba74\uc11c \uc5d0\ubc84\ud134\uacfc \ub9ac\ubc84\ud480 \ud48b\ubcfc \ud074\ub7fd\uc744 \uc9c0\uc6d0\ud558\uace0 \uc788\ub2e4. \uadf8\uc758 \ud68c\uc0ac MPL \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc2a4\ub294 \ubc84\ub514 \ud640\ub9ac\ub098 \ubba4\uc9c0\uceec \u300a\uc544\uac00\uc528\uc640 \uac74\ub2ec\ub4e4\u300b, \u300a\ucf54\ub7ec\uc2a4\ub77c\uc778\u300b, \u300a\uadf8\ub9ac\uc2a4\u300b\ub97c \ud3ec\ud568\ud55c 3,000\uac1c\uac00 \ub118\ub294 \uace1[13]\uc758 \uc800\uc791\uad8c\uc744 \ubcf4\uc720\ud558\uace0 \uc788\ub2e4."]},{name:"George Harrison",bestSong:"Here comes the sun",image:"https://www.inquirer.com/resizer/yJGa2qh0kdwyp9KFjytGoiItR5o=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/FKM7IY6INBBOPLDQCSMXZZBZYE.jpg",birth:new Date(1943,1,25),dead:new Date(2001,10,29),explain:['\uc870\uc9c0 \ud574\ub9ac\uc2a8(George Harrison,[nb 1] MBE, 1943\ub144 2\uc6d4 25\uc77c ~ 2001\ub144 11\uc6d4 29\uc77c)\uc740 \uc601\uad6d\uc758 \uae30\ud0c0 \uc5f0\uc8fc\uc790, \uc2f1\uc5b4\uc1a1\ub77c\uc774\ud130, \uadf8\ub9ac\uace0 \uc74c\uc545 \ubc0f \uc601\ud654 \ud504\ub85c\ub4c0\uc11c\ub2e4. \ud574\ub9ac\uc2a8\uc740 \ube44\ud2c0\uc988\uc758 \ub9ac\ub4dc \uae30\ud0c0 \uc5f0\uc8fc\uc790\ub85c\uc11c \uad6d\uc81c\uc801\uc778 \uba85\uc131\uc744 \uc5bb\uc5c8\ub2e4. \uc885\uc885 "\uc870\uc6a9\ud55c \ube44\ud2c0"\uc774\ub77c\uace0\ub3c4 \ubd88\ub9ac\ub294[3][4] \ud574\ub9ac\uc2a8\uc740 \ud78c\ub450\uad50 \uc2e0\ud654\ub97c \ubc1b\uc544\ub4e4\uc600\uace0, \uc778\ub3c4 \uc545\uae30\ub97c \uc790\uc2e0\uc758 \uc74c\uc545\uc5d0 \uc811\ubaa9\ud558\uc5ec \ub3d9\ub8cc \ube44\ud2c0\uc988\uc640 \uc11c\uad6c\uad8c \uccad\uc790\uc758 \uc2dc\uc57c\ub97c \ub113\ud788\ub294\ub370 \uc774\ubc14\uc9c0\ud588\ub2e4.[5] \ube44\ud2c0\uc988\uc758 \ub178\ub798 \ub300\ubd80\ubd84\uc740 \ub808\ub17c-\ub9e4\uce74\ud2b8\ub2c8\uac00 \uc791\uace1\ud588\uc73c\ub098, 1965\ub144 \uc774\ud6c4\ub85c \ub300\ubd80\ubd84\uc758 \ube44\ud2c0\uc988 \uc74c\ubc18\uc5d0\ub294 \uc801\uc5b4\ub3c4 2\uac1c\uc758 \ud574\ub9ac\uc2a8 \ub178\ub798\uac00 \uc218\ub85d\ub418\uc5b4 \uc788\ub2e4. \uadf8\uc758 \ub178\ub798\uc5d0\ub294 \u3008Taxman\u3009, \u3008Within You Without You\u3009, \u3008While My Guitar Gently Weeps\u3009, \u3008Here Comes the Sun\u3009, \u3008Something\u3009 \ub4f1\uc774 \uc788\uc73c\uba70, \ub9c8\uc9c0\ub9c9 \uace1\uc740 \ube44\ud2c0\uc988\uc758 \ub178\ub798 \uc911\uc5d0\uc11c \ub450 \ubc88\uc9f8\ub85c \uac00\uc7a5 \ub9ce\uc774 \ucee4\ubc84\ub41c \ub178\ub798\uac00 \ub418\uc5c8\ub2e4.',"\ud574\ub9ac\uc2a8\uc740 \ucd08\uae30\uc5d0 \uc870\uc9c0 \ud3fc\ube44\uc640 \uc7a5\uace0 \ub77c\uc778\ud558\ub974\ud2b8\uc758 \uc601\ud5a5\uc744 \ubc1b\uc558\uace0, \uc774\ud6c4 \uce7c \ud37c\ud0a8\uc2a4, \uccc7 \uc573\ud0a8\uc2a4, \ucc99 \ubca0\ub9ac\uc758 \uc601\ud5a5\uc744 \ubc1b\uc558\ub2e4. \uadf8\ub294 1965\ub144\ubd80\ud130 \ubc84\uc988\uc640 \ubc25 \ub51c\ub7f0\uc5d0 \uad00\uc2ec\uc744 \uac00\uc838 \ube44\ud2c0\uc988\ub97c \ud3ec\ud06c \ub85d\uc73c\ub85c \uc778\ub3c4\ud588\uace0, \ub610\ud55c \uc778\ub3c4 \uace0\uc804 \uc74c\uc545\uc5d0 \uad00\uc2ec\uc744 \uac00\uc838 \u3008Norwegian Wood (This Bird Has Flown)\u3009\uc5d0 \uc2dc\ud0c0\ub974\ub97c \uc0ac\uc6a9\ud588\ub2e4. 1967\ub144\uc5d0 \ubc34\ub4dc\uc640 \ud568\uaed8 \ucd08\uc6d4 \uba85\uc0c1\uc744 \uc2dc\uc791\ud55c \uadf8\ub294 \uc774\uc5b4\uc11c \ud5e4\uc5b4 \ud06c\ub9ac\uc288\ub098 \uc6b4\ub3d9\uacfc\uc758 \uad00\uacc4\ub97c \ubc1c\uc804\uc2dc\ucf30\ub2e4. 1970\ub144 \ube44\ud2c0\uc988\uc758 \ud574\uccb4 \uc774\ud6c4\uc5d0\ub294 \uc790\uc2e0\uc758 \uac00\uc7a5 \uc131\uacf5\ud55c \uc2f1\uae00 \u3008My Sweet Lord\u3009\uacfc \ud568\uaed8 \ud2b8\ub9ac\ud50c \uc74c\ubc18 \u300aAll Things Must Pass\u300b\uc744 \ubc1c\ud45c\ud588\ub2e4. \uadf8\ub9ac\uace0 \uc790\uc2e0\uc758 \uc194\ub85c \uacbd\ub825\uc5d0\uc11c \uc2dc\uadf8\ub2c8\ucc98 \uc0ac\uc6b4\ub4dc\uc640 \uac19\uc740 \uc2ac\ub77c\uc774\ub4dc \uae30\ud0c0\ub97c \uc120\ubcf4\uc600\ub2e4. \ud574\ub9ac\uc2a8\uc740 1971\ub144 \ubc29\uae00\ub77c\ub370\uc2dc \ucf58\uc11c\ud2b8\ub97c \uc778\ub3c4 \uc74c\uc545\uac00 \ub77c\ube44 \uc0f9\uce74\ub974\uc640 \uacf5\ub3d9 \uae30\ud68d\ud558\uc5ec \ub77c\uc774\ube0c \uc5d0\uc774\ub4dc\uc640 \uac19\uc740 \uc790\uc120 \ucf58\uc11c\ud2b8\uc758 \uc120\uad6c\uc790 \uc5ed\ud560\uc744 \ud588\ub2e4. \ud574\ub9ac\uc2a8\uc740 \uc74c\uc545 \ubc0f \uc601\ud654 \ud504\ub85c\ub4c0\uc11c\ub85c\uc11c \ube44\ud2c0\uc988\uc758 \uc560\ud50c \uc74c\ubc18\uc0ac\uc640 \uacc4\uc57d\uc744 \ub9fa\uc5b4 1974\ub144 \ub2e4\ud06c \ud638\uc2a4 \ub808\ucf54\ub4dc\ub97c \ucc3d\ub9bd\ud558\uace0 1978\ub144 \ud578\ub4dc\uba54\uc774\ub4dc \ud544\ub984\uc744 \uacf5\ub3d9 \ucc3d\ub9bd\ud588\ub2e4.","\ud574\ub9ac\uc2a8\uc740 \uc194\ub85c \uc5f0\uc8fc\uc790\ub85c\uc11c \ubca0\uc2a4\ud2b8\uc140\ub7ec \uc2f1\uae00\uacfc \uc74c\ubc18\uc744 \uba87 \uc7a5 \ubc1c\ud45c\ud588\uc73c\uba70, 1988\ub144\uc5d0 \ud50c\ub798\ud2f0\ub118\uc744 \uae30\ub85d\ud55c \uc288\ud37c\uadf8\ub8f9\uc778 \ud2b8\ub798\ube14\ub9c1 \uc70c\ubc84\ub9ac\uc2a4\ub97c \uacf5\ub3d9 \ucc3d\ub9bd\ud588\ub2e4. \uc5ec\ub7ec \uc74c\ubc18\uc744 \uc81c\uc791\ud55c \ud574\ub9ac\uc2a8\uc740 \ubc30\ub4dc\ud551\uac70, \ub85c\ub2c8 \uc6b0\ub4dc, \ube4c\ub9ac \ud504\ub808\uc2a4\ud134\uc758 \ud2b8\ub799\uc5d0\uc11c \uac8c\uc2a4\ud2b8 \uae30\ud0c0 \uc5f0\uc8fc\uc790\ub85c \ucd9c\uc5f0\ud588\uc73c\uba70 \ub51c\ub7f0, \uc5d0\ub9ad \ud074\ub7a9\ud2bc, \ub9c1\uace0 \uc2a4\ud0c0, \uadf8\ub9ac\uace0 \ud1b0 \ud398\ud2f0\uc640 \ud568\uaed8 \ub178\ub798\uc640 \uc74c\ubc18\uc744 \uacf5\ub3d9 \uc791\uc5c5\ud588\ub2e4. \u300a\ub864\ub9c1 \uc2a4\ud1a4\u300b\uc9c0\ub294 \uc5ed\ub300 \ucd5c\uace0\uc758 \uae30\ud0c0\ub9ac\uc2a4\ud2b8 100\uba85\uc5d0\uc11c \ud574\ub9ac\uc2a8\uc744 11\uc704\ub85c \uc120\uc815\ud588\ub2e4. \uadf8\ub294 1988\ub144 \ube44\ud2c0\uc988 \uba64\ubc84\ub85c\uc11c, \uadf8\ub9ac\uace0 \uc0ac\ud6c4\uc778 2004\ub144 \uc194\ub85c\ub85c\uc11c \ub450 \ucc28\ub840 \ub85c\ud070\ub864 \uba85\uc608\uc758 \uc804\ub2f9\uc5d0 \uc62c\ub790\ub2e4.","\ud574\ub9ac\uc2a8\uc740 1966\ub144\uc5d0 \ubaa8\ub378\uc778 \ud328\ud2f0 \ubcf4\uc774\ub4dc\uc640 \ucc98\uc74c \uacb0\ud63c\ud588\uc73c\uba70, 1977\ub144 \uc774\ud63c\ud588\ub2e4. \ub2e4\uc74c \ud574\uc5d0 \uc62c\ub9ac\ube44\uc544 \ud574\ub9ac\uc2a8\uacfc \uacb0\ud63c\ud558\uc5ec \uc544\ub4e4 \ub2e4\ub2c8 \ud574\ub9ac\uc2a8\uc744 \uac00\uc9c0\uac8c \ub418\uc5c8\ub2e4. \ud574\ub9ac\uc2a8\uc740 2001\ub144 \ud3d0\uc554\uc73c\ub85c 58\uc138\uc758 \ub098\uc774\uc5d0 \uc0ac\ub9dd\ud588\ub2e4. \uadf8\ub294 \ud654\uc7a5\ub418\uc5c8\uace0, \ud78c\ub450\uad50\uc758 \uc804\ud1b5\uc5d0 \ub530\ub77c \uc7ac\ub294 \uc778\ub3c4\uc758 \uac20\uc9c0\uc2a4 \uac15\uacfc \uc57c\ubb34\ub098 \uac15\uc5d0 \ud769\ubfcc\ub824\uc84c\ub2e4. \uadf8\ub294 1\uc5b5 \ud30c\uc6b4\ub4dc\uc5d0 \uac00\uae4c\uc6b4 \uc7ac\uc0b0\uc744 \ub0a8\uae30\uace0 \ub5a0\ub0ac\ub2e4."]}],T=[{name:"Please Please Me",image:"https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg",release:new Date(1963,3,22),playTime:B(32,15),track:["I Saw Her Standing There","Misery","Anna","Chains","Boys","Ask Me Why","Please Please Me","Love Me Do","P.S. I Love You","Baby It's You","Do You Want To Know A Secret","A Taste Of Honey","There's A Place","Twist and Shout"]},{name:"With the Beatles",image:"https://upload.wikimedia.org/wikipedia/en/0/0a/Withthebeatlescover.jpg",release:new Date(1963,11,22),playTime:B(32,14),track:["It Won't Be Long","All I've Got To Do","All My Loving ","Don't Bother Me","Little Child","Till There Was You","Please Mister Postman","Roll Over Beethoven","Hold Me Tight","You Really Got A Hold On Me","Devil In Her Heart","Not A Second Time","Money (That's What I Want)"]},{name:"A Hard Day's Night",image:"https://upload.wikimedia.org/wikipedia/en/e/e6/HardDayUK.jpg",release:new Date(1964,7,10),playTime:B(30,10),track:["A Hard Day's Night","I Should Have Known Better","If I Fell","I'm Happy Just To Dance With You","And I Love Her","Tell Me Why","Can't Buy Me Love","Any Time At All","I'll Cry Instead","Things We Said Today","When I Get Home","You Can't Do That","I'll Be Back"]},{name:"Beatles for sale",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Beatlesforsale.jpg/220px-Beatlesforsale.jpg",release:new Date(1964,12,4),playTime:B(34,13),track:["No Reply","I'm a Loser","Baby's in Black","Rock and Roll Music","I'll Follow the Sun","Mr. Moonlight","Kansas City / Hey-Hey-Hey-Hey","Eight Days a Week","Words of Love","Honey Don't","Every Little Thing","I Don't Want to Spoil the Party","What You're Doing","Everybody's Trying to Be My Baby"]},{name:"Help!",image:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Help%21_%28The_Beatles_album_-_cover_art%29.jpg/220px-Help%21_%28The_Beatles_album_-_cover_art%29.jpg",release:new Date(1965,8,6),playTime:B(33,44),track:["Help!","The Night Before","You've Got To Hide Your Love Away","I Need You","Another Girl","You're Going To Lose That Girl","Ticket To Ride","Act Naturally","It's Only Love","You Like Me Too Much","Tell Me What You See","I've Just Seen A Face","Yesterday","Dizzy Miss Lizzy"]},{name:"Rubber Soul",image:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Rubber_Soul.jpg/220px-Rubber_Soul.jpg",release:new Date(1965,12,3),playTime:B(34,55),track:["Drive My Car","Norwegian Wood (This Bird Has Flown)","You Won't See Me","Nowhere Man","Think For Yourself","The Word","Michelle","What Goes On","Girl","I'm Looking Through You","In My Life","Wait","If I Needed Someone","Run For Your Life"]},{name:"Revolver",image:"https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Revolver.jpg/220px-Revolver.jpg",release:new Date(1966,8,5),playTime:B(35,1),track:["Taxman","Eleanor Rigby","I'm Only Sleeping","Love You To","Here, There and Everywhere","Yellow Submarine","She Said, She Said","Good Day Sunshine","And Your Bird Can Sing","For No One","Doctor Robert","I Want To Tell You","Got To Get You Into My Life","Tomorrow Never Knows"]},{name:"Sgt. Pepper's Lonely Hearts Club Band",image:"https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg/220px-Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg",release:new Date(1967,5,26),playTime:B(39,36),track:["Sgt. Pepper's Lonely Hearts Club Band","With A Little Help From My Friends","Lucy in the Sky with Diamonds","Getting Better","Fixing A Hole","She's Leaving Home","Being For The Benefit of Mr.Kite!","Within You Without You","When I'm Sixty-Four","Lovely Rita","Good Morning Good Morning","Sgt. Pepper's Lonely Hearts Club Band (Reprise)","A Day in the Life"]},{name:"Magical Mystery Tour",image:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/MagicalMysteryTourDoubleEPcover.jpg/220px-MagicalMysteryTourDoubleEPcover.jpg",release:new Date(1967,12,8),playTime:B(36,35),track:["Magical Mystery Tour","The Fool on the Hill","Flying","Blue Jay Way","Your Mother Should Know","I Am the Walrus","Hello Goodbye","Strawberry Fields Forever","Penny Lane","Baby You're a Rich Man","All You Need Is Love"]},{name:"The Beatles",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/TheBeatles68LP.jpg/220px-TheBeatles68LP.jpg",release:new Date(1968,11,22),playTime:B(93,43),track:["Back in the U.S.S.R","Dear Prudence","Glass Onion","Ob-La-Di, Ob-La-Da","Wild Honey Pie","The Continuing Story Of Bungalow Bill","While My Guitar Gently Weeps","Happiness Is a Warm Gun","Martha My Dear","I\u2032m So Tired","Blackbird","Piggies","Rocky Raccoon","Don't Pass Me By","Why Don't We Do It In The Road","I Will","Julia","Birthday","Yer Blues","Mother Nature's Son","Everybody's Got Something To Hide Except Me And My Monkey","Sexy Sadie","Helter Skelter","Long, Long, Long","Revolution 1","Honey Pie","Savoy Truffle","Cry Baby Cry","Revolution 9","Good Night"]},{name:"Yellow Submarine",image:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg/220px-TheBeatles-YellowSubmarinealbumcover.jpg",release:new Date(1969,1,13),playTime:B(40,12),track:["Yellow Submarine","Only a Northern Song","All Together Now","Hey Bulldog","It's All Too Much","All You Need Is Love","Pepperland","Sea of Time","Sea of Holes","Sea of Monsters","March of the Meanies","Pepperland Laid Waste","Yellow Submarine in Pepperland"]},{name:"Abbey Road",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Beatles_-_Abbey_Road.jpg/220px-Beatles_-_Abbey_Road.jpg",release:new Date(1969,9,26),playTime:B(47,3),track:["Come Together","Something","Maxwell's Silver Hammer","Oh! Darling","Octopus's Garden","I Want You (She's So Heavy)","Here Comes The Sun","Because","You Never Give Me Your Money","Sun King","Mean Mr. Mustard","Polythene Pam","She Came in Through the Bathroom Window","Golden Slumbers","Carry That Weight","The End","Her Majesty","The Long One"]},{name:"Let It Be ",image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/25/LetItBe.jpg/220px-LetItBe.jpg",release:new Date(1970,5,8),playTime:B(35,10),track:["Two of Us","Dig a Pony","Across The Universe","I Me Mine","Dig It","Let It Be","Maggie Mae","I've Got a Feeling","One After 909","The Long and Winding Road","For You Blue","Get Back"]}];new Date(1964,1,10),B(27,39),new Date(1964,1,20),B(26,43),k("I Want to Hold Your Hand",S(),B(2,24)),k("I Saw Her Standing There",S(),B(2,50)),k("This Boy",S(),B(2,11)),k("It Won't Be Long",S(),B(2,11)),k("All I've Got to Do",S(),B(2,5)),k("All My Loving",S(),B(2,4)),k("Don't Bother Me",S("Harrison"),B(2,28)),k("Little Child",S(),B(1,46)),k("Till There Was You",S("Meredith Wilson"),B(2,12)),k("Hold Me Tight",S(),B(2,30)),k("I Wanna Be Your Man",S(),B(1,59)),k("Not a Second Time",S(),B(2,3));function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Lennon\u2013McCartney";return e}function k(e,a,t){return{name:e,composer:a,playTime:t}}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return[e,a]}t(25),t(26);var I=function(e){var a=e.profile;return Object(n.jsxs)("div",{className:"Profile_wrap",children:[Object(n.jsx)("div",{className:"Profile_image_wrap",children:Object(n.jsx)("span",{className:"Profile_image",children:Object(n.jsx)("img",{src:a.image})})}),Object(n.jsxs)("div",{className:"Profile_explain_wrap",children:[Object(n.jsx)("div",{className:"Profile_name_wrap",children:Object(n.jsx)("h1",{className:"Profile_name",children:a.name})}),Object(n.jsx)("div",{className:"Profile_birth_wrap",children:Object(n.jsxs)("h3",{className:"Profile_birth",children:["".concat(a.birth.getFullYear(),"\ub144 ").concat(a.birth.getMonth()+1,"\uc6d4 ").concat(a.birth.getDate(),"\uc77c"),a.dead?"~ ".concat(a.dead.getFullYear(),"\ub144 ").concat(a.dead.getMonth()+1,"\uc6d4 ").concat(a.dead.getDate(),"\uc77c"):"..."]})}),Object(n.jsx)("div",{className:"Profile_explain_text_wrap",children:a.explain.map((function(e){return Object(n.jsx)("p",{className:"Profile_explain_text",children:e})}))})]})]})},D=function(){var e=Object(i.useContext)(N).sliderObj;return Object(n.jsxs)("div",{className:"Profile_List",children:[Object(n.jsx)("div",{className:"Profile_text_wrap",children:Object(n.jsx)("span",{children:"Introduce"})}),Object(n.jsx)("div",{className:"Profile_List_wrap",children:e.map((function(e){return Object(n.jsx)(I,{profile:e})}))})]})},N=Object(i.createContext)(null);var L=function(){var e=Object(i.useState)(f),a=Object(s.a)(e,2),t=a[0],o=(a[1],Object(i.useState)(0)),l=Object(s.a)(o,2),r=l[0],c=l[1],d=Object(i.useState)(T),h=Object(s.a)(d,2),m=h[0],g=(h[1],Object(i.useState)(!1)),b=Object(s.a)(g,2),j=b[0],y=b[1],x=Object(i.useState)(null),_=Object(s.a)(x,2),O=_[0],v=_[1],w=Object(i.useState)(null),S=Object(s.a)(w,2),k=S[0],B=S[1];return Object(n.jsx)(N.Provider,{value:{musicIndex:k,musicClickToggle:function(e){B(e!==k?e:null)},albumIndex:O,modalClickToggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==e&&v(e),y(!j),B(null)},arrowLeftClick:function(){var e=r-1;e=-1===e?t.length-1:e,c(e)},arrowRightClick:function(){var e=r+1;e%=t.length,c(e)},sliderObj:t,slideIndex:r,discography:m},children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsx)(p,{}),Object(n.jsx)(D,{}),j?Object(n.jsx)(M,{}):null]})})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,o=a.getLCP,l=a.getTTFB;t(e),n(e),i(e),o(e),l(e)}))};t(27);r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),H()}],[[28,1,2]]]);
//# sourceMappingURL=main.ee574efd.chunk.js.map