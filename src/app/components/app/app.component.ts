import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title ='Universities Web'
  public characters: any[]=[];
  public info: any = null;
  public u: string="";
  public page: any[]=[];
  public currentPage: number=1;

  constructor(private cService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters(page:number=1, name:string=""){
    this.cService.characters(page, name).subscribe(response =>{
      this.characters = response.results
      this.info =response.info;
      this.page = Array(this.info.pages).map((x,i)=>i);
    })
  }
  searchU(event, n ){
    this.currentPage = n+1;
    this.getCharacters(this.currentPage, this.u)
  }
}
