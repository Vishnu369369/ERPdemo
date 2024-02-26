import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
// Adjust the path

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenS2, setIsOpenS2] = useState(false);
  const [isOpenP, setIsOpenP] = useState(false);
  const [isOpenP2, setIsOpenP2] = useState(
    location.pathname === "/AddProjects" ||
      location.pathname === "/ManageProjects"
  );
  const [isOpenI, setIsOpenI] = useState(false);
  const [isOpenP3, setIsOpenP3] = useState(
    location.pathname === "/AddPurchase" ||
      location.pathname === "/ManagePurchase"
  );
  useEffect(() => {
    // Update isOpenP2 when the location changes
    setIsOpenP2(
      location.pathname === "/AddProjects" ||
        location.pathname === "/ManageProjects"
    );
  }, [location.pathname]);

  useEffect(() => {
    // Update isOpenP2 when the location changes
    setIsOpenP3(
      location.pathname === "/AddPurchase" ||
        location.pathname === "/ManagePurchase"
    );
  }, [location.pathname]);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-dark-purple max-h-full p-5 z-50  relative  duration-300`}
      >
        <img
          src="../../assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center"></div>
        {/* <h2 className="font-seriftext-white text-xl text-center">Inventory</h2> */}
        <ul className="">
          <li
            className={`flex  rounded-md p-2 cursor-pointer text-white  items-center gap-x-4
              mt-2 hover:bg-zinc-400`}
          >
            <h1 className={`${!open && "hidden"} origin-left duration-200`}>
              Admin
            </h1>
          </li>

          <Link to="/dashboard">
            <li
              className={`flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4
              mt-2 hover:bg-zinc-400 ${
                location.pathname === "/dashboard" && "bg-zinc-400"
              } `}
            >
              <i
                class="fa-solid fa-chart-simple"
                style={{ color: "white" }}
              ></i>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </li>
          </Link>
          <li
            className={`flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4
              mt-2 hover:bg-zinc-400`}
          >
            <i class="fa-solid fa-folder-open" style={{ color: "white" }}></i>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <button onClick={() => setIsOpenP2((prev) => !prev)}>
                Projects
                {!isOpenP2 ? (
                  <i
                    className="fa-solid fa-caret-down pl-3"
                    style={{ color: "white" }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-caret-up pl-3"
                    style={{ color: "white" }}
                  ></i>
                )}
              </button>
            </span>
          </li>
          {isOpenP2 && (
            <ul className="transition-all duration-300 opacity-100">
              <Link to="/AddProjects">
                <li
                  className={`flex rounded-md p-2 pl-10 cursor-pointer text-white text-sm items-center gap-x-4 mt-2 hover:bg-zinc-400 ${
                    location.pathname === "/AddProjects" && "bg-zinc-400"
                  } `}
                >
                  <i className="fa-solid fa-caret-right"></i>{" "}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    <button>Add Projects</button>
                  </span>
                </li>
              </Link>
              <Link to="/ManageProjects">
                <li
                  className={`flex rounded-md p-2 pl-10 cursor-pointer text-white text-sm items-center gap-x-4 mt-2 hover:bg-zinc-400 ${
                    location.pathname === "/ManageProjects" && "bg-zinc-400"
                  } `}
                >
                  <i className="fa-solid fa-caret-right"></i>{" "}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    <button>Manage Projects</button>
                  </span>
                </li>
              </Link>
            </ul>
          )}
          <li
            className={`flex  rounded-md p-2 cursor-pointer  text-white text-sm items-center gap-x-4
              mt-2 hover:bg-zinc-400 `}
          >
            <i class="fa-solid fa-credit-card" style={{ color: "white" }}></i>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <button onClick={() => setIsOpenP3((prev) => !prev)}>
                Purchase
                {!isOpenP3 ? (
                  <i
                    className="fa-solid fa-caret-down pl-3"
                    style={{ color: "white" }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-caret-up pl-3"
                    style={{ color: "white" }}
                  ></i>
                )}
              </button>
            </span>
          </li>
          {isOpenP3 && (
            <ul className="transition-all duration-300 opacity-100">
              <Link to="/AddPurchase">
                <li
                  className={`flex rounded-md p-2 pl-10 cursor-pointer text-white text-sm items-center gap-x-4 mt-2 hover:bg-zinc-400 ${
                    location.pathname === "/AddPurchase" && "bg-zinc-400"
                  } `}
                >
                  <i className="fa-solid fa-caret-right"></i>{" "}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    <button>Add Purchase</button>
                  </span>
                </li>
              </Link>

              <Link to="/ManagePurchase">
                <li
                  className={`flex rounded-md p-2 pl-10 cursor-pointer text-white text-sm items-center gap-x-4 mt-2 hover:bg-zinc-400 ${
                    location.pathname === "/ManagePurchase" && "bg-zinc-400"
                  } `}
                >
                  <i className="fa-solid fa-caret-right"></i>{" "}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    <button>Manage Purchase</button>
                  </span>
                </li>
              </Link>
            </ul>
          )}

          <Link to="/Inventory">
            <li
              className={`flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4
              mt-2 hover:bg-zinc-400 ${
                location.pathname === "/Inventory" && "bg-zinc-400"
              } `}
            >
              <FaMagnifyingGlassChart />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Inventory
              </span>
            </li>
          </Link>
          <Link to="/ProposalMaking">
            <li
              className={`flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4
              mt-2 hover:bg-zinc-400 ${
                location.pathname === "/ProposalMaking" && "bg-zinc-400"
              } `}
            >
              <i class="fa-solid fa-handshake" style={{ color: "white" }}></i>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Proposal Making
              </span>
            </li>
          </Link>
          <Link to="/Invoice">
            <li
              className={`flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4
              mt-2 hover:bg-zinc-400 ${
                location.pathname === "/Invoice" && "bg-zinc-400"
              } `}
            >
              <FaFileInvoiceDollar />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Invoice
              </span>
            </li>
          </Link>

          <Link to="/users">
            <li
              className={`flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4
              mt-2 hover:bg-zinc-400 ${
                location.pathname === "/users" && "bg-zinc-400"
              } `}
            >
              <i class="fa-solid fa-user" style={{ color: "white" }}></i>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Users
              </span>
            </li>
          </Link>
          <Link to="/Employees">
            <li
              className={`flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4
              mt-2 hover:bg-zinc-400  ${
                location.pathname === "/Employees" && "bg-zinc-400"
              } `}
            >
              <FaUserTie />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Employees
              </span>
            </li>
          </Link>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default Sidebar;
