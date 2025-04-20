import { useState } from "react";
import axios from "axios";

const useWLAController = () => {
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

  return {
    predicted,
    isLoading,
    error,
    fetchPrediction,
  };
};

export default useWLAController;
