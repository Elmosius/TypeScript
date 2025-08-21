import { useQuery } from "@tanstack/react-query";
import { getOrders, updateOrderStatus } from "../../services/order.service.ts";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import type { IOrder } from "../../types/order.ts";

const ListOrder = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrders(),
  });

  const handleUpdate = async (id: string) => {
    await updateOrderStatus(id, { status: "COMPLETED" });
    await refetch();
  };

  console.info(data?.data);

  return (
    <main className={"p-4"}>
      <header className={"flex justify-between items-center mb-10"}>
        <h1 className={"text-center text-2xl font-semibold "}>List Order</h1>
        <div className={"flex gap-2"}>
          <Link to={"/create"}>
            <Button type={"button"}>Create Order</Button>
          </Link>

          <Button type={"button"} color={"secondary"}>
            Logout
          </Button>
        </div>
      </header>

      <section className={"text-center"}>
        {isError && <p>Error</p>}

        {isLoading ? (
          <p className={"p-2"}>Loading...</p>
        ) : (
          <table className={"table-auto w-full text-center"}>
            <thead className={"border-b-1 border-b-gray-400"}>
              <tr>
                <th>No</th>
                <th>Customer Name</th>
                <th>Table</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item: IOrder, index: number) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{item.customer_name}</td>
                  <td>{item.table_number}</td>
                  <td>{item.total}</td>
                  <td>{item.status}</td>
                  <td className={"flex gap-1 justify-center mb-2"}>
                    <Link to={`/orders/${item.id}`}>
                      <Button type={"button"}>Detail</Button>
                    </Link>

                    {item.status === "PROCESSING" && (
                      <Button
                        type={"button"}
                        onClick={async () => {
                          await handleUpdate(item.id);
                        }}
                      >
                        Completed
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
};

export default ListOrder;
