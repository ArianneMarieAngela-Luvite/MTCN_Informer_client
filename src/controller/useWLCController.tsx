import { useState } from "react";
import axios from "axios";

const useWLCController = () => {
  const [predicted, setPredicted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPrediction = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.post(
        "https://wl-c-model-api-9e79bb7de532.herokuapp.com/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const predictedValue = response.data["wl-c_predicted"];
      setPredicted(predictedValue);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch prediction.");
    } finally {
      setIsLoading(false);
    }
  };

  const getPredictionColor = (value: number | null) => {
    if (value === null) return "bg-gray-300"; 
    if (value <= 2.329) return "bg-[#0739FE]";
    if (value <= 2.9) return "bg-[#FEEE07]";
    if (value <= 3.5) return "bg-[#8C8633]";
    if (value <= 4.1) return "bg-[#DC0707]";
    return "bg-gray-300"; 
  };
  

  return {
    predicted,
    isLoading,
    error,
    fetchPrediction,
    getPredictionColor,
  };
};

export default useWLCController;
