import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  items!: any[];
  selectedItemDescribe = "";
  is1Clicked = false;
  isShown = true;
  isSelectedItem = false;
  selectedItemName = ""
  constructor() { }

  ngOnInit(): void {

  }
  selectedItemChanged(item: any): void {
    this.items.forEach(function (i) {
      if (i.name != item.name) {
        i.isSelected = false;
      }
    });
    item.isSelected = true;
    this.selectedItemDescribe = item.name
  };
  confirmed(): void {
    this.isSelectedItem = true;
    if (this.selectedItemDescribe == "") {
      this.selectedItemName = "Please select a item.";

    } else {
      this.selectedItemName = this.selectedItemDescribe;
    }

  }
  Cancel(): void { this.isShown = false }
}

