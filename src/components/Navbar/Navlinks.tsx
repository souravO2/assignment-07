import NavItems from "./NavItems";

const DataPromise = async () => {
  try {
    const res = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/categories",
      { cache: "no-store" },
    );
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const Navlinks = async () => {
  const data = await DataPromise();
  return (
    <div className="container mx-auto flex flex-wrap justify-start items-center py-2 border-t border-black/10 text-white">
      <NavItems data={data} />
    </div>
  );
};

export default Navlinks;
