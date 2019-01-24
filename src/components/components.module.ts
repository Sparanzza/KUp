import { NgModule } from '@angular/core';
import { SplashComponent } from './splash/splash';
import { MainMenuBgComponent } from './main-menu-bg/main-menu-bg';
@NgModule({
	declarations: [SplashComponent,
    MainMenuBgComponent],
	imports: [],
	exports: [SplashComponent,
    MainMenuBgComponent]
})
export class ComponentsModule {}
