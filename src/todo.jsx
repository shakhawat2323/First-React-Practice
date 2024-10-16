export default function Todo({ taks, isDone }) {
  let listitem;
  console.log(isDone);
  if (isDone) {
    listitem = <li> Finish:{taks}</li>;
  } else {
    listitem = <li> work on:{taks}</li>;
  }
  return listitem;
}
