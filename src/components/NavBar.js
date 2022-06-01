const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          {/* <div className="navbar-brand" href="#">
            <img id="smallPic" alt="Profile" src="../public/assets/cropped.jpg"/>
            </div> */}
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#heroSection"
                id="homeButton"
              >
                HOME
              </a>
              <a className="nav-link" href="#aboutSection">
                ABOUT
              </a>
              <a className="nav-link" href="#workSection">
                WORK
              </a>
              <a className="nav-link" href="#contactSection">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
