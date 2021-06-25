import InputMask from "react-input-mask";
import TextField from "ui/components/inputs/TextField/TextField";

export interface TextFieldMaskProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask }) => {
  return (
    <InputMask mask={mask}>
      {() => {
        return <TextField />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
