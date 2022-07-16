import "./Dropdown.scss";

const Dropdown = ({ array, onChange }) => {
  const optionList = array.map((item) => <option value={item}>{item}</option>);

  return <selection onChange={onChange}>{optionList}</selection>;
};

export default Dropdown;
