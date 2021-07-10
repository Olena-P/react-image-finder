import styled from "@emotion/styled";

export const Btn = styled.button`
  margin-left: 20px;
  cursor: pointer;
  padding: 5px 15px;
  border: none;
  outline: none;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1);

  &:hover {
    background-color: rgb(243, 65, 65);
    transform: scale(1.05);
    border: none;
    outline: none;
  }
`;
