import React, { useEffect, useState } from "react";
import "../css/BBs.css";
import { firestore } from "../config/BBSConfig";

function BBsMain() {
  const [bbsData, setBBsData] = useState([]);
  const firebaseFetch = () => {
    firestore
      .collection("bbs")
      .get()
      .then((bbsList) => {
        console.log(bbsList.size);
        bbsList.forEach((bbs) => {
          console.log(bbs);
          setBBsData([...bbsData, { ...bbs.data(), id: bbs.id }]);
        });
      });
    console.log(bbsList);
  };
  useEffect(firebaseFetch, []);

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
      <tbody>
        {bbsData.map((bbs) => {
          return (
            <tr key={bbs.id}>
              <td>{bbs.b_date}</td>
              <td>{bbs.b_time}</td>
              <td>{bbs.b_write}</td>
              <td>{bbs.b_subject}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BBsMain;
