const Cupcake = ({ cupcake }) => {
  return (
    <div className="Cupcake">
      <h3>{cupcake.flavor}</h3>
      <img id="Cupcake-img" src={cupcake.image} alt={cupcake.flavor} />
    </div>
  );
};
export default Cupcake;
