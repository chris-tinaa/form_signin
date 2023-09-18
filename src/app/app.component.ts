import { Component, OnInit } from '@angular/core';
import { Iuser } from './interfaces/iuser';
import { SigninService } from './services/signin.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form_signin';

  signinResp: any = ""
  user: Iuser;
  showToast: boolean = false;  

  constructor(private signinService: SigninService) {

    this.user = {
      username: "mor_2314",
      password: "83r5^_"
    }
  }

  
  ngOnInit(): void {

  }

  
  onSignin(): void {
    this.signinService.signin(this.user).pipe(catchError(this.handleError))
    .subscribe((resp: any) => {
      console.log(resp);
      this.showToast = true;  
      this.signinResp = resp;
    })
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }



}
