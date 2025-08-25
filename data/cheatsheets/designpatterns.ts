import { CheatSheet } from '../../types';

export const designPatternsCheatSheets: CheatSheet[] = [
  {
    id: 'dp-1',
    category: 'Design Patterns',
    subCategory: 'javascript',
    title: 'Singleton Pattern',
    type: 'code',
    snippet: `class Database {
    constructor(data) {
        if (Database.instance) {
            return Database.instance;
        }
        this._data = data;
        Database.instance = this;
    }
}

const mongo = new Database('mongo');
const mysql = new Database('mysql'); // mongo and mysql are the same instance`,
    description: 'The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. It is useful for managing shared resources like a database connection or a logger.',
    tags: ['design pattern', 'singleton', 'creational', 'javascript'],
  },
  {
    id: 'dp-2',
    category: 'Design Patterns',
    subCategory: 'javascript',
    title: 'Factory Pattern',
    type: 'code',
    snippet: `class Employee {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class EmployeeFactory {
  create(name, type) {
    switch (type) {
      case 1:
        return new Employee(name, 'full-time');
      case 2:
        return new Employee(name, 'part-time');
    }
  }
}

const factory = new EmployeeFactory();
const emp1 = factory.create('John', 1);`,
    description: 'The Factory pattern provides a generic interface for creating objects in a superclass, but lets subclasses alter the type of objects that will be created. It abstracts the object creation process.',
    tags: ['design pattern', 'factory', 'creational', 'javascript'],
  },
  {
    id: 'dp-3',
    category: 'Design Patterns',
    subCategory: 'javascript',
    title: 'Observer Pattern',
    type: 'code',
    snippet: `class Subject {
  constructor() { this.observers = []; }
  subscribe(observer) { this.observers.push(observer); }
  unsubscribe(observer) { this.observers = this.observers.filter(obs => obs !== observer); }
  notify(data) { this.observers.forEach(observer => observer.update(data)); }
}

class Observer {
  update(data) { console.log('Observer received:', data); }
}

const subject = new Subject();
const observer1 = new Observer();
subject.subscribe(observer1);
subject.notify('New data!');`,
    description: 'The Observer pattern defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically. This is common in event-driven systems.',
    tags: ['design pattern', 'observer', 'behavioral', 'javascript', 'pub-sub'],
  },
  {
    id: 'dp-observer-diagram',
    category: 'Design Patterns',
    subCategory: 'svg',
    title: 'Observer Pattern Diagram',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .interface-box { fill: #0f172a; stroke: #475569; rx: 5; }
        .title { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .method { font-size: 11px; fill: #94a3b8; font-family: 'Fira Code', monospace; }
        .arrow { stroke: #64748b; stroke-width: 1.5; }
        .dashed-arrow { stroke-dasharray: 4, 4; }
        .label { font-size: 11px; fill: #94a3b8; }
    </style>
    <defs>
        <marker id="dp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker>
        <marker id="dp-implement-arrow" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="none" stroke="#64748b"/></marker>
    </defs>
    
    <!-- Subject -->
    <rect x="20" y="80" width="140" height="90" class="box"/>
    <text x="90" y="100" class="title">Subject</text>
    <line x1="30" y1="105" x2="150" y2="105" stroke="#475569"/>
    <text x="30" y="125" class="method">+ subscribe(obs)</text>
    <text x="30" y="140" class="method">+ unsubscribe(obs)</text>
    <text x="30" y="155" class="method">+ notify()</text>

    <!-- Observer Interface -->
    <rect x="340" y="20" width="140" height="60" class="interface-box"/>
    <text x="410" y="40" class="title">&lt;&lt;Observer&gt;&gt;</text>
    <line x1="350" y1="45" x2="470" y2="45" stroke="#475569"/>
    <text x="350" y="65" class="method">+ update()</text>
    
    <!-- Concrete Observer -->
    <rect x="340" y="140" width="140" height="60" class="box"/>
    <text x="410" y="160" class="title">ConcreteObserver</text>
    <line x1="350" y1="165" x2="470" y2="165" stroke="#475569"/>
    <text x="350" y="185" class="method">+ update()</text>

    <!-- Relationships -->
    <line x1="160" y1="125" x2="340" y2="50" class="arrow" marker-end="url(#dp-arrow)"/>
    <text x="230" y="75" class="label">notifies</text>

    <line x1="410" y1="80" x2="410" y2="140" class="arrow dashed-arrow" marker-start="url(#dp-implement-arrow)"/>
    <text x="415" y="115" class="label">implements</text>
</svg>`,
    description: 'A diagram of the Observer pattern. The Subject maintains a list of Observers. When the Subject\'s state changes, it calls the notify() method, which in turn calls the update() method on each subscribed Observer. This decouples the Subject from its observers.',
    tags: ['design pattern', 'observer', 'behavioral', 'diagram', 'uml', 'svg'],
  },
];
