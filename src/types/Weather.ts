export interface Weather {
  date: string;
  description: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  code: string;
  forecast: {
    date: string;
    maxTemp: number;
    minTemp: number;
  }[];
}

export interface LocationPayload {
  city: string;
}
