import { PageTitleContainer } from './PageTitle.style';

interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      {props.title}
      {props.subtitle}
    </PageTitleContainer>
  )
}

export default PageTitle;