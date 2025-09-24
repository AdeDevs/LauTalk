"use client";

import Link from "next/link";
import { useRef, useState } from "react";


export default function SignUp({ length = 6, onComplete }) {
    const [isPopup, setIsPopup] = useState(false)
    const handlePopup = () => {
        setIsPopup(!isPopup)
    }
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length > 1) {
            e.target.value = value.slice(-1); // keep only last digit
        }

        // Move to next input if a digit is entered
        if (value && index < length - 1) {
            inputsRef.current[index + 1].focus();
        }

        // Collect values when all boxes are filled
        const otp = inputsRef.current.map((input) => input.value).join("");
        if (otp.length === length && onComplete) {
            onComplete(otp);
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

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
                    <input type="text" placeholder="Display Name" required />
                    <input type="email" placeholder="School Email" required />
                    <input type="tel" placeholder="Username" required />
                    <input type="tel" placeholder="Matric No" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <p>Already on LauTalk? <Link href="/auth/login">Login</Link></p>
                    <button onClick={handlePopup}>Sign Up Now!!!</button>
                </form>
            </div>
            <div className={`vrf-box ${isPopup ? "active" : ""}`}>
                <main className="vrf-main">
                    <p className="back-btn" onClick={handlePopup}>Back</p>
                    <h1>Enter verification code</h1>
                    <p>We have sent a code to your Email db***la@student.lautech.edu.ng</p>
                    <form>
                        <div className="code-entry">
                            <div className="code">
                                {Array.from({ length }).map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        ref={(el) => (inputsRef.current[index] = el)}
                                        onChange={(e) => handleChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                    />
                                ))}
                            </div>
                            <p className="rtry">Try again!</p>
                            <p className="rsnd">Didn't get a code? <a href="#">Click to resend</a></p>
                        </div>
                        <div className="code-btns">
                            <button onClick={handlePopup}>Cancel</button>
                            <button className="ver-btn" onClick={handlePopup}>Verify</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}