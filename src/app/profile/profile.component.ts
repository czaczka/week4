import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid = sessionStorage.getItem('userid');
  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('userbirthdate');
  userage = sessionStorage.getItem('userage');

  constructor() { 


  }

  ngOnInit(): void {
  }

}
