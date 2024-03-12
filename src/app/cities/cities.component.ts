import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit{
cities: Array<string> = [];
myCity: string;
citiesVisited:string[]=["Abuja","Ibadan","Oyo","Lagos","Kogi"];
numOfCities = 0;
stateVisited: string[] = [];
properties: any;
numOfCitiesCountEmitted = 0;// binded to the output from the child component 

constructor(){
this.myCity = "Lagos";
this.cities = ["Abuja","Ibadan","Oyo","Lagos","Kogi"];
this.numOfCities = this.citiesVisited.length;
this.properties = [false, 56,];
this.numOfCitiesCountEmitted = 0;
}
ngOnInit(){
this.getStateVisited();
}

getStateVisited(){
  this.stateVisited = ['Lagos','Bauchi','Ilorin','Kaduna', 'Edo'];
}
numOfCitiesCount(num: number){
this.numOfCitiesCountEmitted = num;
}
}