Project: angular-routing

Keywords: routing, router, lazy-loading, child loading, guard, service, canActivate, reactive form, Token<br>
Part one<br>
*Create a project angular-routing, ng new angular-routing<br>
*Install Bootstrap and fontawesome<br>
*Create components login, forgot-password, not-found in components folder<br>
*Modify view on app.component.html<br>
*Configure the routes in app-routing.module.ts
<br>Const routes:Routes = [ 
<br>{path: ‘login’, component: LoginComponent},
<br>{path: ‘forgot-password’, component: LoginComponent},
<br>{path: ‘ ’, redirectTo: ‘/login’, pathMatch: ‘full’},
<br>{path: ‘**’, component: NotFoundComponent},
<br>];
<br>*Design login page using reactiveForms<br>

Part two<br>
*Add a modules folder in app<br>
*Create a new module, admin, in the folder, >ng g m modules/admin --routing<br>
*Add a components folder in the admin module folder<br>
*Create and design admin-dashboard, header, footer, home, about, contact, services components<br>
*Add admin.module as lazy-loading module in app-routing.module.ts<br>
<br>{ path: ‘admin’,
<br>loadChildren: () =>
<br>Import(‘./modules/admin/admin.module’).then (m=>m.AdminModule), }, }

<br>*Configure the child routes in admin-routing.module.ts<br>

Part three<br>
*Add a folder called guards under app<br>
*Create an auth guard using CanActivate, ng g g guards/auth<br>
*Add the guard in app-routing.module.ts<br>
<br>{path: ‘admin’,
<br>canActivate: [AuthGuard],
<br>loadChildren:….
<br>}, <br>
*Add a folder called services in app<br>
*Create an auth service >ng g s services/auth<br>
*Define login(), logout(), isLoggedIn(), setToken(), getToken() methods<br>
*Use the AuthService in LoginComponent and define AuthGuard in auth.guard.ts<br><br>

<br>Test using email: richardm@gmail.com
<br>Password: richardm6688

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
