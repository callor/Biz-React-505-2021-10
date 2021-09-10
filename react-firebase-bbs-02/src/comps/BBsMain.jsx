import React, { useCallback, useEffect, useState } from "react";
import "../css/BBs.css";
import { firestore } from "../config/BBSConfig";
import { useHistory } from "react-router-dom";

function BBsMain() {
  const router = useHistory();
  const [bbsData, setBBsData] = useState([]);
  const firebaseFetch = async () => {
    /**
     * 칼럼으로 정렬하기
     * collection("").orderBy("칼럼명") 칼럼명으로 오름차순 정렬
     * collection("").orderBy("칼럼명","desc" ) 칼럼명으로 내림차순 정렬
     *
     * collection.where() 조건지정정이 가능
     *
     * 조건지정을 할때 부등호(<>)가 들어가는 조건을 사용할경우는
     * 반드시 해당 칼럼을 먼저 정렬해주어야 한다
     * collection.orderBy("b_date")
     * 		.where('b_date > "2021-09-01" ')
     *
     * orderBy() 두개 이상의 칼럼에 지정할경우
     * firestore 콘솔에서 복합색인을 추가 해 주어야 한다
     *
     * orderBy("b_subject") b_subject 칼럼을 기준으로 오름차순을 수행했는데
     * 만약 일부 데이터에 b_subject 칼럼의 데이가 없으면(null 등)
     * 해당 데이터는 리스트에 없다
     *
     * 리스트 확인에서 orderBy를 사용해야 할 경우
     * 해당 칼럼은 not null 이라고 보면 된다
     *
     */
    const result = await firestore
      .collection("bbs")
      .orderBy("b_date", "desc") // b_date 칼럼으로 내림차순정렬
      .orderBy("b_time", "desc") // b_time 칼럼으로 내림차순정렬
      .get();

    /**
     * firestore로 부터 수신된 데이터 중에서
     * 실제 BBS 데이터객체만 추출하여 bbsList 배열로 만들기
     */
    const bbsList = result.docs.map((doc) => {
      const id = doc.id;
      // {...객체, 칼럼:값}
      // 객체에 담긴 데이터를 펼치고 복제하여 return을 수행
      // return 하기전에 id 칼럼을 추가하고 거기에 id 변수에 담긴 값을 저장
      return { ...doc.data(), id: id };
    });
    setBBsData(bbsList);
  };

  const fetchCallback = useCallback(firebaseFetch, []);
  useEffect(fetchCallback, [fetchCallback]);

  const bbsBody = bbsData.map((bbs) => {
    return (
      <tr
        key={bbs.id}
        data-id={bbs.id}
        onClick={(e) => {
          const id = e.target.closest("TR").dataset.id;
          // alert("안녕 : " + id);
          // detail URL에 id값을 가지고 redirect 를 수행하라
          router.push(`/detail/${id}`);
        }}
      >
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>{bbs.b_writer}</td>
        <td>{bbs.b_subject}</td>
      </tr>
    );
  });

  return (
    <table className="bbs_list">
      <thead>
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>{bbsBody}</tbody>
    </table>
  );
}

export default BBsMain;
