import React from 'react'
import Mainprofile from './mainprofile';
import Navigation from '../navigation';
import Sections from './sections';
import Footer from './footer';
import FriendsAndMore from './friends_and_more';
export default function Profile() {
  return (
    <>
  <Navigation/>
  <div className = 'profile-left-right'>
    <div className = 'profile-section'>
      <Mainprofile/>
      <Sections props={{ title: "Skills" , description:"Put your skills here", }}/>
      <Sections props={{ title: "Interests" , description:"Put your interests here"}}/>
      <Sections props={{ title: "Research" , description:"Put your top researches here"}}/>
      <Sections props={{ title: "Liked" , description:"Some of the followed people and research here"}}/>
    </div>
    <FriendsAndMore/>
   </div>
   <Footer/>
   </>
  )
}
