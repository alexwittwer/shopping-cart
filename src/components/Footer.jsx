import tel_ico from "../assets/tel.svg"
import email_ico from "../assets/email.svg"
import chat_ico from "../assets/chat.svg"

export default function Footer() {
  return (
    <footer className="bg-ye bg-slate-900 pt-3 content-border">
      <div className="footer-content flex justify-evenly items-center pb-5">
        <div className="footer-section self-stretch flex flex-col justify-between">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Virtual Reality</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
        <div className="footer-section self-stretch flex flex-col justify-between">
          <h3>BRAND</h3>
          <ul>
            <li>
              <a href="#">Games & Gameplay</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
        <div className="footer-section self-stretch flex flex-col justify-between">
          <h3>HELP</h3>
          <ul>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section self-stretch flex flex-col justify-between">
          <h3>ASK A GG.IO SPECIALIST</h3>
          <div className="contact-info">
            <div className="contact-item flex items-center gap-2">
              <img src={tel_ico} alt="Telephone Icon" width={"18px"}/>
              <p>(000)-GGIO</p>
            </div>
            <div className="contact-item flex items-center gap-2">
              <img src={email_ico} alt="Email Icon" width={"18px"}/>
              <p>support@gg.io</p>
            </div>
            <div className="contact-item flex items-center gap-2">
              <img src={chat_ico} alt="Chat Icon" width={"18px"}/>
              <p>Chat with Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom flex justify-center mt-8 gap-5">
        <p>&copy; 2023 GG.IO</p>
        <ul className="flex gap-5">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
