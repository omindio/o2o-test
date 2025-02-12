import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LocationPayload } from "../../types/Weather";
import { useWeather } from "../../hooks/useWeather";
import { Input } from "../Input";
import { Button } from "../Button";
import { Callout } from "../Callout";

const WeatherSearch: React.FC = () => {
  const { fetch, isLoading, error } = useWeather();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationPayload>();

  const onSubmit: SubmitHandler<LocationPayload> = (data: LocationPayload) => {
    fetch(data);
  };

  return (
    <>
      {error && <Callout className="mb-4" title={error} variant="error" />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Buscar por ciudad"
          type="search"
          {...register("city", {
            required: "Es obligatorio introducir una ciudad",
          })}
          error={errors.city?.message}
        />
        <Button isLoading={isLoading} variant="primary" className="mt-4 w-full">
          Buscar
        </Button>
      </form>
    </>
  );
};

export default WeatherSearch;
