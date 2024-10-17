import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { fetchComicBooks, deleteComicBook } from "../services/api";
import ComicBookForm from "../components/ComicBookForm";
import ComicBookList from "../components/ComicBookList";

const Home = () => {
  const [comicBooks, setComicBooks] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);
  const navigate = useNavigate(); // Initialize the navigation hook

  const fetchData = async () => {
    const data = await fetchComicBooks();
    setComicBooks(data.comicBooks);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (comic) => {
    setSelectedComic(comic);
  };

  const handleDelete = async (id) => {
    await deleteComicBook(id);
    fetchData();
  };

  const handleFormSubmit = () => {
    setSelectedComic(null);
    fetchData();
  };

  const resetForm = () => {
    setSelectedComic(null);
  };

  const handleSignUp = () => {
    navigate("/signup"); // Redirect to the Sign Up page
  };

  const handleSignIn = () => {
    navigate("/signin"); // Redirect to the Sign In page
  };

  return (
    <div>
      <h1>Comic Book Manager</h1>

      {/* Sign In and Sign Up buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn} style={{ marginLeft: "10px" }}>
          Sign In
        </button>
      </div>

      <ComicBookForm
        selectedComic={selectedComic}
        onSubmit={handleFormSubmit}
        resetForm={resetForm}
      />
      <ComicBookList
        comicBooks={comicBooks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
