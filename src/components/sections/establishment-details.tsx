import { ChefHat, Star } from "lucide-react";

interface IEstablishmentProps {
  path: string;
  name: string;
  timeShipping: string;
  rating: string;
  isOpen: boolean;
}

export function EstablishmentDetails({
  path = "",
  name = "",
  timeShipping = "",
  rating = "",
  isOpen = false,
}: IEstablishmentProps) {
  return (
    <>
      <section className="flex w-full p-7 gap-3 items-center">
        <img className="max-w-16" src={path} alt="Logotipo da loja" />
        <div className="flex flex-col font-bold text-lg gap-1">
          <h1>{name}</h1>
          <div className="flex items-center text-sm font-medium gap-3">
            {isOpen && <h1 className="text-green-600">ABERTA</h1>}
            {!isOpen && <h1 className="text-red-600">FECHADA</h1>}
            <div className="flex items-center gap-1 text-gray-500">
              <ChefHat size={20} />
              <p>{timeShipping}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Star size={20} />
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
