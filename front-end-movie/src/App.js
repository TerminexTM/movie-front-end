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
      <h1>Movie App is Online</h1>
   )
}



//export App
export default App;
