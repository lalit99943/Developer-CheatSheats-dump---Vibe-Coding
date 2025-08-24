import { CheatSheet } from '../../types';

export const javaBasicsCheatSheets: CheatSheet[] = [
  {
    id: 'java-1',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'Main Method and Program Structure',
    snippet: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    description: 'The entry point of any Java application. The `main` method must be `public`, `static`, `void`, and accept an array of strings as an argument.',
    tags: ['java', 'basics', 'main method', 'entry point', 'class'],
  },
  {
    id: 'java-2',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'Primitive Data Types',
    snippet: `int myNum = 5;               // Integer
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
double myDouble = 19.99d;    // Double precision float
long myLong = 15000000000L;  // Long integer`,
    description: 'Java has eight primitive data types: byte, short, int, long, float, double, boolean, and char. They store simple values.',
    tags: ['java', 'basics', 'data types', 'primitive', 'variables'],
  },
  {
    id: 'java-3',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'Control Flow: If-Else Statement',
    snippet: `int time = 20;
if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}`,
    description: 'Executes a block of code if a specified condition is true. An optional `else` block can be used for the false case.',
    tags: ['java', 'basics', 'control flow', 'if-else', 'conditional'],
  },
  {
    id: 'java-4',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'Control Flow: For Loop',
    snippet: `for (int i = 0; i < 5; i++) {
  System.out.println(i);
}`,
    description: 'The `for` loop iterates over a block of code a specified number of times. It is composed of an initialization, a condition, and an increment/decrement statement.',
    tags: ['java', 'basics', 'control flow', 'for loop', 'iteration'],
  },
   {
    id: 'java-5',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'Class and Object',
    snippet: `public class Car {
  String color = "red";
  void drive() {
    System.out.println("Driving the car.");
  }
}

// In another file or method:
Car myCar = new Car(); // Create an object
System.out.println(myCar.color); // Access attribute
myCar.drive(); // Call method`,
    description: 'A class is a blueprint for creating objects. An object is an instance of a class, with its own state (attributes) and behavior (methods).',
    tags: ['java', 'basics', 'oop', 'class', 'object', 'instance'],
  },
  {
    id: 'java-6',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'Constructor',
    snippet: `public class Dog {
  String name;

  // Constructor
  public Dog(String dogName) {
    name = dogName;
  }
}

// Create an object using the constructor
Dog myDog = new Dog("Buddy");`,
    description: 'A special method used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.',
    tags: ['java', 'basics', 'oop', 'constructor', 'object'],
  },
  {
    id: 'java-7',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'Inheritance (Extends)',
    snippet: `class Animal { // Superclass
  void eat() { System.out.println("This animal eats food."); }
}

class Dog extends Animal { // Subclass
  void bark() { System.out.println("The dog barks."); }
}

// Usage:
Dog myDog = new Dog();
myDog.eat();  // Inherited method
myDog.bark(); // Own method`,
    description: 'Inheritance is an OOP concept where a class (subclass) inherits attributes and methods from another class (superclass). The `extends` keyword is used.',
    tags: ['java', 'basics', 'oop', 'inheritance', 'extends', 'subclass'],
  },
  {
    id: 'java-8',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'Interface (Implements)',
    snippet: `interface Drivable { // Interface
  public void drive();
}

class Car implements Drivable { // Implementing class
  public void drive() {
    System.out.println("The car is driving.");
  }
}`,
    description: 'An interface is a completely "abstract class" that is used to group related methods with empty bodies. A class can implement an interface, inheriting the abstract methods.',
    tags: ['java', 'basics', 'oop', 'interface', 'implements', 'abstraction'],
  },
  {
    id: 'java-9',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'ArrayList',
    snippet: `import java.util.ArrayList;

ArrayList<String> cars = new ArrayList<String>();
cars.add("Volvo");
cars.add("BMW");
System.out.println(cars.get(0)); // Get element by index
cars.remove(0); // Remove element
System.out.println(cars.size()); // Get size`,
    description: 'The `ArrayList` class is a resizable array, which can be found in the `java.util` package. It provides a dynamic array in Java.',
    tags: ['java', 'basics', 'collections', 'arraylist', 'data structures'],
  },
  {
    id: 'java-10',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'HashMap',
    snippet: `import java.util.HashMap;

HashMap<String, String> capitalCities = new HashMap<String, String>();
capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");
System.out.println(capitalCities.get("England")); // Get value by key
capitalCities.remove("England"); // Remove key-value pair`,
    description: 'The `HashMap` class stores items in "key/value" pairs, and you can access them by an index of another type (e.g. a String). One object is used as a key (index) to another object (value).',
    tags: ['java', 'basics', 'collections', 'hashmap', 'map', 'data structures'],
  },
  {
    id: 'java-11',
    category: 'Java Basics',
    subCategory: 'java',
    title: 'Exception Handling (try-catch)',
    snippet: `try {
  int[] myNumbers = {1, 2, 3};
  System.out.println(myNumbers[10]);
} catch (Exception e) {
  System.out.println("Something went wrong.");
} finally {
  System.out.println("The 'try catch' is finished.");
}`,
    description: 'The `try` statement allows you to define a block of code to be tested for errors while it is being executed. The `catch` statement allows you to define a block of code to be executed, if an error occurs. The `finally` statement lets you execute code, after try...catch, regardless of the result.',
    tags: ['java', 'basics', 'exception', 'try-catch', 'error handling'],
  },
];