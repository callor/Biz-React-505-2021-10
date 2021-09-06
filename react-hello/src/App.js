import logo from './logo.svg';
import './App.css';

// 모듈로 분리된 컴포넌트 import 하기
// ./components/hello.js 파일을 Hello 라는 컴포넌트객체로 선언하기

// 통상
// 사용자 정의형(개발자가 임의로 만든) 컴포넌트를 사용하기 위해
// import 할때는 이름의 첫글자를 대문자로 사용한다
// react를 사용하는 과정에서 react자체적으로 제공하는 컴포넌트와
// 혼동되거나 충돌하는 것을 방지하기 위함이다
import Hello from "./components/hello.js"

/**
 * HTML의 h1 tag를 사용하여 반갑습니다 문자열을 표현하는
 * 컴포넌트를 선언하기
 * 컴포넌트는 html tag를 만드는 코드를 return 한다
 * 
 * 컴포넌트는 반드시 
 * return( tag를 그리는 코드, HTML 작성과 유사 )문이 있다
 * 
 * 컴포넌트에 포함된 tag는 반드시 open과 close가 명확해야 한다
 * 보통 <p>text 방식으로 HTML에서는 사용하지만
 * 컴포넌트에서는 <p>text</p> 처럼 마감을 반드시 지켜야 한다
 * 
 * return 문에서 사용되는 tag는 1개만 가능하다
 * return 문에 여러개의 tag를 나열할수 없다
 * 여러개의 tag를 나열하려면 가장 바깥쪽에서 tag를 감싸야 한다
 * 
 * 가장 바깥쪽은 내용이 없는 tag로 감쌀수 있다
 * return*(  <>   </> ) 형식의 코드를 작성해야만 한다
 * 
 */
const MyBox = ()=>{
	return (
		<>
			<div>
				<h1>반갑습니다</h1>
				<p>우리나라만세</p>
			</div>
			<div>
				<h1>대한민국만세</h1>

			</div>
		</>
	)
}

/**
 * 선언된 컴포넌트를 사용할때는
 * 마치 tag를 사용하는 것처럼 사용한다
 * <컴포넌트 />
 * 사용할때는 self closing할수 있다
 * 
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<MyBox/>
		<Hello/>
		<MyBox />
      </header>
    </div>
  );
}

export default App;
