import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
    imports: [MatToolbarModule,MatSidenavModule,MatCardModule,MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
    exports: [MatToolbarModule,MatSidenavModule,MatCardModule,MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]

})

export class MaterialModule {}