import { Link, useParams } from "react-router-dom";
import useCounterStore from "./CounterStore.tsx";
import Button from "../../ui/Button";

const Menu = () => {
  const { id } = useParams();
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h1>Menu {id}</h1>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
};

export default Menu;
