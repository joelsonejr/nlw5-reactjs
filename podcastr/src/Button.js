export default function Button(props) {
  let counter = 1;

  function increment(counter){
    counter = counter +1;
  }
  return(
    <>
    <span>1</span>
    <button onClick={increment}>{props.children}</button>
    <br />
    </>
    )
}
