import React, { useState } from "react";
import axios from "axios";

interface User {
  email: string;
  token: string;
}

const Auth: React.FC<{ onAuth: (user: User | null) => void }> = ({
  onAuth,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:8001/api/signin", {
        email,
        password,
      });
      const { token } = response.data;
      onAuth({ email, token });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data.error) {
        if (
          error.response.data.error ===
          "Code auth/invalid-credential, message: Firebase: Error (auth/invalid-credential)."
        ) {
          setError("Invalid credentials.");
        } else {
          setError(error.response.data.error);
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:8001/api/signup", {
        email,
        password,
      });
      const { token } = response.data;
      onAuth({ email, token });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8 lg:px-24">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <form
          className="flex flex-col mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            isSignUp ? handleSignUp() : handleSignIn();
          }}
        >
          <input
            type="email"
            className="p-2 mb-4 rounded bg-gray-800 text-white focus:outline-none"
            autoComplete="on"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="p-2 mb-4 rounded bg-gray-800 text-white focus:outline-none"
            autoComplete="on"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <div className="p-2 mb-4 rounded bg-gray-800 text-red-500 focus:outline-none">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700 transition duration-300 mt-4"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
