import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent implements OnInit, OnChanges {
  
  @Input() public stateIndex;
  @Input() public position;
  @Input() public isSwitchedOn;
  @Output() public onButtonClickChange = new EventEmitter();

  public states = ['red', 'yellow', 'green', 'yellow', 'alert'];

  public getClassNames() {
    if(!this.isSwitchedOn) {
      return 'off ' + this.position;
    }

    return this.states[this.stateIndex] + ' ' + this.position;
  }

  public getState() {
    return this.states[this.stateIndex];
  }

  public onButtonClick() {
    if(this.getState() == 'yellow') {
      this.onButtonClickChange.emit('Неправилно пресичане');
    }
    else {
      this.onButtonClickChange.emit('');
    }
  }

  public ngOnInit() {
    
  }

  public ngOnChanges() {
    if(this.stateIndex == -1) {

    }
  }

  public triggerAlertMode() {

  }
}
