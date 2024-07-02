import React from "react";
import './peoplesCard.css'

function PeopleCard({ firstName, lastName, profilePictureLink,shortBio,linkToProfile}) {
  // also write a function to handle the collab button as well as when the whole card is clicked it should redirect to the persons profile
  // linkToProfile This is the link to the profile of the person. Replace this link with the actual link to the profile of the person
  return (
    <div class="card m-auto p-3" >
      <div className="profilePictureHolder m-auto">
        <img src={profilePictureLink} className="card-img-top" alt="profile for the person"/> 
      </div>
      <div class="card-body">
        <h5 class="card-title">
        <a href={`${linkToProfile}`}>{firstName} {lastName}</a>
        </h5>
        <p class="card-text">{shortBio}</p>
        <button class="btn btn-info" type="submit">Collab</button>
      </div>
    </div>  
  );
};
export default PeopleCard; 