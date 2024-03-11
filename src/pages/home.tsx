import { EstablishmentDetails } from "@/components/sections/establishment-details";
import { CardHighlited } from "@/components/cards/card-highlited";
import { InputSearch } from "@/components/ui/input-search";

export function HomePage() {
  return (
    <section className="bg-white w-screen max-w-[600px]">
      <div className="bg-gray-200 w-full h-28" id="background"></div>
      <EstablishmentDetails
        isOpen={false}
        path="/branding/estabelecimento.png"
        name="Huddle House"
        timeShipping="60 min"
        rating="3.5"
      />
      <section className="pt-1 p-7">
        <InputSearch label="Pesquise aqui um produto" />
      </section>
      <div className="flex flex-col gap-2 p-7 pt-1">
        <h1 className="font-bold text-lg">Destaques</h1>
        <div className="flex overflow-x-auto gap-3 no-scrollbar">
          <CardHighlited
            path="produto.jpg"
            title="PRODUTO 1"
            description="Pão brioche, hamburguer de queijo, cheedar"
            porcentDiscont="30%"
            price="0.00"
            isFreeShipping={false}
          />
          <CardHighlited
            path="produto.jpg"
            title="PRODUTO 2"
            description="Pão brioche, hamburguer de queijo, cheedar"
            porcentDiscont="15%"
            price="0.00"
            isFreeShipping={false}
          />
          <CardHighlited
            path="produto.jpg"
            title="PRODUTO 3"
            description="Pão brioche, hamburguer de queijo, cheedar"
            porcentDiscont="5%"
            price="0.00"
            isFreeShipping={false}
          />
        </div>
      </div>
    </section>
  );
}
