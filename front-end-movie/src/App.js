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
   let [newRating, setNewRating] = useState('');
   let [newReview, setNewReview] = useState('');
   return (
      <h1>Movie App is Online</h1>
   )
}
export default App;
