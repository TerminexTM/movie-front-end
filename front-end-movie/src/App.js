import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import axios from 'axios'




const App = () => {
   let [newTitle, setNewTitle] = useState('');
   let [newImage, setNewImage] = useState('');
   let [newReleaseDate, setNewReleaseDate] = useState('');
   let [newDescription, setNewDescription] = useState('');
   let [newCategory, setNewCategory] = useState('');
   let [newRating, setNewRating] = useState(0);
   let [newReview, setNewReview] = useState('');
   let [movies, setMovies] = useState([]);





   //JSX RETURN
   return (
     <>
      <h1>Movie App is Online</h1>
      <section className="newMovieForm">
        <h2>Create A New Movie Review</h2>
        <form>
          Title: <input type="text"/><br/>
          Image: <input type="url"/><br/>
          Release Date: <input type="date"/><br/>
          <label for="description">Description: </label><br/>
          <textarea id="description" rows="5" cols="33"></textarea><br/>
          <label for="category">Category: </label>
          <select id="category">
            <option>Action</option>
            <option>Comedy</option>
            <option>Documentary</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Romance</option>
          </select><br/>
          Rating: <input type="number"/><br/>
          <label for="review">Review: </label><br/>
          <textarea id="review" rows="5" cols="33"></textarea><br/>
        </form>
      </section>
      </>
   )
}



//export App
export default App;
