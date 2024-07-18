import React from 'react'
import Mainprofile from './mainprofile';
import Sections from './sections';
import Footer from '../footer/footer';
import FriendsAndMore from '../feedpage/friends_and_more';
export default function Profile() {
  return (
    <>
    <div className = "grid grid-cols-3 gap-4">
      <div className="col-span-2">
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
