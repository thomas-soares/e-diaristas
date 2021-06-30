import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [remainingProfessionals, setRemainingProfessionals] = useState(0);
  const [professionals, setProfessionals] = useState(
    [] as UserShortInterface[]
  );

  const validCep = ValidationService.cep(cep) ? "CEP VALIDO" : "CEP INVALIDO";

  return {
    cep,
    setCep,
    error,
    setError,
    searchDone,
    setSearchDone,
    isLoading,
    setIsLoading,
    professionals,
    setProfessionals,
    remainingProfessionals,
    setRemainingProfessionals,
    validCep,
  };
}
