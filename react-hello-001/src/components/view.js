const view = (props) => {
  return (
    <div>
      <p>{props.bbs.b_date}</p>
      <p>{props.bbs.b_time}</p>
      <p>{props.bbs.b_writer}</p>
      <p>{props.bbs.b_subject}</p>
      <p>{props.bbs.b_content}</p>
    </div>
  );
};

export default view;
