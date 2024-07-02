import './LoginPage.css'
export default function LoginPage(){
    return (
        <div className='container-fluid loginForm bg-light shadow-lg '>
            <div>  
                <h1 className='text-center text-info'>Welcome to your Research Collab Buddy!</h1>
                <p className='text-center text-info'>Please login for Collabing!</p>
            </div>
            <div className='mx-4'>   
                <input className = "p-3 my-4 form-control" placeHolder = "Username"/>
                <input type="password" class= "p-3 my-2 form-control" id = "Password" placeHolder='Password'/>
                <button className="btn btn-info text-white tc p-3 my-4" id="loginButton">Login</button>
            </div>
            <div className='d-flex justify-content-center'>
                <a class="p-3 text-secondary grow" id= "forgotPassword" href="ForgotPassword">Forgot Password</a>
                <a className="p-3 text-secondary"  href="linkToSignup"> Signup here</a>
            </div>
        </div>
    );
}