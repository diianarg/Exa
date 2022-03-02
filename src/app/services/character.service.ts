import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private Base_Url = "http://universities.hipolabs.com/"

  constructor(private http: HttpClient) { }

  characters(page: number=1, name:string=""){
    return this.http.get<any>(this.Base_Url+ `search?page=${page}&name=${name}` , {})
  }
}
