import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-extrabold text-[#222328] text-[32px]">Log In</h1>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <label>Email address:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300"
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300"
          />
        </div>
        <div className="pt-8 mt-5 flex gap-5">
          <button disabled={isLoading} className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Log in
          </button>
        </div>
        {error && <div className="mt-3 pt-5 text-red-600 font-inter font-medium">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
