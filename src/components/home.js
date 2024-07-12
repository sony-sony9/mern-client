import {useState} from 'react';
export default function Home() {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState("");
  
    const handleChange = (e) => {
      setName(e.target.value);
    };
  
    const handleButton = () => {
      setShowName(`Welcome, ${name}`);
    };
  
    return (
      <div className="p-4">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={handleChange}
          className="border p-2"
        />
        <button
          id="submit-button" // Added ID here
          className="bg-blue-500 text-white border border-blue-500 w-20 p-2 ml-2"
          onClick={handleButton}
        >
          Submit
        </button>
        <p className="mt-4">{showName}</p>
      </div>
    );
  }