import Book from "./src/Book";
export default function Books({ allbooks }) {
  console.log(allbooks);
  return (
    <div>
      <h3>Books:{allbooks.length}</h3>
      {allbooks.map((book) => (
        <Book book={book}></Book>
      ))}
    </div>
  );
}
