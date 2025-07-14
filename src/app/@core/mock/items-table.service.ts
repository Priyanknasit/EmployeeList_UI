import { Injectable } from '@angular/core';
import { ItemsTableData } from '../data/items-table';

export interface ItemData {
  id: number;
  name: string;
  type: string;
  stockable: boolean;
  serialized: boolean;
  hsnSac: string;
  itemCode: string;
  salesPrice: number;
  stockCategory: string;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ItemsTableService extends ItemsTableData {
  private data: ItemData[] = [
    { id: 1, name: 'Laptop', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8471', itemCode: 'ELEC001', salesPrice: 55000, stockCategory: 'IT Equipment', stock: 30 },
    { id: 2, name: 'Mouse', type: 'Electronics', stockable: true, serialized: false, hsnSac: '8471', itemCode: 'ELEC002', salesPrice: 450, stockCategory: 'Accessories', stock: 150 },
    { id: 3, name: 'Chair', type: 'Furniture', stockable: true, serialized: false, hsnSac: '9401', itemCode: 'FURN001', salesPrice: 1200, stockCategory: 'Office Furniture', stock: 75 },
    { id: 4, name: 'Desk', type: 'Furniture', stockable: true, serialized: false, hsnSac: '9403', itemCode: 'FURN002', salesPrice: 3500, stockCategory: 'Office Furniture', stock: 40 },
    { id: 5, name: 'Printer', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8443', itemCode: 'ELEC003', salesPrice: 9000, stockCategory: 'Office Equipment', stock: 15 },
    { id: 6, name: 'Notebook', type: 'Stationery', stockable: true, serialized: false, hsnSac: '4820', itemCode: 'STAT001', salesPrice: 50, stockCategory: 'Office Supplies', stock: 500 },
    { id: 7, name: 'Pen', type: 'Stationery', stockable: true, serialized: false, hsnSac: '9608', itemCode: 'STAT002', salesPrice: 10, stockCategory: 'Office Supplies', stock: 1000 },
    { id: 8, name: 'Monitor', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8528', itemCode: 'ELEC004', salesPrice: 7000, stockCategory: 'IT Equipment', stock: 20 },
    { id: 9, name: 'Keyboard', type: 'Electronics', stockable: true, serialized: false, hsnSac: '8471', itemCode: 'ELEC005', salesPrice: 800, stockCategory: 'Accessories', stock: 60 },
    { id: 10, name: 'Whiteboard', type: 'Furniture', stockable: true, serialized: false, hsnSac: '9610', itemCode: 'FURN003', salesPrice: 1500, stockCategory: 'Office Furniture', stock: 25 },

    { id: 11, name: 'Air Conditioner', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8415', itemCode: 'ELEC006', salesPrice: 30000, stockCategory: 'Facility', stock: 10 },
    { id: 12, name: 'Fan', type: 'Electronics', stockable: true, serialized: false, hsnSac: '8414', itemCode: 'ELEC007', salesPrice: 1500, stockCategory: 'Facility', stock: 40 },
    { id: 13, name: 'Projector', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8528', itemCode: 'ELEC008', salesPrice: 25000, stockCategory: 'Presentation', stock: 8 },
    { id: 14, name: 'Sticky Notes', type: 'Stationery', stockable: true, serialized: false, hsnSac: '4820', itemCode: 'STAT003', salesPrice: 30, stockCategory: 'Office Supplies', stock: 300 },
    { id: 15, name: 'Paper Ream', type: 'Stationery', stockable: true, serialized: false, hsnSac: '4802', itemCode: 'STAT004', salesPrice: 250, stockCategory: 'Office Supplies', stock: 100 },
    { id: 16, name: 'USB Drive', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8523', itemCode: 'ELEC009', salesPrice: 600, stockCategory: 'IT Equipment', stock: 80 },
    { id: 17, name: 'Coffee Machine', type: 'Appliance', stockable: true, serialized: true, hsnSac: '8516', itemCode: 'APPL001', salesPrice: 4000, stockCategory: 'Pantry', stock: 5 },
    { id: 18, name: 'Water Bottle', type: 'Utility', stockable: true, serialized: false, hsnSac: '3923', itemCode: 'UTIL001', salesPrice: 120, stockCategory: 'Pantry', stock: 200 },
    { id: 19, name: 'Speaker', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8518', itemCode: 'ELEC010', salesPrice: 3000, stockCategory: 'Presentation', stock: 18 },
    { id: 20, name: 'Router', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8517', itemCode: 'ELEC011', salesPrice: 3500, stockCategory: 'Networking', stock: 12 },

    { id: 21, name: 'Table Lamp', type: 'Furniture', stockable: true, serialized: false, hsnSac: '9405', itemCode: 'FURN004', salesPrice: 750, stockCategory: 'Office Furniture', stock: 40 },
    { id: 22, name: 'Scanner', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8443', itemCode: 'ELEC012', salesPrice: 6500, stockCategory: 'Office Equipment', stock: 9 },
    { id: 23, name: 'Extension Cord', type: 'Utility', stockable: true, serialized: false, hsnSac: '8544', itemCode: 'UTIL002', salesPrice: 350, stockCategory: 'Electrical', stock: 70 },
    { id: 24, name: 'Calculator', type: 'Stationery', stockable: true, serialized: false, hsnSac: '8470', itemCode: 'STAT005', salesPrice: 400, stockCategory: 'Office Supplies', stock: 60 },
    { id: 25, name: 'Stapler', type: 'Stationery', stockable: true, serialized: false, hsnSac: '8472', itemCode: 'STAT006', salesPrice: 90, stockCategory: 'Office Supplies', stock: 120 },
    { id: 26, name: 'Headphones', type: 'Electronics', stockable: true, serialized: false, hsnSac: '8518', itemCode: 'ELEC013', salesPrice: 1500, stockCategory: 'Accessories', stock: 50 },
    { id: 27, name: 'Webcam', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8525', itemCode: 'ELEC014', salesPrice: 2500, stockCategory: 'IT Equipment', stock: 22 },
    { id: 28, name: 'Shredder', type: 'Appliance', stockable: true, serialized: true, hsnSac: '8472', itemCode: 'APPL002', salesPrice: 4500, stockCategory: 'Office Equipment', stock: 6 },
    { id: 29, name: 'Dustbin', type: 'Utility', stockable: true, serialized: false, hsnSac: '3924', itemCode: 'UTIL003', salesPrice: 300, stockCategory: 'Facility', stock: 100 },
    { id: 30, name: 'HDMI Cable', type: 'Accessory', stockable: true, serialized: false, hsnSac: '8544', itemCode: 'ELEC015', salesPrice: 200, stockCategory: 'Accessories', stock: 75 },

    { id: 31, name: 'Power Strip', type: 'Utility', stockable: true, serialized: false, hsnSac: '8536', itemCode: 'UTIL004', salesPrice: 500, stockCategory: 'Electrical', stock: 80 },
    { id: 32, name: 'Label Printer', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8443', itemCode: 'ELEC016', salesPrice: 7500, stockCategory: 'Office Equipment', stock: 7 },
    { id: 33, name: 'Pen Drive', type: 'Electronics', stockable: true, serialized: false, hsnSac: '8523', itemCode: 'ELEC017', salesPrice: 800, stockCategory: 'Accessories', stock: 100 },
    { id: 34, name: 'Wall Clock', type: 'Utility', stockable: true, serialized: false, hsnSac: '9105', itemCode: 'UTIL005', salesPrice: 600, stockCategory: 'Facility', stock: 30 },
    { id: 35, name: 'Floor Mat', type: 'Utility', stockable: true, serialized: false, hsnSac: '5705', itemCode: 'UTIL006', salesPrice: 900, stockCategory: 'Facility', stock: 20 },
    { id: 36, name: 'File Rack', type: 'Furniture', stockable: true, serialized: false, hsnSac: '9403', itemCode: 'FURN005', salesPrice: 3500, stockCategory: 'Office Furniture', stock: 15 },
    { id: 37, name: 'Smartphone', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8517', itemCode: 'ELEC018', salesPrice: 25000, stockCategory: 'IT Equipment', stock: 10 },
    { id: 38, name: 'Tablet', type: 'Electronics', stockable: true, serialized: true, hsnSac: '8471', itemCode: 'ELEC019', salesPrice: 22000, stockCategory: 'IT Equipment', stock: 8 },
    { id: 39, name: 'LAN Cable', type: 'Accessory', stockable: true, serialized: false, hsnSac: '8544', itemCode: 'ELEC020', salesPrice: 150, stockCategory: 'Networking', stock: 90 },
    { id: 40, name: 'Surge Protector', type: 'Utility', stockable: true, serialized: false, hsnSac: '8536', itemCode: 'UTIL007', salesPrice: 450, stockCategory: 'Electrical', stock: 70 },
  ];

  getData(): ItemData[] {
    return this.data;
  }
}
