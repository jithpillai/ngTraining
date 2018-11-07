import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdModalContent } from './component/popModal';
import { LoginComponent } from './view/login/login.component';
import { CreateFormComponent } from './view/login/createForm';
import { EditFormComponent } from './view/login/editForm';
import { ChangeColor } from './view/login/changecolor.directive';
import { DoublePipe } from './double.pipe';
import { InitcapPipe } from './initcap.pipe';
import { MainComponent } from './view/home/main/main.component';
import { ProfileComponent } from './view/home/profile.component';
import { HttpLoadComponent } from './view/http-load/http-load.component';
import { HttpModule } from "@angular/http";
import { AnimationComponent } from './view/animation/animation.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NgbdModalContent,
    LoginComponent,
    ChangeColor,
    DoublePipe,
    InitcapPipe,
    MainComponent,
    ProfileComponent,
    CreateFormComponent,
    EditFormComponent,
    HttpLoadComponent,
    AnimationComponent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
