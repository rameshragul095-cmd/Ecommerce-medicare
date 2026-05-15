import Profile from "./Profile";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaTruck,
  FaTimesCircle,
  FaMoneyCheckAlt,
  FaCreditCard,
  FaWallet,
  FaHeadset
} from "react-icons/fa";

export default function Help() {

  return (

    <Profile>

      {/* GLOW EFFECTS */}

      <div className="premium-glow premium-glow1"></div>

      <div className="premium-glow premium-glow2"></div>


      {/* MAIN CONTAINER */}

      <div className="help-container">

        {/* TITLE */}

        <h1 className="help-title">

          Help & Support

        </h1>


        {/* SUPPORT GRID */}

        <div className="help-grid">

          {/* CUSTOMER CARE */}

          <div className="help-card">

            <div className="help-icon">

              <FaHeadset />

            </div>

            <h2 className="help-heading">

              Customer Care

            </h2>

            <p className="help-text">

              <FaPhoneAlt />

              +91 9876543210

            </p>

            <p className="help-text">

              <FaEnvelope />

              support@medicare.com

            </p>

          </div>


          {/* ORDER ISSUES */}

          <div className="help-card">

            <div className="help-icon">

              <FaTruck />

            </div>

            <h2 className="help-heading">

              Order Issues

            </h2>

            <p className="help-text">

              • Track Orders

            </p>

            <p className="help-text">

              • Cancel Orders

            </p>

            <p className="help-text">

              • Refund Status

            </p>

          </div>


          {/* PAYMENT HELP */}

          <div className="help-card">

            <div className="help-icon">

              <FaCreditCard />

            </div>

            <h2 className="help-heading">

              Payment Help

            </h2>

            <p className="help-text">

              <FaWallet />

              UPI Support

            </p>

            <p className="help-text">

              <FaMoneyCheckAlt />

              Card Payments

            </p>

            <p className="help-text">

              <FaTimesCircle />

              COD Available

            </p>

          </div>

        </div>


        {/* SUPPORT BANNER */}

        <div className="support-banner">

          <div>

            <h1 className="support-banner-title">

              24/7 Healthcare Support

            </h1>

            <p className="support-banner-text">

              Our MediCare team is always
              available to assist you.

            </p>

          </div>


          <div className="support-banner-icon">

            🩺

          </div>

        </div>

      </div>

    </Profile>

  );
}