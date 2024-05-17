import "../assets/css/card.css";
import Top from "../assets/images/rec.svg";
import Bottom from "../assets/images/rec1.svg";
import Ca1 from "../assets/images/ca1.svg";
function Card() {
  return (
    <>
      <div className="card-sec " id="card-sec">
        <h1 className="our">OUR STRENGHTS</h1>
        <div className="row mt-5">
          <div className="col-4">
            <div className="card">
              <img src={Top} alt="rec" className="rec"></img>
              <img src={Ca1} alt="card" className="ca1"></img>

              <p className="head mt-3">Markets</p>
              <p className="para text-center">
                Primary Focus on Electric Vehicles and Energy Storage Market
              </p>

              <img src={Bottom} alt="rec" className="rec1"></img>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src={Top} alt="rec" className="rec"></img>
              <img src={Ca1} alt="card" className="ca1"></img>

              <p className="head mt-3">Markets</p>
              <p className="para text-center">
                Primary Focus on Electric Vehicles and Energy Storage Market
              </p>

              <img src={Bottom} alt="rec" className="rec1"></img>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src={Top} alt="rec" className="rec"></img>
              <img src={Ca1} alt="card" className="ca1"></img>

              <p className="head mt-3">Markets</p>
              <p className="para text-center">
                Primary Focus on Electric Vehicles and Energy Storage Market
              </p>

              <img src={Bottom} alt="rec" className="rec1"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
