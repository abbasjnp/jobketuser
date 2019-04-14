import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, AuthService, SocialUser,LinkedInLoginProvider } from 'angularx-social-login';
import { FacebookService } from 'ngx-facebook';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: SocialUser;
  public authorized: boolean = false;

  texto: string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = 28.5355;
  lng: number = 77.3910;
  zoom: number = 15;

  constructor(private socialAuthService: AuthService, public http: HttpClient) { }

  ngOnInit() {

  }

  // submitLogin(){
  //   console.log("submit login to facebook");
  //   // FB.login();
  //   FB.getLoginStatus((response) => {
  //     if (response.status === 'connected') {
  //       //  this.router.navigate(['./home']);
  //       console.log("success already login");
  //     }
  //     else {
  //         FB.login((loginResponse)=>{
  //          //   this.router.navigate(['./home']);
  //          console.log("success login")
  //         });
  //     }
  // });

  // }
  // fileChange(event) {
  //   let file = event.target.files[0];
  //   let formData = new FormData();
  //   formData.append('sportname', 'cricket'),
  //     formData.append('category', 'outdoor');
  //   formData.append('uploadFile', file, file.name);
   
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer zqe8bXi5JHNa6DmzFo4G1VP3Qoi99w' ,
  //       'Accept': 'application/json'
  //     })
  //   }
  //   this.http.post('http://192.168.1.28:8001/api/dashboard/',formData,httpOptions)
  //                   .subscribe(res=>console.log(res,"resssssssss"));

  // }




  public socialSignIn(socialPlatform: string) {

    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    else if (socialPlatform == "linkdin") {
      socialPlatformProvider = LinkedInLoginProvider.PROVIDER_ID;
    }
      

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData        
        if (userData != null) {
          this.authorized = true;
          this.user = userData;
        }
      }
    );
  }
  public signOut() {
    this.socialAuthService.signOut();
    this.authorized = false;
  }

}
