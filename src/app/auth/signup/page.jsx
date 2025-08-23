export default function SignUp() {
    return (
        <div className="sign-in">
            <div className="sign-in-bg"></div>
            <div className="sign-in-txt">
                <h1>Sign Up</h1>
                <form>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <p>Already on LauTalk? <NavLink to="/login">Login</NavLink></p>
                    <button>Sign Up Now!!!</button>
                </form>
            </div>
        </div>
    )
}