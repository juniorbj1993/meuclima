import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class requisicaohttp{



    constructor(private http: HttpClient){}
        getData(cidade, key){
            let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`;

            return this.http.get<any[]>(apiURL);
        }
    
}