
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimalComponent } from './animal/animal.component';
import { FlowerComponent } from './flower/flower.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full',title:"home"},
    {path:'home',component:HomeComponent,title:'home'},
    {path:'about',component:AboutComponent,title:"home"},
    {path:'portfolio',component:FlowerComponent,title:"about"},
    {path:'contact',component:AnimalComponent,title:"about"},
    {path:"**",component:NotfoundComponent,title:"anythinf"}

];
