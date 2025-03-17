// mirip kaya alias penggunaan type di typescript
export interface Seller {
  id: number | string;
  name: string;
  address?: string;
  readonly phone: string;
  readonly email: string;
}
