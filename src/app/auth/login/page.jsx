import Link from "next/link";

export default function LogIn() {
    return (
        <div className="sign-in">
            <div className="sign-in-bg">
                <h1>Access <br /> your <span className="colored">LauTalk </span> account</h1>
                <img className="girl" src="/assets/girl.png" alt="image" />
                <img className="crsr" src="/assets/cursor.png" alt="image" />
            </div>
            <div className="sign-in-txt">
                <h1>Sign Up</h1>
                <form>
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="School Email"/>
                    <input type="password" placeholder="Password"/>
                    <p><Link className="fgt" href="#">Forgot Password?</Link></p>
                    <button>Log In</button>
                    <p>Don't have an account? <Link href="/auth/signup">Sign Up Now!</Link></p>
                </form>
            </div>
        </div>
    )
}