import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  navLinks = [
    { name: 'Home', url: '/', fragment: 'home' },
    { name: 'Overview', url: '/', fragment: 'overview' },
    { name: 'Projects', url: '/', fragment: 'projects' },
    { name: 'About Us', url: '/about' },
  ];

  // Footer info links
  infoLinks = [
    { name: 'ACD.com', url: 'https://acd.com' },
    { name: 'Terms & Conditions', url: '/terms' },
    { name: 'Privacy Policy', url: '/privacy' },
  ];

  // Company details
  company = {
    name: 'ACD',
    tagline:
      'Advanced Carbon Development\nInnovating for a sustainable future.',
    brandBy: 'A brand by ACD',
    phone: '+1 (555) 123-4567',
    email: 'info@acd.com',
  };
}
