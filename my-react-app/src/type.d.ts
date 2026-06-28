type Item = {
  id: any;
  name: string;
  price: number;
};

type ItemWithQty = Item & { qty: number };

type InitItems = {
  items: ItemWithQty[];
  totalPrice: number;
  discount: number;
};
