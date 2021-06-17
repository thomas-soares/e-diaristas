import { experimentalStyled as styled } from '@material-ui/core/styles';

export const PageTitleContainer = styled('div')`
  text-align: center;
  margin: 40px 0;
`;

export const PageTitleStyled = styled('h2')`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
`;