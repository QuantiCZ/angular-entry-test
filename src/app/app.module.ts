import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers } from "./store/reducers/router.reducer";
import { RouterEffects } from "./store/effects/router.effect";
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(RouterEffects),
    UsersModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
