import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-citiesvisited',
  templateUrl: './citiesvisited.component.html',
  styleUrl: './citiesvisited.component.css'
})
export class CitiesvisitedComponent {
@Input() numOfCities: number = 0;
@Output() numOfCitiesVisitedEmit: EventEmitter<number>;
citiesCount: number =0;


constructor(){
  this.numOfCitiesVisitedEmit = new EventEmitter<number>();
}
increaseCitiesCount(){
this.citiesCount += 1;
this.numOfCitiesVisitedEmit.emit(this.citiesCount)
}
decreaseCitiesCount(){
this.citiesCount -= 1;
this.numOfCitiesVisitedEmit.emit(this.citiesCount)

}
}