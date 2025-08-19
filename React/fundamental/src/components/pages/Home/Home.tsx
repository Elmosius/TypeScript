import Button from "../../ui/Button";

const makanan: { nama: string; harga: number }[] = [
  {
    nama: "Mie Goreng",
    harga: 10000,
  },
  {
    nama: "Nasi Goreng",
    harga: 15000,
  },
  {
    nama: "Soto Ayam",
    harga: 20000,
  },
];

const Home = () => {
  const showButton: boolean = true;

  function handleClick(): void {
    console.log("Button clicked");
  }

  return (
    <main>
      <h1>Home</h1>

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

      {makanan.map((item, index) => (
        <Button key={index} type={"button"}>
          <h2>{item.nama}</h2>
          <p>Harga: {item.harga}</p>
        </Button>
      ))}
    </main>
  );
};

export default Home;
