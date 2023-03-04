import React from "react";

//GL CODOU POR AQUI AQUI HAHA :)

import { Container, Content, Logo, Search, User } from "./styles";
import { MdAccountCircle } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";

export function Desktop(props) {
  return (
    <Container>
      <Content>
        <Logo>
          <FaHamburger size={20} />
          <h1>
            Pede<span>Ai</span>
          </h1>
        </Logo>
        <div>
          <Search type="text" placeholder="QUE TAL UM THREE IN ONE.." />
        </div>
        <User>
          <MdAccountCircle size={30} />
          <span>Olá, Guest!</span>
        </User>
      </Content>
    </Container>
  );
}
