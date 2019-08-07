import { TestBed, inject } from '@angular/core/testing';

import { PricePredictorService } from './price-predictor.service';
import { Injectable } from '@angular/core';
import { STOCKS } from './share-stock';
import {Stock} from './stock';

@Injectable()
export class PricePredictorService {
  private currentPriceData: Stock;

  constructor() { }

  getPrice(symbol: string):Stock{
    for(var i = 0; i < STOCKS.length; i++)
    {
      if(STOCKS[i].symbol == symbol)
        return STOCKS[i];
    }
  }

}
