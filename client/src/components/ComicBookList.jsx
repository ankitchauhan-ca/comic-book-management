/* eslint-disable react/prop-types */
const ComicBookList = ({ comicBooks, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Comic Book Inventory</h2>
      <ul>
        {comicBooks.map((comic) => (
          <li key={comic._id}>
            <h3>{comic.bookName}</h3>
            <p>Author: {comic.authorName}</p>
            <p>Year: {comic.yearOfPublication}</p>
            <p>Price: ${comic.price}</p>
            <p>Condition: {comic.condition}</p>
            <button onClick={() => onEdit(comic)}>Edit</button>
            <button onClick={() => onDelete(comic._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComicBookList;
