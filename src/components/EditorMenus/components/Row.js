const Row = ({ title, body }) => {
  return (
    <div className="row">
      <h4>{title}</h4>
      {body}
    </div>
  );
};

export default Row;
