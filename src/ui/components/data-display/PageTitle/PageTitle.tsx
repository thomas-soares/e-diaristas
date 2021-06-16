interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
      <div>
        {props.title}
        {props.subtitle}
      </div>
    )
  }
  
  export default PageTitle;