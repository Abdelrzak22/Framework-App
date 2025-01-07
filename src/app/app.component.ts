import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimalComponent } from './animal/animal.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ZooComponent } from './zoo/zoo.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,NavComponent,HomeComponent,AboutComponent,NotfoundComponent,ZooComponent,AnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
