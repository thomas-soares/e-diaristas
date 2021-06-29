import { useState } from "react";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");
  const [searchDone, setSearchDone] = useState(false);

  return {
    cep,
    setCep,
    error,
    setError,
    searchDone,
    setSearchDone,
  };
}
