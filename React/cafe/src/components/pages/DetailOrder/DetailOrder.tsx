import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrderDetail } from "../../services/order.service.ts";
import Button from "../../ui/Button";
import type { ICart } from "../../types/order.ts";

const DetailOrder = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => await getOrderDetail(id as string),
  });

  return (
    <main className={"p-4"}>
      <header className={"flex justify-between items-center mb-10"}>
        <h1 className={"font-semibold text-2xl"}>Detail Order</h1>
        <Link to={"/orders"}>
          <Button>Back</Button>
        </Link>
      </header>

      {isError && <p>Error</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <div className={"p-5 bg-gray-200 rounded-2xl grid grid-cols-3 gap-5"}>
            <div className={"flex flex-col gap-2"}>
              <p className={"font-semibold"}>Order ID: </p>
              <h4>{data?.id}</h4>
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"font-semibold"}>Customer: </p>
              <h4>{data?.customer_name}</h4>
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"font-semibold"}>Table: </p>
              <h4>{data?.table_number}</h4>
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"font-semibold"}>Status: </p>
              <h4>{data?.status}</h4>
            </div>
            <div className={"flex flex-col gap-2"}>
              <p className={"font-semibold"}>Total: </p>
              <h4>{data?.total}</h4>
            </div>
          </div>

          <div className={"mt-10"}>
            <h3 className={"font-semibold"}>Order Items</h3>
            <div className={"grid grid-cols-3 gap-5 mt-5"}>
              {data?.cart?.map((item: ICart) => (
                <div
                  key={item.menuItem?.id}
                  className={
                    "bg-gray-200 flex items-center p-4 rounded-2xl gap-3"
                  }
                >
                  <img
                    className={"object-cover rounded-xl w-15 h-15"}
                    src={item?.menuItem?.image_url}
                    alt={item?.menuItem?.name}
                  />
                  <div>
                    <p>
                      {item?.quantity} x {item?.menuItem?.name}
                    </p>
                    <p>${Number(item?.menuItem?.price) * item?.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default DetailOrder;
