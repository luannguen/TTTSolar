"use client";

import { useSolarCalc } from "../hooks/useSolarCalc";
import { Button } from "@/components/ui/button";

export function SolarCalcForm() {
  const { 
    panelArea, setPanelArea, 
    efficiency, setEfficiency, 
    result, isLoading, handleCalculate 
  } = useSolarCalc();

  return (
    <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
      <h3 className="text-xl font-semibold mb-4 text-white">Solar Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Panel Area (m²)</label>
          <input 
            type="number" 
            value={panelArea} 
            onChange={(e) => setPanelArea(Number(e.target.value))}
            className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <Button 
          onClick={handleCalculate} 
          disabled={isLoading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-11"
        >
          {isLoading ? "Calculating..." : "Calculate Savings"}
        </Button>

        {result && (
          <div className="mt-6 p-4 bg-green-500/20 rounded-xl border border-green-500/30">
            <p className="text-green-400 font-bold">Estimated Output: {result.estimatedOutput.toFixed(1)} kWh/day</p>
            <p className="text-green-400">Monthly Savings: ${result.savings.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
