import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedInLoginProvider
} from "angularx-social-login";
import { AgmCoreModule } from '@agm/core';
import{HttpClientModule} from '@angular/common/http'


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("411809446314279")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com")
        },
        {
          id: LinkedInLoginProvider.PROVIDER_ID,
          provider: new LinkedInLoginProvider("81afxvmmxkjynz")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [AccountComponent, LoginComponent],
  imports: [
    CommonModule,
    SocialLoginModule,
    AgmCoreModule,
    HttpClientModule
  ],
  providers: [
    {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
      }
    ],
  exports:[LoginComponent]
})
export class AccountModule { }
