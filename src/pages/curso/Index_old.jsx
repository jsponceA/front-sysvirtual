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
import ARScene from "../../components/ARScene";
import { PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
            <div className="card-body bg-secondary-subtle">
              <div className="row">
                <div className="col-md-12 min-vh-100">
                  <Canvas
                    dpr={[1, 2]}
                    shadows
                    camera={{ fov: 45 }}
                    style={{ position: "absolute" }}
                  >
                    <PresentationControls
                      speed={1.5}
                      global
                      zoom={0.5}
                      polar={[-0.1, Math.PI / 4]}
                    >
                      <Stage environment={null}>
                        <ARScene scale={0.01} url={"/modelos/dinosaur.glb"} />
                      </Stage>
                    </PresentationControls>
                  </Canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-gradient bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <Icon path={mdiAnimation} size={1} /> PANCREAS
              </p>
            </div>
            <div className="card-body bg-secondary-subtle">
              <div className="row">
                <div className="col-md-12 min-vh-100">
                  <Canvas
                    dpr={[1, 2]}
                    shadows
                    camera={{ fov: 45 }}
                    style={{ position: "absolute" }}
                  >
                    <PresentationControls
                      speed={1.5}
                      global
                      zoom={0.5}
                      polar={[-0.1, Math.PI / 4]}
                    >
                      <Stage environment={null}>
                        <ARScene
                          scale={0.01}
                          url={"/modelos/realistic_stomach.glb"}
                        />
                      </Stage>
                    </PresentationControls>
                  </Canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-gradient bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <Icon path={mdiAnimation} size={1} /> OJO HUMANO
              </p>
            </div>
            <div className="card-body bg-secondary-subtle">
              <div className="row">
                <div className="col-md-12 min-vh-100">
                  <Canvas
                    dpr={[1, 2]}
                    shadows
                    camera={{ fov: 45 }}
                    style={{ position: "absolute" }}
                  >
                    <PresentationControls
                      speed={1.5}
                      global
                      zoom={0.5}
                      polar={[-0.1, Math.PI / 4]}
                    >
                      <Stage environment={null}>
                        <ARScene scale={0.01} url={"/modelos/eye.glb"} />
                      </Stage>
                    </PresentationControls>
                  </Canvas>
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
