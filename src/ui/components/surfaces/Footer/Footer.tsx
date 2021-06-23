import { Typography } from "@material-ui/core";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <div>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus eaque corporis est explicabo voluptatum, obcaecati
            repudiandae voluptas, accusantium a quod veritatis rerum optio
            temporibus ab similique unde sunt laborum iure?
          </Typography>
        </div>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"AppStore"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
