import { useState } from "react";

export default function Button(props) {
  const [counter, setCounter] = useState(1);

  function increment() {
    setCounter(counter + 1);
    console.log(useState);
  }
  return (
    <>
      <span>{counter}</span>
      <button onClick={increment}>{props.children}</button>
      <br />
    </>
  );
}
