import React from "react";

//GL CODOU POR AQUI AQUI HAHA :)

import { Container, Desk, Mobol } from "./styles";
import { Mobile } from "./Mobile/Mobile";
import { Desktop } from "./Desktop/Desktop";
export function Header() {
  return (
    <Container>
      <Desk>
        <Desktop />
      </Desk>
      <Mobol>
        <Mobile />
      </Mobol>
    </Container>
  );
}
