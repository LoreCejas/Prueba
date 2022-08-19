import { SharedService } from 'src/app/services/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filters:any;
  selected: Date = new Date();

  constructor(private service : SharedService) {
    this.filters = service.filterObject;
    this.service.backendFilter = {}
  }

  ngOnInit(): void {
  }

  closingModal(val:boolean){
    if(val){

    } else {
      this.service.backendFilter = {};
    }
    this.service.closingModal = true;
  }

  setValue(str:string, e:any){
    this.service.backendFilter[str] = e.target.value;
  }

  deleteFilter(str:string, e:any){
    delete this.service.backendFilter[str];
    e.target.parentNode.parentNode.childNodes[0].checked = false;
  }

}
