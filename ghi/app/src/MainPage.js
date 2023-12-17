import './index.css';

function MainPage() {
  return ( 
      <div className="hero-container">
        <img
          className="hero-image"
          src="https://i.pinimg.com/originals/73/5c/ea/735cea56968f703df45d4c551ee3b160.gif"
          alt="Hero Image"
        />
        <div className="hero-text">
          <h1 className="display-5 fw-bold">AutoDealers</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              The premiere solution for automobile dealership management
            </p>
          </div>
        </div>
      </div>  
  );
}

export default MainPage;
