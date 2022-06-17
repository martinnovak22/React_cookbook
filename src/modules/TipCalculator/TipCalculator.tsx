import logoSvg from "../../assets/images/logo.svg";
import CalculatorForm from "./components/CalculatorForm";
import "./styles/tipCalculator.css";

export default function TipCalculator() {
  return (
    <div className={"app"}>
      <img src={logoSvg} alt={"logo"} className={"app__logo"} />
      <CalculatorForm />
    </div>
  );
}
