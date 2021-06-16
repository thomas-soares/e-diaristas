interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle: React.FC = (props) => {
    return (
      <div>
        {props.title}
        {props.subtitle}
      </div>
    )
  }
  
  export default PageTitle;