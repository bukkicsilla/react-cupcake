import Cupcake from "./Cupcake";
function Cupcakes({ cupcakes }) {
  return (
    <div className="Cupcakes">
      {cupcakes.map((cupcake) => (
        <Cupcake key={cupcake.id} cupcake={cupcake} />
      ))}
    </div>
  );
}
export default Cupcakes;
