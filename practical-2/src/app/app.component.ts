import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practical2';
  pro: any;
  apidata:any;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.Value()
      .subscribe((res: any) => {
        this.pro = res.programs;
      });

  }


  formData = new FormGroup({
    program: new FormControl('')
  });

  
  dropDownChanges(event: any) {
    console.log(event.value);
    this.data.getDropDowndata(event.value).subscribe((data:any)=>{
      this.apidata=data.project;
      console.log(this.apidata)
    })
  
    

  }
  
}
