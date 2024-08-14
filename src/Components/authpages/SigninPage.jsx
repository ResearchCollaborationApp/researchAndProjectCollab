import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import Footer from "../footer/footer";
import Navigation from "../home/homeNavigation";
export default function SigninPage(){
    const signInWithGoogle = ()=>{
        window.open("http://localhost:4000/auth/google", "_self")
    }
    const signInWithLinkedin = () =>{
        window.open("http://localhost:4000/auth/linkedin", "_self")
    }
    const signInWithMicrosoft = () => {
        window.open("http://localhost:4000/auth/microsoft", "_self");

      }
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in </h2>
                    <div className="mt-3 space-y-3">
                    <button
                        onClick = {signInWithMicrosoft}
                        type="button"
                        className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                    >
                        <div className="absolute inset-y-0 left-0 p-4">
                            <FontAwesomeIcon icon={faMicrosoft} className="w-full h-full text-blue-600" />
                        </div>
                        Sign in with Microsoft
                    </button>
                    <button
                        onClick = {signInWithGoogle}
                        type="button"
                        className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                    >
                        <div className="absolute inset-y-0 left-0 p-4">
                            <FontAwesomeIcon icon={faGoogle} className="w-full h-full text-red-500" />
                        </div>
                        Sign in with Google
                    </button>
                    <button
                        onClick = {signInWithLinkedin}
                        type="button"
                        className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                    >
                        <div className="absolute inset-y-0 left-0 p-4">
                            <FontAwesomeIcon icon={faLinkedin} className="w-full h-full text-blue-600" />
                        </div>
                        Sign in with Linkedin
                    </button>
                </div>
                </div>
            </div>
    
            <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 sm:px-6 lg:px-8">
                <div>
                <iframe src="https://lottie.host/embed/7737d233-26e0-402e-b10e-2b811ce66d03/dzN0sMiiLT.json" className="w-full h-[600px]"></iframe>
                    <div className="w-full max-w-md mx-auto xl:max-w-xl">
                        <h3 className="text-2xl font-bold text-center text-black">We help you find research</h3>
                        <p className="leading-relaxed text-center text-gray-500 mt-2.5">Find people around college who have similar research interest like you</p>
                        <div className="flex items-center justify-center mt-10 space-x-3"> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
    );
}