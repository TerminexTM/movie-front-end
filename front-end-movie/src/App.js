import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import axios from 'axios'




const App = () => {
//useStates
   let [newTitle, setNewTitle] = useState('');
   let [newImage, setNewImage] = useState('');
   let [newReleaseDate, setNewReleaseDate] = useState('');
   let [newDescription, setNewDescription] = useState('');
   let [newCategory, setNewCategory] = useState('');
   let [newRating, setNewRating] = useState(0);
   let [newReview, setNewReview] = useState('');
   let [movies, setMovies] = useState([]);






//event listeners for the form document
   const handleNewTitleChange = (event) => {
      setNewTitle(event.target.value);
   }
   const handleNewImageChange = (event) => {
      setNewImage(event.target.value);
   }
   const handleNewReleaseDate = (event) => {
      setNewReleaseDate(event.target.value);
   }
   const handleNewDescription = (event) => {
      setNewDescription(event.target.value);
   }
   const handleNewCategory = (event) => {
      setNewCategory(event.target.value);
   }
   const handleNewRating = (event) => {
      setNewRating(event.target.value);
   }
   const handleNewReview = (event) => {
      setNewReview(event.target.value)
   }
//form submission axios call and event handler
   const handleNewMovieForm = (event) => {
      event.preventDefault();
      axios.post(
         'http://localhost:3000/movies',
         {
            title:newTitle,
            image:newImage,
            releaseDate:newReleaseDate,
            description:newDescription,
            rating:newRating,
            review:newReview,
            category:newCategory
         }
      ).then(()=> {
         axios
            .get('http://localhost:3000/movies')
            .then((response) => {
               setMovies(response.data)
            })
      })
   }


   //JSX RETURN
   return (
     <>
      <h1>Movie App is Online</h1>
      <section className="newMovieForm container-fluid">
        <h2>Create A New Movie Review</h2>
        <form className="form-control">
          Title: <input className="form-control" type="text" /><br/>
          Image: <input className="form-control" type="url" /><br/>
          Release Date: <input  className="form-control" type="date"/><br/>
          <label for="description">Description: </label><br/>
          <textarea className="form-control" id="description" rows="5" cols="33"></textarea><br/>
          <label for="category">Category: </label>
          <select className="form-control" id="category">
            <option>Action</option>
            <option>Comedy</option>
            <option>Documentary</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Romance</option>
          </select><br/>
          Rating: <input  className="form-control" type="number"/><br/>
          <label for="review">Review: </label><br/>
          <textarea  className="form-control" id="review" rows="5" cols="33"></textarea><br/>
        </form>
      </section>
      </>
   )
}



//export App
export default App;
