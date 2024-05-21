import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public state = 0;
  public message = '';
  public isDangerButtonEnabled = true;
  public isSystemSwitchedOn = true;

  private interval;
  private timeout1;
  private timeout2;
  private timeout3;
  private timeout4;

  public ngOnInit() {

    this.activity();

    this.interval = setInterval(() => {
      this.activity();
    }, 14200);
  }

  public activity() {

    this.timeout1 = setTimeout(() => {
      this.state++;
    }, 5000);
    this.timeout2 = setTimeout(() => {
      this.state++;
    }, 7000);
    this.timeout3 = setTimeout(() => {
      this.state++;
    }, 12000);
    this.timeout4 = setTimeout(() => {
      this.state++;
    }, 14000);
  }

  public updateMessage(data) {

    console.log(data);
    this.message = data;
  }

  public triggerDangerButton() {

    clearInterval(this.interval);
    clearTimeout(this.timeout1);
    clearTimeout(this.timeout2);
    clearTimeout(this.timeout3);
    clearTimeout(this.timeout4);
    this.state = 1;
    this.isSystemSwitchedOn = false;
    this.isDangerButtonEnabled = false;

    let dangerInterval = setInterval(() => {
      this.isSystemSwitchedOn = !this.isSystemSwitchedOn;
    }, 1000);

    setTimeout(() => {
      clearInterval(dangerInterval);
      this.isSystemSwitchedOn = true;
      this.state = 0;
      this.activity();
      this.interval = setInterval(() => {
        this.activity();
      }, 14200);
    }, 10000);

    setTimeout(() => {
      this.isDangerButtonEnabled = true;
    }, 20000)
  }
}
