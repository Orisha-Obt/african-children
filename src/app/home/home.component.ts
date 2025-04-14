import { Component } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OverviewComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
