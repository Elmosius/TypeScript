import Input from "../../ui/Input";
import { setLocalStorage } from "../../utils/storage.ts";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service.ts";
import { type FormEvent, useState } from "react";
import Button from "../../ui/Button";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const payload = {
      email: form.email.value,
      password: form.password.value,
    };

    const result = await login(payload);
    setLocalStorage("auth", result.token);
    setLoading(false);
    navigate("/", { replace: true });
  };

  return (
    <main className={"flex justify-center items-center min-h-screen p-20 "}>
      <div className={"shadow-2xl p-10 rounded-2xl w-full max-w-md"}>
        <h1 className={"text-center font-semibold text-2xl"}>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label={"Email"}
            name={"email"}
            id={"email"}
            type={"email"}
            placeholder={"Input your email"}
            required
          />
          <Input
            label={"Password"}
            name={"password"}
            id={"password"}
            type={"password"}
            placeholder={"Input your password"}
            required
          />
          <Button type={"submit"} className={"mt-5 w-full"}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
