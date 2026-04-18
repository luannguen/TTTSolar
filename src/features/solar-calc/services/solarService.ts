import { success, failure } from "@/lib/utils"; // Giả định utils có helpers này hoặc sẽ tạo sau

export type SolarCalcResult = {
  estimatedOutput: number;
  savings: number;
};

export const solarService = {
  calculateOutput: async (panelArea: number, efficiency: number): Promise<any> => {
    try {
      // Giả lập logic tính toán phức tạp
      const estimatedOutput = panelArea * efficiency * 5.5; // kWh/day
      const savings = estimatedOutput * 0.15 * 30; // $/month
      
      return {
        success: true,
        data: { estimatedOutput, savings }
      };
    } catch (error) {
      return {
        success: false,
        error: "Lỗi tính toán năng lượng"
      };
    }
  }
};
