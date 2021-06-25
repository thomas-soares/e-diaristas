import InputMask from "react-input-mask";
import TextField from "ui/components/inputs/TextField/TextField";

const TextFieldMask = (props) => {
  return (
    <InputMask>
      {() => {
        return <TextField />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
