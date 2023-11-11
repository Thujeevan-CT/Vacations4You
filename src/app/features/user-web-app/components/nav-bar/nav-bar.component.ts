import { Component, EventEmitter, Output } from '@angular/core';
import { Views } from 'src/app/core/model/views';
import { ViewsConfig } from 'src/app/core/utils/views-config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() requestingView = new EventEmitter<Views>();
  public defaultViews;
  constructor(){
   this.defaultViews = ViewsConfig;
  }
  public _changeCurrentView(view:Views){
    //this._view.mainView
   this.requestingView.emit(view);
  }
}
