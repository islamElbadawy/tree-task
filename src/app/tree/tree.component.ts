import { Member } from './../models';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input('tree') tree:Member[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
