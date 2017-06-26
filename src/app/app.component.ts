import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Check Your Nutrition Facts ';
appID = 'ef3307b9';
appKey = 'd47bb81561fadc75b4337679d1c84c02';
apiLink1 = 'https://api.nutritionix.com/v1_1/search/';
apiLink2 = '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=';
combinedKey = 'ef3307b9&appKey=d47bb81561fadc75b4337679d1c84c02';
// fullSearch = this.apiLink1 + this.combinedKey;
http: Http;
nutritionFacts = [];
foodSearch = '';

constructor(http: Http,) {
  this.http = http;
}

searchFood(foodSearch: HTMLInputElement): void {
  if (!foodSearch.value) {
    console.log('empty');
    return;
  }
  this.http.get(this.apiLink1 + foodSearch.value + this.apiLink2 + this.combinedKey)
    .subscribe((res: Response) => {
    foodSearch.value = '';
      return this.nutritionFacts = res.json().hits;
    });
}

}
