interface ICart {
  menuId: string;
  quantity: number;
  notes: string;
}

interface IOrder {
  id: string;
  customer_name: string;
  table_number: number;
  cart: ICart[];
  status: "PENDING" | "COMPLETED" | "PROCESSING";
  total: number;
}

export type { IOrder, ICart };
