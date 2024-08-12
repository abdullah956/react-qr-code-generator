import { useState } from "react";
import QRCode from "react-qr-code"; // Importing the QRCode component from the react-qr-code library

export default function QRCodeGenerator() {
  // useState hook to manage the QR code value and the input value
  const [qrCode, setQrCode] = useState(""); // State for the QR code value
  const [input, setInput] = useState(""); // State for the input field value

  // Function to handle the QR code generation
  function handleGenerateQrCode() {
    setQrCode(input); // Set the QR code value to the input value
    setInput(""); // Clear the input field after generating the QR code
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)} // Update the input state with the user's input
          type="text"
          name="qr-code"
          value={input} // Bind the input state to the input field's value
          placeholder="Enter your value here" // Placeholder text in the input field
        />
        <button
          disabled={input && input.trim() !== "" ? false : true} // Disable the button if the input is empty or just whitespace
          onClick={handleGenerateQrCode} // Generate the QR code when the button is clicked
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        {/* Render the QR code with the value from the qrCode state, size of 400, and a white background */}
      </div>
    </div>
  );
}
