import '../Navbar.css'

function Navbar(){

     
    return (
    <nav className="navbar">
      <div className="navbar-left">Movie App</div>
      <div className="navbar-right">
        <div className="lang">En <span className="arrow">▼</span></div>
        <div className="watchlist">
          <span>watchlist</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;