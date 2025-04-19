import { axiosInstance } from '@/services/axios';
import { useState } from 'react'

interface ForecastFormData {
    waterLevel: number;
    rainfall: number;
    temperature: number;
    humidity: number;
    reservoirLevel: number;
    lagDif: number;
}

interface ForecastResponse {
    message: string;
}
const ForecastFormController = () => {
    const [formData, setFormData] = useState<ForecastFormData>({
        waterLevel: 0,
        rainfall: 0,
        temperature: 0,
        humidity: 0,
        reservoirLevel: 0,
        lagDif: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value});
    }

    const handleGenerateForecast = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await axiosInstance.post<ForecastResponse>("/forecast", {
                waterLevel: formData.waterLevel,
                rainfall: formData.rainfall,
                temperature: formData.temperature,
                humidity: formData.humidity,
                reservoirLevel: formData.reservoirLevel,
                lagDif: formData.lagDif
            });

            if (response.status == 200) {

            }
        } catch (err: any) {
            console.error("Error response:", err.response?.data);
            }
    }
  return {formData, handleChange, handleGenerateForecast}
}
