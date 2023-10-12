import { Link } from "react-router-dom"
import "../BackHome/BackHome.css"

const BackHome = () => {
  return (
    <div>
        <Link to ="/">
            <button className="BackHome">
                Back to Home
            </button>
        </Link>
    </div>
  )
}

export default BackHome