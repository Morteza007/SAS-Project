import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock.service'
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

export class StocksComponent implements OnInit {
  constructor(private stockService: StockService){
  }
  stockList: Array<Stock> = [{
      name: "test1",
      id: "231",
      prise: "2343",
      order: "iuyiuy"
  },{
      name: "test2",
      id: "234",
      prise: "2324",
      order: "iuoiu"
  }];
  ngOnInit(): void {
    this.stockList = this.stockService.getStockList();
  }

}
