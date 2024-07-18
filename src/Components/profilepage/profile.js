import React from 'react'
import Mainprofile from './mainprofile';
import Sections from './sections';
import Footer from '../footer/footer';
import FriendsAndMore from '../feedpage/friends_and_more';
import Navigation from '../navbar/navigation';
import { SkillIcon, InterestIcon , ResearchIcon, LikedIcon} from '../Icons';
export default function Profile() {
  return (
    <>
    <Navigation/>
    <div className = "grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ml-3 mr-3">
      <div className="col-span-1 lg:col-span-2 space-y-4">
        <Mainprofile/>
        <Sections props={{ title: "Skills" , description:"Put your skills here", icon:<SkillIcon/>}}/>
        <Sections props={{ title: "Interests" , description:"Put your interests here", icon:<InterestIcon/>}}/>
        <Sections props={{ title: "Research" , description:"Put your top researches here", icon:<ResearchIcon/>}}/>
        <Sections props={{ title: "Liked" , description:"Some of the followed people and research here", icon:<LikedIcon/>}}/>
        </div>
        <div className="col-span-1">
            <FriendsAndMore />
        </div>
  </div>
    <Footer/>
   </>
  )
}
