import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ReviewComponent } from './Assingmnent/review/review.component';
import { ThumbnailComponent } from './Assingmnent/thumbnail/thumbnail.component';
import { DescriptionComponent } from './Assingmnent/description/description.component';
import { TitleComponent } from './Assingmnent/title/title.component';
import { DirectivesComponent } from './superHTML/directives/directives.component';
import { browser } from 'protractor';
import { InBuildPipeLineComponentComponent } from './in-build-pipe-line-component/in-build-pipe-line-component.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';
import { FamilyComponent } from './nuclearFamily/family/family.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';


@NgModule({
  declarations: [RootComponent, SampleComponent, ReviewComponent, InBuildPipeLineComponentComponent, ThumbnailComponent, DescriptionComponent, TitleComponent, DirectivesComponent, BadrouteComponent, FamilyComponent, SonComponent, DaughterComponent, MotherComponent],
  imports:[
    BrowserModule, AppRoutingModule,RouterModule.forRoot([
        {path:'',redirectTo:'InBuildPipeLineComponent',pathMatch:'full'},
        { path:'directives',component:DirectivesComponent},
        {path:'review',component:ReviewComponent},
        {path:'InBuildPipeLineComponent', component:InBuildPipeLineComponentComponent},
        {path:'**', component:BadrouteComponent}
      ])
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class rootModule { }

