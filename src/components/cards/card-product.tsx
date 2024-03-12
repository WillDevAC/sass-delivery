export function CardProduct() {
  return (
    <a
      data-turbo-frame="master_turbo"
      className="relative border border-gray-200 transition-all duration-500 ease-in-out p-4 rounded flex hover:border-gray-300 outline-none focus:border-dv-theme-300/50"
      href="/stores/products/86c993ac-c289-4c06-bec1-ab6d26029014"
    >
      <div className="flex flex-col flex-1 mr-2">
        <h3 className="mb-2 text-base font-medium line-clamp-1 lg:text-lg lg:line-clamp-2">
          Hambúrguer Artesanal{" "}
        </h3>
        <p className="mb-2 text-xs lg:text-sm text-black text-opacity-75 line-clamp-2 lg:line-clamp-3 text-ellipsis break-word">
          Cheedar, Molho de leite, Molho cheedar
        </p>

        <div className="mt-auto">
          <span className="text-sm font-medium lg:text-base">R$ 20,00</span>
        </div>
      </div>
      <img
        alt="Hambúrguer Artesanal "
        loading="lazy"
        className="object-cover rounded w-24 h-24 lg:w-40 lg:h-40 ml-auto"
        src="https://storage.deliveryvip.com.br/WyC4hNTO7wpKNVNCALG8rhAYkJl2yAS8J0WSeZhwHas/h:256/Z3M6Ly9kZWxpdmVy/eXZpcC8xM2t3aXBj/cjh4dG83YzR0bW93/dWxzamx0ajJv"
      />

      <div className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md bottom-2 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-dv-theme-600 fill-current"
        >
          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
        </svg>
      </div>
    </a>
  );
}
