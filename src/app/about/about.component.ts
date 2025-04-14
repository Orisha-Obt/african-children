import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'John Doe',
      role: 'Executive Director',
      bio: 'John has over 15 years of experience in community development and nonprofit leadership.',
      imageUrl: '/assets/images/team/john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Program Director',
      bio: 'Jane leads our educational initiatives and has a background in curriculum development.',
      imageUrl: '/assets/images/team/jane-smith.jpg',
    },
    {
      name: 'Michael Johnson',
      role: 'Community Outreach',
      bio: 'Michael specializes in building partnerships with local organizations and businesses.',
      imageUrl: '/assets/images/team/michael-johnson.jpg',
    },
  ];

  contactInfo = {
    address: '123 Community Street, City, State 12345',
    phone: '(555) 123-4567',
    email: 'info@organization.org',
    social: {
      facebook: 'https://facebook.com/organization',
      twitter: 'https://twitter.com/organization',
      instagram: 'https://instagram.com/organization',
      linkedin: 'https://linkedin.com/company/organization',
    },
  };
}
