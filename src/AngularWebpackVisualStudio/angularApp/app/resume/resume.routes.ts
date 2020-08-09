import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from './components/resume.component';

const routes: Routes = [
    { path: '', component: ResumeComponent }
];

export const ResumeRoutes = RouterModule.forChild(routes);
