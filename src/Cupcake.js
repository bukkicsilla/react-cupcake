import { Link } from "react-router-dom";
const Cupcake = ({ cupcake }) => {
  return (
    <Link to={`/cupcakes/${cupcake.id}`}>
      <div className="Cupcake">
        <h3>{cupcake.flavor}</h3>
        <h5>{cupcake.id}</h5>
        <img id="Cupcake-img" src={cupcake.image} alt={cupcake.flavor} />
      </div>
    </Link>
  );
};
export default Cupcake;
