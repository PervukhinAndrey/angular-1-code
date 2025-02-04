export const warehousesList_mock: any = [
  {
    idx: '87hb998b',
    text: 'Beograd',
    items: [
      {
        idx: 'KWFomI9G2',
        text: 'Warehouse 1',
      },
      {
        idx: 'nGjt6wKBI',
        text: 'Warehouse 2',
      },
    ],
  },
  {
    idx: 'hDPo0Jo5D8',
    text: 'Zrenjanin',
    items: [
      {
        idx: 'hDPo0Jo5zg',
        text: 'Warehouse 3',
      },
      {
        idx: 'p0WWQo8Zhv',
        text: 'Warehouse 4',
      },
    ],
  },
];

interface Warehous {
  idx: string;
  name: string;
}
interface Town {
  town: string;
  warehouses?: Warehous[];
}

export type WarehousesList = Town[];
