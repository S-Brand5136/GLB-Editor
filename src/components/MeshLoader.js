import Button from "./Button";
import Input from "./Input";

import "./styles/MeshLoader.scss";

const MeshLoader = () => {
  return (
    <div className='meshLoader'>
      <Input type='file' id='asset' name='3D-Asset' asset />
      <Button submit>Submit</Button>
    </div>
  );
};

export default MeshLoader;
