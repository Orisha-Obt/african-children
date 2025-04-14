import { Component, signal, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  isOpen = signal(false);
  activeSection = signal('Home');

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const menuElement = (event.target as HTMLElement).closest(
      '.menu-container'
    );
    if (!menuElement) {
      this.isOpen.set(false);
    }
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isOpen.update((prev) => !prev);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isOpen.set(false); // Close menu after clicking
      this.activeSection.set(this.capitalizeFirstLetter(sectionId));
    }
  }

  private capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
