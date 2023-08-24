import { useAuth } from "@/contexts/Auth";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Nav() {
  const { isAuth, signOut } = useAuth();
  const handelSignOut = async () => {
    await signOut()
    Navigate('/')
  }

  return (
    <nav>
      <ul className="flex gap-4 p-5 font-extralight">
        {!isAuth && (
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "font-semibold text-rose-600" : ""
              }
            >
              Sign In
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "font-semibold text-rose-600" : ""
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-semibold text-rose-600" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        {
          isAuth && (
            <button type="button" onClick={handelSignOut}>Sign out</button>
          )
        }
      </ul>
    </nav>
  );
}

export default Nav;
