import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact.component';

const routes: Routes = [
    { path: '', component: ContactComponent }
];

export const ContactRoutes = RouterModule.forChild(routes);
