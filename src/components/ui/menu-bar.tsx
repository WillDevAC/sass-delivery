export function MenuBar() {
  return (
    <div className="fixed bottom-0 z-20 w-full bg-white border-t shadow md:hidden pb-safe">
      <div className="container py-2.5 px-4 mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <div className="grid grid-cols-3 w-full h-full">
            <a className="flex flex-col items-center justify-center" href="/">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-dv-theme-600"
              >
                &gt;
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zM8 15v2h8v-2H8z"></path>
              </svg>

              <span className="text-xs font-medium text-dv-theme-600">
                Início
              </span>
            </a>
            <a
              className="flex flex-col items-center justify-center"
              href="/my/orders"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-600"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"></path>
              </svg>

              <span className="text-xs font-medium text-gray-600">Pedidos</span>
            </a>
            <a
              className="flex flex-col items-center justify-center"
              href="/my/profile"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-600"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
              </svg>

              <span className="text-xs font-medium text-gray-600">Perfil</span>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
