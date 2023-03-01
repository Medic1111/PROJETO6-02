import React from "react";
import { Container, Content, Quantity } from "./styles";
import { BsFillCartCheckFill } from "react-icons/bs";
export function Cart(props) {
  return (
    <Container>
      <Content>
        <div>
          <Quantity>2</Quantity>
        </div>
        <BsFillCartCheckFill size={30} />
      </Content>
    </Container>
  );
}
