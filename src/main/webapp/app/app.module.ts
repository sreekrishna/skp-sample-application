import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SkpDynamicApplicationSharedModule } from 'app/shared/shared.module';
import { SkpDynamicApplicationCoreModule } from 'app/core/core.module';
import { SkpDynamicApplicationAppRoutingModule } from './app-routing.module';
import { SkpDynamicApplicationHomeModule } from './home/home.module';
import { SkpDynamicApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SkpDynamicApplicationSharedModule,
    SkpDynamicApplicationCoreModule,
    SkpDynamicApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SkpDynamicApplicationEntityModule,
    SkpDynamicApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class SkpDynamicApplicationAppModule {}
