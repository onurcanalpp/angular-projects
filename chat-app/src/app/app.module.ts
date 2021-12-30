import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message-list/message/message.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/users-list/user/user.component';
import { TabListComponent } from './components/tab-list/tab-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageListComponent,
    MessageComponent,
    UsersListComponent,
    UserComponent,
    TabListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
