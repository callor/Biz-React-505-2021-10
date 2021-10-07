import React from "react";

/**
 * props 전달받은 변수에 기본값을 지정하여
 * props 값이 전달되지 않더라도 기본을 설정할수 있도록 기본값 설정하기
 */
function MyButton({
  children,
  backgroundColor = "blue", // 기본값 설정
  color = "#fff", // 기본값
  onClick,
}) {
  const MyButtonStyle = {
    fontSize: "18px",
    fontWeight: "700",
    width: "60%",
    height: "50px",
    lineHeight: "50px",
    margin: "10px auto",
    cursor: "pointer",
    textAlign: "center",
    color: color,
    border: "none",
    borderRadius: "5px",
    backgroundColor: backgroundColor,
  };

  return (
    <button style={MyButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;
