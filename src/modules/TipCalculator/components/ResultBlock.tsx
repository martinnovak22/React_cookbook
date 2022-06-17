import { formatPrice } from "../../../utils/numberUtils";

interface ResultBlockProps {
  title: string;
  value: number;
}
function ResultBlock({ title, value }: ResultBlockProps) {
  return (
    <div className={"resultBox"}>
      <div className={"resultBox__text"}>
        <h4>{title}</h4>
        <p className={"resultBox__text-mod"}>/ person</p>
      </div>
      <output className={"resultBox__output"}>{formatPrice(value)}</output>
    </div>
  );
}

export default ResultBlock;
