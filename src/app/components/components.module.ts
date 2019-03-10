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
import { DropdownComponent } from './dropdown/dropdown.component';
import { BtnOutlineComponent } from './btn-outline/btn-outline.component';
import { TopUserComponent } from './top-user/top-user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BtnSubmenuComponent } from './btn-submenu/btn-submenu.component';
import { BtnGrpSubmenuComponent } from './btn-grp-submenu/btn-grp-submenu.component';
import { FunnowSelectLevelComponent } from './funnow-select-level/funnow-select-level.component';
import { HowToPlayPage } from './how-to-play/how-to-play.page';
import { BtnBackPage } from './btn-back/btn-back.page';
import { BtnPausePage } from './btn-pause/btn-pause.page';

@NgModule({
    declarations: [SplashComponent,
        MainMenuBgComponent,
        BtnMainMenuComponent,
        BigLogoComponent,
        LoadingComponent,
        ProgressBarComponent,
        CoverUpComponent,
        GoogleAccountComponent,
        DropdownComponent,
        GoogleAccountComponent,
        BtnOutlineComponent,
        TopUserComponent,
        AboutUsComponent,
        BtnSubmenuComponent,
        BtnGrpSubmenuComponent,
        FunnowSelectLevelComponent,
        HowToPlayPage,
        BtnBackPage,
        BtnPausePage
    ],
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
        CoverUpComponent,
        GoogleAccountComponent,
        BtnOutlineComponent,
        TopUserComponent,
        AboutUsComponent,
        BtnSubmenuComponent,
        BtnGrpSubmenuComponent,
        FunnowSelectLevelComponent,
        HowToPlayPage,
        BtnBackPage,
        BtnPausePage

    ]
})
export class ComponentsModule {}

