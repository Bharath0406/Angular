import { Component } from '@angular/core';


// anything start with @ is decorator
@Component({
  selector: 'cts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent 
{
  title = 'AngularLearning';
  type = "Easy"
  score = 10
  display_message = function()
  {
    //alert("currentScore",+this,Score)
   this.score = this.score+10
  }
}

