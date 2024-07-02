import React from "react";
import testProfiles from "../assets/testProfile";
import ProfileCard from "../components/connection/peoplesCard";
import SearchBar from "../components/connection/SearchBar"
import Footer from "../components/footer/footer";
export default function ConnectionPage() {
    return (
        <>
            <SearchBar/>
            <div className="container m-auto">
                <div className="row">
                    {testProfiles().map((profile, index) => (
                        <div className="m-3" key={index}>
                            <ProfileCard
                                firstName={profile.firstName}
                                lastName={profile.lastName}
                                profilePictureLink={profile.profilePictureLink}
                                shortBio={profile.shortBio}
                                linkToProfile={profile.linkToProfile}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}
