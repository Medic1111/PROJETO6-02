import React from "react";

//GL CODOU POR AQUI AQUI HAHA :)

import { Container, Content, Menu } from "./styles";
import { BiMenu } from "react-icons/bi";
import { RxMagnifyingGlass } from "react-icons/rx";

export function Mobile({ user = "" }) {
  return (
    <Container>
      <Content>
        <Menu>
          <BiMenu size={30} />
          <span>Olá, {user ? user : "Guest"}!</span>
        </Menu>
        <div>
          <RxMagnifyingGlass size={30} />
        </div>
      </Content>
    </Container>
  );
}
