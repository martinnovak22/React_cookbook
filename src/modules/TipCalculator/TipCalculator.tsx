import logoSvg from "../../assets/images/logo.svg";
import CalculatorForm from "./components/CalculatorForm";
import "./styles/tipCalculator.css";

export function TipCalculator() {
  return (
    <div className={"tc"}>
      <img src={logoSvg} alt={"logo"} className={"tc__logo"} />
      <CalculatorForm />
    </div>
  );
}
