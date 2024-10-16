export default function Abal({ abals }) {
  console.log(abals);
  return (
    <div>
      <h3>abal name:{abals.name}</h3>
      <h3>abal age: {abals.age}</h3>
    </div>
  );
}
