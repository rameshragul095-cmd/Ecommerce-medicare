import Profile from "./Profile";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaQuestionCircle } from "react-icons/fa";

export default function ManageProfile() {

  const navigate = useNavigate();

  const [profiles, setProfiles] = useState([

    {
      id: 1,

      name: "RAMESH R",

      uhid: "001245",

      phone: "+91 9876543210",

      relation: "SELF",
    },

  ]);


  /* ADD PROFILE */

  const addProfile = () => {

    const name = prompt("Enter Name");

    if (!name) return;

    const phone =
      prompt("Enter Phone Number");

    if (!phone) return;

    const relation = prompt(
      "Enter Relation (Brother / Sister / Father)"
    );

    const newProfile = {

      id: Date.now(),

      name,

      uhid: Math.floor(
        100000 + Math.random() * 900000
      ),

      phone,

      relation,

    };

    setProfiles([
      ...profiles,
      newProfile
    ]);

  };


  return (

    <Profile>

      {/* RIGHT SIDE */}

     <div className="manage-profile-wrapper">

  {/* =====================================
      TOP PREMIUM CONTAINER
  ===================================== */}

  <div className="premium-top-card-container">

    {/* MEMBER CARD */}

    <div className="premium-member-card">

      {/* LEFT */}

      <div>

        <h1 className="premium-name">

          RAMESH R

        </h1>

        <p className="premium-member">

          ✨ Premium Gold Member

        </p>

      </div>


      {/* GOLD BADGE */}

      <div className="gold-badge">

        🏅 GOLD

      </div>

    </div>


    {/* REWARD SECTION */}

    <div className="reward-container">

      {/* COINS */}

      <div className="coin-box">

        <div className="coin">🪙</div>

        <div className="coin">🪙</div>

        <div className="coin">🪙</div>

      </div>


      {/* POINTS */}

      <div>

        <h2 className="points-title">

          Reward Points

        </h2>

        <h1 className="points-value">

          12,450

        </h1>

        <p className="points-sub">

          Earn more points on every medicine purchase

        </p>

      </div>

    </div>

  </div>


  {/* WHITE SPACE */}

  <div className="premium-section-gap"></div>


  {/* =====================================
      BOTTOM PREMIUM CONTAINER
  ===================================== */}

  <div className="premium-bottom-card-container">

    {/* BENEFITS */}

    <div className="benefits-grid">

      <div className="benefit-card">

        🚚 Free Delivery

      </div>

      <div className="benefit-card">

        💊 Extra Discounts

      </div>

      <div className="benefit-card">

        🩺 Doctor Support

      </div>

      <div className="benefit-card">

        🎁 Special Rewards

      </div>

    </div>


    {/* PROFILE LIST */}

    <div className="profiles-section">

      {profiles.map((profile) => (

        <div
          key={profile.id}
          className="premium-profile-card"
        >

          <div className="flex items-center gap-8">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
              className="profile-avatar"
            />

            <div>

              <h1 className="profile-name">

                {profile.name}

              </h1>

              <p className="profile-detail">

                UHID :
                {profile.uhid}

              </p>

              <p className="profile-detail">

                {profile.phone}

              </p>

            </div>

          </div>


          <h2 className="profile-relation">

            {profile.relation}

          </h2>

        </div>

      ))}

    </div>


    {/* ADD BUTTON */}

    <div className="flex justify-center mt-12">

      <button
        onClick={addProfile}
        className="premium-add-btn"
      >

        + Add New Profile

      </button>

    </div>


    {/* HELP */}

    <button
      onClick={() =>
        navigate("/help")
      }
      className="premium-help-btn"
    >

      <div className="flex items-center gap-4">

        <FaQuestionCircle />

        <span className="font-semibold text-2xl">

          Need Help

        </span>

      </div>

      →

    </button>

  </div>

</div>


    </Profile>

  );
}