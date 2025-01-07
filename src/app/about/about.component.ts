// import { animate } from '@angular/animations';-
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnimalComponent } from '../animal/animal.component';
import { FlowerComponent } from '../flower/flower.component';
import { ZooComponent } from '../zoo/zoo.component';

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [RouterOutlet,RouterLink,FlowerComponent,AnimalComponent,ZooComponent,RouterLinkActive],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
