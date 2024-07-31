import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
export default function CreateProfile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch('/api/user', {
              credentials: 'include'
            });
            if (response.ok) {
              const userData = await response.json();
              setUser(userData);
            } else {
              console.error('Failed to fetch user data');
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUser();
      }, []);
    
      if (!user) {
        return <div>Loading...</div>;
      }
  return (
    <div>
    <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-3xl">Hi, {user.displayName.split(' ')[0]} welcome to getResearch!</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-900">
                You've taken a great step towards your career growth. Dive into discussions with professors and fellow students, explore cutting-edge research, and contribute to our vibrant academic community. Let's innovate together!</p>
            </div>
            <div className="max-w-xl mx-auto mt-12">
                <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                    <Link 
                    to = "/profileinformation" 
                    className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                        Create profile
                        <svg className="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                    <Link  className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                        Skip for now
                        <svg className="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center px-8 mt-8 sm:px-0">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="ml-2 text-sm text-gray-600"> Your data is complely secured with us. We don’t share with anyone. </span>
            </div>
        </div>
</section>

    </div>
  )
}
