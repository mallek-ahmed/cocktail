import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]',
})
export class ActiveDirective implements OnChanges {
  @Input('appActive') isActive: boolean;

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  constructor() { }

  ngOnChanges(){

    if(this.isActive){
      this.backgroundColor = "#00BCD4" ;
      this.color = "white" ;
    }else{
      this.backgroundColor = "transparent" ;
      this.color = "black" ;
    }


  }
}
