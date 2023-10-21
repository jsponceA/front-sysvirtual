import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiAccountGroup,
  mdiAnimation,
  mdiContentSaveEdit,
  mdiEmail,
  mdiImage,
  mdiLock,
  mdiText,
} from "@mdi/js";

const CursoIndex = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"../inicio"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cursos
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-gradient bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <Icon path={mdiAnimation} size={1} /> T-REX
              </p>
            </div>
            <div className="card-body ">
              <div className="row">
                <div className="col-md-12">
                  ASDASD
                  <a-scene
                    embedded
                    arjs="sourceType: webcam; debugUIEnabled: false;"
                  >
                    <a-marker preset="hiro">
                      <a-box position="0 0.5 0" material="color: red;"></a-box>
                    </a-marker>
                    <a-entity camera></a-entity>
                  </a-scene>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoIndex;
