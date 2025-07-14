
export abstract class SmartTableData {
  abstract getData (): any[];
  abstract getPendingWorkData (): any[];
  abstract getStatementsData (): any[];
  abstract getPurchaseData (): any[];
  abstract getPurchaseInvoiceItemData (): any[];
}
