export const ValidationService = {
  cep(cep = "") {
    cep.replace(/\D/g, "");
  },
};
