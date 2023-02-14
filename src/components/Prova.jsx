import { useContext } from "react";
import { applicationContext } from "@/store/state";

const Prova = () => {
  const { dispatch, state } = useContext(applicationContext);
  console.log(state);
  return <h1>prova</h1>;
};

export default Prova;
