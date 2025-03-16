// coba pakai enum
// bisa juga pakai enum untuk type ditentukan
export enum CustomerType {
  Regular = "Regular",
  Silver = "Silver",
  Gold = "Gold",
  Premium = "Premium",
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
