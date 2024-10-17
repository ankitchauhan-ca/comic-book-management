/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { createComicBook, updateComicBook } from "../services/api";

const initialFormState = {
  bookName: "",
  authorName: "",
  yearOfPublication: "",
  price: "",
  discount: 0,
  numberOfPages: "",
  condition: "new",
  description: "",
};

const ComicBookForm = ({ selectedComic, onSubmit, resetForm }) => {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (selectedComic) {
      setFormData(selectedComic);
    } else {
      setFormData(initialFormState);
    }
  }, [selectedComic]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedComic) {
      await updateComicBook(selectedComic._id, formData);
    } else {
      await createComicBook(formData);
    }
    resetForm();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="bookName"
        placeholder="Book Name"
        value={formData.bookName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="authorName"
        placeholder="Author Name"
        value={formData.authorName}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="yearOfPublication"
        placeholder="Year of Publication"
        value={formData.yearOfPublication}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="discount"
        placeholder="Discount"
        value={formData.discount}
        onChange={handleChange}
      />
      <input
        type="number"
        name="numberOfPages"
        placeholder="Number of Pages"
        value={formData.numberOfPages}
        onChange={handleChange}
        required
      />
      <select
        name="condition"
        value={formData.condition}
        onChange={handleChange}
      >
        <option value="new">New</option>
        <option value="used">Used</option>
      </select>
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit">
        {selectedComic ? "Update" : "Add"} Comic Book
      </button>
    </form>
  );
};

export default ComicBookForm;
