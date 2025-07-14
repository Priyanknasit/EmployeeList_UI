import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [
    {
      id: 1,
      accountNumber: 'Mark',
      currentBalance: '75389.24',
      mobile: '1234567890',
      email: 'mdo@gmail.com',
      role: 'Engineer',
    },
    {
      id: 2,
      accountNumber: 'Jacob',
      currentBalance: '2301.76',
      mobile: '2345678901',
      email: 'fat@yandex.ru',
      role: 'Company',
    },
    {
      id: 3,
      accountNumber: 'Larry',
      currentBalance: '98765.43',
      mobile: '3456789012',
      email: 'twitter@outlook.com',
      role: 'Manager',
    },
    {
      id: 4,
      accountNumber: 'John',
      currentBalance: '100.50',
      mobile: '4567890123',
      email: 'snow@gmail.com',
      role: 'Computer Works',
    },
    {
      id: 5,
      accountNumber: 'Jack',
      currentBalance: '45678.91',
      mobile: '5678901234',
      email: 'jack@yandex.ru',
      role: 'Engineer',
    },
    {
      id: 6,
      accountNumber: 'Ann',
      currentBalance: '12345.67',
      mobile: '6789012345',
      email: 'ann@gmail.com',
      role: 'Company',
    },
    {
      id: 7,
      accountNumber: 'Barbara',
      currentBalance: '87654.32',
      mobile: '7890123456',
      email: 'barbara@yandex.ru',
      role: 'Computer Works',
    },
    {
      id: 8,
      accountNumber: 'Sevan',
      currentBalance: '999.99',
      mobile: '8901234567',
      email: 'sevan@outlook.com',
      role: 'Engineer',
    },
    {
      id: 9,
      accountNumber: 'Ruben',
      currentBalance: '10000.00',
      mobile: '9012345678',
      email: 'ruben@gmail.com',
      role: 'Manager',
    },
    {
      id: 10,
      accountNumber: 'Karen',
      currentBalance: '50000.00',
      mobile: '0123456789',
      email: 'karen@yandex.ru',
      role: 'Engineer',
    },
    {
      id: 11,
      accountNumber: 'Mark',
      currentBalance: '34567.89',
      mobile: '1122334455',
      email: 'mark@gmail.com',
      role: 'Company',
    },
    {
      id: 12,
      accountNumber: 'Jacob',
      currentBalance: '23456.78',
      mobile: '2233445566',
      email: 'jacob@yandex.ru',
      role: 'Engineer',
    },
    {
      id: 13,
      accountNumber: 'Haik',
      currentBalance: '76543.21',
      mobile: '3344556677',
      email: 'haik@outlook.com',
      role: 'Computer Works',
    },
    {
      id: 14,
      accountNumber: 'Garegin',
      currentBalance: '89012.34',
      mobile: '4455667788',
      email: 'garegin@gmail.com',
      role: 'Engineer',
    },
    {
      id: 15,
      accountNumber: 'Krikor',
      currentBalance: '54321.09',
      mobile: '5566778899',
      email: 'krikor@yandex.ru',
      role: 'Engineer',
    }
  ];

  pendingWorkData = [
    { diamondId: '02072025-01-01', date: '2025-06-01', description: 'Polishing', amount: 234.56, pendingAmount: 0.00 },
    { diamondId: '02072025-01-02', date: '2025-05-30', description: 'Mathala', amount: 0.00, pendingAmount: 500.00 }
  ];

  statementsData = [
    { diamondId: '02072025-01-01', date: '2025-06-01', description: 'XYZ', amount: 234.56 },
    { diamondId: '02072025-01-02', date: '2025-06-02', description: '-', amount: 1200.00 },
    { diamondId: '02072025-01-06', date: '2025-06-03', description: '-', amount: 499.99 },
    { diamondId: '02072025-02-01', date: '2025-06-04', description: '-', amount: 1500.75 },
    { diamondId: '02072025-03-05', date: '2025-06-05', description: '-', amount: 987.00 },
    { diamondId: '02072025-04-02', date: '2025-06-06', description: '-', amount: 349.00 },
    { diamondId: '02072025-05-01', date: '2025-06-07', description: '-', amount: 4500.00 },
    { diamondId: '02072025-05-05', date: '2025-06-01', description: '-', amount: 780.00 },
    { diamondId: '02072025-08-01', date: '2025-06-03', description: '-', amount: 2999.99 },
    { diamondId: '02072025-09-08', date: '2025-06-01', description: '-', amount: 520.50 },
    { diamondId: '02072025-10-01', date: '2025-06-04', description: '-', amount: 6200.00 },
    { diamondId: '02072025-08-03', date: '2025-06-02', description: '-', amount: 845.20 },
    { diamondId: '02072025-11-01', date: '2025-06-03', description: '-', amount: 1250.75 },
    { diamondId: '02072025-12-01', date: '2025-06-04', description: '-', amount: 15200.00 }
  ];

  purchasesData = [
    {
      date: '2025-06-10',
      invoiceNumber: 'INV1001',
      contactOrBank: 'HDFC Bank',
      amount: 4500.75,
      pendingAmount: 0.00,
      taxType: 'GST',
      notes: 'Monthly EMI payment'
    },
    {
      date: '2025-06-08',
      invoiceNumber: 'INV1002',
      contactOrBank: 'Reliance Jio',
      amount: 349.00,
      pendingAmount: 0.00,
      taxType: 'IGST',
      notes: 'Mobile recharge'
    },
    {
      date: '2025-06-07',
      invoiceNumber: 'INV1003',
      contactOrBank: 'Amazon Pay',
      amount: 1299.99,
      pendingAmount: 0.00,
      taxType: 'CGST',
      notes: 'Gadget accessories'
    },
    {
      date: '2025-06-05',
      invoiceNumber: 'INV1004',
      contactOrBank: 'Axis Bank',
      amount: 2500.00,
      pendingAmount: 2500.00,
      taxType: 'GST',
      notes: 'Loan installment'
    },
    {
      date: '2025-06-04',
      invoiceNumber: 'INV1005',
      contactOrBank: 'Swiggy',
      amount: 875.50,
      pendingAmount: 0.00,
      taxType: 'CGST',
      notes: 'Food delivery'
    },
    {
      date: '2025-06-03',
      invoiceNumber: 'INV1006',
      contactOrBank: 'LIC India',
      amount: 2999.00,
      pendingAmount: 0.00,
      taxType: 'GST',
      notes: 'Insurance premium'
    },
    {
      date: '2025-06-02',
      invoiceNumber: 'INV1007',
      contactOrBank: 'Netflix',
      amount: 499.00,
      pendingAmount: 0.00,
      taxType: 'IGST',
      notes: 'Monthly subscription'
    },
    {
      date: '2025-06-01',
      invoiceNumber: 'INV1008',
      contactOrBank: 'Petrol Pump - IOCL',
      amount: 1500.00,
      pendingAmount: 200.00,
      taxType: 'SGST',
      notes: 'Fuel expenses'
    },
    {
      date: '2025-05-31',
      invoiceNumber: 'INV1009',
      contactOrBank: 'Zomato',
      amount: 650.45,
      pendingAmount: 0.00,
      taxType: 'CGST',
      notes: 'Weekend dinner'
    },
    {
      date: '2025-05-30',
      invoiceNumber: 'INV1010',
      contactOrBank: 'State Bank of India',
      amount: 7800.00,
      pendingAmount: 7800.00,
      taxType: 'GST',
      notes: 'Credit card payment'
    },
    {
      date: '2025-06-10',
      invoiceNumber: 'INV1001',
      contactOrBank: 'HDFC Bank',
      amount: 4500.75,
      pendingAmount: 0.00,
      taxType: 'GST',
      notes: 'Monthly EMI payment'
    },
    {
      date: '2025-06-08',
      invoiceNumber: 'INV1002',
      contactOrBank: 'Reliance Jio',
      amount: 349.00,
      pendingAmount: 0.00,
      taxType: 'IGST',
      notes: 'Mobile recharge'
    },
  ];

  invoiceItemData = [
    { ind: 1, item: 'Bluetooth Speaker', qty: 2, rate: 1499.00, discount: 100.00, total: 2898.00 },
    { ind: 2, item: 'Wireless Mouse', qty: 1, rate: 699.00, discount: 50.00, total: 649.00 },
    { ind: 3, item: 'LED Bulb 9W', qty: 10, rate: 99.00, discount: 90.00, total: 900.00 },
    { ind: 4, item: 'Laptop Stand', qty: 1, rate: 1200.00, discount: 0.00, total: 1200.00 },
  ];


  getData () {
    return this.data;
  }

  getPendingWorkData () {
    return this.pendingWorkData;
  }

  getStatementsData () {
    return this.statementsData;
  }

  getPurchaseData () {
    return this.purchasesData;
  }

  getPurchaseInvoiceItemData () {
    return this.invoiceItemData;
  }
}
