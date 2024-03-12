import { EstablishmentDetails } from "@/components/sections/establishment-details";
import { UserNotLoggedButton } from "@/components/sections/user-not-logged-button";
import { ListProductRender } from "@/components/sections/list-product-render";

import { CardHighlited } from "@/components/cards/card-highlited";
import { InputSearch } from "@/components/ui/input-search";

import { MenuBar } from "@/components/ui/menu-bar"

export function HomePage() {
  return (
    <section className="bg-white w-screen max-w-[700px]">
      <UserNotLoggedButton />
      <EstablishmentDetails
        isOpen={false}
        path="/branding/estabelecimento.png"
        name="Comanfe Hamburgueria"
        timeShipping="60 min"
        rating="3.5"
      />
      <section className="pt-4 p-5">
        <InputSearch label="Busque por um produto" />
      </section>
      <div className="flex flex-col gap-2 p-5 pt-1">
        <h1 className="font-bold text-lg pb-3">Destaques</h1>
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
            porcentDiscont="20%"
            price="0.00"
            isFreeShipping={true}
          />
        </div>
      </div>
      <section className="p-5 pt-1">
        <ListProductRender categorie="Pães" descriptionCategorie="Descubra nossos pães finos"/>
        <ListProductRender categorie="Roscas" descriptionCategorie="Descubra nossas deliciosas roscas"/>
      </section>
      <MenuBar />
    </section>
  );
}
