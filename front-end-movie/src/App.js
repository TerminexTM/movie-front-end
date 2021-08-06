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
//set set for hide components
  let [show, setShow] = useState(false);
  let [editShow, setEditShow] = useState(false);


   //useffect to render data post pageload
   useEffect(() => {
      axios
         .get('http://localhost:3000/movies')
         .then((response) => {
            setMovies(response.data)
         })
   })

//getData
const getData = () => {
  axios
  .get('http://localhost:3000/movies')
  .then((response) => {
     setMovies(response.data)
  })
}


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
      event.currentTarget.reset();
   }




   const handleDelete = (movie) => {
     axios.delete(`http://localhost:3000/movies/${movie._id}`).then(() => {
       getData();
     })
   }
   const handleShow = (e) => {
      setShow(!show);
      setNewTitle('');
      setNewImage('');
      setNewRating('');
      setNewReview('');
      setNewCategory('');
      setNewDescription('');
      setNewReleaseDate('');
   }
   const handleEditShow = (e) => {
    setEditShow(!editShow);

 }



   const handleEdit = (event, movie) => {
      event.preventDefault();
      axios.put(`http://localhost:3000/movies/${movie._id}`,
         {
            title:newTitle || movie.title,
            image:newImage || movie.image,
            releaseDate:newReleaseDate || movie.releaseDate,
            description:newDescription || movie.description,
            rating:newRating || movie.rating,
            review:newReview || movie.review,
            category:newCategory || movie.category,
         }
      ).then(() => {
         axios
            .get('http://localhost:3000/todos')
            .then((response) => {
               setMovies(response.data)
            })
      })
   }



   //JSX RETURN
   return (
     <>
      <h1>Movie App is Online</h1>
      <section style={show? {display: "block"} : {display: "none"}} className="container-fluid">
        <h2>Create A New Movie Review</h2>
        <form className="form-control" onSubmit={handleNewMovieForm}>
          Title: <input className="form-control" type="text" placeholder="Movie Title" onChange={handleNewTitleChange}/><br/>
          Image: <input className="form-control" type="url" placeholder="Enter Image URL" onChange={handleNewImageChange}/><br/>
          Release Date: <input  className="form-control" type="text" placeholder="Enter Release Date" onChange={handleNewReleaseDate}/><br/>
          <label htmlFor="description">Description: </label><br/>
          <textarea className="form-control" id="description" placeholder="Movie Description" rows="5" cols="33" onChange={handleNewDescription}/><br/>
          <label htmlFor="category">Category: </label>
          <select className="form-control" id="category" onChange={handleNewCategory}>
            <option>Action</option>
            <option>Comedy</option>
            <option>Documentary</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Romance</option>
          </select><br/>
          Rating: <input  className="form-control" type="number" placeholder="Movie Rating" onChange={handleNewRating}/><br/>
          <label htmlFor="review">Review: </label><br/>
          <textarea  className="form-control" id="review" placeholder="Movie Review" rows="5" cols="33" onChange={handleNewReview}/><br/>
          <input className="btn btn-secondary" type="submit" value="Create New Movie Review"/>
        </form>
      </section>

        <button className="btn btn-primary" onClick={handleShow}>Create Movie?</button>

      <div class='container'>
      <h2>Map Container</h2>
      {
          movies.map((movie) => {
             return (
                <>
                   <h4>{movie.title}</h4>
                   <img src={movie.image} alt='Movie image not found' />
                   <p>{movie.category}</p>
                   <p>{movie.releaseDate}</p>
                   <p>{movie.description}</p>
                   <p>{movie.rating}</p>
                   <p>{movie.review}</p>
                   <button class="btn btn-danger" onClick={ (event)=> { handleDelete(movie) }}>DELETE</button>
                   <button class="btn btn-warning" onClick={handleEditShow}>Edit</button>
                   <section style={editShow? {display: "block"} : {display: "none"}} className="container-fluid">
                      <h2>Edit Movie Review</h2>


                      <form className="form-control" onSubmit={ (event) => {handleEdit(event, movie)} } >
                        Title: <input className="form-control" type="text" defaultValue={movie.title} onChange={handleNewTitleChange}/><br/>
                        Image: <input className="form-control" type="url" defaultValue={movie.image} onChange={handleNewImageChange}/><br/>
                        Release Date: <input  className="form-control" type="date" defaultValue={movie.releaseDate} onChange={handleNewReleaseDate}/><br/>


                        <label htmlFor="description">Description: </label><br/>
                        <textarea className="form-control" id="description" rows="5" cols="33" defaultValue={movie.description} onChange={handleNewDescription}/><br/>
                        <label htmlFor="category">Category: </label>
                        <select className="form-control" id="category" defaultValue={movie.category} onChange={handleNewCategory}>
                          <option>Action</option>
                          <option>Comedy</option>
                          <option>Documentary</option>
                          <option>Drama</option>
                          <option>Fantasy</option>
                          <option>Horror</option>
                          <option>Romance</option>
                        </select><br/>
                        Rating: <input  className="form-control" type="number" defaultValue={movie.rating} onChange={handleNewRating}/><br/>
                        <label htmlFor="review">Review: </label><br/>
                        <textarea  className="form-control" id="review" rows="5" cols="33" defaultValue={movie.review} onChange={handleNewReview}/><br/>
                        <input className="btn btn-secondary" type="submit" defaultValue="Edit Movie Review"/>
                      </form>
                    </section>
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
