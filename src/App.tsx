import { useState } from "react";
import HelloText from "./components/HelloText";
import { estadosBrasileiros } from "./data/data";
function App() {
  const [helloText, setHelloText] = useState("Hello, World!");

  return (
    <>
      <div className="min-h-screen content-center bg-gradient-to-t from-gray-800 to-black">
        <div className="flex flex-col items-center font-mono text-green-500">
          <div className="flex-auto">
            <HelloText text={helloText} />
          </div>

          <div className="flex-auto">
            <div className="w-full max-w-xs">
              <label htmlFor="estado" className="block text-sm font-medium ">
                Selecione um estado
              </label>
              <select
                id="estado"
                name="estado"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(e) => setHelloText(e.target.value)}
              >
                {estadosBrasileiros.map((estado, index) => (
                  <option key={index} value={estado.value}>
                    {estado.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
