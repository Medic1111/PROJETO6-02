import React, { useState, useContext } from "react";
import { AuthContext, ProvideUser } from "../../contexts/users.jsx";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  Form,
  Icon,
  Input,
  InputSubmit,
} from "./styles.js";
import { MdAccountCircle } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FeedbackStatus } from "../FeedbackStatus/FeedbackStatus";
import axios from "axios";
const schema = yup
  .object({
    username: yup.string().min(5, "verifique seu user ID").required(),
    password: yup
      .string()
      .min(8, "sua senha tem que ter 8 caracteres")
      .required(),
  })
  .required();

//GL CODOU POR AQUI AQUI HAHA :)
export function LoginComponent() {
  const { username, setUsername } = useContext(AuthContext);
  const navigate = useNavigate();
  const [statusMsg, setStatus] = useState(false);
  const [msg, setMsg] = useState("SUCESSO");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function connect({ username, password }) {
    axios.defaults.baseURL = "api/v1/auth";
    axios
      .post("/login", { username, password })
      .then(({ data }) => {
        setStatus(true);
        setMsg("SUCESSO");
        setUsername({ username });
        setTimeout(() => {
          setStatus(false);
          setTimeout(() => {
            navigate("/products");
          }, 1000);
        }, 2000);
      })
      .catch((err) => {
        setStatus(true);
        setMsg("ERRO");
        setTimeout(() => {
          setStatus(false);
        }, 2000);
      });
  }

  return (
    <>
      <Container>
        <FeedbackStatus status={statusMsg} msg={msg} />
        <Content>
          <Form onSubmit={handleSubmit(connect)}>
            <Icon>
              <MdAccountCircle size={120} />
            </Icon>
            <div>
              <Input
                name="userId"
                type="text"
                placeholder="User ID"
                {...register("username")}
                className={errors.username ? "error" : ""}
              />
              <p>{errors.username?.message}</p>
            </div>
            <div>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                {...register("password")}
                className={errors.password ? "error" : ""}
                autoComplete="off"
              />
              <p>{errors.password?.message}</p>
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
    </>
  );
}
