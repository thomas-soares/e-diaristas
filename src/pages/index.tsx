import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <TextFieldMask mask={"99.999-999"} label={"Digite seu CEP"} fullWidth />
      <UserInformation
        name={"Thomas"}
        picture={"https://github.com/thomas-soares.png"}
        rating={3}
        description={"Porto Alegre"}
      />
    </div>
  );
}
