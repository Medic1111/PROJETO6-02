import React from "react";

//GL CODOU POR AQUI AQUI HAHA :)

import { Container, Desk, Mobol } from "./styles";
import { Mobile } from "./Mobile/Mobile";
import { Desktop } from "./Desktop/Desktop";
import { useContext } from "react";
import { AuthContext } from "../../contexts/users";
export function Header() {
  const {
    username: { username },
  } = useContext(AuthContext);

  return (
    <Container>
      <Desk>
        <Desktop user={username} />
      </Desk>
      <Mobol>
        <Mobile user={username} />
      </Mobol>
    </Container>
  );
}
