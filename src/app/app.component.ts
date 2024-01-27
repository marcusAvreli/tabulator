
import { Component, Input, OnChanges, SimpleChanges,AfterViewInit } from '@angular/core';
import { default as Tabulator } from 'tabulator-tables';
import {MyClass} from 'mybabel';
import * as xlsx from "xlsx"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//class TabulatorFull extends Tabulator {}
export class AppComponent  implements OnChanges ,AfterViewInit{
  title = 'app';
 
  // list properties you want to set per implementation here...

  tab = document.createElement('div');

  constructor() {
   
  }
ngAfterViewInit() {
//const myClass = new MyClass();
console.log("xlsx-0.20.1.tgz:"+xlsx);
 var tableDataNested = [
           {id:1, name:"Oli Bob",age:"10"},
 	{id:2, name:"Mary May",age:"10"},
 	{id:3, name:"Christine Lobowski",age:"10"},
 	{id:4, name:"Brendon Philips",age:"10"},
 	{id:5, name:"Margret Marmajuke",age:"10"},
        ];
    new Tabulator(this.tab, {
      data: tableDataNested,
       autoColumns: true,
    });
	  const workbook = xlsx.utils.book_new()
	   workbook.SheetNames.push("string"); // create new worksheet
    const copiedItems: Record<string, any>[] = JSON.parse(JSON.stringify(tableDataNested))
	const updatedItems = copiedItems.map(this.preprocessItems);
	

  

  
  
    
  
    // workbook.Sheets["string"] = xlsx.utils.json_to_sheet(updatedItems)
   
  //xlsx.writeFile(workbook, "test" + ".xlsx") // export to user
  
   document.getElementById('my-tabular-table').appendChild(this.tab);
}
  ngOnChanges(changes: SimpleChanges): void {
    this.drawTable();
  }

  private drawTable(): void {

  }
   preprocessItems = (item: any) => {
  for (let key in item) {
    if (key.startsWith('__')) {
      //Remove system computed keys.
      delete item[key]
    }

    if (Array.isArray(item[key])) {
      if (item[key].length > 0 && item[key][0].value && item[key][0].key) {
        //tags found
        item[key] = item[key].map((tag: any) => {
          return tag.key + '=' + tag.value;
        });
      }
      //Flatten Array.
      item[key] = item[key].join(';');
    } else if (item[key] != null && typeof item[key] === 'object') {
      // Object in field, convert to string
      item[key] = JSON.stringify(item[key]);
    }

  }
  return item;
};
}
