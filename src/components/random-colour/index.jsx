import { useEffect, useState } from "react";

export default function RandomColour() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [colour, setColour] = useState("#000000");

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    //create hex array, have numbers 1-9
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColour = "#";

    //colour usually has 5 digits
    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }

    setColour(hexColour);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColourUtility(256); //256 is the max
    const g = randomColourUtility(256); //256 is the max
    const b = randomColourUtility(256); //256 is the max

    setColour(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: colour,
      }}
      className="container"
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Colour</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB colour</button>

      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate random colour
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Colour" : "HEX Colour"}</h3>
        <h1>{colour}</h1>
      </div>
    </div>
  );
}
