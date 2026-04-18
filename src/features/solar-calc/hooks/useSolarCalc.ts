"use client";

import { useState } from "react";
import { solarService } from "../services/solarService";

export function useSolarCalc() {
  const [panelArea, setPanelArea] = useState<number>(10);
  const [efficiency, setEfficiency] = useState<number>(0.2);
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculate = async () => {
    setIsLoading(true);
    const res = await solarService.calculateOutput(panelArea, efficiency);
    if (res.success) {
      setResult(res.data);
    }
    setIsLoading(false);
  };

  return {
    panelArea,
    setPanelArea,
    efficiency,
    setEfficiency,
    result,
    isLoading,
    handleCalculate,
  };
}
