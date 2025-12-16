import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [Website, setWebsite] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = () => {
    setWebsite("");
    setUsername("");
    setPassword("");
    const data = {
      Website: Website,
      Username: Username || " ",
      Password: Password,
    };
    console.log(data);
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`flex justify-between items-center px-6 py-4 shadow ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-xl font-bold">&lt;PassWooord /&gt;</h1>

        <div className="flex gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 font-bold rounded-lg bg-indigo-500 text-white hover:bg-indigo-600"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() =>
              window.open("https://github.com/M-Durga-Prasath", "_blank")
            }
            className={`px-4 py-2 rounded-lg border cursor-pointer ${
              darkMode
                ? "border-gray-600 hover:bg-gray-700"
                : "border-gray-300 hover:bg-gray-200"
            }`}
          >
            GitHub
          </button>
        </div>
      </header>

      {/* Main UI */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6">
        <h2 className="text-2xl font-semibold mb-6">Password Manager</h2>

        {/* Form UI */}
        <div
          className={`p-6 rounded-lg shadow mb-8 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              value={Website}
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
              type="text"
              placeholder="Website"
              className={`p-2 rounded border focus:outline-none focus:ring focus:ring-indigo-400 bg-transparent ${
                darkMode ? "placeholder-gray-400" : "placeholder-gray-700"
              } `}
            />
            <input
              value={Username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Username"
              className={`p-2 rounded border focus:outline-none focus:ring focus:ring-indigo-400 bg-transparent ${
                darkMode ? "placeholder-gray-400" : "placeholder-gray-700"
              } `}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`w-full p-2 pr-10 rounded border bg-transparent
      focus:outline-none focus:ring focus:ring-indigo-400
      ${darkMode ? "placeholder-gray-400" : "placeholder-gray-700"}
    `}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500"
              >
                {showPassword ? (
                  /* Eye Off SVG */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12
             C3.226 16.338 7.244 19.5 12 19.5
             c.993 0 1.953-.138 2.863-.395
             M6.228 6.228A10.45 10.45 0 0112 4.5
             c4.756 0 8.773 3.162 10.065 7.498
             a10.523 10.523 0 01-4.293 5.774
             M6.228 6.228L3 3m3.228 3.228L9.88 9.88
             m7.894 7.894L21 21m-3.228-3.228L14.12 14.12
             m0 0a3 3 0 10-4.243-4.243"
                    />
                  </svg>
                ) : (
                  /* Eye SVG */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639
             C3.423 7.51 7.36 4.5 12 4.5
             c4.638 0 8.573 3.007 9.963 7.178
             .07.207.07.431 0 .639
             C20.577 16.49 16.64 19.5 12 19.5
             c-4.638 0-8.573-3.007-9.964-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 ">
            <button
              className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              onClick={submit}
            >
              Save Password
            </button>
          </div>
        </div>

        {/* Password List UI */}
        <div className="space-y-4"></div>
      </main>

      {/* Footer */}
      <footer
        className={`text-center py-4 text-sm ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        Made with ❤️ by{" "}
        <span className="font-semibold">
          <a href="https://github.com/M-Durga-Prasath">M-Durga-Prasath</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
