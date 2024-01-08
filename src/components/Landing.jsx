import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom"

export default function Landing() {
    return(
        <section className="flex flex-col items-center justify-center gap-5">
            <img src={logo} alt="" />
            <Link to="/shop"><button>Good Games</button></Link>
        </section>
    )
}