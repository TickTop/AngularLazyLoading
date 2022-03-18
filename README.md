Project: angular-routing

Keywords: routing, router, lazy-loading, child loading, guard, service, canActivate, reactive form, Token
Part one
Create a project angular-routing, ng new angular-routing
Install Bootstrap and fontawesome
Create components login, forgot-password, not-found in components folder
Modify view on app.component.html

Configure the routes in app-routing.module.ts
Const routes:Routes = [
{path: ‘login’, component: LoginComponent},
{path: ‘forgot-password’, component: LoginComponent},
{path: ‘ ’, redirectTo: ‘/login’, pathMatch: ‘full’},
{path: ‘**’, component: NotFoundComponent},
];
Design login page using reactiveForms

Part two
Add a modules folder in app
Create a new module, admin, in the folder, >ng g m modules/admin --routing
Add a components folder in the admin module folder
Create and design admin-dashboard, header, footer, home, about, contact, services components
Add admin.module as lazy-loading module in app-routing.module.ts
{ path: ‘admin’,
loadChildren: () =>
Import(‘./modules/admin/admin.module’).then (m=>m.AdminModule), }, }

Configure the child routes in admin-routing.module.ts

Part three
Add a folder called guards under app
Create an auth guard using CanActivate, ng g g guards/auth
Add the guard in app-routing.module.ts
{path: ‘admin’,
canActivate: [AuthGuard],
loadChildren:….
},
Add a folder called services in app
Create an auth service >ng g s services/auth
Define login(), logout(), isLoggedIn(), setToken(), getToken() methods
Use the AuthService in LoginComponent and define AuthGuard in auth.guard.ts

Test using email: richardm@gmail.com
Password: richardm6688

# AngularRouting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
