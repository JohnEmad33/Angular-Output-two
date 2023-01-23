import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterListComponent } from './filter-list/filter-list.component';
import { ButtonBgDirective } from './custom directives/button-bg.directive';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    SearchComponent,
    FilterListComponent,
    ButtonBgDirective,
    ItemsComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
