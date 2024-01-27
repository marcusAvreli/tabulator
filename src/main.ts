import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MyClass} from 'mybabel';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Table,FilterAdvanced,FilterDropdown,Dropdown,Button} from 'mySlot3';
import {Label,Menu,MenuItem,Icon,Popup} from 'mySlot3';
import {Input} from 'mySlot2';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
if (!customElements.get('wj-table')){
  	customElements.define('wj-table', Table);
  }
 if (!customElements.get(Button.is)){
 	customElements.define(Button.is, Button);
} 
 if (!customElements.get(FilterDropdown.is)){
 	customElements.define(FilterDropdown.is, FilterDropdown);
} 
 
if (!customElements.get(Dropdown.is)){
 	customElements.define(Dropdown.is, Dropdown);
} 
if (!customElements.get(Dropdown.is)){
 	customElements.define(Dropdown.is, Dropdown);
}
  if (!customElements.get(FilterAdvanced.is)){
 	customElements.define(FilterAdvanced.is, FilterAdvanced);
}
 if (!customElements.get(Label.is)){
 	customElements.define(Label.is, Label);
} 
 if (!customElements.get(Menu.is)){
 	customElements.define(Menu.is, Menu);
} 
if (!customElements.get(MenuItem.is)){
 	customElements.define(MenuItem.is, MenuItem);
} 
if (!customElements.get(Icon.is)){
 	customElements.define(Icon.is, Icon);
} 
if (!customElements.get(Popup.is)){
 	customElements.define(Popup.is, Popup);
} 
  if (!customElements.get('tom-user-avatar')){
  customElements.define('tom-user-avatar', MyClass);
  }  if (!customElements.get('wj-input')) {
		customElements.define('wj-input', Input);
	}