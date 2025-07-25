import { NavLink } from "react-router-dom";

const HeroPage = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <h2 className="hero-heading1">Welcome to Let's Cook 🍳</h2>
        <p className="para1">Here We Serve You</p>
        <p className="para2">Delicious Recipes of</p>
        <p className="para3">Delicious Foods...</p>

        <button className="food-btn"><NavLink to='features' className="food-btn-navlink">Lets Taste!</NavLink></button>
      </div>
    </div>
  )
}

export default HeroPage;