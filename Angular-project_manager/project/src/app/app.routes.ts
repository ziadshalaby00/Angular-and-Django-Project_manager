import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { ProjectsComponent } from './projects/projects.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectInfoComponent } from './project-info/project-info.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Projects', component: ProjectsComponent },
    { path: 'ProjectInfo', component: ProjectInfoComponent },
    { path: 'CreateProject', component: CreateProjectComponent },
    { path: 'Invitations', component: InvitationsComponent },
    { path: 'Profile', component: ProfileComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Signup', component: SignupComponent },
    { path: '**', component: Page404Component },
];