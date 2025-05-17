export default function Home() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-400 to-red-500 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a className="flex items-center" href="/">
              <img
                src="/data_bundle.png"
                alt="Gobs Data Bundle GH logo"
                style={{ height: "auto", width: "auto", maxHeight: "30px " }}
              />
            </a>
          </div>
          <div className="hidden md:flex gap-6">
            <ul className="flex gap-4 mt-1">
              <li>
                <a
                  className="text-white hover:text-gray-200"
                  href="https://wa.me/233533941961"
                  style={{ fontSize: "1.2em" }}
                >
                  Become an Agent
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button title="btn" className="text-white focus:outline-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <iframe
        className="w-full h-screen"
        title="agent bundle site"
        src="https://www.nokofio.me/agentdatabundle"
      ></iframe>
    </div>
  );
}
