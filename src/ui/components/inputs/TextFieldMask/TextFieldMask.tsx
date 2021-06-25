import InputMask from "react-input-mask";
import TextField from "ui/components/inputs/TextField/TextField";

export interface TextFieldMaskProps {
  mask: string;
}

const TextFieldMask = (props) => {
  return (
    <InputMask mask={"99.999-999"}>
      {() => {
        return <TextField />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
