import Icon from "@mdi/react";
import {
  mdiCircle,
  mdiHome,
  mdiAccountGroup,
  mdiFileExcel,
  mdiHistory,
  mdiStore,
  mdiChartBar,
  mdiClose,
  mdiBook,
} from "@mdi/js";
import { NavLink } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import useSidebar from "../../hooks/useSidebar";

const APP_NAME = import.meta.env.VITE_APP_NAME;

const DashboardSidebar = () => {
  const user = useAuthStore((state) => state.user);
  const { toggleSideBar } = useSidebar();

  return (
    <div className=" position-fixed vh-100 dashboard-sidebar">
      <div
        className="fw-bold  d-flex flex-column w-100"
        style={{ backgroundColor: "var(--bs-green)" }}
      >
        <a
          onClick={toggleSideBar}
          href="#"
          className="my-0 link-light ms-auto d-md-none d-block"
        >
          {" "}
          <Icon path={mdiClose} size={1.2} />
        </a>
        <p className="my-0 text-white text-center ">🎓{APP_NAME}</p>
        <div className="align-items-center d-flex flex-column">
          <img
            src={user.foto_url}
            alt=""
            className="rounded-circle"
            style={{ width: "100px", height: "100px" }}
          />
          <p className="my-0 d-flex align-items-center fw-medium">
            <Icon path={mdiCircle} size={0.5} color="green" />
            <span className="text-white">En linea</span>
          </p>
          <p className="my-0 text-capitalize text-white">{user.nombres}</p>
        </div>
      </div>
      <ul className="nav nav-pills flex-column mb-auto nav-sidebar mt-3 ">
        <li className="nav-item">
          <NavLink
            to={"/panel/inicio"}
            className="nav-link d-flex align-items-center"
          >
            <Icon path={mdiHome} size={0.8} className="me-1" color="white" />{" "}
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/panel/usuarios"}
            className="nav-link d-flex align-items-center"
          >
            <Icon
              path={mdiAccountGroup}
              size={0.8}
              className="me-1"
              color="silver"
            />{" "}
            Usuarios
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={"/panel/cursos"}
            className="nav-link d-flex align-items-center"
          >
            <Icon path={mdiBook} size={0.8} className="me-1" color="silver" />{" "}
            Cursos
          </NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink
            to={"/panel/graficos"}
            className="nav-link d-flex align-items-center"
          >
            <Icon
              path={mdiChartBar}
              size={0.8}
              className="me-1"
              color="orange"
            />{" "}
            Graficos Generados
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
