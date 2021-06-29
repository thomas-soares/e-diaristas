import { useState } from "react";
import { UserShortInterface } from "data/@types/UserInterface";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [professionals, setProfessionals] = useState(
    [] as UserShortInterface[]
  );
  const [remainingProfessionals, setRemainingProfessionals] = useState(0);

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
  };
}
