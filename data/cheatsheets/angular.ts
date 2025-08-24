import { CheatSheet } from '../../types';

export const angularCheatSheets: CheatSheet[] = [
  {
    id: 'angular-1',
    category: 'Angular',
    subCategory: 'bash',
    title: 'Create New Application',
    snippet: 'ng new my-app --standalone',
    description: 'Uses the Angular CLI to create a new workspace and an initial application. The `--standalone` flag generates a simpler, component-based project structure without modules.',
    tags: ['angular', 'cli', 'ng new', 'project setup', 'standalone'],
  },
  {
    id: 'angular-2',
    category: 'Angular',
    subCategory: 'bash',
    title: 'Generate Components & Services',
    snippet: 'ng generate component my-component\nng generate service my-service',
    description: 'Uses the Angular CLI to generate common application parts. Shortcuts: `ng g c` for component, `ng g s` for service.',
    tags: ['angular', 'cli', 'generate', 'component', 'service'],
  },
  {
    id: 'angular-3',
    category: 'Angular',
    subCategory: 'typescript',
    title: 'Component Structure',
    snippet: `import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {
  title = 'My Component';
}`,
    description: 'A basic standalone component in Angular consists of a TypeScript class with a `@Component` decorator, which provides metadata about the component like its selector, template, and styles.',
    tags: ['angular', 'component', 'decorator', 'typescript', 'standalone'],
  },
  {
    id: 'angular-4',
    category: 'Angular',
    subCategory: 'html',
    title: 'Data Binding: Interpolation',
    snippet: '<h1>{{ pageTitle }}</h1>\n<p>The sum of 1 + 1 is {{ 1 + 1 }}.</p>',
    description: 'Renders a component property\'s value in the template. The expression inside the double curly braces is evaluated and converted to a string.',
    tags: ['angular', 'data binding', 'interpolation', 'template', 'view'],
  },
  {
    id: 'angular-5',
    category: 'Angular',
    subCategory: 'html',
    title: 'Data Binding: Property Binding',
    snippet: '<img [src]="imageUrl" [alt]="imageAltText">\n<button [disabled]="isButtonDisabled">Click me</button>',
    description: 'Binds a component property to a property of a DOM element. Data flows one-way from the component to the template.',
    tags: ['angular', 'data binding', 'property binding', 'template', 'view'],
  },
  {
    id: 'angular-6',
    category: 'Angular',
    subCategory: 'html',
    title: 'Data Binding: Event Binding',
    snippet: '<button (click)="onSave()">Save</button>\n<input (keyup.enter)="onEnter($event)">',
    description: 'Binds a DOM event to a method in the component. Data flows one-way from the template to the component. You can listen for specific keyboard events like `keyup.enter`.',
    tags: ['angular', 'data binding', 'event binding', 'template', 'events', 'click'],
  },
  {
    id: 'angular-7',
    category: 'Angular',
    subCategory: 'html',
    title: 'Data Binding: Two-Way Binding',
    snippet: '<input [(ngModel)]="username">',
    description: 'Combines property and event binding into a single notation. Commonly used with forms. Requires importing `FormsModule` in the component.',
    tags: ['angular', 'data binding', 'two-way binding', 'ngmodel', 'forms'],
  },
  {
    id: 'angular-8',
    category: 'Angular',
    subCategory: 'html',
    title: 'Directive: *ngIf',
    snippet: '<div *ngIf="userIsLoggedIn; else loggedOut">\n  Welcome, {{ username }}!\n</div>\n<ng-template #loggedOut>\n  Please log in.\n</ng-template>',
    description: 'Conditionally adds or removes an element from the DOM based on the truthiness of an expression. Can be paired with an `else` block using a template.',
    tags: ['angular', 'directive', 'ngif', 'conditional', 'template'],
  },
  {
    id: 'angular-9',
    category: 'Angular',
    subCategory: 'html',
    title: 'Directive: *ngFor',
    snippet: '<ul>\n  <li *ngFor="let item of items; let i = index">\n    {{ i + 1 }}: {{ item.name }}\n  </li>\n</ul>',
    description: 'Renders a template for each item in a collection. You can get the index and other local variables from the loop.',
    tags: ['angular', 'directive', 'ngfor', 'loop', 'iteration', 'template'],
  },
  {
    id: 'angular-10',
    category: 'Angular',
    subCategory: 'typescript',
    title: 'Service and Dependency Injection',
    snippet: `@Injectable({
  providedIn: 'root'
})
export class DataService {
  // ...
}

@Component({ ... })
export class MyComponent {
  constructor(private dataService: DataService) {}
}`,
    description: 'Services are used for business logic or data sharing. The `@Injectable` decorator marks it for dependency injection. Angular injects the service instance into the component\'s constructor.',
    tags: ['angular', 'service', 'dependency injection', 'di', 'injectable'],
  },
  {
    id: 'angular-11',
    category: 'Angular',
    subCategory: 'typescript',
    title: 'Routing Configuration',
    snippet: `// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

// main.ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});`,
    description: 'Defines the navigation paths for the application. The router maps URL-like paths to components. `provideRouter` is used to bootstrap the router in a standalone app.',
    tags: ['angular', 'routing', 'router', 'routes', 'navigation'],
  },
  {
    id: 'angular-12',
    category: 'Angular',
    subCategory: 'html',
    title: 'Router Outlet and Router Link',
    snippet: `<!-- In your main app component -->
<router-outlet></router-outlet>

<!-- In a navigation component -->
<a routerLink="/home">Home</a>
<a [routerLink]="['/products', productId]">Product Details</a>`,
    description: '`<router-outlet>` is a placeholder where the router renders the matched component. `routerLink` is a directive for creating navigation links.',
    tags: ['angular', 'routing', 'router-outlet', 'routerlink', 'navigation'],
  },
  {
    id: 'angular-13',
    category: 'Angular',
    subCategory: 'typescript',
    title: 'HttpClient GET Request',
    snippet: `import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
}`,
    description: 'Angular\'s `HttpClient` makes HTTP requests. Methods like `get` return an RxJS `Observable`. You must subscribe to the observable in your component to trigger the request and receive the data. Requires `provideHttpClient()` in `bootstrapApplication`.',
    tags: ['angular', 'http', 'httpclient', 'api', 'rest', 'observable', 'rxjs'],
  },
  {
    id: 'angular-14',
    category: 'Angular',
    subCategory: 'typescript',
    title: 'Subscribing to an Observable',
    snippet: `export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}`,
    description: 'To get the data from an Observable returned by the HttpClient, you call its `subscribe()` method, passing a callback function to handle the emitted data.',
    tags: ['angular', 'http', 'observable', 'rxjs', 'subscribe', 'async'],
  },
  {
    id: 'angular-15',
    category: 'Angular',
    subCategory: 'typescript',
    title: 'Component Communication: @Input',
    snippet: `// child.component.ts
import { Component, Input } from '@angular/core';

@Component({ ... })
export class ChildComponent {
  @Input() message: string;
}

// parent.component.html
<app-child [message]="parentMessage"></app-child>`,
    description: 'The `@Input()` decorator in a child component or directive signifies that a property can receive its value from its parent component. It is the primary way to pass data from a parent to a child.',
    tags: ['angular', 'component', 'communication', 'input', 'parent-child'],
  },
  {
    id: 'angular-16',
    category: 'Angular',
    subCategory: 'typescript',
    title: 'Component Communication: @Output',
    snippet: `// child.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({ ... })
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Hello from child!");
  }
}

// parent.component.html
<app-child (messageEvent)="receiveMessage($event)"></app-child>`,
    description: 'The `@Output()` decorator marks a property in a child component as a doorway through which data can travel from the child to the parent. The child component uses the `@Output()` property to raise an event to notify the parent of a change.',
    tags: ['angular', 'component', 'communication', 'output', 'eventemitter', 'child-parent'],
  },
];