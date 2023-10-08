import { useGLTF } from "@react-three/drei";

const ARScene = ({ url, ...props }) => {
  const { scene } = useGLTF(url);

  return <primitive object={scene} {...props} />;
};

export default ARScene;
