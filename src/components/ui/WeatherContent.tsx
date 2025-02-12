import React from "react";
import { Weather } from "../../types/Weather";
import WeatherIcon from "./WeatherIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../Table";

interface WeatherContentProps {
  data: Weather;
}

const WeatherContent: React.FC<WeatherContentProps> = ({ data }) => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="text-white flex md:col-span-1">
          <WeatherIcon code={data.code} />
          <span className="text-5xl">{data.temperature}</span>
          <span className="align-top">°C</span>
        </div>
        <div className="text-gray-400 text-sm md:col-span-1 text-right md:text-left">
          <p>Humedad: {data.humidity}%</p>
          <p>Viento: {data.windSpeed} km/h</p>
        </div>
        <div className="md:col-span-2 text-left md:text-right mt-6 md:mt-0">
          <p className="text-gray-400 text-sm font-bold">{data.description}</p>
          <p className="text-gray-400 text-xs">{data.date}</p>
        </div>
      </div>

      <Tabs defaultValue="tab1" className="mt-6">
        <TabsList variant="line">
          <TabsTrigger value="tab1">Pronóstico</TabsTrigger>
        </TabsList>
        <div className="mt-4">
          <TabsContent value="tab1">
            <TableRoot className="mt-4">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Fecha</TableHeaderCell>
                    <TableHeaderCell>Temperatura Máxima</TableHeaderCell>
                    <TableHeaderCell>Temperatura Mínima</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.forecast.map((day) => (
                    <TableRow key={day.date}>
                      <TableCell>{day.date}</TableCell>
                      <TableCell>{day.maxTemp}°C</TableCell>
                      <TableCell>{day.minTemp}°C</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableRoot>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default WeatherContent;
