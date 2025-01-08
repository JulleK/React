import { useState } from "react";

export default function Cell() {
  const [value, _setValue] = useState(Math.floor(Math.random() * 9) + 1);
  return <div className="cell">{value}</div>;
}
