import { CardProduct } from "../cards/card-product";

interface IListProductRenderProps {
  categorie: string;
  descriptionCategorie: string;
}

export function ListProductRender({
  categorie,
  descriptionCategorie,
}: IListProductRenderProps) {
  return (
    <>
      <div className="py-4 space-y-2 bg-white">
        <h2 className="text-lg font-medium leading-4 lg:text-1xl">
          {categorie}
        </h2>

        <p className="text-xs leading-4 text-gray-900 text-opacity-75 md:text-sm">
          {descriptionCategorie}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <CardProduct />
        <CardProduct />
      </div>
    </>
  );
}
