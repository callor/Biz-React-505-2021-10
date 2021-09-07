import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Write from "./comps/Write";
import View from "./comps/View";

// 프로젝트가 시작될때 임시로 보여줄 데이터
const bbsSample = {
  b_date: "2021-09-07",
  b_time: "10:24:00",
  b_writer: "홍길동",
  b_subject: "React BBS",
  b_content: "React를 이용한 BBS 프로젝트 만들기",
};

function App() {
  /**
   * 상태(변수,객체) bbsVO를 선언하고
   * 값의 변경이 필요할때 사용할 setBBs() 함수를 선언하겠다
   * useState() 함수를 사용하여 상태를 만든다
   * 상태를 만들때 bbsSample을 사용하여 초기값을 설정하겠다
   * bbsSample을 초기값으로 설정하는 이유는
   * bbsVO가 null값이 되어서 이후 코드에서 오류가 나는것을 방지하기 위함이다
   */
  const [bbsVO, setBBs] = useState(bbsSample);

  // input box의 데이터 change event를 처리할 함수 선언
  const bbsChange = (event) => {
    const { name, value } = event.target;

    // 배열요소로 변수 선언하기
    setBBs({ ...bbsVO, [name]: value });

    // 아래의 중복되는 if을 사용한 코드를 단순화 시킬수 있다
    if (name === "b_date") {
      setBBs({ ...bbsVO, b_date: value });
    } else if (name === "b_time") {
      setBBs({ ...bbsVO, b_time: value });
    }
  };

  /**
   * <Write bbs={bbsVO}/> 코드에 대한 설명
   * import 된 Write.js 컴포넌트를 결합하고
   * 선언된 bbsVO 상태변수를 bbs라는 이름으로 전달하기
   *
   * Call By Name
   * 매개변수를 전달할때 전달받을 변수이름을 지정하고
   * 변수 값을 전달하는 방식
   *
   * Write(bbsVO) 형식으로 전달하고
   * function Write(bbs) {  }
   *
   *
   * <Write onBBsChange={bbsChage} /> 코드 설명
   * App.js 에 선언된 bbsChange() 함수를
   * onBBsChange이름으로 전달하겠다
   *
   *
   */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main_section">
        <article>
          <Write bbs={bbsVO} onBBsChange={bbsChange} />
        </article>
        <article>
          <View bbs={bbsVO} />
        </article>
      </section>
    </div>
  );
}

export default App;
