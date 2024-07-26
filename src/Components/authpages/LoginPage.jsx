import React from "react";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

export default function LoginPage(){
    return (
        <>
        <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Log in </h2>
                    <p className="mt-2 text-base text-gray-600">Don’t have an account? <Link to="/signup" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Sign up</Link></p>
    
                    <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email to get started"
                                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>
    
                            <div>
                                <div className="flex items-center justify-between">
                                    <label for="" className="text-base font-medium text-gray-900"> Password </label>
    
                                    <a href="#" title="" className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"> Forgot password? </a>
                                </div>
                                <div className="mt-2.5">
                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        placeholder="Enter your password"
                                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>
    
                            <div>
                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Log in</button>
                            </div>
                        </div>
                    </form>
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