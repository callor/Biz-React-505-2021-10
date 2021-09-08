/**
 * 다수의 컴포넌트를 통합관리하기
 * index.js파일을 만들고
 * 현재 폴더에 있는 모든 컴포넌트를 import
 */
import Header from "./Header";
import Footer from "./Footer";
import RemBody from "./RemBody";
import RemList from "./RemList";

// import 된 컴포넌트를 변수(객체)로 export
export { Header, Footer, RemBody, RemList };

// import { 사용할컴포넌트들 } from "index" 와 같이 사용할수 있다
