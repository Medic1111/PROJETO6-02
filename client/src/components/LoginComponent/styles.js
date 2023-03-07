import styled from "styled-components";

//GL CODOU POR AQUI AQUI HAHA :)

export const Container = styled.main`
  min-width: 100vw;
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const Form = styled.form`
  background-color: ${({ theme: { colors } }) => colors.background};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 90%;
  height: 350px;
  border-radius: 50px;
  padding-top: 80px;
  gap: 12px;
  box-shadow: 28px 28px 56px #bababa, -28px -28px 56px #ffffff;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    & p {
      font-size: 13px;
      margin-top: 5px;
    }
  }
  & h6 {
    font-size: 16px;
    color: ${({ theme: { colors } }) => colors.textSecondary};
    & span {
      color: red;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: -60px;
  & svg,
  path {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
export const Input = styled.input`
  outline: none;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  width: 80%;
  padding: 8px 10px;
  border-radius: 8px;
  font-weight: bold;
  &.error {
    &::placeholder {
      color: white;
    }
    & {
      color: white;
      background-color: red;
    }
  }
`;

export const InputSubmit = styled(Input)`
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: white;
  font-size: 20px;
  &:hover {
    filter: blur(0.8px);
  }
`;
