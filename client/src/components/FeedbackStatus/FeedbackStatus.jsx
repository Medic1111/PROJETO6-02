import React, { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export function FeedbackStatus({ status, msg }) {
  const [visibleClass, setVisibleClass] = useState(false);

  useEffect(() => {
    console.log(msg);
    if (status === true) {
      setVisibleClass(true);
      setTimeout(() => {
        setVisibleClass(true);
      }, 1000); // 5 segundos em milissegundos
    } else {
      setVisibleClass(false);
    }
  }, [status]);

  return (
    <Container>
      <Content
        borderColor={msg === "SUCESSO" ? "green" : "red"}
        visible={visibleClass}
      >
        <div>
          <span>{msg} !</span>
          {msg === "SUCESSO" ? (
            <>
              <AiFillLike  color="green" />
              <span>Seja bem-vindo!</span>
            </>
          ) : (
            <AiFillDislike color="red" />
          )}
        </div>
      </Content>
    </Container>
  );
}
