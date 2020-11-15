import { Component, OnInit, ViewChild } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  @ViewChild('root') root;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log("called");
    M.Tabs.init(this.root.nativeElement.querySelectorAll('.tabs'));
  }

}
