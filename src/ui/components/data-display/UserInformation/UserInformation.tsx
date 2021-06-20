import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInformation.style";

const UserInformation: React.FC = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={"https://github.com/thomas-soares.png"} />
      <UserName>Thomas</UserName>
      <RatingStyled readOnly value={3} />
      <UserDescription>Porto Alegre</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
