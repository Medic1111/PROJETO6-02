import React from "react";
import {
  Container,
  Content,
  Form,
  Icon,
  Input,
  InputSubmit,
} from "./styles.js";
import { MdAccountCircle } from "react-icons/md";

//GL CODOU POR AQUI AQUI HAHA :)

export function LoginComponent() {
  return (
    <Container>
      <Content>
        <Form>
          <Icon>
            <MdAccountCircle size={120} />
          </Icon>
          <div>
            <Input type="text" placeholder="User ID" />
          </div>
          <div>
            <Input type="password" placeholder="Password" />
          </div>
          <div>
            <InputSubmit type="submit" value="LOGIN" />
          </div>
          <h6>
            Esqueceu a <span>senha</span> ?
          </h6>
        </Form>
      </Content>
    </Container>
  );
}
