import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showRegisterModal = false;
  activeTab: string = 'content1';
  constructor(private router: Router) {    
  }
  showContent(tab: string): void {
    this.activeTab = tab;
  }
  signup() {
    // jQuery('#register').modal('show');
    this.showRegisterModal = true;
    this.router.navigate(['/register']);
  }
  bookTable(){
    this.router.navigate(['/book-table']);
  }
  menu(){
    this.router.navigate(['/menu']);
  }
  parties(){
    this.router.navigate(['/parties']);
  }
  upcomingEvents(){
    this.router.navigate(['/upcoming-events']);
  }
  onlineOrder(){
    this.router.navigate(['/online-order']);
  }
  cart(){
    this.router.navigate(['/cart']);
  }

}
