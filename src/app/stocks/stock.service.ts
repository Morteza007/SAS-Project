import { Stock } from './stock.model';

export class StockService{
constructor(){}

private stock: Stock;
private stockList: Array<Stock> = [
    {
        name: "وایران",
        id: "123",
        prise: "2345",
        order: "خرید"
    },
    {
        name: "کرازی",
        id: "321",
        prise: "23424",
        order: "فروش"
    }];

    getStockList()
    {
        return [...this.stockList];
    }

}