"use client"
import Image from "next/image"

export default function HomePage() {
  const items = [
    { id: 1, name: "HP Victus", image: "/assets/laptop.jpg" },
    { id: 2, name: "PS5 Controller", image: "/assets/controller.jpg" },
    { id: 3, name: "iPhone 16", image: "/assets/phone.jpg" },
    { id: 4, name: "PS5 Game", image: "/assets/console.jpg" },
    { id: 5, name: "HP Victus", image: "/assets/laptop.jpg" },
    { id: 6, name: "PS5 Controller", image: "/assets/controller.jpg" }
  ]

  return (
    <div className="home">
      <header className="hero">
        <div className="hero-text">
          <h1>
            <em>Y</em>our <span className="colored">Market,</span> <br />
            <em>Y</em>our <span className="colored">Wallet,</span> <br />
            <em>Y</em>our <span className="colored">People.</span>
          </h1>
          <p>
            With LauTalk, you can buy and sell items, send and receive money securely
            and stay connected with your community.
          </p>
          <p id="simple">Simple. Social. Seamless.</p>
          <form className="hero-srch">
            <input type="text" placeholder="Want to make payment or purchase anything?" />
            <button>Search</button>
          </form>
        </div>
        <div className="hero-bg"></div>
      </header>

      <main className="home-main">
        {/* LauTalk is for section */}
        <section className="for">
          <h1>
            LauTalk is for everyone who <br /> buys, pays, and connects.
          </h1>
          <p>Find out why students and businesses across Africa trust LauTalk every day.</p>
          <button>Sign Up Now!!!</button>
          <img className="msg-img" src="/assets/message.png" alt="message icon" />
          <img className="phn-img" src="/assets/phone.png" alt="phone icon" />
        </section>

        {/* Marketplace */}
        <section className="mrkt">
          <h1>
            Discover What's New - <a href="#">Marketplace</a>
          </h1>
          <div className="mrkt-items">
            {items.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <a href="#">{item.name}</a>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="nwsltr">
          <div className="nwsltr-txt">
            <h1>Subscribe To Our Newsletter</h1>
            <p>
              Subscribe to our newsletter to receive exlclusive offers, latest news and updates.
            </p>
            <form>
              <input type="email" placeholder="Your Email Address" />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="nwsltr-bg">
            <img src="/assets/newsletter.png" alt="newsletter" />
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="footer-nav">
          <ul className="socials">
            <li><img src="/assets/lautalk.png" alt="logo" /></li>
            <li><img src="/assets/fb.png" alt="fb" /></li>
            <li><img src="/assets/ig.png" alt="insta" /></li>
            <li><img src="/assets/x.png" alt="twitter" /></li>
          </ul>
          <div className="links">
            <ul>
              <li className="hdr">Quick Links</li>
              <li><a href="">About</a></li>
              <li><a href="">Course Reps</a></li>
              <li><a href="">Marketplace</a></li>
              <li><a href="">Manual Payments</a></li>
              <li><a href="">Create Talks</a></li>
              <li><a href="">Active Chats</a></li>
            </ul>
            <ul>
              <li className="hdr">Information</li>
              <li><a href="">About</a></li>
              <li><a href="">Course Reps</a></li>
              <li><a href="">Marketplace</a></li>
              <li><a href="">Manual Payments</a></li>
              <li><a href="">Create Talks</a></li>
              <li><a href="">Active Chats</a></li>
            </ul>
            <ul>
              <li className="hdr">Support</li>
              <li><a href="">About</a></li>
              <li><a href="">Course Reps</a></li>
              <li><a href="">Marketplace</a></li>
              <li><a href="">Manual Payments</a></li>
              <li><a href="">Create Talks</a></li>
              <li><a href="">Active Chats</a></li>
            </ul>
          </div>
        </div>
        <p>@ 2025 LauTalk. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
