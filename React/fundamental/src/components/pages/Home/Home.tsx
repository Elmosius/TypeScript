import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import Input from "../../ui/Input";
import { useQuery } from "@tanstack/react-query";

// const makanan: { nama: string; harga: number }[] = [
//   {
//     nama: "Mie Goreng",
//     harga: 10000,
//   },
//   {
//     nama: "Nasi Goreng",
//     harga: 15000,
//   },
//   {
//     nama: "Soto Ayam",
//     harga: 20000,
//   },
// ];

const Home = () => {
  const showButton: boolean = true;

  const [darkmode, setDarkmode] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () =>
      await fetch("https://wpu-cafe.vercel.app/api/menu").then((response) =>
        response.json(),
      ),
  });

  function handleClick(): void {
    console.log("Button clicked");
  }

  return (
    <main className={darkmode ? "bg-black text-white" : "bg-white text-black"}>
      <h1 className="font-bold text-2xl text-center pb-5">Home</h1>

      <Input
        id={"search-input"}
        label={"Search"}
        placeholder={"Search"}
        onChange={(e) => setInputSearch(e.target.value)}
      />

      <p>{inputSearch}</p>

      {showButton ? (
        <Button type={"button"} onClick={handleClick}>
          Click Me
        </Button>
      ) : (
        <Button type={"submit"}>
          <i>Click Me</i>
        </Button>
      )}

      {showButton && <Button type={"button"}>Click Me</Button>}

      {isLoading && <p>Loading...</p>}
      {data?.data.map((item: { name: string; price: number }, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>Harga: {item.price}</p>
        </div>
      ))}

      <Button type={"button"} onClick={() => setDarkmode(!darkmode)}>
        {darkmode ? "Light Mode" : "Dark Mode"}
      </Button>
    </main>
  );
};

export default Home;
