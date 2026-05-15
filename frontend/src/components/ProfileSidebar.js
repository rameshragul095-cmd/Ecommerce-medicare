import { useNavigate } from "react-router-dom";

import {
  FaUserFriends,
  FaClipboardList,
  FaRupeeSign,
  FaCrown,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaQuestionCircle,
  FaSignOutAlt
} from "react-icons/fa";

export default function ProfileSidebar() {

  const navigate = useNavigate();

  const menus = [
    {
      title: "Manage Profiles",
      icon: <FaUserFriends />,
      path: "/manage-profile"
    },

    {
      title: "My Orders",
      icon: <FaClipboardList />,
      path: "/orders"
    },

    {
      title: "My Payments",
      icon: <FaRupeeSign />,
      path: "/payments"
    },

    {
      title: "My Memberships",
      icon: <FaCrown />,
      path: "/membership"
    },

    {
      title: "Address Book",
      icon: <FaMapMarkerAlt />,
      path: "/address"
    },

    {
      title: "Pharmacy Voucher",
      icon: <FaTicketAlt />,
      path: "/voucher"
    },

    {
      title: "Need Help",
      icon: <FaQuestionCircle />,
      path: "/help"
    },

    {
      title: "Logout",
      icon: <FaSignOutAlt />,
      path: "/"
    }
  ];

  return (

    <div className="w-[320px] flex flex-col gap-5">

      {menus.map((item, index) => (

        <div
          key={index}
          onClick={() => navigate(item.path)}
          className="bg-white shadow rounded-2xl p-5 flex items-center justify-between cursor-pointer hover:border-2 hover:border-teal-600 transition"
        >

          <div className="flex items-center gap-4">

            <div className="text-2xl text-teal-800">
              {item.icon}
            </div>

            <h2 className="text-2xl font-medium">
              {item.title}
            </h2>

          </div>

          <span className="text-2xl">{">"}</span>

        </div>

      ))}

    </div>
  );
}