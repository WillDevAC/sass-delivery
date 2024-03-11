import { Percent } from "lucide-react";

export function DiscontNotice() {
  return (
    <>
      <section className="flex w-full">
        <div className="flex items-center text-gray-500 p-5 gap-3 w-full mt-2 border mr-7 ml-7 mb-2 bg-[#f9fafb] rounded-lg">
          <Percent />
          <div className="flex flex-col gap-1 ">
            <h1 className="font-bold  text-md">Clube de benefícios.</h1>
            <span className="text-sm">Tenha 10% de desconto.</span>
          </div>
        </div>
      </section>
    </>
  );
}
