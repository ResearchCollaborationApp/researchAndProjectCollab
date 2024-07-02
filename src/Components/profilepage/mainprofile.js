import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import '../profile.css';
export default function Mainprofile() {
  //add contact info, edit icons in the profile card
  return (
    <div className = "profile-card">
      <div className = "cover-photo">
        <img src = "https://media.sproutsocial.com/uploads/1c_facebook-cover-photo_clean@2x.png" alt = 'coverphoto'/>
        <div className = "profile-photo-card">
          <img src = "https://img.freepik.com/free-photo/closeup-shot-beautiful-bald-eagle-with-blurred-background_181624-2767.jpg?t=st=1719243095~exp=1719246695~hmac=18a2f4ff487b812cb376855ef7e327e87316ea78265ab9cbbdf88a81a0e003d3&w=900" alt ='profilephoto'/>
      </div>
      </div>
      <div className = "user-info">
          <div className = "name-and-address">
              <ul>
                <li>
                  <b>Bhuwan Bhandari</b>
                </li>
                <li>
                  <i>Junior Computer Science</i>
                </li>
                <li>
                 Cold Spring, KY
                </li>
                <li style = {{color:'blue', fontWeight: 'bold'}}>
                 Contact
                </li>
              </ul>
          </div>
      </div>
      <div className = "few-more-buttons">
              <button className='extra-buttons'>More</button>
              <button className='extra-buttons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg>
               Edit
              </button>
      </div>
    </div>

    
  )
}
