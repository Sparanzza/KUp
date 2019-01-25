import { NgModule } from '@angular/core';
import { SplashComponent } from './splash/splash';
import { MainMenuBgComponent } from './main-menu-bg/main-menu-bg';
import { BtnMainMenuComponent } from './btn-main-menu/btn-main-menu';
import { CommonModule } from "@angular/common";
@NgModule({
	declarations: [SplashComponent,
    MainMenuBgComponent,
    BtnMainMenuComponent],
	imports: [CommonModule],
	exports: [SplashComponent,
    MainMenuBgComponent,
    BtnMainMenuComponent]
})
export class ComponentsModule {}
