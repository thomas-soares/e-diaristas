import { useState } from "react";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [professionals, setProfessionals] = useState([]);

  return {
    cep,
    setCep,
    error,
    setError,
    searchDone,
    setSearchDone,
    isLoading,
    setIsLoading,
  };
}
