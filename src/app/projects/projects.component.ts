import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  count: string;
  description: string;
  status: 'completed' | 'ongoing';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Human Rights project',
      count: '20+',
      description:
        'Sustainable educational facilities constructed across Africa',
      status: 'completed',
    },
    {
      title: 'Access to justice',
      count: '5K+',
      description: 'Children receiving quality education through our programs',
      status: 'completed',
    },
    {
      title: 'Access to justice',
      count: '80%',
      description:
        'Helping young women and girls married as minors up to the age of 35 get justice.',
      status: 'ongoing',
    },
    {
      title: 'Women Empowerment',
      count: '15+',
      description:
        'Climate change mitigation through hydroponics farming for women.',
      status: 'ongoing',
    },
  ];

  getProjectsByStatus(status: 'completed' | 'ongoing'): Project[] {
    return this.projects.filter((project) => project.status === status);
  }
}
