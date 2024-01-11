import { Component, inject,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent{
  // constructor(private auth: AuthService ) {

  //  }
   auth = inject(AuthService);
   name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
   userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
   email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
