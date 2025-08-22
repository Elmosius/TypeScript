import Button from "../../ui/Button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { type FormEvent, useState } from "react";
import type { ICart, IMenu } from "../../types/order.ts";
import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/menu.service.ts";
import { filters, tables } from "./CreateOrder.constans.ts";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { createOrder } from "../../services/order.service.ts";

const CreateOrder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cart, setCart] = useState<ICart[]>([]);
  const navigate = useNavigate();

  const category = searchParams.get("category") as string;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["menu", category],
    queryFn: async () => await getMenu(category),
  });

  const handleCategory = async (filter: string) => {
    setSearchParams(filter === "All" ? {} : { category: filter });
  };

  const handleAddToCart = (type: string, menuId: string, name: string) => {
    const existingItem = cart.find((item: ICart) => item.menuId === menuId);
    if (type === "increment") {
      if (existingItem) {
        setCart(
          cart.map((item: ICart) =>
            item.menuId === menuId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        );
      } else {
        setCart([...cart, { menuId, name, quantity: 1 }]);
      }
    } else {
      if (existingItem && existingItem.quantity > 1) {
        setCart(
          cart.map((item: ICart) =>
            item.menuId === menuId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        );
      } else {
        setCart(cart.filter((item: ICart) => item.menuId !== menuId));
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = e.target as HTMLFormElement;
    const payload = {
      customerName: formData.nameCustomer.value,
      tableNumber: formData.tableNumber.value,
      cart: cart.map((item: ICart) => ({
        menuItemId: item.menuId,
        quantity: item.quantity,
      })),
    };

    await createOrder(payload);
    navigate("/orders");
  };

  return (
    <main className={"flex flex-row p-4 gap-5"}>
      <section className={"w-[70%]"}>
        <h1 className={"text-2xl font-semibold mb-2"}>Explore Our Best Menu</h1>
        <div className={"flex gap-1 mb-5"}>
          {filters.map((filter) => (
            <Button
              color={
                (!category && filter === "All") || filter === category
                  ? "primary"
                  : "secondary"
              }
              key={filter}
              onClick={() => handleCategory(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {isError && <p>Error</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={"grid grid-cols-3 gap-5 "}>
            {data?.data.map((item: IMenu) => (
              <div key={item.id} className={"shadow-2xl p-5 rounded-2xl"}>
                <img
                  src={item.image_url}
                  className={"rounded-2xl w-full h-48 object-cover"}
                  alt={item.name}
                />
                <h2 className={"mt-2 font-semibold"}>{item.name}</h2>
                <div className={"flex justify-between items-center mt-2"}>
                  <p>${item.price}</p>
                  <Button
                    onClick={() =>
                      handleAddToCart("increment", `${item.id}`, `${item.name}`)
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className={"w-[30%] sticky top-0 h-screen"}>
        <form
          className={"shadow-2xl p-10 rounded-2xl flex flex-col gap-5"}
          onSubmit={handleSubmit}
        >
          <div>
            <div className={"flex justify-between items-center mb-5"}>
              <h2 className={"font-semibold"}>Customer Information</h2>
              <Link to={"/orders"}>
                <Button
                  color={"secondary"}
                  className={"hover:bg-black hover:text-white transition-all"}
                >
                  Cancel
                </Button>
              </Link>
            </div>
            <div className={"flex flex-col bg-gray-100 rounded-2xl p-5"}>
              <Input
                name={"nameCustomer"}
                id={"name"}
                label={"Name"}
                placeholder={"Insert Name"}
                required
              />
              <Select
                id={"table"}
                label={"Table Number"}
                name={"tableNumber"}
                options={tables}
              />
            </div>
          </div>

          <div>
            <div className={"flex justify-between items-center mb-5"}>
              <h2 className={"font-semibold"}>Current Order</h2>
            </div>

            {cart.length > 0 ? (
              <div className={"flex flex-col bg-gray-100 rounded-2xl p-5"}>
                {cart.map((item: ICart) => (
                  <div
                    key={item.menuId}
                    className={"flex justify-between items-center"}
                  >
                    <h4>{item.name}</h4>
                    <div
                      className={"flex justify-between items-center gap-2 mb-2"}
                    >
                      <Button
                        color={"secondary"}
                        onClick={() =>
                          handleAddToCart(
                            "decrement",
                            `${item.menuId}`,
                            `${item.name}`,
                          )
                        }
                      >
                        -
                      </Button>
                      <div>{item.quantity}</div>
                      <Button
                        color={"secondary"}
                        onClick={() =>
                          handleAddToCart(
                            "increment",
                            `${item.menuId}`,
                            `${item.name}`,
                          )
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type={"submit"}
                  className={"mt-5 w-full"}
                  color={"primary"}
                >
                  Order Now
                </Button>
              </div>
            ) : (
              <div className={"bg-gray-100 p-3 rounded-xl"}>
                No items in the cart
              </div>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateOrder;
