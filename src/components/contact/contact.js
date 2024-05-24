import "../../assets/css/contact.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Conline from "../../assets/images/contact.png";

import { useMediaQuery } from "react-responsive";

function Contact() {
  const isContact = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div className="contact-us" id="contact-us">
        {isContact ? (
          <div className="contact-phone">
            <div className="row">
              <div className="col-12">
                <h2 className="contactus">Contact Us</h2>

                <TextField
                  id="filled-basic"
                  label="Name"
                  variant="filled"
                  className="input1 mt-5"
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  className="input1 mt-2"
                />
                <TextField
                  id="filled-basic"
                  label="Subject"
                  variant="filled"
                  className="input1 mt-2"
                />
                <TextField
                  id="filled-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="filled"
                  className="input1 mt-2"
                />

                <Button variant="contained" className="submit mt-4">
                  Submit
                </Button>
              </div> </div>
              <div className="row justify-content-around mt-5">
                <div className="col-10 text-center mt-3">
                  <h2 className="location ">Location</h2>
                  <h3 className="place pt-4">Hyderabad , India</h3>
                  <p className="address pt-2">
                    Plot no 1 & 4, Survey no: 354 A & AA Nandigama Village,
                    Patancheru mandal, Sangareddy district, Telengana - 502300
                  </p>
                  <h2 className="place pt-4">Cleveland , USA</h2>
                  <p className="address pt-2">
                    <p className="mb-0">ohio - 44011</p>
                    <p className="mb-0">Ph: +1 216 385 - 8127</p>
                    <p className="mb-0">contact@nexigoenergu.com </p>
                  </p>
                </div>
              </div>
              <div className="mb-5"></div>
           
          </div>
        ) : (
          <div className="row justify-content-center m-0 pt-5 mt-5">
            <div className="col-xl-4 col-lg-4 col-md-4 p-0">
              <img src={Conline} className="img-fliuid conline"></img>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 locationsec p-0">
              <h2 className="location ">Location</h2>
              <h3 className="place pt-5">Hyderabad , India</h3>
              <p className="address pt-2">
                Plot no 1 & 4, Survey no: 354 A & AA Nandigama Village,
                Patancheru mandal, Sangareddy district, Telengana - 502300
              </p>
              <h2 className="place pt-4">Cleveland , USA</h2>
              <p className="address pt-2">
                <p className="mb-0">ohio - 44011</p>
                <p className="mb-0">Ph: +1 216 385 - 8127</p>
                <p className="mb-0">contact@nexigoenergu.com </p>
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 contactussec p-0">
              <h2 className="contactus">Contact Us</h2>

              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                className="input1 mt-5"
              />
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                className="input1 mt-2"
              />
              <TextField
                id="filled-basic"
                label="Subject"
                variant="filled"
                className="input1 mt-2"
              />
              <TextField
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue=""
                variant="filled"
                className="input1 mt-2"
              />

              <Button variant="contained" className="submit mt-4">
                Submit
              </Button>
            </div>

            <div className="mb-5"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
