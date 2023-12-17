import { HiBeaker } from "react-icons/hi";
import { MdOutlineApps } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="https://mail.google.com/mail/">Gmail</a>
            </li>
            <li>
              <a href="https://www.google.com/imghp">Images</a>
            </li>
            <li className="text-xl">
              <a href="https://labs.google.com/search/experiments">
                <HiBeaker />
              </a>
            </li>
            <li className="text-2xl">
              <a>
              <MdOutlineApps />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
