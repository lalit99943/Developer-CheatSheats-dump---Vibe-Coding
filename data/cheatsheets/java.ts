import { CheatSheet } from '../../types';

export const javaCheatSheets: CheatSheet[] = [
  {
    id: 'java-9',
    category: 'Java',
    subCategory: 'java',
    title: 'ArrayList',
    type: 'code',
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
    id: 'java-5',
    category: 'Java',
    subCategory: 'java',
    title: 'Class and Object',
    type: 'code',
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
    category: 'Java',
    subCategory: 'java',
    title: 'Constructor',
    type: 'code',
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
    id: 'java-4',
    category: 'Java',
    subCategory: 'java',
    title: 'Control Flow: For Loop',
    type: 'code',
    snippet: `for (int i = 0; i < 5; i++) {
  System.out.println(i);
}`,
    description: 'The `for` loop iterates over a block of code a specified number of times. It is composed of an initialization, a condition, and an increment/decrement statement.',
    tags: ['java', 'basics', 'control flow', 'for loop', 'iteration'],
  },
  {
    id: 'java-3',
    category: 'Java',
    subCategory: 'java',
    title: 'Control Flow: If-Else Statement',
    type: 'code',
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
    id: 'java8-13',
    category: 'Java',
    subCategory: 'java',
    title: 'Date-Time API: LocalDate',
    type: 'code',
    snippet: 'LocalDate today = LocalDate.now();\nLocalDate tomorrow = today.plusDays(1);\nint year = today.getYear();\nDayOfWeek day = today.getDayOfWeek();',
    description: '`LocalDate` is an immutable date-time object that represents a date, often viewed as year-month-day. It is part of the new, improved, and thread-safe Date-Time API.',
    tags: ['java8', 'date', 'time', 'localdate', 'datetime api'],
  },
  {
    id: 'java8-14',
    category: 'Java',
    subCategory: 'java',
    title: 'Date-Time API: LocalDateTime',
    type: 'code',
    snippet: 'LocalDateTime now = LocalDateTime.now();\nLocalDateTime specificDateTime = LocalDateTime.of(2024, Month.JULY, 20, 10, 30);',
    description: '`LocalDateTime` is an immutable date-time object that represents a date-time, often viewed as year-month-day-hour-minute-second.',
    tags: ['java8', 'date', 'time', 'localdatetime', 'datetime api'],
  },
  {
    id: 'java8-15',
    category: 'Java',
    subCategory: 'java',
    title: 'Date-Time API: Formatting',
    type: 'code',
    snippet: 'LocalDateTime now = LocalDateTime.now();\nDateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");\nString formattedDateTime = now.format(formatter);',
    description: 'The `DateTimeFormatter` class provides various predefined formats and allows for custom patterns to format and parse date-time objects.',
    tags: ['java8', 'date', 'time', 'format', 'datetimeformatter'],
  },
  {
    id: 'java8-7',
    category: 'Java',
    subCategory: 'java',
    title: 'Default Methods in Interfaces',
    type: 'code',
    snippet: 'interface MyInterface {\n    void regularMethod();\n    default void defaultMethod() {\n        System.out.println("This is a default method.");\n    }\n}',
    description: 'Default methods enable you to add new functionality to existing interfaces without breaking older implementations of these interfaces.',
    tags: ['java8', 'interface', 'default method', 'evolution'],
  },
  {
    id: 'java-11',
    category: 'Java',
    subCategory: 'java',
    title: 'Exception Handling (try-catch)',
    type: 'code',
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
  {
    id: 'java8-12',
    category: 'Java',
    subCategory: 'java',
    title: 'Functional Interfaces',
    type: 'code',
    snippet: '@FunctionalInterface\ninterface MyFunctionalInterface {\n    void execute();\n    // Only one abstract method is allowed\n}',
    description: 'An interface that has exactly one abstract method. The `@FunctionalInterface` annotation is optional but recommended. Lambdas can only be used with functional interfaces.',
    tags: ['java8', 'functional interface', 'lambda'],
  },
  {
    id: 'java-10',
    category: 'Java',
    subCategory: 'java',
    title: 'HashMap',
    type: 'code',
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
    id: 'java-7',
    category: 'Java',
    subCategory: 'java',
    title: 'Inheritance (Extends)',
    type: 'code',
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
    category: 'Java',
    subCategory: 'java',
    title: 'Interface (Implements)',
    type: 'code',
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
    id: 'java8-1',
    category: 'Java',
    subCategory: 'java',
    title: 'Lambda Expression Basics',
    type: 'code',
    snippet: '// Old way:\nRunnable oldRunnable = new Runnable(){\n    @Override\n    public void run(){\n        System.out.println("Old Way!");\n    }\n};\n\n// Java 8 way:\nRunnable newRunnable = () -> System.out.println("New Way!");',
    description: 'A short block of code which takes in parameters and returns a value. Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.',
    tags: ['java8', 'lambda', 'functional programming'],
  },
  {
    id: 'java-1',
    category: 'Java',
    subCategory: 'java',
    title: 'Main Method and Program Structure',
    type: 'code',
    snippet: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    description: 'The entry point of any Java application. The `main` method must be `public`, `static`, `void`, and accept an array of strings as an argument.',
    tags: ['java', 'basics', 'main method', 'entry point', 'class'],
  },
  {
    id: 'java8-8',
    category: 'Java',
    subCategory: 'java',
    title: 'Method References',
    type: 'code',
    snippet: 'List<String> list = ...;\n// Instead of s -> s.toUpperCase()\nlist.stream().map(String::toUpperCase);',
    description: 'Method references are a special type of lambda expression. They are often used to create simple lambda expressions by referencing existing methods. They can make the code more readable.',
    tags: ['java8', 'method reference', 'lambda', 'shorthand'],
  },
  {
    id: 'java8-6',
    category: 'Java',
    subCategory: 'java',
    title: 'Optional Class',
    type: 'code',
    snippet: 'Optional<String> optional = Optional.ofNullable(someMethodThatCouldReturnNull());\nString value = optional.orElse("default value");',
    description: 'A container object which may or may not contain a non-null value. `Optional` is a public final class and used to deal with `NullPointerException` in Java application.',
    tags: ['java8', 'optional', 'nullpointerexception', 'npe'],
  },
  {
    id: 'java-2',
    category: 'Java',
    subCategory: 'java',
    title: 'Primitive Data Types',
    type: 'code',
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
    id: 'java8-17',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: anyMatch, allMatch, noneMatch',
    type: 'code',
    snippet: 'boolean hasJ = list.stream().anyMatch(s -> s.startsWith("j"));\nboolean allShort = list.stream().allMatch(s -> s.length() < 10);\nboolean noZ = list.stream().noneMatch(s -> s.contains("z"));',
    description: 'These are terminal operations that take a predicate and return a boolean. `anyMatch` checks if at least one element matches, `allMatch` checks if all elements match, and `noneMatch` checks if no elements match.',
    tags: ['java8', 'stream', 'match', 'predicate', 'terminal'],
  },
  {
    id: 'java8-4',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: Collect',
    type: 'code',
    snippet: 'List<String> list = ...;\nSet<String> set = list.stream().collect(Collectors.toSet());\nMap<String, Integer> map = list.stream().collect(Collectors.toMap(s -> s, String::length));',
    description: 'The `collect` method is a terminal operation that performs a mutable reduction operation on the elements of this stream using a Collector. It is used to get the stream elements into a List, Set, or Map.',
    tags: ['java8', 'stream', 'collect', 'terminal', 'collections'],
  },
  {
    id: 'java8-2',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: Filter',
    type: 'code',
    snippet: 'List<String> list = Arrays.asList("java", "python", "c++");\nList<String> result = list.stream()\n                         .filter(s -> s.startsWith("j"))\n                         .collect(Collectors.toList());',
    description: 'The `filter` method is an intermediate operation that returns a new stream consisting of the elements that match a given predicate (a boolean-valued function).',
    tags: ['java8', 'stream', 'filter', 'collections'],
  },
  {
    id: 'java8-9',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: findFirst',
    type: 'code',
    snippet: 'List<String> list = Arrays.asList("apple", "banana", "apricot");\nOptional<String> firstA = list.stream()\n                             .filter(s -> s.startsWith("a"))\n                             .findFirst();',
    description: '`findFirst` is a terminal operation that returns an `Optional` describing the first element of this stream, or an empty `Optional` if the stream is empty.',
    tags: ['java8', 'stream', 'findfirst', 'optional', 'terminal'],
  },
  {
    id: 'java8-16',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: FlatMap',
    type: 'code',
    snippet: 'List<List<String>> listOfLists = Arrays.asList(Arrays.asList("a", "b"), Arrays.asList("c", "d"));\nList<String> flatList = listOfLists.stream()\n                                   .flatMap(Collection::stream)\n                                   .collect(Collectors.toList());\n// result: ["a", "b", "c", "d"]',
    description: 'The `flatMap` method is used to transform each element of a stream into another stream and then flatten the resulting streams into a single stream.',
    tags: ['java8', 'stream', 'flatmap', 'flatten', 'collections'],
  },
  {
    id: 'java8-5',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: forEach',
    type: 'code',
    snippet: 'List<String> list = Arrays.asList("a", "b", "c");\nlist.stream().forEach(System.out::println);',
    description: 'The `forEach` method is a terminal operation that performs an action for each element of this stream. It is a simple way to iterate over a stream.',
    tags: ['java8', 'stream', 'foreach', 'iteration'],
  },
  {
    id: 'java8-18',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: groupingBy Collector',
    type: 'code',
    snippet: 'Map<Integer, List<String>> byLength = list.stream()\n    .collect(Collectors.groupingBy(String::length));',
    description: 'A powerful collector that groups elements of a stream into a Map based on a classification function.',
    tags: ['java8', 'stream', 'collect', 'groupingby', 'map'],
  },
  {
    id: 'java8-3',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: Map',
    type: 'code',
    snippet: 'List<String> list = Arrays.asList("java", "python", "c++");\nList<String> result = list.stream()\n                         .map(String::toUpperCase)\n                         .collect(Collectors.toList());',
    description: 'The `map` method is an intermediate operation that returns a stream consisting of the results of applying the given function to the elements of this stream.',
    tags: ['java8', 'stream', 'map', 'transform', 'collections'],
  },
  {
    id: 'java8-11',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: reduce',
    type: 'code',
    snippet: 'List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nint sum = numbers.stream().reduce(0, (a, b) -> a + b);\n// Simpler version:\nint sum2 = numbers.stream().reduce(0, Integer::sum);',
    description: 'The `reduce` method is a terminal operation that performs a reduction on the elements of the stream, using an initial value and an associative accumulation function, and returns the reduced value.',
    tags: ['java8', 'stream', 'reduce', 'aggregate', 'sum'],
  },
  {
    id: 'java8-10',
    category: 'Java',
    subCategory: 'java',
    title: 'Stream API: sorted',
    type: 'code',
    snippet: 'List<String> list = Arrays.asList("banana", "apple", "cherry");\nList<String> sortedList = list.stream()\n                               .sorted()\n                               .collect(Collectors.toList());',
    description: 'The `sorted` method is an intermediate operation that returns a stream consisting of the elements of this stream, sorted according to natural order.',
    tags: ['java8', 'stream', 'sorted', 'sort', 'order'],
  },
];
