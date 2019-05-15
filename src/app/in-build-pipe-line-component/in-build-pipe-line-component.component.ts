import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obb-in-build-pipe-line-component',
  templateUrl: './in-build-pipe-line-component.component.html',
  styleUrls: ['./in-build-pipe-line-component.component.css']
})
export class InBuildPipeLineComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name ="chance-a-illa"
  birthday = new Date()
  money= 88
}
