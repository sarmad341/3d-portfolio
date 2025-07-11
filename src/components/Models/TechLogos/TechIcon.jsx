import { useGLTF } from "@react-three/drei";

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  return <div>Tech</div>;
};

export default TechIcon;
