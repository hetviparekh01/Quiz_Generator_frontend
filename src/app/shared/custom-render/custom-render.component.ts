import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-render',
  templateUrl: './custom-render.component.html',
  styleUrls: ['./custom-render.component.scss']
})
export class CustomRenderComponent implements ICellRendererAngularComp {

  params: any;
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params=params
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }
    deleteData() {
      this.params.deleteData(this.params.data._id)
    }
    updateData() {
      this.params.updateData(this.params.data._id)
    }
}
