import "../../assets/css/bt.css";
import B2 from "../3dmodel/b2"

function Vigor() {
  return (
    <>
      <div className="vigo-sec">
        <div className="row justify-content-start">
          <div className="col-6"><B2/></div>
          <div className="col-6 mt-5 pt-1">
            <h1 className="vigor ">VIGOR</h1>
            <h5 className="you mt-3">
              YOU NEED <span className="vigoo">VIGOR</span> FOR ON-THE-GO-ENERGY
            </h5>
            <p className="vigor-para mt-4">
              The VIGOR is a breakthrough in ENERGY needs for a Light-Electric
              Vehicle. This HIGHLY EFFICIENT battery pack is best in class in
              weight, performance, reliability and safety.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Vigor;
