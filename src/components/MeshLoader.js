import Button from "./Button";
import Input from "./Input";

const MeshLoader = () => {
  return (
    <div className='meshLoader'>
      <Input type='file' id='asset' name='3D-Asset' asset />
      <Button submit>Submit</Button>
    </div>
  );
};

export default MeshLoader;
