import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  users = [{'email':'asd@gmail.com','password':'123'},{'email':'qwe@gmail.com','password':'123'},{'email':'zxc@gmail.com','password':'123'}];
  constructor(private route: Router) { }

  ngOnInit(): void {
    
  }
  itemClicked() {

    for (let i=0;i<this.users.length;i++){
      if (this.email == this.users[i].email && this.password == this.users[i].password) {
          this.route.navigate(['/account']);
          
      } 
    
  }}
}
