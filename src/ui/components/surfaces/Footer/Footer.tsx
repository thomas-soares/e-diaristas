import { Typography } from "@material-ui/core";
import { FooterStyled, FooterContainer, FooterTitle } from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterTitle>Quem somos</FooterTitle>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus eaque corporis est explicabo voluptatum, obcaecati
          repudiandae voluptas, accusantium a quod veritatis rerum optio
          temporibus ab similique unde sunt laborum iure?
        </Typography>
        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
