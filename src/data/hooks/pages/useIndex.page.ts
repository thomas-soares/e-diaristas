import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const validCep = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);

  const [error, setError] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [remainingProfessionals, setRemainingProfessionals] = useState(0);
  const [professionals, setProfessionals] = useState(
    [] as UserShortInterface[]
  );

  async function searchProfessionals(cep: string) {
    setSearchDone(false);
    setIsLoading(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        professionals: UserShortInterface[];
        quantity_professionals: number;
      }>(`/api/professionals-city?cep=${cep.replace(/\D/g, "")}`);
      setSearchDone(true);
      setIsLoading(false);
    } catch (error) {
      setError("CEP não encontrado");
      setIsLoading(false);
    }
  }

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
