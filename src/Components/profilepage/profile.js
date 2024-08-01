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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      <div className="h-32 rounded-lg bg-gray-200"></div>
      <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
      <div className="h-32 rounded-lg bg-gray-200"></div>
    </div>
    <Footer/>
   </>
  )
}
