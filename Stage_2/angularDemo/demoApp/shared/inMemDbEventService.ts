import { I18nPluralPipe } from "@angular/common";
import { Injectable } from "@angular/core";

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IAnimal } from "src/app/animals/animal-list/animal";
import { IEvent } from "src/app/events/events";
import { Categories, IProduct } from "src/app/product/product-list/product";
import { Todo } from "src/app/todo/todo.model";

@Injectable({
    providedIn:'root'
})

export class InMemoryDbEventService implements InMemoryDbService {
    
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> { 
        
        const todos: Todo[]=[
            {id:'111',content:'hello'},
            {id:'222',content:'angular web db'}
        ];
        
        // const customers:Customer[]=[ {
        //   "name": "Amit Sharma ",
        //   "phone": "910928392098",
        //   "address": "123 MG Street",
        //   "membership": "Platinum",
        //   "id": 1
        // },
        // {
        //   "name": "Hetal Shah",
        //   "phone": "808937482734",
        //   "address": "893 Main Street",
        //   "membership": "Pro",
        //   "id": 2
        // }];

        let events:IEvent[] = [
            {
                "id":1,
                "name":"enva",
                "date": "23/12/2022",
                "time":"08:30 am",
                "price":102,
                "imageUrl":"../assets/images/dog1.jpg",
                "location":{
                    "address":"123",
                    "city":"Delhi",
                    "country":"India"
                },
                "sessions":[
                    {
                        "id":10,
                        "name":"AI",
                        "presentor":"Manvi",
                        "duration":"",
                        "level":10,
                        "voters":["leo", "snoppy", "tufffy"]
                    }
                    // ,
                    // {
                    //     "id":11,
                    //     "name":"",
                    //     "presentor":"Ivnam",
                    //     "duration":"",
                    //     "level":11,
                    //     "voters":["leo", "snoppy", "tufffy"]
                    // }
                ]
            },
        
            {
                "id":2,
                "name":"Anugoonj",
                "date": "23/12/2022",
                "time":"08:30 am",
                "price":102,
                "imageUrl":"../assets/images/dog1.jpg",
                "location":{
                    "address":"123",
                    "city":"Delhi",
                    "country":"India"
                },
                "sessions":[
                    {
                        "id":1,
                        "name":"AI",
                        "presentor":"Manvi",
                        "duration":"",
                        "level":10,
                        "voters":["leo", "snoppy", "tufffy"]
                    },
                    // {
                    //     "id":1,
                    //     "name":"",
                    //     "presentor":"Ivnam",
                    //     "duration":"",
                    //     "level":11,
                    //     "voters":["leo", "snoppy", "tufffy"]
                    // }
                ]
            },
        
            {
                "id":3,
                "name":"Asndbsnd",
                "date": "23/12/2022",
                "time":"08:30 am",
                "price":102,
                "imageUrl":"../assets/images/dog1.jpg",
                "location":{
                    "address":"123",
                    "city":"Delhi",
                    "country":"India"
                },
                "sessions":[
                    {
                        "id":10,
                        "name":"AI",
                        "presentor":"Manvi",
                        "duration":"",
                        "level":10,
                        "voters":["leo", "snoppy", "tufffy"]
                    },
                    // {
                    //     "id":11,
                    //     "name":"",
                    //     "presentor":"Ivnam",
                    //     "duration":"",
                    //     "level":11,
                    //     "voters":["leo", "snoppy", "tufffy"]
                    // }
                ]
            }
        ]

        let products: IProduct[]= [
           {
             "id":1 ,
             "name":"Pizza",
             "price": 200,
             "image": "../../assets/images/pizza.jpg",
             "category": Categories.Food,
             "rating": 4,
             "quantity":0
           },
           {
             "id":5,
             "name":"Tshirt",
             "price":1200,
             "image": "../../assets/images/tshirt.jpg",
             "category": Categories.Clothing,
             "rating": 3.7,
             "quantity":0
           },
           {
             "id":10,
             "name":"Table",
             "price": 120000,
             "image": "../../assets/images/table.jpg",
             "category": Categories.Furniture,
             "rating": 4.5,
             "quantity":0
           },
           {
             "id":16,
             "name":"Shampoo",
             "price":400,
             "image": "../../assets/images/dog2.jpg",
             "category": Categories.Cosmetics,
             "rating": 4,
             "quantity":0
           }
         ]

        let animals: IAnimal[]=[
            {
              "id": 101,
              "name":"Snoppy",
              "age":2,
              "description":"white bulldog",
              "imageUrl":"../../assets/images/dog3.jpg"
            },
            {
              "id": 102,
              "name":"Leo",
              "age":6,
              "description":"brown german shephard",
              "imageUrl":"../../assets/images/dog2.jpg"
            },
            {
              "id": 103,
              "name":"Tuffy",
              "age":4,
              "description":"black labrador",
              "imageUrl":"../../assets/images/dog1.jpg"
            }
        
        ]

        return {events, products, animals, todos};
                
    }

}