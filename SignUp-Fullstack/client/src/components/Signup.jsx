import React, { useState } from "react";
import axios from "axios";
import Landing from "./Landing";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    if (!name || !email || !password) {
      setError(true);
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:6969/user/signup", {
        name,
        email,
        password,
      });

      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return(
        <div className="flex justify-center items-center align-center h-screen text-4xl text-green-600 font-black">
            <Landing />
        </div> 
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Sign Up</h1>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Name</label>
          <input
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="test@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>

        {error && (
          <p className="text-red-500 text-sm text-center">
            Something went wrong. Please check your inputs.
          </p>
        )}
      </form>
    </div>
  );
}

export default Signup;
