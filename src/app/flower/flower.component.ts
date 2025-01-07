import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flower',
  standalone:true,

  imports: [NgIf],
  templateUrl: './flower.component.html',
  styleUrl: './flower.component.css'
})
export class FlowerComponent {
  showOverlay = false;
  selectedImage = '';

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.showOverlay = true; 
  }
close(){
  this.showOverlay=false
}

}
