import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
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

   //useffect to render data post pageload
   useEffect(() => {
      axios
         .get('http://localhost:3000/movies')
         .then((response) => {
            setMovies(response.data)
         })
   })





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
        <form className="form-control" onSubmit={handleNewMovieForm}>
          Title: <input className="form-control" type="text" onChange={handleNewTitleChange}/><br/>
          Image: <input className="form-control" type="url" onChange={handleNewImageChange}/><br/>
          Release Date: <input  className="form-control" type="date" onChange={handleNewReleaseDate}/><br/>
          <label for="description">Description: </label><br/>
          <textarea className="form-control" id="description" rows="5" cols="33" onChange={handleNewDescription}/><br/>
          <label for="category">Category: </label>
          <select className="form-control" id="category" onChange={handleNewCategory}>
            <option>Action</option>
            <option>Comedy</option>
            <option>Documentary</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Romance</option>
          </select><br/>
          Rating: <input  className="form-control" type="number" onChange={handleNewRating}/><br/>
          <label for="review">Review: </label><br/>
          <textarea  className="form-control" id="review" rows="5" cols="33" onChange={handleNewReview}/><br/>
          <input className="btn btn-secondary" type="submit" value="Create New Movie Review"/>
        </form>
      </section>
      <div class='container'>
      <h2>Map Container</h2>
      {
          movies.map((movie) => {
             return (
                <>
                   <h4>{movie.title}</h4>
                   <img src={movie.image} alt='Movie image not found' />
                   <p>{movie.category[0]}</p>
                   <p>{movie.releaseDate}</p>
                   <p>{movie.description}</p>
                   <p>{movie.rating}</p>
                   <p>{movie.review}</p>
                </>
             )
          })
      }
      </div>

      </>
   )
}



//export App
export default App;
