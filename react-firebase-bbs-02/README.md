# React Firbase 연동 BBS

## Navigation 구현

- yarn add react-router-dom

## 컴포넌트 생성

- src/comps 폴더 생성
- Header.jsx, MainNav.jsx, BBsMain.jsx 컴포넌트 생성

## firebase 연동

- yarn add firebase 설치
- 2021-09월 현재 설치되는 firebase SDK가 9.0.x 인데 firebase연동하는 과정에 문제를 일으키고 있다
- 9.x 버전에 문제가 있어서 8.10.0 버전을 설치할 것이다
- yarn add firebase@8.10.0 / npm install firebase@8.10.0
- 날짜와 시간 설정을 위한 moment 설치 : yarn add moment

## firebase에 호스팅

- 내가만든 프로젝트를 다른 사람이 다른 컴퓨터에서 다른 브라우져도 접속할수 있도록 외부의 서버에 deploy 하기

## 배포 도구 설치

- npm install -g firebase-tools / firebase-cli
- firebase-tools를 설치하는데 오류가 나는 경우 : npm uninstall -g firebase-cli

## react 프로젝트를 firebase 에 배포하기

- 프로젝트를 build : yarn build
- firebase login 하기 : firebase login
- 프로젝트에 firebase deploy 설정하기 : firebase init hosting
- 프로젝트를 firebase에 Deploy(배포하기)  
  : firebase deploy --only hosting

## 수정후 재 배포

- yar build
- firebase deploy --only hosting
