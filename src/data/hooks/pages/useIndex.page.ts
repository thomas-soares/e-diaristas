import { useState } from "react";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  return {
    cep,
    setCep,
    error,
    setError,
  };
}
