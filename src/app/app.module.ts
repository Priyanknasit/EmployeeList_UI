import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbIconLibraries, 
} from '@nebular/theme';
import { SharedModule } from './shared/shared-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconLibraries: NbIconLibraries) {
    // ✅ Register the custom "diamond" icon
    this.iconLibraries.registerSvgPack('custom', {
      diamond: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M75,17.5H25l-20,20l45,45l45-45L75,17.5z
                  M55.3,25h12.4l-4.1,10L55.3,25z
                  M57.2,35H42.8l7.2-8.6L57.2,35z
                  M36.3,35l-4.1-10h12.4L36.3,35z
                  M61.6,40L50,68.4L38.4,40H61.6z
                  M43.3,65.2L18.1,40H33L43.3,65.2z
                  M67,40h14.9L56.7,65.2L67,40z
                  M81.9,35H69.1l3.7-9.1L81.9,35z
                  M27.2,25.9l3.7,9.1H18.1L27.2,25.9z"
                fill="currentColor"/>
        </svg>
      `,
      qrcode: `
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h4v4H4V4z"/><path d="M16 4h4v4h-4V4z"/><path d="M4 16h4v4H4v-4z"/><path d="M16 16h4v4h-4v-4z"/>
          <path d="M4 8v-4"/><path d="M8 4h-4"/><path d="M20 8v-4"/><path d="M20 16v4"/><path d="M16 20h4"/><path d="M8 20h-4"/>
        </svg>
      `
    });
  }
}
