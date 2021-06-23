import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;

export const AppList = styled("ul")`
  display: flex;
  list-style-type: none;
  padding: 0;

  img {
    width: 122px;
  }
`;
