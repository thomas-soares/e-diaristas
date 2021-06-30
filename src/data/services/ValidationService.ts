export const ValidationService = {
  cep(cep = "") {
    return cep.replace(/\D/g, "").length === 8;
  },
};
