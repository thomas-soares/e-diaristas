import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const {
    cep,
    setCep,
    validCep,
    searchProfessionals,
    error,
    professionals,
    searchDone,
    isLoading,
    remainingProfessionals,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            fullWidth
          />
          {error && <Typography color={"error"}>{error}</Typography>}
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!validCep || isLoading}
            onClick={() => searchProfessionals(cep)}
          >
            {isLoading ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>
        {searchDone &&
          (professionals.length > 0 ? (
            <ProfessionalsPaper>
              <ProfessionalsContainer>
                <UserInformation
                  name={"Thomas"}
                  picture={"https://github.com/thomas-soares.png"}
                  rating={3}
                  description={"Porto Alegre"}
                />
                <UserInformation
                  name={"Thomas"}
                  picture={"https://github.com/thomas-soares.png"}
                  rating={3}
                  description={"Porto Alegre"}
                />
                <UserInformation
                  name={"Thomas"}
                  picture={"https://github.com/thomas-soares.png"}
                  rating={3}
                  description={"Porto Alegre"}
                />
                <UserInformation
                  name={"Thomas"}
                  picture={"https://github.com/thomas-soares.png"}
                  rating={3}
                  description={"Porto Alegre"}
                />
                <UserInformation
                  name={"Thomas"}
                  picture={"https://github.com/thomas-soares.png"}
                  rating={3}
                  description={"Porto Alegre"}
                />
                <UserInformation
                  name={"Thomas"}
                  picture={"https://github.com/thomas-soares.png"}
                  rating={3}
                  description={"Porto Alegre"}
                />
                <UserInformation
                  name={"Thomas"}
                  picture={"https://github.com/thomas-soares.png"}
                  rating={3}
                  description={"Porto Alegre"}
                />
              </ProfessionalsContainer>
              <Container sx={{ textAlign: "center" }}>
                <Typography sx={{ mt: 5 }}>
                  ...e mais X profissionais atendem ao seu endereço.
                </Typography>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfessionalsPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponível em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}
