import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const { cep, setCep } = useIndex();

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
            fullWidth
          />
          <Typography color={"error"}>CEP inválido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
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
        </ProfessionalsPaper>
      </Container>
    </div>
  );
}
