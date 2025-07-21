const ProductFilters = () => {
  return (
    <section className="flex justify-center items-center py-8">
      <input
        type="radio"
        name="filter-selection"
        id="filter-0"
        className="hidden"
      />
      <label
        className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
        htmlFor="filter-0"
      >
        Todos
      </label>
      <input
        type="radio"
        name="filter-selection"
        id="filter-1"
        className="hidden"
      />
      <label
        className="bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
        htmlFor="filter-1"
      >
        Masculino
      </label>
      <input
        type="radio"
        name="filter-selection"
        id="filter-2"
        className="hidden"
      />
      <label
        dir="rtl" // Informa que a caixa será montada da direita para a esquerda Right To left
        className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
        htmlFor="filter-2"
      >
        Feminino
      </label>
    </section>
  );
};

export default ProductFilters;
