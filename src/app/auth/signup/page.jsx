import Link from "next/link";

export default function SignUp() {
    return (
        <div className="sign-in">
            <div className="sign-in-bg">
                <h1><span className="colored">Start</span> your <br /> journey <span className="colored"> with LauTalk </span></h1>
                <p>Shop smarter, pay faster, and join a community without limits.</p>
                <img className="girl" src="/assets/girl.png" alt="image" />
                <img className="crsr" src="/assets/cursor.png" alt="image" />
            </div>
            <div className="sign-in-txt">
                <h1>Sign Up</h1>
                <form>
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="School Email"/>
                    <input type="tel" placeholder="Username or Matric No"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                    <p>Already on LauTalk? <Link href="/auth/login">Login</Link></p>
                    <button>Sign Up Now!!!</button>
                </form>
            </div>
        </div>
    )
}