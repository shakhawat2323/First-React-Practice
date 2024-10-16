import "./Book.css";
export default function Book({ book }) {
  const { name, price } = book;
  return (
    <div className="book">
      <h4>Books Name: {name}</h4>
      <h4>Books Price: {price}</h4>
    </div>
  );
}
