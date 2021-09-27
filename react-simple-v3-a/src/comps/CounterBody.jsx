import CounterView from "./CounterView";
import CounterInput from "./CounterInput";

function CounterBody(props) {
  return (
    <div>
      <CounterInput setCount={props.setCount} />
      <CounterView count={props.count} />
    </div>
  );
}

export default CounterBody;
