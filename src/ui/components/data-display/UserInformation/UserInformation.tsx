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
      <AvatarStyled />
      <UserName>Thomas</UserName>
      <RatingStyled />
      <UserDescription />
    </UserInformationContainer>
  );
};

export default UserInformation;
