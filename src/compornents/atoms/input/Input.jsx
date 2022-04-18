import styled from "styled-components";
import { PrimaryButton } from "../button/PrimaryButton";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return (
    <>
      <SInput type="text" placeholder={placeholder} />
      {/* <PrimaryButton>検索</PrimaryButton> */}
    </>
  );
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 999px;
  outline: none;
`;
