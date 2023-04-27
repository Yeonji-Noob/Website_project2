# Website redesign project 2



## :triangular_flag_on_post:Introduce

+ 🎉 첫 리액트 프로젝트! 🥳🎉

+ 웹사이트 redesign으로는 두번째 개인 프로젝트입니다. 

+ 사이트 선정은 'soribada 음악 스트리밍 사이트'로 하였습니다.

+ 제가 만든 [Project-development-guide](https://github.com/Yeonji-Noob/markup-guide) 를 기준으로 프로젝트를 관리하고 있습니다.

+ :warning:배포 시점인 현재 반응형은 지원하지 않고 있습니다. (야금야금 잠수패치 할 예정...)

![image](https://user-images.githubusercontent.com/121682565/234746913-33792363-d9e4-4006-9cab-dc8efad68435.png)


## :link:Link

https://yeonji-noob-soribada.netlify.app/

---


## :cake: Style guide
![style tile](https://user-images.githubusercontent.com/121682565/234733368-f3234847-6a4c-4372-b97d-b6ab34e61b5c.png)

---
## 🍡 Comparison designs
![image](https://user-images.githubusercontent.com/121682565/234734156-1937e62f-9cfd-4d3a-a662-a29f64fa7f20.png)

---
## 📘 Function

+ light/dark mode

  - 전역상태관리 라이브러리 zustand를 이용하여 useState훅과 sass로 light/dark mode를 만들어보았습니다.

![mode](https://user-images.githubusercontent.com/121682565/234735787-aa1a400f-da8f-424d-9255-8d3e26feed03.gif)


+ music play, volume control

  - 기본적으로 음악 재생, 일시정지, 볼륨컨트롤, 음악시간표시, 다음곡/이전곡 재생하기가 가능합니다.
  - 하트 누르기도 됩니다. 🥰
  - useSound 라이브러리를 이용하였습니다.
  
![play](https://user-images.githubusercontent.com/121682565/234736135-07799c2c-7f83-4c0d-9a25-db67f60cdcb6.gif)

---
 
* 공통사항

  + map을 활용하여 비슷한 구조의 컴포넌트 반복 사용
  
  
  
  + react-router 사용해서 페이지 링크
  
  ![router](https://user-images.githubusercontent.com/121682565/234738371-7d94cb51-105f-434e-89c8-c78e37765058.gif)


  + smooth-scrollbar 라이브러리 사용 

  ![scroll](https://user-images.githubusercontent.com/121682565/234743113-2457c7b8-32eb-4818-97e4-50b15b62e287.gif)


---

## 📑 Pages

**Home, 플레이리스트** 
* useState를 사용해서 앨범 커버에 버튼 hover, map을 활용한 컴포넌트 반복
  
  ![page1](https://user-images.githubusercontent.com/121682565/234744221-9e9e16e2-6d31-4fd5-8fca-0aa0ae2d4bba.gif)



**오늘의 음악**
* ES6 set객체를 활용한 checkbox 상태관리 ~~(제일 어려웠다..)~~
  + [참고 링크](https://velog.io/@kingth/Check-Box-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%ACfeat.-Set)
  
  ![checkbox](https://user-images.githubusercontent.com/121682565/234745859-1f2d04c3-3ce6-4d45-b0a7-b2104e238421.gif)


  


**음악 차트**
* axios를 사용한 빌보드 hot 100 api 호출
  + [Billboard Chart 비공식 API](https://github.com/KoreanThinker/billboard-json) <- 정말로 너무 감사하게도 이 api 덕분에 진행을 할 수 있었다..
  + 날짜마다 순위가 업데이트 됩니다.
  
  ![billboard](https://user-images.githubusercontent.com/121682565/234746379-9be98cf3-8817-4d7a-bf21-7c25f48005c7.gif)

  

---

## :house:Lighthouse 변화

__4/25일__

![image](https://user-images.githubusercontent.com/121682565/234750735-31ec8105-6931-4aa4-a225-eaf0c46db9f4.png)

* 이미지 확장자를 webp로 교체, oxipng 사용 등 파일 크기 절감
* 웹 접근성이 떨어지는 사소한 부분들 교정
* 콘솔창 에러 해결 및 제거 등

__4/27일__

![image](https://user-images.githubusercontent.com/121682565/234751054-111b8b34-addd-4ca9-8419-6a2f4374c4b7.png)



* 회고는 차차 블로그에 쓸 예정입니다. 읽어주셔서 감사합니다. :blush::blush:

---

## 📚 Used languages
<p>
<img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SASS&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>


## 🧰 Used tools
<p>
<img src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
<img src="https://img.shields.io/badge/canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white"/>
</p>

## 🗂 Package manager
<p>
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"/>
</p>

## ✨ Library
<p>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/createreactapp-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white"/>
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/>
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/zustand-ECB63F?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/useSound-617BFF?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/smoothscrollbar-606060?style=for-the-badge&logo=react&logoColor=white"/>
</p>
