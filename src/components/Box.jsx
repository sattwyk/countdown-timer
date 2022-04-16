import "./Box.css";

export default function Box({ value, title }) {
  return (
    <div className="Box">
      <div className="box-value">{value}</div>
      <p className="box-title">{title}</p>
    </div>
  );
}
