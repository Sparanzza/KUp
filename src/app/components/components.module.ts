import { NgModule } from '@angular/core';
import { SplashComponent } from './splash/splash';
import { MainMenuBgComponent } from './main-menu-bg/main-menu-bg';
import { BtnMainMenuComponent } from './btn-main-menu/btn-main-menu';
import { CommonModule } from '@angular/common';
import { BigLogoComponent } from './big-logo/big-logo';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading/box-loading';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { CoverUpComponent } from './cover-up/cover-up.component';
import { GoogleAccountComponent } from './google-account/google-account.component';

@NgModule({
    declarations: [SplashComponent,
        MainMenuBgComponent,
        BtnMainMenuComponent,
        BigLogoComponent,
        LoadingComponent,
        ProgressBarComponent,
        CoverUpComponent,
        GoogleAccountComponent],
    imports: [

            CommonModule,
            IonicModule
        ],
    exports: [SplashComponent,
        MainMenuBgComponent,
        BtnMainMenuComponent,
        BigLogoComponent,
        LoadingComponent,
        ProgressBarComponent,
        CoverUpComponent]
})
export class ComponentsModule {}
