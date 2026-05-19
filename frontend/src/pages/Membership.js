import Profile from "./Profile";

// import { useNavigate } from "react-router-dom";


export default function Membership() {

  // const navigate = useNavigate();

  const transactions = [

    {
      id: 1,

      title: "Store Medicine Purchase",

      amount: 180,

      earned: 0,

      redeemed: 180
    },

    {
      id: 2,

      title: "Store Medicine Purchase",

      amount: 900,

      earned: 90,

      redeemed: 0
    },

    {
      id: 3,

      title: "Store Medicine Purchase",

      amount: 500,

      earned: 50,

      redeemed: 0
    },
    {
      id: 4,

      title: "Store Medicine Purchase",

      amount: 5000,

      earned: 500,

      redeemed: 100
    },
    {
      id: 5,

      title: "Store Medicine Purchase",

      amount: 800,

      earned: 80,

      redeemed: 160
    },
    {
      id: 6,

      title: "Store Medicine Purchase",

      amount: 1600,

      earned: 160,

      redeemed: 0
    },
    {
      id: 7,

      title: "Store Medicine Purchase",

      amount: 1750,

      earned: 170,

      redeemed: 50
    },
    {
      id: 8,

      title: "Store Medicine Purchase",

      amount: 630,

      earned: 63,

      redeemed: 0
    },
    {
      id: 9,

      title: "Store Medicine Purchase",

      amount: 770,

      earned: 77,

      redeemed: 0
    }


  ];


  return (

  <Profile>

    {/* MAIN MEMBERSHIP WRAPPER */}

    <div className="membership-page-wrapper">


      {/* ===============================
          TOP MEMBERSHIP CARD
      =============================== */}

      <div className="membership-card-wrapper">

        <div className="membership-card">

          {/* CARD BG SHINE */}

          <div className="card-shine"></div>


          {/* MEMBER INFO */}

          <div className="membership-info">

            <div className="apollo-mini-logo">

              HC+

            </div>

            <div>

              <h1 className="membership-name">

                RAMESH R

              </h1>

              <p className="membership-level">

                Silver Member

              </p>

            </div>

          </div>


          {/* FLOATING HC CARD */}

          <div className="floating-hc-card">

            <div className="hc-left">

              🩺

            </div>

            <div>

              <p className="available-text">

                Available HC

              </p>

            </div>

            <h1 className="floating-hc-value">

              55.71

            </h1>

          </div>

        </div>

      </div>



      {/* ===============================
          TRANSACTIONS SECTION
      =============================== */}

      <div className="transactions-main-section">

        <h1 className="transaction-main-title">

          MY TRANSACTIONS

        </h1>


        {/* TOTALS */}

        <div className="transaction-top-summary">

          <div>

            <p className="summary-small">

              Total Earned

            </p>

            <h1 className="summary-value">

              2357.84

            </h1>

          </div>

          <div className="text-right">

            <p className="summary-small">

              Total Redeemed

            </p>

            <h1 className="summary-value">

              2285.00

            </h1>

          </div>

        </div>



        {/* TRANSACTION LIST */}

        <div className="transactions-list-new">

          {transactions.map((item) => (

            <div
              key={item.id}
              className="transaction-row"
            >

              {/* LEFT */}

              <div className="transaction-left">

                <div className="transaction-icon">

                  🩺

                </div>

                <div>

                  <h2 className="transaction-title-new">

                    {item.title}

                  </h2>

                  <p className="transaction-date">

                    23 Apr 2026

                  </p>

                  <p className="transaction-bill-new">

                    Billing Rs. {item.amount}

                  </p>

                </div>

              </div>



              {/* RIGHT */}

              <div className="transaction-right">

                <p className="earned-green">

                  Earned {item.earned}

                </p>

                <p className="redeemed-red">

                  Redeemed {item.redeemed}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  </Profile>
  );
}
