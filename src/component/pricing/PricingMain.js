import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";
import Logout from "../auth/Logout";

function loadScript(src) {
 

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function PricingMain() {
  const  {  setLoggedIn,setSuperLoggedIn,setSubscribedLoggedIn } = useContext(UserContext)

  const { profileData } = useContext(UserContext);
  const [razoId, setRazorId] = useState(null);
  const [amount, setAmount] = useState(null);
console.log(profileData)

const logout = () => {
  setLoggedIn(false);
  setSuperLoggedIn(false);
  setSubscribedLoggedIn(false);
  localStorage.removeItem("testObject");
  console.log("7")
  return <Navigate to="/auth/login" />;
};
  async function displayRazorpay() {
    if (profileData === null) {
      return alert("Please LogIn");
    } else {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const data = await axios.post("http://localhost:5000/api/razor/razorpay");

      console.log(data);

      const options = {
        key: __DEV__ ? "rzp_test_woqjSrt5amEJuN" : "PRODUCTION_KEY",
        currency: data.currency,
        amount: 499900,
        order_id: data.id,
        name: "Donation",
        description: "Thank you for nothing. Please give us some money",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
          setRazorId(response.razorpay_payment_id);
          // if(response.razorpay_payment_id!==null){

          // }
        },
        prefill: {
          name: "Dhanesh",
          email: "sdfdsjfh2@ndsfdf.com",
          phone_number: "9899999999",
        },
      };
      console.log("lll");
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
    logout()
  }

  useEffect(() => {
    if (razoId !== null) {
      axios.put("http://localhost:5000/api/razor/database", {
        amount: amount,
        razorId: razoId,
        id: profileData.id,
      });
    }
  }, [razoId]);

  return (
    <div className="pricing-main-container">
      <div className="pricing-top">
        <div className="pricing-top-title">
          <p>Select A Pricing Plan</p>
        </div>
        <div className="pricing-top-content">
          <p>
            Efficiently enabled sources and cost-effective products. Completely
            synthesize principle-centered information. Efficiently innovate home
            treatment services via sophisticated equipments.
          </p>
        </div>
      </div>
      <div className="pricing-bottom">
        <div className="pricing-bottom-offer">
          <div className="pbo" style={{ backgroundColor: `rgb(66, 144, 194)` }}>
            <div className="pricing-offer">
              <div className="pricing-offer-price">
                <p>₹ 4999/-</p>
              </div>
              <div className="pricing-offer-price-title">
                <p>Individual Package</p>
              </div>
              <div className="pricing-offer-price-text">
                <p>
                  This is a one-year dental care subscription, for one person
                  valid for time-period of one year. Our dentists will serve you
                  at your home.
                </p>
              </div>
            </div>
            <div className="pricing-offer-foot">
              <div className="pricing-offer-foot-list">
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>1 Root Canal Treatment</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>1 Dental Filling</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>3 Times Teeth Cleaning</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Initial Oral Examination (3 times)</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Unlimited X-ray</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Unlimited Teeth Extraction</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Unlimited Teeth Pain First-Aid</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Teeth Whitening</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>
                    50% off on (Bridges Crowns & Caps, Implant <br />
                    Restorations, Implant Dentistry, Pediatric Dental <br />
                    Care)
                  </p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>
                    FREE Pick & Drop by our ambulance equipped with
                    sophisticated tools & machinery.
                  </p>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              onClick={() => {
                displayRazorpay();
                setAmount(4999);
              }}
              className="pricing-foot"
            >
              <p>Buy Now</p>
            </a>
          </div>
          <div className="pbo" style={{ backgroundColor: `rgb(4, 64,102)` }}>
            <div className="pricing-offer">
              <div className="pricing-offer-price">
                <p>₹ 9999/-</p>
              </div>
              <div className="pricing-offer-price-title">
                <p>Individual Package</p>
              </div>
              <div className="pricing-offer-price-text">
                <p>
                  This is a one-year dental care subscription, for 4 family
                  members, valid for time-period of one year. Our dentists will
                  serve you at your home.
                </p>
              </div>
            </div>
            <div className="pricing-offer-foot">
              <div className="pricing-offer-foot-list">
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>1 Root Canal Treatment</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>1 Dental Filling</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>3 Times Teeth Cleaning</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Initial Oral Examination (3 times)</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Unlimited X-ray</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Unlimited Teeth Extraction</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Unlimited Teeth Pain First-Aid</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>Teeth Whitening</p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>
                    50% off on (Bridges Crowns & Caps, Implant <br />
                    Restorations, Implant Dentistry, Pediatric Dental <br />
                    Care)
                  </p>
                </div>
                <div className="pofl">
                  <BsFillCheckCircleFill
                    style={{
                      color: `green`,
                      backgroundColor: `white`,
                      borderRadius: `20px`,
                    }}
                  />
                  <p>
                    FREE Pick & Drop by our ambulance equipped with
                    sophisticated tools & machinery.
                  </p>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              onClick={() => {
                displayRazorpay();
                setAmount(9999);
              }}
              className="pricing-foot"
              rel="noopener noreferrer"
            >
              <p>Buy Now</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingMain;
