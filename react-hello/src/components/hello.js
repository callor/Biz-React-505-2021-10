
/**
 * 2개의 변수(상수) 선언
 */
const comp = "컴포넌트만들기"
const nation = "Republic of Korea"

/**
 * 3개의 요소를 갖는 객체(JSON)를 선언
 */
const buyer = {
	name : "홍길동",
	addr : "서울시",
	age : 30

}

/**
 * 미리 선언된 변수를 컴포넌트 코드에서 사용할때
 * {변수명} 과 같이 사용한다
 * @returns 
 */
const HelloBox = ()=>{
	return(
		<>
			<h1>컴포넌트 만들기</h1>
			<h3>{comp}</h3>
			<ul>
				<li>이름 : {buyer.name}</li>
				<li>주소 : {buyer.addr}</li>
				<li>나이 : {buyer.age}</li>
			</ul>
		</>
	)
}


/**
 * 모듈(file)로 분리한 컴포넌트 만들기
 * 
 * @returns 
 */
const Hello = ()=>{
return (
	<>
		<h1>Republic of Korea</h1>
		<HelloBox/>
		<p>{nation}</p>
	</>
)}

/**
 * 모듈로 분리된 컴포넌트는 반드시 export 해야 한다
 */
// module.exports 와 같은 코드(ES6+ 문법)
export default Hello