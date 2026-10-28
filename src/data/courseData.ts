export interface CourseDay {
  dayNumber: number
  title: string
  topic: string
  conceptExplanation: string
  javaExample?: string
  practiceQuestions: string[]
  assessmentOrExercise?: string
}

export interface CourseWeek {
  weekNumber: number
  title: string
  focus: string
  days: CourseDay[]
}

export interface MonthCurriculum {
  monthNumber: number
  title: string
  tagline: string
  daysRange: string
  expectedOutcome: string
  deliverable: string
  problemCountTarget: string
  color: string
  accent: string
  border: string
  weeks: CourseWeek[]
}

export const COURSE_CURRICULUM: MonthCurriculum[] = [
  {
    monthNumber: 1,
    title: 'Java Fundamentals',
    tagline: 'Build basic programming fluency: syntax, variables, I/O, operators, conditions, loops, methods, arrays, strings.',
    daysRange: 'Days 1–28',
    expectedOutcome: 'Strong foundations in imperative Java, logic building, loop structures, and basic array/string algorithms.',
    deliverable: 'Console Student Grade Calculator with validation and summary. Aim for 40+ small programs.',
    problemCountTarget: '65 Practice Problems',
    color: 'from-blue-600 to-blue-800',
    accent: 'text-blue-400',
    border: 'border-blue-500/30',
    weeks: [
      {
        weekNumber: 1,
        title: 'Getting Started',
        focus: 'JDK/JVM setup, structure, primitive types, operators, and basic I/O.',
        days: [
          {
            dayNumber: 1,
            title: 'Java Overview & Hello World',
            topic: 'Java overview, features, JDK/JRE/JVM, install JDK and IDE, Hello World',
            conceptExplanation: 'Understanding bytecode execution across the JVM, compiling with javac, and running with java.',
            javaExample: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java World!");\n    }\n}`,
            practiceQuestions: [
              '1. Print your name, department, and college on separate lines.',
              '2. Print a welcome message using newline and tab escape sequences.',
            ],
          },
          {
            dayNumber: 2,
            title: 'Program Structure & Syntax',
            topic: 'Program structure, class, main method, statements, comments, compile/run',
            conceptExplanation: 'Anatomy of a class file, public static void main signatures, and single/multiline comments.',
            javaExample: `// Program structure demonstration\npublic class StructureDemo {\n    public static void main(String[] args) {\n        System.out.println("Valid Java statements end with semicolons.");\n    }\n}`,
            practiceQuestions: ['Declare a class, compile via command line, and execute successfully.'],
          },
          {
            dayNumber: 3,
            title: 'Variables & Data Types',
            topic: 'Variables, primitive types, constants, initialization',
            conceptExplanation: 'Eight primitive types (byte, short, int, long, float, double, char, boolean), memory footprints, and final constants.',
            javaExample: `int studentAge = 20;\nfinal double PI = 3.14159;\nboolean isEnrolled = true;\nchar grade = 'A';`,
            practiceQuestions: [
              '3. Declare and display variables of each primitive type.',
              '10. Swap two numbers using a temporary variable.',
              '11. Swap two integers without a temporary variable.',
            ],
          },
          {
            dayNumber: 4,
            title: 'Input / Output with Scanner',
            topic: 'Output and Scanner input',
            conceptExplanation: 'Using java.util.Scanner to parse user console inputs including nextInt(), nextDouble(), and nextLine().',
            javaExample: `import java.util.Scanner;\nScanner sc = new Scanner(System.in);\nSystem.out.print("Enter your name: ");\nString name = sc.nextLine();`,
            practiceQuestions: [
              '4. Read a name and age with Scanner and print a formatted sentence.',
              '12. Read five subject marks and calculate total and average.',
            ],
          },
          {
            dayNumber: 5,
            title: 'Operators & Expressions',
            topic: 'Arithmetic, relational, logical, assignment, increment/decrement operators',
            conceptExplanation: 'Precedence and associativity of arithmetic (+, -, *, /, %), relational, and short-circuit logical operators (&&, ||, !).',
            javaExample: `int a = 10, b = 20;\nint sum = a + b;\nboolean isGreater = (b > a) && (a > 0);`,
            practiceQuestions: [
              '5. Read two integers and display sum, difference, product, quotient, and remainder.',
              '14. Calculate simple interest from principal, rate, and time.',
            ],
          },
          {
            dayNumber: 6,
            title: 'Type Conversion & Casting',
            topic: 'Type conversion, casting, integer division',
            conceptExplanation: 'Widening vs narrowing casting, integer truncation pitfalls, and handling precision loss.',
            javaExample: `int num = 10;\ndouble converted = num; // Widening\ndouble price = 99.99;\nint truncated = (int) price; // Narrowing`,
            practiceQuestions: [
              '15. Show the result of casting a decimal to int and explain truncation.',
              '6. Convert Celsius to Fahrenheit.',
              '7. Convert centimeters into meters and remaining centimeters.',
            ],
          },
          {
            dayNumber: 7,
            title: 'Week 1 Review & Assessment',
            topic: 'Revision and beginner assessment',
            conceptExplanation: 'Consolidation of variables, arithmetic, Scanner I/O, and operator rules.',
            practiceQuestions: [
              '8. Calculate rectangle area and perimeter.',
              '9. Calculate circle area and circumference using a constant for pi.',
            ],
            assessmentOrExercise: 'Timed beginner check: complete 5 basic I/O and calculation scripts in 45 minutes.',
          },
        ],
      },
      {
        weekNumber: 2,
        title: 'Decisions and Loops',
        focus: 'Control flow branching, condition evaluation, and repetition logic.',
        days: [
          {
            dayNumber: 8,
            title: 'Conditional Branching: if / else',
            topic: 'if, if-else, nested if',
            conceptExplanation: 'Boolean branching, truth evaluation, and nested condition structures.',
            javaExample: `if (score >= 90) {\n    System.out.println("Grade A");\n} else {\n    System.out.println("Needs improvement");\n}`,
            practiceQuestions: [
              '16. Check whether an integer is positive, negative, or zero.',
              '17. Check whether a number is even or odd.',
              '18. Find the larger of two numbers.',
            ],
          },
          {
            dayNumber: 9,
            title: 'Multi-Way Branches & switch',
            topic: 'else-if ladder and switch',
            conceptExplanation: 'Multi-condition testing with else-if ladders and constant matching with switch statements.',
            javaExample: `switch (dayOfWeek) {\n    case 1 -> System.out.println("Monday");\n    case 7 -> System.out.println("Sunday");\n    default -> System.out.println("Weekday");\n}`,
            practiceQuestions: [
              '19. Find the largest of three numbers.',
              '20. Check whether a year is a leap year.',
              '21. Check whether a character is a vowel or consonant.',
              '23. Build a calculator using switch for +, -, *, and /.',
            ],
          },
          {
            dayNumber: 10,
            title: 'For Loops & Counters',
            topic: 'for loop, counters, sums, multiplication tables',
            conceptExplanation: 'Loop initialization, condition, step iteration, accumulator variables, and table generation.',
            javaExample: `int sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    sum += i;\n}`,
            practiceQuestions: [
              '31. Print integers from 1 to N.',
              '32. Print even numbers from 1 to N.',
              '33. Find the sum from 1 to N.',
              '34. Print a multiplication table for a given number.',
            ],
          },
          {
            dayNumber: 11,
            title: 'While and Do-While Loops',
            topic: 'while and do-while',
            conceptExplanation: 'Entry-controlled while loops vs exit-controlled do-while loops for menu-driven applications.',
            javaExample: `int n = 1234, count = 0;\nwhile (n > 0) {\n    count++;\n    n /= 10;\n}`,
            practiceQuestions: [
              '35. Calculate factorial using a loop.',
              '36. Count digits in an integer, including zero.',
              '37. Reverse the digits of an integer.',
            ],
          },
          {
            dayNumber: 12,
            title: 'Nested Loops & Patterns',
            topic: 'Nested loops and pattern logic',
            conceptExplanation: 'Row and column coordinate tracking, triangular printing, and loop index relationships.',
            javaExample: `for (int r = 1; r <= 5; r++) {\n    for (int c = 1; c <= r; c++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
            practiceQuestions: [
              '45. Print a right triangle and a number pattern.',
              '30. Check whether three angles form a valid triangle.',
            ],
          },
          {
            dayNumber: 13,
            title: 'Jump Statements',
            topic: 'break, continue, return basics',
            conceptExplanation: 'Premature termination with break, skipping iterations with continue, and exiting methods with return.',
            javaExample: `for (int i = 1; i <= 20; i++) {\n    if (i % 5 == 0) continue;\n    if (i == 17) break;\n    System.out.print(i + " ");\n}`,
            practiceQuestions: [
              '39. Check whether a number is prime.',
              '40. Print primes in an inclusive range.',
            ],
          },
          {
            dayNumber: 14,
            title: 'Weekly Coding Assessment',
            topic: 'Weekly coding test',
            conceptExplanation: 'Evaluating loop logic, prime determination, and pattern printing without reference code.',
            practiceQuestions: [
              '41. Find GCD of two positive integers.',
              '42. Find LCM using GCD.',
              '43. Calculate the sum of digits.',
              '44. Check whether a number is an Armstrong number.',
            ],
          },
        ],
      },
      {
        weekNumber: 3,
        title: 'Methods, Arrays, Strings',
        focus: 'Modular code design, array indexing, and string processing.',
        days: [
          {
            dayNumber: 15,
            title: 'Methods & Return Types',
            topic: 'Methods, parameters, arguments, return values, void',
            conceptExplanation: 'Writing reusable static methods, passing values by value, and returning primitive and object results.',
            javaExample: `public static int add(int a, int b) {\n    return a + b;\n}`,
            practiceQuestions: ['46. Write a method returning the maximum of two integers.'],
          },
          {
            dayNumber: 16,
            title: 'Method Overloading & Scope',
            topic: 'Method calls, overloading, local scope',
            conceptExplanation: 'Differentiating overloaded signatures by parameter type and count, and variable lifetime.',
            javaExample: `public static double area(double radius) { return Math.PI * radius * radius; }\npublic static double area(double w, double h) { return w * h; }`,
            practiceQuestions: [
              '47. Overload methods to calculate circle and rectangle areas.',
              '48. Write a method that checks primality.',
            ],
          },
          {
            dayNumber: 17,
            title: '1D Arrays & Traversal',
            topic: '1D arrays, indexing, length, traversal',
            conceptExplanation: 'Array allocation with new, zero-based indexing, array.length property, and ArrayIndexOutOfBoundsException.',
            javaExample: `int[] scores = new int[5];\nfor (int i = 0; i < scores.length; i++) {\n    System.out.println(scores[i]);\n}`,
            practiceQuestions: [
              '49. Read N array values and print them in reverse order.',
              '50. Find array sum and average.',
            ],
          },
          {
            dayNumber: 18,
            title: 'Array Min/Max & Search',
            topic: 'Array sum, min/max, search',
            conceptExplanation: 'Linear scanning algorithms, tracking extreme values, and sentinel returns.',
            javaExample: `int max = arr[0];\nfor (int val : arr) if (val > max) max = val;`,
            practiceQuestions: [
              '51. Find minimum and maximum array values.',
              '52. Implement linear search returning index or -1.',
              '53. Count even and odd array values.',
              '55. Find the second-largest distinct value and handle its absence.',
            ],
          },
          {
            dayNumber: 19,
            title: '2D Arrays & Matrices',
            topic: '2D arrays and matrix operations',
            conceptExplanation: 'Row-major 2D array representation, matrix addition, and transpose calculations.',
            javaExample: `int[][] matrix = { {1, 2}, {3, 4} };\nfor (int[] row : matrix) {\n    for (int col : row) System.out.print(col + " ");\n}`,
            practiceQuestions: [
              '58. Add two compatible matrices.',
              '59. Find the transpose of a matrix.',
            ],
          },
          {
            dayNumber: 20,
            title: 'String Fundamentals & Methods',
            topic: 'String basics and common methods',
            conceptExplanation: 'String indexing, charAt, substring, indexOf, toLowerCase, and equals() vs ==.',
            javaExample: `String s = "Java Programming";\nSystem.out.println(s.substring(0, 4)); // "Java"`,
            practiceQuestions: [
              '60. Count vowels, consonants, digits, and spaces in a string.',
              '61. Reverse a string without StringBuilder.reverse().',
              '62. Check string palindrome ignoring case.',
            ],
          },
          {
            dayNumber: 21,
            title: 'Week 3 Revision & Test',
            topic: 'Revision and assessment',
            conceptExplanation: 'Consolidated review of methods, arrays, matrices, and string manipulation.',
            practiceQuestions: [
              '63. Count words while handling extra spaces.',
              '64. Count occurrences of a chosen character.',
            ],
          },
        ],
      },
      {
        weekNumber: 4,
        title: 'Practice and Project',
        focus: 'Comprehensive problem sets and console capstone project.',
        days: [
          {
            dayNumber: 22,
            title: 'Number Problems Intensive',
            topic: 'Number problems - prime, factorial, reverse, palindrome',
            conceptExplanation: 'Algorithmic number operations without relying on built-in library shortcuts.',
            practiceQuestions: ['Review problems 35–44 from workbook.'],
          },
          {
            dayNumber: 23,
            title: 'Pattern Practice & Loop Tracing',
            topic: 'Pattern practice and loop tracing',
            conceptExplanation: 'Memory state table tracing and nested iteration coordinate transformation.',
            practiceQuestions: ['Complete 4 pyramid and diamond number pattern variations.'],
          },
          {
            dayNumber: 24,
            title: 'Array and String Problem Set',
            topic: 'Array/string problem set',
            conceptExplanation: 'Combining array rotation, in-place reversing, and palindrome verification.',
            practiceQuestions: [
              '56. Rotate an array right by one position.',
              '57. Merge two arrays into a third array.',
            ],
          },
          {
            dayNumber: 25,
            title: 'Project Planning: Grade Calculator',
            topic: 'Plan Student Grade Calculator',
            conceptExplanation: 'Designing console menu structure, data inputs, and boundary validations.',
            practiceQuestions: ['Draft method signatures for inputScores(), calcAverage(), and assignGrade().'],
          },
          {
            dayNumber: 26,
            title: 'Project Implementation: Core Logic',
            topic: 'Implement inputs, total, average, grade',
            conceptExplanation: 'Implementing mathematical calculations, percentage weighting, and letter grading.',
            practiceQuestions: ['Implement grading logic with boundary testing for 0, 100, and negative scores.'],
          },
          {
            dayNumber: 27,
            title: 'Project Polish: Multi-Student & Validation',
            topic: 'Validate, support multiple students, debug',
            conceptExplanation: 'Storing multiple student records in parallel arrays or custom objects with robust error recovery.',
            practiceQuestions: ['65. Build a multi-student Grade Calculator with validation and summary.'],
          },
          {
            dayNumber: 28,
            title: 'Month 1 Assessment & Milestone',
            topic: 'Month assessment',
            conceptExplanation: 'Month 1 exit assessment: write and explain basic Java programs independently.',
            practiceQuestions: ['Complete Month 1 review checklist (65 total workbook problems).'],
          },
        ],
      },
    ],
  },
  {
    monthNumber: 2,
    title: 'OOP and Intermediate Java',
    tagline: 'Design programs with classes and objects; learn OOP principles, recursion, and core language features.',
    daysRange: 'Days 29–56',
    expectedOutcome: 'Fluency in object-oriented architecture: encapsulation, inheritance, polymorphism, abstract classes, interfaces, and recursion.',
    deliverable: 'Console Student Management System with add/list/search/update/delete using in-memory data. Aim for 50+ exercises.',
    problemCountTarget: '65 Practice Problems',
    color: 'from-violet-600 to-violet-800',
    accent: 'text-violet-400',
    border: 'border-violet-500/30',
    weeks: [
      {
        weekNumber: 5,
        title: 'OOP Foundations',
        focus: 'Classes, objects, fields, constructors, and static members.',
        days: [
          {
            dayNumber: 29,
            title: 'Procedural vs OOP Paradigms',
            topic: 'Procedural vs OOP, core terminology',
            conceptExplanation: 'Transitioning from procedural code to modeling domain entities with states and behaviors.',
            practiceQuestions: ['1. Create a Student class with fields, constructor, and display method.'],
          },
          {
            dayNumber: 30,
            title: 'Classes, Objects & Instance Members',
            topic: 'Classes, objects, fields, methods',
            conceptExplanation: 'Instantiating objects on heap memory, reference variables on stack, and invoking instance methods.',
            javaExample: `class Book {\n    String title;\n    double price;\n    void display() { System.out.println(title + " - $" + price); }\n}`,
            practiceQuestions: [
              '2. Create three Book objects and display their details.',
              '3. Create Rectangle with area and perimeter methods.',
            ],
          },
          {
            dayNumber: 31,
            title: 'Object State & Encapsulation Intro',
            topic: 'Instance members and object state',
            conceptExplanation: 'Maintaining object integrity, private visibility, and instance independence.',
            javaExample: `// Instance Members & Object State
public class BankAccount {
    private double balance;
    public void deposit(double amount) { if (amount > 0) balance += amount; }
    public double getBalance() { return balance; }
}`,
            practiceQuestions: ['4. Create Circle with a radius-initializing constructor.'],
          },
          {
            dayNumber: 32,
            title: 'Constructors & Initialization',
            topic: 'Default and parameterized constructors',
            conceptExplanation: 'Constructor rules, automatic default constructor generation, and setting initial states.',
            javaExample: `// Default and Parameterized Constructors
public class Employee {
    int id;
    String name;
    public Employee() { this.id = 0; this.name = "Unknown"; }
    public Employee(int id, String name) { this.id = id; this.name = name; }
}`,
            practiceQuestions: [
              '5. Create Employee and calculate annual salary.',
              '6. Use constructor overloading in a Product class.',
            ],
          },
          {
            dayNumber: 33,
            title: 'this Keyword & Overloading',
            topic: 'this keyword and constructor overloading',
            conceptExplanation: 'Resolving variable shadowing with this, and constructor chaining via this().',
            javaExample: `// The this keyword and Constructor Chaining
public class Product {
    String name;
    double price;
    public Product(String name) { this(name, 0.0); }
    public Product(String name, double price) { this.name = name; this.price = price; }
}`,
            practiceQuestions: [
              '7. Use this to distinguish fields from parameters.',
              '10. Create BankAccount with deposit and withdrawal.',
            ],
          },
          {
            dayNumber: 34,
            title: 'Static Members & Utilities',
            topic: 'static fields, methods, initialization blocks',
            conceptExplanation: 'Class-level state vs instance state, static utility methods, and classloading initialization blocks.',
            javaExample: `// Static Fields, Methods & Static Blocks
public class Counter {
    public static int count = 0;
    static { System.out.println("Static block initialized."); }
    public Counter() { count++; }
    public static int getCount() { return count; }
}`,
            practiceQuestions: [
              '8. Count created objects using a static field.',
              '9. Write a static utility method for temperature conversion.',
            ],
          },
          {
            dayNumber: 35,
            title: 'Review and Practice',
            topic: 'Review and practice',
            conceptExplanation: 'Synthesizing constructors, static counters, and object state boundaries.',
            javaExample: `// OOP Review and Object Array Composition
public class CourseReview {
    public static void main(String[] args) {
        Book[] books = { new Book("Effective Java", "Bloch"), new Book("Clean Code", "Martin") };
        for (Book b : books) b.display();
    }
}`,
            practiceQuestions: ['14. Store five Student objects in an array and display them.'],
          },
        ],
      },
      {
        weekNumber: 6,
        title: 'OOP Pillars',
        focus: 'Encapsulation, inheritance, polymorphism, and abstraction.',
        days: [
          {
            dayNumber: 36,
            title: 'Encapsulation & Validation',
            topic: 'Encapsulation, private fields, getters/setters',
            conceptExplanation: 'Hiding internal representations, validating mutations, and exposing read-only properties.',
            javaExample: `// Encapsulation with Getters, Setters, and Validation
public class UserAccount {
    private String email;
    public void setEmail(String email) {
        if (!email.contains("@")) throw new IllegalArgumentException("Invalid email format");
        this.email = email;
    }
    public String getEmail() { return email; }
}`,
            practiceQuestions: [
              '11. Reject negative deposits and withdrawals above balance.',
              '16. Encapsulate Person fields with validated setters.',
            ],
          },
          {
            dayNumber: 37,
            title: 'Inheritance & Hierarchy',
            topic: 'Inheritance and inheritance structures',
            conceptExplanation: 'Extending classes with extends, code reuse, and is-a relationships.',
            javaExample: `// Inheritance: Base and Subclass Hierarchy
class Animal {
    void eat() { System.out.println("Eating..."); }
}
class Dog extends Animal {
    void bark() { System.out.println("Barking!"); }
}`,
            practiceQuestions: [
              '17. Create Person and Student using inheritance.',
              '19. Create Vehicle with Car and Bike subclasses.',
            ],
          },
          {
            dayNumber: 38,
            title: 'super Keyword & Chaining',
            topic: 'super and constructor chaining',
            conceptExplanation: 'Invoking parent constructors with super(), calling overridden methods, and superclass state.',
            javaExample: `// Super Keyword and Constructor Chaining
class Parent {
    Parent(String msg) { System.out.println("Parent: " + msg); }
}
class Child extends Parent {
    Child() { super("Initialized from Child"); }
}`,
            practiceQuestions: ['20. Use super to invoke a parent constructor.'],
          },
          {
            dayNumber: 39,
            title: 'Overriding & Runtime Polymorphism',
            topic: 'Overriding and runtime polymorphism',
            conceptExplanation: 'Dynamic method dispatch, @Override annotation, and runtime method resolution via parent references.',
            javaExample: `// Method Overriding & Runtime Polymorphism
class Shape {
    void draw() { System.out.println("Drawing shape"); }
}
class Circle extends Shape {
    @Override void draw() { System.out.println("Drawing circle"); }
}`,
            practiceQuestions: [
              '18. Create Employee and Manager with overridden display methods.',
              '24. Demonstrate runtime polymorphism using Shape references.',
            ],
          },
          {
            dayNumber: 40,
            title: 'Overloading vs Overriding',
            topic: 'Overloading vs overriding',
            conceptExplanation: 'Compile-time polymorphism (static binding) vs runtime polymorphism (dynamic binding).',
            javaExample: `// Overloading vs Overriding
public class PolyDemo {
    // Overloading: compile-time
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}`,
            practiceQuestions: ['25. Overload calculate for int, double, and three operands.'],
          },
          {
            dayNumber: 41,
            title: 'Abstract Classes & Abstraction',
            topic: 'Abstract classes and abstraction',
            conceptExplanation: 'Abstract methods as contracts, preventing direct instantiation, and shared implementation.',
            javaExample: `// Abstract Classes and Pure Abstraction
abstract class Payment {
    abstract void process(double amount);
}
class CardPayment extends Payment {
    void process(double amount) { System.out.println("Processed $" + amount + " via Card"); }
}`,
            practiceQuestions: [
              '21. Create abstract Shape with abstract area method.',
              '22. Implement Circle and Rectangle subclasses.',
            ],
          },
          {
            dayNumber: 42,
            title: 'Interfaces & Multiple Contracts',
            topic: 'Interfaces and OOP test',
            conceptExplanation: 'Defining contracts with interface, default methods, and multiple interface implementation.',
            javaExample: `// Interfaces and Multiple Interface Inheritance
interface Printable { void print(); }
interface Showable { void show(); }
class Document implements Printable, Showable {
    public void print() { System.out.println("Printing document"); }
    public void show() { System.out.println("Showing preview"); }
}`,
            practiceQuestions: [
              '23. Create Payment interface with Card and UPI simulation classes.',
              '26. Implement two interface methods in a class.',
            ],
          },
        ],
      },
      {
        weekNumber: 7,
        title: 'Arrays, Strings, Recursion',
        focus: 'Enhanced for, String immutability, StringBuilder, and recursion.',
        days: [
          {
            dayNumber: 43,
            title: 'Enhanced For & Array Copying',
            topic: 'Array traversal, copying, enhanced for',
            conceptExplanation: 'Iterating arrays with for-each, System.arraycopy, and reference vs value copying.',
            javaExample: `// Enhanced For-Loop & Array Copying
public class ArrayCopy {
    public static void main(String[] args) {
        int[] src = {1, 2, 3, 4};
        int[] dest = new int[src.length];
        System.arraycopy(src, 0, dest, 0, src.length);
    }
}`,
            practiceQuestions: ['Review array copying and traversal.'],
          },
          {
            dayNumber: 44,
            title: '2D Arrays and Matrices',
            topic: '2D arrays and matrices',
            conceptExplanation: 'Row sum, column sum, and main diagonal calculation in square matrices.',
            javaExample: `// 2D Arrays & Matrix Multiplication
public class MatrixOps {
    public static int[][] multiply(int[][] A, int[][] B) {
        int[][] C = new int[2][2];
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 2; j++)
                for (int k = 0; k < 2; k++)
                    C[i][j] += A[i][k] * B[k][j];
        return C;
    }
}`,
            practiceQuestions: [
              '36. Find the largest row sum in a 2D array.',
              '37. Find main diagonal sum of a square matrix.',
              '38. Multiply compatible matrices.',
            ],
          },
          {
            dayNumber: 45,
            title: 'Jagged Arrays & Object Arrays',
            topic: 'Jagged arrays and arrays of objects',
            conceptExplanation: 'Non-rectangular multidimensional arrays and storing references in arrays.',
            javaExample: `// Jagged Arrays (Non-Rectangular Matrices)
public class JaggedArrayDemo {
    public static void main(String[] args) {
        int[][] jagged = new int[3][];
        jagged[0] = new int[]{1, 2};
        jagged[1] = new int[]{3, 4, 5};
        jagged[2] = new int[]{6};
    }
}`,
            practiceQuestions: ['39. Create a jagged array for different mark counts.'],
          },
          {
            dayNumber: 46,
            title: 'String Immutability & String Pool',
            topic: 'String immutability, pool, == vs equals',
            conceptExplanation: 'Memory allocation in Java String Constant Pool, garbage collection efficiency, and value equality.',
            javaExample: `// String Immutability & String Constant Pool
public class StringPoolDemo {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = "Java";
        String s3 = new String("Java");
        System.out.println(s1 == s2); // true (pool)
        System.out.println(s1 == s3); // false (heap)
    }
}`,
            practiceQuestions: ['30. Compare two strings using == and equals; explain results.'],
          },
          {
            dayNumber: 47,
            title: 'StringBuilder vs StringBuffer',
            topic: 'StringBuilder and StringBuffer',
            conceptExplanation: 'Mutable character sequences, amortized capacity expansion, and thread safety comparison.',
            javaExample: `// StringBuilder vs StringBuffer
public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 5; i++) sb.append("Item ").append(i).append(", ");
        System.out.println(sb.toString());
    }
}`,
            practiceQuestions: [
              '34. Use StringBuilder to build a comma-separated list.',
              '35. Reverse each word while preserving word order.',
            ],
          },
          {
            dayNumber: 48,
            title: 'Recursion & Call Stack Mechanics',
            topic: 'Recursion, base case, call stack',
            conceptExplanation: 'Stack frames, base cases preventing StackOverflowError, and unwinding recursion.',
            javaExample: `// Recursion Fundamentals & Call Stack
public class RecursionBasics {
    public static int factorial(int n) {
        if (n <= 1) return 1; // Base case
        return n * factorial(n - 1); // Recursive step
    }
}`,
            practiceQuestions: [
              '40. Write recursive factorial with a base case.',
              '41. Write recursive sum from 1 to N.',
            ],
          },
          {
            dayNumber: 49,
            title: 'Recursion Exercises',
            topic: 'Recursion exercises',
            conceptExplanation: 'Recursive Fibonacci, digit sum extraction, and recursive binary search.',
            javaExample: `// Recursion Exercises: Fibonacci & Binary Search
public class RecursiveBinarySearch {
    public static int search(int[] a, int target, int l, int r) {
        if (l > r) return -1;
        int mid = l + (r - l) / 2;
        if (a[mid] == target) return mid;
        if (a[mid] > target) return search(a, target, l, mid - 1);
        return search(a, target, mid + 1, r);
    }
}`,
            practiceQuestions: [
              '42. Write recursive Fibonacci and note its performance.',
              '43. Write recursive digit sum.',
              '44. Write recursive binary search on a sorted array.',
            ],
          },
        ],
      },
      {
        weekNumber: 8,
        title: 'Language Features and Project',
        focus: 'Packages, modifiers, wrapper classes, enums, and capstone project.',
        days: [
          {
            dayNumber: 50,
            title: 'Packages & Access Modifiers',
            topic: 'Packages, imports, access modifiers',
            conceptExplanation: 'public, protected, package-private (default), and private encapsulation boundaries.',
            javaExample: `// Java Packages, Imports, and Access Modifiers
package com.study.model;
public class StudentRecord {
    public String name;        // Accessible everywhere
    protected int rank;        // Package + Subclasses
    int age;                   // Package-private
    private double gpa;        // Class only
}`,
            practiceQuestions: ['28. Demonstrate public, protected, and package-private access across packages.'],
          },
          {
            dayNumber: 51,
            title: 'final, References & Pass-by-Value',
            topic: 'final, references, pass-by-value',
            conceptExplanation: 'final variables, methods, and classes; object reference copying in Java pass-by-value.',
            javaExample: `// final Keyword, References, and Pass-By-Value
public class PassByValueDemo {
    public static void changeRef(StringBuilder sb) {
        sb.append(" modified"); // Mutates underlying object
    }
}`,
            practiceQuestions: [
              '27. Create a final class and test extension restriction.',
              '45. Create a final application-name constant.',
            ],
          },
          {
            dayNumber: 52,
            title: 'Wrapper Classes & Autoboxing',
            topic: 'Wrapper classes, boxing/unboxing',
            conceptExplanation: 'Integer, Double, Boolean wrapper types, nullability, and autoboxing performance costs.',
            javaExample: `// Wrapper Classes & Autoboxing / Unboxing
public class WrapperDemo {
    public static void main(String[] args) {
        Integer boxed = 42; // Autoboxing
        int unboxed = boxed; // Unboxing
        int parsed = Integer.parseInt("123");
    }
}`,
            practiceQuestions: ['Practice autoboxing and parsing methods like Integer.parseInt().'],
          },
          {
            dayNumber: 53,
            title: 'Enums, Varargs & CLI Arguments',
            topic: 'Enums, varargs, command-line arguments',
            conceptExplanation: 'Type-safe constants with enum, variable-length arguments (...), and String[] args.',
            javaExample: `// Enums, Varargs & Command-Line Arguments
public class EnumVarargsDemo {
    enum Status { PENDING, ACTIVE, COMPLETED }
    public static int sumAll(int... numbers) {
        int total = 0;
        for (int n : numbers) total += n;
        return total;
    }
}`,
            practiceQuestions: [
              '46. Create an OrderStatus enum and print its values.',
              '47. Write a varargs method that sums integers.',
              '48. Read command-line arguments and print indexed values.',
            ],
          },
          {
            dayNumber: 54,
            title: 'Generics Introduction',
            topic: 'Debugging and mixed challenges',
            conceptExplanation: 'Type parameters, compile-time safety without raw type casting.',
            javaExample: `// Debugging & Mixed OOP Challenges
public class DebuggingPractice {
    public static void main(String[] args) {
        assert 2 + 2 == 4 : "Math check";
    }
}`,
            practiceQuestions: [
              '49. Create generic Box with setter and getter.',
              '50. Write a generic method to print an array.',
            ],
          },
          {
            dayNumber: 55,
            title: 'Student Management System: Build',
            topic: 'Build Student Management System',
            conceptExplanation: 'Architecting Student, StudentService, and Main menu console architecture.',
            javaExample: `// Capstone: Student Management Console System
import java.util.*;
public class StudentManagementSystem {
    private Map<Integer, String> studentStore = new HashMap<>();
    public void add(int id, String name) { studentStore.put(id, name); }
    public String find(int id) { return studentStore.get(id); }
}`,
            practiceQuestions: [
              '51. Start a Student Management console menu.',
              '52. Add a student with ID, name, and marks.',
              '53. List all students in a readable format.',
              '54. Search a student by ID.',
              '55. Update marks with validation.',
              '56. Delete a student by ID.',
            ],
          },
          {
            dayNumber: 56,
            title: 'Project Testing and Milestone',
            topic: 'Test and document',
            conceptExplanation: 'Validation, sorting by grade using Comparator, and writing project documentation.',
            javaExample: `// Capstone: Verification, Clean Code & Documentation
public class SystemTest {
    public static void main(String[] args) {
        System.out.println("Month 2 Capstone Verified.");
    }
}`,
            practiceQuestions: [
              '57. Prevent duplicate student IDs.',
              '58. Calculate student averages and grades.',
              '61. Sort students by average using Comparator.',
              '63. Separate Student, StudentService, and Main classes.',
            ],
          },
        ],
      },
    ],
  },
  {
    monthNumber: 3,
    title: 'Collections and Modern Core Java',
    tagline: 'Handle errors, use data structures, write generic code, and apply lambdas and streams.',
    daysRange: 'Days 57–84',
    expectedOutcome: 'Mastery of Java Collections Framework, custom exceptions, generic classes, lambda expressions, and Java 8 Streams.',
    deliverable: 'Employee Management System with collection-based storage, search, sorting, filters, and exception handling. Aim for 60+ exercises.',
    problemCountTarget: '70 Practice Problems',
    color: 'from-emerald-600 to-emerald-800',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/30',
    weeks: [
      {
        weekNumber: 9,
        title: 'Exception Handling',
        focus: 'try-catch-finally, checked vs unchecked exceptions, and custom exceptions.',
        days: [
          {
            dayNumber: 57,
            title: 'Error Hierarchy & Throwable',
            topic: 'Errors vs exceptions; hierarchy',
            conceptExplanation: 'Throwable hierarchy: Error (system-level) vs Exception, and handling philosophy.',
            javaExample: `// Exception Hierarchy: Error vs Exception
public class ExceptionHierarchy {
    // Throwable -> Exception (Checked) & RuntimeException (Unchecked)
}`,
            practiceQuestions: ['1. Handle division by zero with a clear message.'],
          },
          {
            dayNumber: 58,
            title: 'try, catch & Multiple Catch',
            topic: 'try, catch, multiple catch',
            conceptExplanation: 'Catching specific exceptions, ordering from specific to general, and multi-catch blocks.',
            javaExample: `// Multiple Catch Blocks & Exception Order
public class MultiCatch {
    public static void main(String[] args) {
        try {
            int[] arr = new int[2];
            arr[5] = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic failure: " + e.getMessage());
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Index failure: " + e.getMessage());
        }
    }
}`,
            practiceQuestions: [
              '2. Handle invalid integer input from Scanner.',
              '3. Handle an invalid array index safely.',
              '4. Use multiple catch blocks for distinct failures.',
            ],
          },
          {
            dayNumber: 59,
            title: 'finally & Cleanup Flow',
            topic: 'finally and execution flow',
            conceptExplanation: 'Guaranteed execution of finally blocks and resource cleanup guarantees.',
            javaExample: `// Finally Block & Clean Resource Release
public class FinallyDemo {
    public static void main(String[] args) {
        try {
            System.out.println("Executing query...");
        } finally {
            System.out.println("Always executed for cleanup.");
        }
    }
}`,
            practiceQuestions: ['5. Demonstrate finally for cleanup.'],
          },
          {
            dayNumber: 60,
            title: 'throw and throws Keywords',
            topic: 'throw and throws',
            conceptExplanation: 'Explicitly raising exceptions with throw and declaring method exceptions with throws.',
            javaExample: `// Throw vs Throws
public class ThrowThrowsDemo {
    public static void checkAge(int age) throws IllegalArgumentException {
        if (age < 18) throw new IllegalArgumentException("Must be 18+");
    }
}`,
            practiceQuestions: [
              '6. Throw IllegalArgumentException for invalid age.',
              '9. Declare throws and handle the exception at the caller.',
            ],
          },
          {
            dayNumber: 61,
            title: 'Checked vs Unchecked Exceptions',
            topic: 'Checked and unchecked exceptions',
            conceptExplanation: 'Compile-time enforcement of checked exceptions vs RuntimeException uninspected errors.',
            javaExample: `// Checked vs Unchecked Exceptions
import java.io.IOException;
public class ExceptionTypes {
    void checkedMethod() throws IOException { throw new IOException(); }
    void uncheckedMethod() { throw new NullPointerException(); }
}`,
            practiceQuestions: ['10. Show checked and unchecked exception examples.'],
          },
          {
            dayNumber: 62,
            title: 'Custom Exceptions & Propagation',
            topic: 'Custom exceptions and propagation',
            conceptExplanation: 'Creating application-specific exceptions by extending Exception or RuntimeException.',
            javaExample: `// Custom Domain Exceptions
class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String id) { super("User not found with ID: " + id); }
}`,
            practiceQuestions: [
              '7. Create InsufficientBalanceException.',
              '8. Create InvalidMarkException for marks outside 0–100.',
              '11. Validate usernames with a custom exception.',
            ],
          },
          {
            dayNumber: 63,
            title: 'Exception Handling Assessment',
            topic: 'Review and assessment',
            conceptExplanation: 'Writing resilient console loops that recover gracefully from unexpected user input.',
            javaExample: `// Exception Handling Assessment
public class ExceptionReview {
    public static void main(String[] args) { System.out.println("Exceptions Mastered."); }
}`,
            practiceQuestions: ['12. Keep a menu running after recoverable input errors.'],
          },
        ],
      },
      {
        weekNumber: 10,
        title: 'Collections Framework',
        focus: 'List, Set, Map, Queue, and traversal with Iterator.',
        days: [
          {
            dayNumber: 64,
            title: 'Framework Overview: Collection vs Collections',
            topic: 'Collection vs Collections; overview',
            conceptExplanation: 'Collection interface hierarchy vs java.util.Collections utility algorithms.',
            javaExample: `// Collections Framework Architecture
import java.util.*;
public class CollectionsOverview {
    // Iterable -> Collection -> List, Set, Queue
}`,
            practiceQuestions: ['Review framework hierarchy and core interfaces.'],
          },
          {
            dayNumber: 65,
            title: 'ArrayList Deep Dive',
            topic: 'ArrayList operations',
            conceptExplanation: 'Dynamic array growth, indexing speed O(1), and insertion/deletion amortized cost.',
            javaExample: `// ArrayList Operations & Dynamic Growth
import java.util.ArrayList;
public class ArrayListOps {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Kotlin");
        list.remove("Kotlin");
        System.out.println("Size: " + list.size());
    }
}`,
            practiceQuestions: [
              '13. Store ten names in ArrayList and print them.',
              '14. Insert a name at a specified list position.',
              '15. Remove matching values from a list.',
              '16. Find the index of a target in a list.',
            ],
          },
          {
            dayNumber: 66,
            title: 'LinkedList, Vector, Stack',
            topic: 'LinkedList, Vector, Stack overview',
            conceptExplanation: 'Doubly linked node structure, sequential access, and modern Deque alternatives.',
            javaExample: `// LinkedList vs Vector vs Stack
import java.util.LinkedList;
public class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList<String> queue = new LinkedList<>();
        queue.addLast("First");
        queue.addLast("Second");
        System.out.println(queue.removeFirst());
    }
}`,
            practiceQuestions: ['32. Compare ArrayList and LinkedList for specified workloads.'],
          },
          {
            dayNumber: 67,
            title: 'Sets: HashSet, LinkedHashSet, TreeSet',
            topic: 'HashSet, LinkedHashSet, TreeSet',
            conceptExplanation: 'Uniqueness guarantees, hash table buckets, insertion-order preservation, and Red-Black tree sorting.',
            javaExample: `// HashSet, LinkedHashSet, and TreeSet
import java.util.*;
public class SetComparisons {
    public static void main(String[] args) {
        Set<String> tree = new TreeSet<>(List.of("Banana", "Apple", "Cherry"));
        System.out.println(tree); // [Apple, Banana, Cherry] sorted
    }
}`,
            practiceQuestions: [
              '17. Remove duplicates while preserving insertion order.',
              '18. Store unique email addresses in a Set.',
              '19. Compare HashSet and TreeSet iteration behavior.',
            ],
          },
          {
            dayNumber: 68,
            title: 'Queues & Deques',
            topic: 'Queue, PriorityQueue, Deque',
            conceptExplanation: 'FIFO ordering, PriorityQueue min-heap structure, and ArrayDeque as a high-performance stack/queue.',
            javaExample: `// Queue, PriorityQueue, and Deque
import java.util.*;
public class PriorityQueueDemo {
    public static void main(String[] args) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        minHeap.addAll(List.of(40, 10, 30, 20));
        System.out.println("Smallest element: " + minHeap.poll()); // 10
    }
}`,
            practiceQuestions: [
              '20. Simulate a service queue using Queue.',
              '21. Use Deque at both ends.',
              '22. Process tasks by priority using PriorityQueue.',
              '30. Build undo history using Deque.',
            ],
          },
          {
            dayNumber: 69,
            title: 'Maps: HashMap, LinkedHashMap, TreeMap',
            topic: 'HashMap, LinkedHashMap, TreeMap',
            conceptExplanation: 'Key-value mapping, hashCode() and equals() contract, bucket collisions, and natural key ordering.',
            javaExample: `// HashMap, LinkedHashMap, and TreeMap
import java.util.*;
public class MapDemo {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("Java", 1995);
        map.put("Spring", 2002);
        map.forEach((k, v) -> System.out.println(k + " -> " + v));
    }
}`,
            practiceQuestions: [
              '23. Build a contact directory using HashMap.',
              '24. Count word frequencies with HashMap.',
              '25. Find the key with the highest integer value.',
              '26. Group names by first letter using a map of lists.',
              '31. Represent inventory as product ID to quantity.',
            ],
          },
          {
            dayNumber: 70,
            title: 'Iterators & Map Traversal',
            topic: 'Iterator, ListIterator, traversal',
            conceptExplanation: 'Preventing ConcurrentModificationException using Iterator.remove(), and entrySet() iteration.',
            javaExample: `// Iterator & ListIterator Safe Removal
import java.util.*;
public class IteratorDemo {
    public static void main(String[] args) {
        List<String> items = new ArrayList<>(List.of("A", "B", "C"));
        Iterator<String> it = items.iterator();
        while (it.hasNext()) {
            if (it.next().equals("B")) it.remove(); // Safe removal
        }
    }
}`,
            practiceQuestions: [
              '28. Iterate through a map using entrySet.',
              '29. Remove selected collection values safely with Iterator.',
            ],
          },
        ],
      },
      {
        weekNumber: 11,
        title: 'Generics and Sorting',
        focus: 'Generic classes, wildcards, Comparable, Comparator, and Lambdas.',
        days: [
          {
            dayNumber: 71,
            title: 'Generic Classes & Type Parameters',
            topic: 'Generic classes and type parameters',
            conceptExplanation: 'Type erasure, parameterizing classes with <T>, and type-safe container development.',
            javaExample: `// Generic Classes and Type Parameters
public class Container<T> {
    private T value;
    public Container(T value) { this.value = value; }
    public T get() { return value; }
}`,
            practiceQuestions: ['33. Implement generic Pair.'],
          },
          {
            dayNumber: 72,
            title: 'Generic Methods',
            topic: 'Generic methods',
            conceptExplanation: 'Declaring method-level type parameters and generic array utility methods.',
            javaExample: `// Generic Methods & Type Inference
public class GenericMethods {
    public static <E> void printArray(E[] elements) {
        for (E element : elements) System.out.print(element + " ");
        System.out.println();
    }
}`,
            practiceQuestions: ['34. Write a generic list-element swap method.'],
          },
          {
            dayNumber: 73,
            title: 'Bounded Types & Wildcards',
            topic: 'Bounded types and wildcards',
            conceptExplanation: 'Upper bounds (? extends Number), lower bounds (? super T), and PECS principle.',
            javaExample: `// Bounded Type Parameters & Wildcards
import java.util.List;
public class WildcardsDemo {
    public static double sumOfList(List<? extends Number> list) {
        double s = 0.0;
        for (Number n : list) s += n.doubleValue();
        return s;
    }
}`,
            practiceQuestions: [
              '35. Write a bounded generic sum for Number values.',
              '36. Write a wildcard method that prints unknown-type lists.',
            ],
          },
          {
            dayNumber: 74,
            title: 'Comparable & Natural Ordering',
            topic: 'Comparable and natural ordering',
            conceptExplanation: 'Implementing Comparable<T> and defining compareTo() for consistent object sorting.',
            javaExample: `// Comparable & Natural Ordering
public class BookItem implements Comparable<BookItem> {
    int id;
    public BookItem(int id) { this.id = id; }
    @Override public int compareTo(BookItem o) { return Integer.compare(this.id, o.id); }
}`,
            practiceQuestions: ['37. Implement Comparable by ID.'],
          },
          {
            dayNumber: 75,
            title: 'Comparator & Custom Ordering',
            topic: 'Comparator and custom sorting',
            conceptExplanation: 'Multiple sort criteria, Comparator.comparing(), and reversing sort sequences.',
            javaExample: `// Comparator & Chained Sorting
import java.util.Comparator;
public class ComparatorDemo {
    // Comparator.comparing(Person::getAge).thenComparing(Person::getName)
}`,
            practiceQuestions: [
              '38. Sort Student objects by marks using Comparator.',
              '39. Sort employees by salary then name.',
            ],
          },
          {
            dayNumber: 76,
            title: 'Lambda Expressions',
            topic: 'Lambda expressions',
            conceptExplanation: 'Anonymous functions, concise syntax (params) -> body, and lexical scoping.',
            javaExample: `// Lambda Expressions & Functional Syntax
import java.util.List;
public class LambdaDemo {
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob");
        names.forEach(name -> System.out.println("Hello " + name));
    }
}`,
            practiceQuestions: [
              '40. Sort strings by length using a lambda.',
              '41. Filter even numbers using a lambda.',
            ],
          },
          {
            dayNumber: 77,
            title: 'Functional Interfaces',
            topic: 'Functional interfaces and test',
            conceptExplanation: '@FunctionalInterface, Predicate, Function, Consumer, Supplier, and custom Single Abstract Method types.',
            javaExample: `// Functional Interfaces & Custom Single Abstract Methods
@FunctionalInterface
interface MathOperation {
    int operate(int a, int b);
}`,
            practiceQuestions: [
              '42. Create a two-number functional interface.',
              '43. Implement addition and multiplication with that interface.',
            ],
          },
        ],
      },
      {
        weekNumber: 12,
        title: 'Streams and Project',
        focus: 'Method references, Stream pipelines, Optional, and Employee Management System.',
        days: [
          {
            dayNumber: 78,
            title: 'Method References & Built-in Interfaces',
            topic: 'Method references and functional interfaces',
            conceptExplanation: 'Syntax Class::method, instance method references, and constructor references Class::new.',
            javaExample: `// Method References (Class::method)
import java.util.List;
public class MethodRefDemo {
    public static void main(String[] args) {
        List.of("java", "spring").forEach(System.out::println);
    }
}`,
            practiceQuestions: [
              '44. Use a method reference to print list elements.',
              '45. Use removeIf to delete values meeting a condition.',
              '46. Print map entries with Map.forEach and lambda.',
            ],
          },
          {
            dayNumber: 79,
            title: 'Stream Core: filter, map, forEach',
            topic: 'Stream filter, map, forEach',
            conceptExplanation: 'Stream laziness, intermediate vs terminal operations, and immutable stream pipelines.',
            javaExample: `// Stream Pipeline: Filter, Map, ForEach
import java.util.List;
public class StreamBasics {
    public static void main(String[] args) {
        List.of(1, 2, 3, 4, 5).stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * 10)
            .forEach(System.out::println);
    }
}`,
            practiceQuestions: [
              '49. Filter marks above a threshold using streams.',
              '50. Map names to uppercase.',
            ],
          },
          {
            dayNumber: 80,
            title: 'Stream Aggregations & Collectors',
            topic: 'sorted, distinct, reduce, collect',
            conceptExplanation: 'Collectors.toList(), Collectors.groupingBy(), reduce accumulators, and deduplication.',
            javaExample: `// Stream Reductions: Sorted, Distinct, Reduce, Collect
import java.util.List;
import java.util.stream.Collectors;
public class StreamReduce {
    public static void main(String[] args) {
        int sum = List.of(1, 2, 3, 4).stream().reduce(0, Integer::sum);
        System.out.println("Sum: " + sum);
    }
}`,
            practiceQuestions: [
              '51. Remove duplicates using distinct.',
              '52. Sort products by price using streams.',
              '53. Sum a list using reduce.',
              '54. Collect names with a given prefix.',
              '57. Group employees by department.',
            ],
          },
          {
            dayNumber: 81,
            title: 'Optional & Null Safety',
            topic: 'Optional and null handling',
            conceptExplanation: 'Avoiding NullPointerException, Optional.ofNullable, orElse, orElseThrow, and map().',
            javaExample: `// Optional and Null Safety
import java.util.Optional;
public class OptionalDemo {
    public static Optional<String> findUser(String id) {
        return id.equals("1") ? Optional.of("Alice") : Optional.empty();
    }
}`,
            practiceQuestions: ['58. Use Optional with a fallback for missing lookup.'],
          },
          {
            dayNumber: 82,
            title: 'Date/Time API (java.time)',
            topic: 'Date/Time API: LocalDate, LocalTime, LocalDateTime',
            conceptExplanation: 'Thread-safe, immutable modern date/time parsing, formatting, and duration calculations.',
            javaExample: `// Java Modern Date/Time API (java.time)
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
public class DateTimeDemo {
    public static void main(String[] args) {
        LocalDate start = LocalDate.now();
        LocalDate target = start.plusDays(30);
        System.out.println("Days remaining: " + ChronoUnit.DAYS.between(start, target));
    }
}`,
            practiceQuestions: [
              '59. Parse LocalDate and display date components.',
              '60. Calculate days between two dates.',
              '70. Create a LocalDate-based reminder check that identifies dates before today.',
            ],
          },
          {
            dayNumber: 83,
            title: 'Employee Management Project Build',
            topic: 'Build Employee Management System',
            conceptExplanation: 'Building collection-backed storage, filtering employees by department and salary, and top earners.',
            javaExample: `// Capstone: Employee Management System Architecture
import java.util.*;
public class EmployeeService {
    private List<String> employees = new ArrayList<>();
    public void hire(String name) { employees.add(name); }
    public List<String> getEmployees() { return Collections.unmodifiableList(employees); }
}`,
            practiceQuestions: [
              '61. Create Employee data with department and salary.',
              '62. Build Employee Management menu using ArrayList.',
              '63. Search employee ID and handle missing records.',
              '64. Filter employees by department and salary.',
              '65. Sort by salary and display top three.',
              '66. Generate department-wise employee counts.',
              '67. Validate employee data with custom exceptions.',
            ],
          },
          {
            dayNumber: 84,
            title: 'Project Testing & Month 3 Review',
            topic: 'Test and revise',
            conceptExplanation: 'Validating collection operations, testing stream aggregations, and reviewing 70 workbook problems.',
            javaExample: `// Month 3 Review and Assessment
public class MonthThreeAssessment {
    public static void main(String[] args) {
        System.out.println("Collections & Streams Core Java Verified.");
    }
}`,
            practiceQuestions: ['68. Document and test the in-memory employee manager.'],
          },
        ],
      },
    ],
  },
  {
    monthNumber: 4,
    title: 'Advanced Core Java and JDBC',
    tagline: 'Learn file I/O, concurrency, JVM fundamentals, networking basics, and database connectivity.',
    daysRange: 'Days 85–112',
    expectedOutcome: 'Practical mastery of Java File I/O, multithreading, synchronization, JVM internals, Sockets, and relational JDBC connectivity.',
    deliverable: 'Capstone: Library Management System with books, members, issue/return, overdue rules, JDBC, and a relational database. Aim for 40+ exercises.',
    problemCountTarget: '65 Practice Problems',
    color: 'from-sky-600 to-sky-800',
    accent: 'text-sky-400',
    border: 'border-sky-500/30',
    weeks: [
      {
        weekNumber: 13,
        title: 'File I/O',
        focus: 'File operations, character streams, byte streams, and object serialization.',
        days: [
          {
            dayNumber: 85,
            title: 'File Class & Path Navigation',
            topic: 'Java I/O, File class, paths',
            conceptExplanation: 'java.io.File, path separators, file existence, and directory metadata.',
            javaExample: `// File and Path API Fundamentals
import java.io.File;
public class FileBasics {
    public static void main(String[] args) {
        File f = new File("app.log");
        System.out.println("Exists: " + f.exists());
    }
}`,
            practiceQuestions: ['1. Create a directory and text file if absent.'],
          },
          {
            dayNumber: 86,
            title: 'File & Directory Manipulation',
            topic: 'Create, inspect, rename, delete files/directories',
            conceptExplanation: 'Creating new files, directory listings, checking read/write permissions, and safe deletion.',
            javaExample: `// Create, Inspect, Rename, Delete Files
import java.nio.file.*;
public class FileOpsNio {
    public static void main(String[] args) throws Exception {
        Path p = Paths.get("data.txt");
        if (!Files.exists(p)) Files.createFile(p);
    }
}`,
            practiceQuestions: [
              '8. List directory files filtered by extension.',
              '9. Rename a file after checking destination conflict.',
            ],
          },
          {
            dayNumber: 87,
            title: 'Character Streams: Reader & Writer',
            topic: 'FileReader and FileWriter',
            conceptExplanation: 'Character-based file input/output, encoding considerations, and appending text.',
            javaExample: `// FileReader and FileWriter Character Streams
import java.io.*;
public class CharStreams {
    public static void writeText(String filename, String content) throws IOException {
        try (FileWriter fw = new FileWriter(filename)) { fw.write(content); }
    }
}`,
            practiceQuestions: [
              '2. Write five lines using FileWriter.',
              '6. Copy a text file using character streams.',
            ],
          },
          {
            dayNumber: 88,
            title: 'Buffered I/O & Text Processing',
            topic: 'BufferedReader and BufferedWriter',
            conceptExplanation: 'Efficient buffering, readLine() loops, and file line/word counter algorithms.',
            javaExample: `// BufferedReader & BufferedWriter
import java.io.*;
public class BufferedIO {
    public static void readLines(String filename) throws IOException {
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = br.readLine()) != null) System.out.println(line);
        }
    }
}`,
            practiceQuestions: [
              '3. Read a file line by line using BufferedReader.',
              '4. Append a timestamped log line.',
              '5. Count lines, words, and characters in a file.',
            ],
          },
          {
            dayNumber: 89,
            title: 'Byte Streams',
            topic: 'FileInputStream and FileOutputStream',
            conceptExplanation: 'Reading and writing binary data (images, PDFs) byte by byte and with byte arrays.',
            javaExample: `// Byte Streams: FileInputStream & FileOutputStream
import java.io.*;
public class ByteStreams {
    public static void copy(File src, File dest) throws IOException {
        try (FileInputStream in = new FileInputStream(src);
             FileOutputStream out = new FileOutputStream(dest)) {
            byte[] buf = new byte[1024];
            int n;
            while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
        }
    }
}`,
            practiceQuestions: ['7. Copy a binary file using byte streams.'],
          },
          {
            dayNumber: 90,
            title: 'Object Serialization',
            topic: 'Serialization/deserialization',
            conceptExplanation: 'Serializable interface, serialVersionUID, transient fields, ObjectOutputStream, and ObjectInputStream.',
            javaExample: `// Java Object Serialization / Deserialization
import java.io.Serializable;
public class SessionState implements Serializable {
    private static final long serialVersionUID = 1L;
    String user;
}`,
            practiceQuestions: [
              '10. Serialize a Student object.',
              '11. Deserialize and display a Student object.',
            ],
          },
          {
            dayNumber: 91,
            title: 'File I/O Assessment',
            topic: 'File I/O assessment',
            conceptExplanation: 'Handling missing files, IOException recovery, and try-with-resources resource closing.',
            javaExample: `// File I/O Assessment
public class FileAssessment {
    public static void main(String[] args) { System.out.println("I/O Mastered."); }
}`,
            practiceQuestions: ['12. Handle missing files and I/O errors.'],
          },
        ],
      },
      {
        weekNumber: 14,
        title: 'Multithreading',
        focus: 'Thread lifecycle, synchronization, wait/notify, and ExecutorService.',
        days: [
          {
            dayNumber: 92,
            title: 'Processes vs Threads',
            topic: 'Processes, threads, concurrency',
            conceptExplanation: 'Operating system processes vs JVM threads, CPU scheduling, and context switching.',
            javaExample: `// Multithreading: Processes vs Threads
public class ThreadIntro {
    // Process = separate memory address space; Thread = shared heap
}`,
            practiceQuestions: ['25. Explain thread safety and concurrency use cases.'],
          },
          {
            dayNumber: 93,
            title: 'Thread Class & start vs run',
            topic: 'Thread class; start vs run',
            conceptExplanation: 'Creating threads by extending Thread, and why calling start() initiates a new thread while run() executes synchronously.',
            javaExample: `// Thread Class: Extending Thread
public class WorkerThread extends Thread {
    @Override public void run() { System.out.println("Worker thread running: " + getName()); }
}`,
            practiceQuestions: [
              '13. Create a thread by extending Thread.',
              '15. Run two tasks and observe interleaving.',
            ],
          },
          {
            dayNumber: 94,
            title: 'Runnable Interface & Lifecycle',
            topic: 'Runnable and thread lifecycle',
            conceptExplanation: 'NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, and TERMINATED states.',
            javaExample: `// Runnable Interface & Thread Lifecycle
public class RunnableTask implements Runnable {
    @Override public void run() { System.out.println("Executing runnable task."); }
}`,
            practiceQuestions: ['14. Create a thread using Runnable.'],
          },
          {
            dayNumber: 95,
            title: 'Thread Sleep, Join, Interrupt',
            topic: 'sleep, join, interrupt',
            conceptExplanation: 'Thread.sleep() timed pause, waiting for worker completion with thread.join(), and handling InterruptedException.',
            javaExample: `// Thread Sleep, Join, and Interruption
public class ThreadCoordination {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -> System.out.println("Background task"));
        t.start();
        t.join(); // Wait for t to complete
    }
}`,
            practiceQuestions: [
              '16. Use sleep in a countdown thread.',
              '17. Use join so main waits for a worker.',
              '18. Handle interruption in a sleeping thread.',
            ],
          },
          {
            dayNumber: 96,
            title: 'Race Conditions & Synchronization',
            topic: 'Race conditions, synchronization, thread safety',
            conceptExplanation: 'Shared mutable state, atomic updates, synchronized methods, and synchronized statement blocks.',
            javaExample: `// Race Conditions & Synchronized Blocks
public class Counter {
    private int val = 0;
    public synchronized void increment() { val++; }
    public synchronized int getVal() { return val; }
}`,
            practiceQuestions: [
              '19. Demonstrate a race condition on shared counter.',
              '20. Protect the counter with synchronized.',
            ],
          },
          {
            dayNumber: 97,
            title: 'Thread Coordination: wait & notify',
            topic: 'wait/notify/notifyAll',
            conceptExplanation: 'Intrinsic monitor locks, inter-thread signaling, and classical Producer-Consumer bounded queue implementation.',
            javaExample: `// Inter-Thread Communication: wait, notify, notifyAll
public class Buffer {
    private boolean available = false;
    public synchronized void produce() throws InterruptedException {
        while (available) wait();
        available = true;
        notifyAll();
    }
}`,
            practiceQuestions: ['21. Create producer-consumer coordination using wait/notifyAll.'],
          },
          {
            dayNumber: 98,
            title: 'Thread Pools & ExecutorService',
            topic: 'ExecutorService and thread pools',
            conceptExplanation: 'ThreadPoolExecutor, Executors.newFixedThreadPool, Callable<T>, Future<T>, and clean shutdown.',
            javaExample: `// ExecutorService and Thread Pools
import java.util.concurrent.*;
public class PoolDemo {
    public static void main(String[] args) {
        ExecutorService exec = Executors.newFixedThreadPool(4);
        exec.submit(() -> System.out.println("Running pooled task"));
        exec.shutdown();
    }
}`,
            practiceQuestions: [
              '22. Submit tasks to ExecutorService.',
              '23. Collect Callable results using Future.',
              '24. Shut down an executor correctly.',
            ],
          },
        ],
      },
      {
        weekNumber: 15,
        title: 'JVM and Networking',
        focus: 'JVM memory architecture, class loading, reflection, annotations, and socket programming.',
        days: [
          {
            dayNumber: 99,
            title: 'JVM Architecture & Classloading',
            topic: 'JVM architecture, class loading, bytecode',
            conceptExplanation: 'Classloader subsystem (Bootstrap, Extension, Application), bytecode verification, and JIT compilation.',
            javaExample: `// JVM Architecture & Bytecode Flow
public class JvmArchitecture {
    // javac (.java -> .class) -> ClassLoader -> JVM Execution Engine (JIT / Interpreter)
}`,
            practiceQuestions: ['27. Describe class loading and bytecode execution flow.'],
          },
          {
            dayNumber: 100,
            title: 'JVM Runtime Memory Areas',
            topic: 'Runtime memory: stack, heap, metaspace overview',
            conceptExplanation: 'Method area/Metaspace, Heap (Eden, Survivor, Tenured), Stack frames, and OutOfMemoryError vs StackOverflowError.',
            javaExample: `// Runtime Memory: Stack, Heap, Metaspace
public class MemoryAreas {
    // Primitive local variables live on stack; instantiated objects live on heap
}`,
            practiceQuestions: ['26. Print JVM available and maximum memory.'],
          },
          {
            dayNumber: 101,
            title: 'Garbage Collection Fundamentals',
            topic: 'Garbage collection and memory leaks',
            conceptExplanation: 'Mark and sweep, reachability analysis, GC roots, memory leak vectors (static collections, open streams).',
            javaExample: `// Garbage Collection Fundamentals
public class GcOverview {
    // Generational GC: Eden -> Survivor -> Tenured (Old Gen)
}`,
            practiceQuestions: ['28. Explain when objects become eligible for collection.'],
          },
          {
            dayNumber: 102,
            title: 'Annotations & Metadata',
            topic: 'Built-in/custom annotations',
            conceptExplanation: '@Target, @Retention, @Inherited, and defining custom runtime annotations.',
            javaExample: `// Java Annotations: Built-in and Custom
import java.lang.annotation.*;
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface BenchmarkTest {}`,
            practiceQuestions: ['29. Create and use a custom annotation.'],
          },
          {
            dayNumber: 103,
            title: 'Java Reflection API',
            topic: 'Reflection fundamentals',
            conceptExplanation: 'Inspecting class fields, constructors, invoking private methods dynamically, and security tradeoffs.',
            javaExample: `// Java Reflection API
import java.lang.reflect.Method;
public class ReflectionDemo {
    public static void inspect(Class<?> clazz) {
        for (Method m : clazz.getDeclaredMethods()) System.out.println(m.getName());
    }
}`,
            practiceQuestions: ['30. Use reflection to print declared fields and methods.'],
          },
          {
            dayNumber: 104,
            title: 'Networking Basics: IP, Ports, URL',
            topic: 'IP, ports, TCP/UDP, URL',
            conceptExplanation: 'InetAddress hostname resolution, URI/URL parsing, and protocol overview.',
            javaExample: `// Networking: Sockets, IP, Port, URL
import java.net.URL;
public class NetworkBasics {
    public static void main(String[] args) throws Exception {
        URL url = new URL("https://api.github.com");
        System.out.println("Host: " + url.getHost());
    }
}`,
            practiceQuestions: [
              '31. Parse a URL using URI or URL.',
              '32. Resolve a host name using InetAddress.',
            ],
          },
          {
            dayNumber: 105,
            title: 'Socket & ServerSocket',
            topic: 'Socket and ServerSocket basics',
            conceptExplanation: 'Client-server TCP connections, listening on a port, and exchanging message streams.',
            javaExample: `// ServerSocket and TCP Client Connection
import java.net.*;
import java.io.*;
public class TcpEchoServer {
    public static void startServer(int port) throws IOException {
        try (ServerSocket server = new ServerSocket(port)) {
            Socket client = server.accept();
        }
    }
}`,
            practiceQuestions: [
              '33. Write a TCP server that accepts one client.',
              '34. Write a TCP client that sends a message.',
              '35. Exchange multiple lines and close sockets safely.',
            ],
          },
        ],
      },
      {
        weekNumber: 16,
        title: 'JDBC and Capstone',
        focus: 'Database connectivity, PreparedStatement, transactions, DAO pattern, and Library Management System.',
        days: [
          {
            dayNumber: 106,
            title: 'JDBC Architecture & Setup',
            topic: 'JDBC architecture, drivers, database setup',
            conceptExplanation: 'DriverManager, database drivers, JDBC connection URLs, and credentials management.',
            javaExample: `// JDBC Architecture, Drivers, and Connection Setup
import java.sql.*;
public class JdbcConnection {
    public static Connection connect() throws SQLException {
        return DriverManager.getConnection("jdbc:sqlite:library.db");
    }
}`,
            practiceQuestions: [
              '36. Create a database and books table with primary key.',
              '37. Connect using JDBC and report success.',
            ],
          },
          {
            dayNumber: 107,
            title: 'Statement & PreparedStatement',
            topic: 'Connection, Statement, PreparedStatement',
            conceptExplanation: 'Preventing SQL Injection using parameterized queries and precompiled execution plans.',
            javaExample: `// Statement vs PreparedStatement
import java.sql.*;
public class PreparedStatementDemo {
    public static void addMember(Connection conn, String name) throws SQLException {
        String sql = "INSERT INTO members (name) VALUES (?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, name);
            pstmt.executeUpdate();
        }
    }
}`,
            practiceQuestions: [
              '38. Insert a book using PreparedStatement.',
              '41. Search book by ID using a parameterized query.',
            ],
          },
          {
            dayNumber: 108,
            title: 'JDBC CRUD & ResultSet',
            topic: 'JDBC CRUD',
            conceptExplanation: 'Executing executeQuery vs executeUpdate, navigating ResultSet rows, and batch updates.',
            javaExample: `// JDBC CRUD Operations & ResultSet
import java.sql.*;
public class JdbcQuery {
    public static void listAll(Connection conn) throws SQLException {
        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT id, name FROM members")) {
            while (rs.next()) System.out.println(rs.getInt("id") + ": " + rs.getString("name"));
        }
    }
}`,
            practiceQuestions: [
              '39. Insert multiple books in a batch.',
              '40. List books using ResultSet.',
              '42. Update a book record.',
              '43. Delete a book after confirmation.',
            ],
          },
          {
            dayNumber: 109,
            title: 'Transactions & ACID in JDBC',
            topic: 'Transactions, commit, rollback',
            conceptExplanation: 'setAutoCommit(false), explicit conn.commit(), and rollback on SQLException.',
            javaExample: `// JDBC Transactions: setAutoCommit(false), Commit & Rollback
import java.sql.*;
public class TransactionDemo {
    public static void executeTx(Connection conn) throws SQLException {
        try {
            conn.setAutoCommit(false);
            // Operations
            conn.commit();
        } catch (SQLException e) {
            conn.rollback();
            throw e;
        } finally {
            conn.setAutoCommit(true);
        }
    }
}`,
            practiceQuestions: [
              '51. Use a transaction for multi-step issue.',
              '52. Roll back when a transaction step fails.',
              '53. Use try-with-resources for JDBC.',
            ],
          },
          {
            dayNumber: 110,
            title: 'Layered Architecture & DAO Pattern',
            topic: 'Layered architecture and separation of concerns',
            conceptExplanation: 'Separating Model (Entity), Data Access Object (DAO), Business Service, and Presentation layers.',
            javaExample: `// Layered Architecture: Controller -> Service -> DAO
public class LayeredArchDemo {
    // UI layer delegates to Service business layer which calls DAO database layer
}`,
            practiceQuestions: [
              '54. Separate database access into DAO.',
              '55. Create a service for library rules.',
              '63. Move database configuration out of source.',
            ],
          },
          {
            dayNumber: 111,
            title: 'Library Management System Build',
            topic: 'Build Library Management System',
            conceptExplanation: 'Developing books table, members table, issue/return transactions, and calculating overdue fines.',
            javaExample: `// Capstone: Library Management System Model
public class BookRecord {
    int id; String title; boolean isIssued;
}`,
            practiceQuestions: [
              '44. Create a members table with suitable key.',
              '45. Register a validated member.',
              '46. Create issue/return table with foreign keys.',
              '47. Implement issue and prevent unavailable stock issue.',
              '48. Implement return and update availability.',
              '50. Calculate overdue days and configurable fine.',
              '58. Search books by title keyword.',
              '59. List currently issued books.',
              '61. Create a menu-driven library app.',
            ],
          },
          {
            dayNumber: 112,
            title: 'Testing, Capstone Polish & Git',
            topic: 'Test, document, GitHub preparation',
            conceptExplanation: 'Database seeding, unit testing DAO methods, and writing setup instructions.',
            javaExample: `// Capstone: Testing and Repository Preparation
public class LibraryAppTest {
    public static void main(String[] args) { System.out.println("Library Capstone Verified."); }
}`,
            practiceQuestions: [
              '64. Test CRUD and issue/return with sample data.',
              '65. Write README with schema, setup, features, and run steps.',
            ],
          },
        ],
      },
    ],
  },
  {
    monthNumber: 5,
    title: 'Data Structures, Algorithms, and SQL',
    tagline: 'Develop algorithmic thinking and database skills for practical Java development.',
    daysRange: 'Days 113–140',
    expectedOutcome: 'Fluency in Big-O analysis, sorting, binary search, two pointers, sliding window, linked lists, stacks, queues, trees, graphs, and advanced SQL queries.',
    deliverable: 'Problem-solving repository and SQL practice file. Target 70–100 algorithm problems at a sustainable pace; focus on understanding, not speed.',
    problemCountTarget: '70 Practice Problems',
    color: 'from-amber-600 to-amber-800',
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
    weeks: [
      {
        weekNumber: 17,
        title: 'Complexity and Arrays',
        focus: 'Big-O notation, linear/binary search, sorting algorithms, two pointers, and sliding window.',
        days: [
          {
            dayNumber: 113,
            title: 'Big-O Time & Space Complexity',
            topic: 'Big-O time and space complexity',
            conceptExplanation: 'Asymptotic notation, O(1), O(log n), O(n), O(n log n), O(n^2), best/average/worst cases.',
            javaExample: `// Big-O Notation & Complexity Analysis
public class ComplexityDemo {
    // O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n^2) quadratic
}`,
            practiceQuestions: [
              '1. Estimate complexity of one loop over N.',
              '2. Estimate complexity of nested loops over N.',
            ],
          },
          {
            dayNumber: 114,
            title: 'Linear & Binary Search',
            topic: 'Linear and binary search',
            conceptExplanation: 'Sequential search vs dividing sorted ranges in half, middle element calculation, and loop invariants.',
            javaExample: `// Linear and Binary Search Comparison
public class SearchAlgorithms {
    public static int linear(int[] a, int t) { for (int i = 0; i < a.length; i++) if (a[i] == t) return i; return -1; }
    public static int binary(int[] a, int t) { int l = 0, r = a.length - 1; while (l <= r) { int m = l + (r-l)/2; if (a[m] == t) return m; if (a[m] < t) l = m + 1; else r = m - 1; } return -1; }
}`,
            practiceQuestions: [
              '3. Compare linear and binary search; state sorted-input requirement.',
              '4. Implement linear search returning index or -1.',
              '5. Implement iterative binary search.',
              '6. Implement recursive binary search.',
            ],
          },
          {
            dayNumber: 115,
            title: 'Elementary Sorts',
            topic: 'Bubble, selection, insertion sort',
            conceptExplanation: 'Comparison-based elementary sorts, stability, and quadratic time complexity O(n^2).',
            javaExample: `// Sorting: Bubble, Selection, and Insertion Sort
public class BasicSorts {
    public static void bubbleSort(int[] a) {
        for (int i = 0; i < a.length - 1; i++)
            for (int j = 0; j < a.length - i - 1; j++)
                if (a[j] > a[j + 1]) { int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; }
    }
}`,
            practiceQuestions: [
              '7. Implement bubble sort and count comparisons.',
              '8. Implement selection sort.',
              '9. Implement insertion sort.',
            ],
          },
          {
            dayNumber: 116,
            title: 'Efficient Sorts: Merge & Quick Sort',
            topic: 'Merge sort and quicksort',
            conceptExplanation: 'Divide-and-conquer strategy, recursive partitioning, Lomuto/Hoare partition schemes, and O(n log n) efficiency.',
            javaExample: `// Merge Sort and Quicksort
public class QuickSortDemo {
    public static void quicksort(int[] a, int low, int high) {
        if (low < high) {
            int pi = partition(a, low, high);
            quicksort(a, low, pi - 1);
            quicksort(a, pi + 1, high);
        }
    }
    private static int partition(int[] a, int low, int high) {
        int pivot = a[high], i = low - 1;
        for (int j = low; j < high; j++) if (a[j] < pivot) { int t = a[++i]; a[i] = a[j]; a[j] = t; }
        int t = a[i + 1]; a[i + 1] = a[high]; a[high] = t;
        return i + 1;
    }
}`,
            practiceQuestions: [
              '10. Implement merge sort.',
              '11. Implement quicksort and test edge cases.',
            ],
          },
          {
            dayNumber: 117,
            title: 'Two Pointers & Sliding Window',
            topic: 'Two pointers and sliding window basics',
            conceptExplanation: 'Opposite-direction two pointers for sorted pairs, and fixed-size sliding window sum calculations.',
            javaExample: `// Two Pointers and Sliding Window Techniques
public class TwoPointersDemo {
    public static boolean hasPairWithSum(int[] sorted, int target) {
        int l = 0, r = sorted.length - 1;
        while (l < r) {
            int s = sorted[l] + sorted[r];
            if (s == target) return true;
            if (s < target) l++; else r--;
        }
        return false;
    }
}`,
            practiceQuestions: [
              '14. Rotate array right by K.',
              '15. Use two pointers for target pair in sorted array.',
              '16. Use sliding window for maximum fixed-size subarray sum.',
            ],
          },
          {
            dayNumber: 118,
            title: 'Prefix Sums & Frequency Counting',
            topic: 'Prefix sums and frequency counting',
            conceptExplanation: 'Cumulative prefix arrays for O(1) range queries, and frequency maps for mode element discovery.',
            javaExample: `// Prefix Sums and Frequency Maps
public class PrefixSumDemo {
    public static int[] buildPrefix(int[] a) {
        int[] p = new int[a.length + 1];
        for (int i = 0; i < a.length; i++) p[i + 1] = p[i] + a[i];
        return p;
    }
}`,
            practiceQuestions: [
              '12. Find second-largest distinct array value.',
              '13. Move zeros to end preserving nonzero order.',
              '17. Build prefix sums for range queries.',
              '18. Find most frequent element using frequency map.',
            ],
          },
          {
            dayNumber: 119,
            title: 'Timed Problem Set 1',
            topic: 'Timed problem set',
            conceptExplanation: 'Timed execution of array, binary search, and two-pointer challenges under pressure.',
            javaExample: `// Timed Problem Set: Arrays & Two Pointers
public class TimedSetAssessment {
    public static void main(String[] args) { System.out.println("Array Patterns Mastered."); }
}`,
            practiceQuestions: ['Complete a timed 5-problem algorithm set.'],
          },
        ],
      },
      {
        weekNumber: 18,
        title: 'Linear Structures',
        focus: 'Linked lists, stack implementations, queues, and hashing patterns.',
        days: [
          {
            dayNumber: 120,
            title: 'Linked List Fundamentals',
            topic: 'Linked list concepts and implementation',
            conceptExplanation: 'Node structure with data and next reference, head pointer, and memory layout vs arrays.',
            javaExample: `// Singly Linked List Implementation
class Node {
    int val; Node next;
    Node(int val) { this.val = val; }
}`,
            practiceQuestions: ['19. Implement singly linked list append and display.'],
          },
          {
            dayNumber: 121,
            title: 'Linked List Operations',
            topic: 'Singly/doubly linked list operations',
            conceptExplanation: 'Insertion at head, tail, and index; node deletion, reversing pointers, and slow/fast pointer cycle detection.',
            javaExample: `// Linked List Insertion, Deletion & Cycle Detection
public class LinkedListOps {
    public static boolean hasCycle(Node head) {
        Node slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next; fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
}`,
            practiceQuestions: [
              '20. Insert linked-list node at head and position.',
              '21. Delete a linked-list node by value.',
              '22. Search linked list.',
              '23. Reverse linked list iteratively.',
              '24. Find middle node using slow/fast pointers.',
              '25. Detect a linked-list cycle.',
              '26. Implement doubly linked list traversal both ways.',
            ],
          },
          {
            dayNumber: 122,
            title: 'Stack Implementation & Use Cases',
            topic: 'Stack implementation and applications',
            conceptExplanation: 'LIFO principle, push/pop/peek operations, array-based stack, and balanced parenthesis validation.',
            javaExample: `// Stack Implementation (Array and Linked List)
import java.util.ArrayDeque;
import java.util.Deque;
public class StackDemo {
    public static void main(String[] args) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(10);
        System.out.println("Popped: " + stack.pop());
    }
}`,
            practiceQuestions: [
              '27. Implement stack using array.',
              '28. Implement stack using linked list.',
              '29. Check balanced parentheses using stack.',
              '30. Evaluate postfix expression with integer operands.',
            ],
          },
          {
            dayNumber: 123,
            title: 'Queue & Circular Queue',
            topic: 'Queue, circular queue, deque',
            conceptExplanation: 'FIFO principle, front/rear pointers, modular arithmetic in circular queues, and Deque.',
            javaExample: `// Queue, Circular Queue, and Deque
import java.util.ArrayDeque;
public class CircularQueue {
    // ArrayDeque provides efficient double-ended queue operations
}`,
            practiceQuestions: [
              '31. Implement array queue.',
              '32. Implement circular queue.',
              '33. Use Deque to test a palindrome sequence.',
            ],
          },
          {
            dayNumber: 124,
            title: 'Hashing Patterns & Problems',
            topic: 'Hashing patterns',
            conceptExplanation: 'Two Sum pattern, anagram detection, and finding first non-repeating character in a string.',
            javaExample: `// Hash Table & Hashing Collision Strategies
public class HashPatterns {
    // Separate chaining and open addressing (linear probing)
}`,
            practiceQuestions: [
              '34. Count frequencies using HashMap.',
              '35. Find first non-repeating string character.',
            ],
          },
          {
            dayNumber: 125,
            title: 'Recursion & Backtracking Intro',
            topic: 'Recursion and backtracking introduction',
            conceptExplanation: 'State-space tree exploration, choose-explore-unchoose pattern, and generating subsets.',
            javaExample: `// Recursion and Backtracking Introduction
public class SubsetsBacktracking {
    // Generate combinations and permutations using recursive decision tree
}`,
            practiceQuestions: [
              '49. Solve a small maze using backtracking.',
              '50. Generate all subsets of a small set.',
            ],
          },
          {
            dayNumber: 126,
            title: 'Linear Structures Assessment',
            topic: 'Assessment',
            conceptExplanation: 'Evaluating linked list reversals, stack evaluations, and queue implementations.',
            javaExample: `// Assessment: Linear Data Structures
public class LinearStructuresAssessment {
    public static void main(String[] args) { System.out.println("Stacks & Queues Verified."); }
}`,
            practiceQuestions: ['Complete 4 linear data structure benchmark problems.'],
          },
        ],
      },
      {
        weekNumber: 19,
        title: 'Trees and Patterns',
        focus: 'Binary trees, BST operations, heaps, graph fundamentals, BFS, and DFS.',
        days: [
          {
            dayNumber: 127,
            title: 'Binary Tree Traversals',
            topic: 'Binary tree terminology and traversals',
            conceptExplanation: 'Root, leaf, depth, height; preorder (root-left-right), inorder (left-root-right), and postorder traversals.',
            javaExample: `// Binary Tree Terminology & Traversals
class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int v) { this.val = v; }
}`,
            practiceQuestions: [
              '36. Create binary tree and preorder traversal.',
              '37. Implement inorder and postorder traversals.',
              '38. Find binary tree height.',
              '39. Count leaf nodes.',
            ],
          },
          {
            dayNumber: 128,
            title: 'Binary Search Tree (BST)',
            topic: 'Binary Search Tree operations',
            conceptExplanation: 'BST invariant (left < root < right), BST insert, search, and min/max key lookups.',
            javaExample: `// Binary Search Tree (BST) Operations
public class BstOps {
    public static boolean search(TreeNode root, int val) {
        if (root == null) return false;
        if (root.val == val) return true;
        return val < root.val ? search(root.left, val) : search(root.right, val);
    }
}`,
            practiceQuestions: [
              '40. Implement BST insertion and search.',
              '41. Find BST minimum and maximum.',
            ],
          },
          {
            dayNumber: 129,
            title: 'Heaps & PriorityQueues',
            topic: 'Heap and PriorityQueue',
            conceptExplanation: 'Min-heap vs max-heap properties, complete binary trees in arrays, and finding Kth largest elements.',
            javaExample: `// Heap and PriorityQueue (Min/Max Heap)
import java.util.PriorityQueue;
public class HeapDemo {
    public static void main(String[] args) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    }
}`,
            practiceQuestions: [
              '42. Implement level-order traversal.',
              '43. Find K largest values using PriorityQueue.',
            ],
          },
          {
            dayNumber: 130,
            title: 'Graph Concepts & Representations',
            topic: 'Graph concepts and representations',
            conceptExplanation: 'Vertices, edges, directed vs undirected, weighted graphs, adjacency matrices, and adjacency lists.',
            javaExample: `// Graph Representations: Adjacency List & Matrix
import java.util.*;
public class GraphAdjList {
    private Map<Integer, List<Integer>> adj = new HashMap<>();
    public void addEdge(int u, int v) { adj.computeIfAbsent(u, k -> new ArrayList<>()).add(v); }
}`,
            practiceQuestions: ['44. Represent graph using adjacency list.'],
          },
          {
            dayNumber: 131,
            title: 'Graph Traversals: BFS & DFS',
            topic: 'BFS and DFS',
            conceptExplanation: 'Queue-based Breadth-First Search for shortest paths, and recursive Depth-First Search for connectivity.',
            javaExample: `// Graph Traversals: BFS and DFS
import java.util.*;
public class GraphBfs {
    public static void bfs(int start, Map<Integer, List<Integer>> adj) {
        Queue<Integer> q = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        q.add(start); visited.add(start);
        while (!q.isEmpty()) {
            int node = q.poll();
            for (int neighbor : adj.getOrDefault(node, List.of())) {
                if (visited.add(neighbor)) q.add(neighbor);
            }
        }
    }
}`,
            practiceQuestions: [
              '45. Perform BFS from a start vertex.',
              '46. Perform recursive DFS.',
              '47. Count connected components.',
              '48. Check whether a path exists between vertices.',
            ],
          },
          {
            dayNumber: 132,
            title: 'Greedy & Dynamic Programming Intro',
            topic: 'Greedy and dynamic programming introduction',
            conceptExplanation: 'Overlapping subproblems, optimal substructure, memoization table, and climbing stairs problem.',
            javaExample: `// Greedy & Dynamic Programming Foundations
public class CoinChange {
    // Optimal substructure: dp[i] = min(dp[i - coin] + 1)
}`,
            practiceQuestions: [
              '51. Solve a small climbing-stairs or coin-change DP problem.',
              '52. Compare greedy and exhaustive approaches on a small case.',
            ],
          },
          {
            dayNumber: 133,
            title: 'Mixed DSA Assessment',
            topic: 'Mixed problem-solving assessment',
            conceptExplanation: 'Solving tree, graph, and recursive challenge sets under time constraints.',
            javaExample: `// Tree & Graph Assessment
public class TreeGraphAssessment {
    public static void main(String[] args) { System.out.println("Tree & Graph Assessment Passed."); }
}`,
            practiceQuestions: ['66. Complete a timed five-problem set and review mistakes.'],
          },
        ],
      },
      {
        weekNumber: 20,
        title: 'SQL and Integration',
        focus: 'Relational database schema, CRUD queries, JOINs, GROUP BY, subqueries, and Java JDBC integration.',
        days: [
          {
            dayNumber: 134,
            title: 'Relational Schema & Keys',
            topic: 'Relational databases, tables, keys',
            conceptExplanation: 'Tables, primary keys, foreign keys, unique constraints, and schema design.',
            javaExample: `// Relational Databases, Schema Design, and Keys
// CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(100));`,
            practiceQuestions: [
              '53. Design Student and Course tables with primary keys.',
              '54. Insert sample rows into both tables.',
            ],
          },
          {
            dayNumber: 135,
            title: 'SQL Filtering & Sorting',
            topic: 'SELECT, WHERE, ORDER BY, LIMIT',
            conceptExplanation: 'Writing precise SELECT queries with WHERE clauses, string pattern matching (LIKE), and pagination (LIMIT/OFFSET).',
            javaExample: `// SELECT, WHERE, ORDER BY, LIMIT
// SELECT * FROM products WHERE price > 50 ORDER BY price DESC LIMIT 10;`,
            practiceQuestions: ['55. Select using WHERE, ORDER BY, LIMIT.'],
          },
          {
            dayNumber: 136,
            title: 'SQL Data Manipulation',
            topic: 'INSERT, UPDATE, DELETE, constraints',
            conceptExplanation: 'DML operations, transactional updates, and foreign key constraint cascade rules.',
            javaExample: `// INSERT, UPDATE, DELETE & Data Constraints
// INSERT INTO courses (code, title) VALUES ('CS101', 'Intro to Java');`,
            practiceQuestions: [
              '56. Update a student department and verify.',
              '57. Delete a test row respecting foreign keys.',
            ],
          },
          {
            dayNumber: 137,
            title: 'Aggregates & Table Joins',
            topic: 'JOINs, GROUP BY, aggregates',
            conceptExplanation: 'INNER JOIN, LEFT OUTER JOIN, COUNT, AVG, SUM, MIN, MAX, and GROUP BY with HAVING filters.',
            javaExample: `// JOINs, GROUP BY, and Aggregate Functions
// SELECT d.name, COUNT(e.id) FROM departments d LEFT JOIN employees e ON d.id = e.dept_id GROUP BY d.name;`,
            practiceQuestions: [
              '58. Query COUNT, AVG, MIN, MAX.',
              '59. Group students by department.',
              '60. Join students, enrollments, and courses.',
              '61. Find students without enrollments using an outer join pattern.',
            ],
          },
          {
            dayNumber: 138,
            title: 'Subqueries & Indexing Overview',
            topic: 'Subqueries and indexes overview',
            conceptExplanation: 'Correlated and nested subqueries, B-tree index concepts, and query execution performance.',
            javaExample: `// Subqueries and Database Indexes
// CREATE INDEX idx_student_email ON students(email);`,
            practiceQuestions: [
              '62. Find students above average using a subquery.',
              '63. Create an index and explain its use.',
            ],
          },
          {
            dayNumber: 139,
            title: 'Java + SQL Integration Project',
            topic: 'Java + SQL mini task or coding portfolio',
            conceptExplanation: 'Connecting Java application logic to execute complex queries and format reports.',
            javaExample: `// Java + SQL Integration Practice
import java.sql.*;
public class SqlPortfolioTask {
    // End-to-end query execution with Java PreparedStatement
}`,
            practiceQuestions: [
              '64. Use Java JDBC to print a query report.',
              '69. Create SQL schema, sample data, and query script.',
            ],
          },
          {
            dayNumber: 140,
            title: 'Month 5 Milestone & Review',
            topic: 'Assessment and review',
            conceptExplanation: 'Reviewing 70 algorithm and database workbook problems, code refactoring, and Big-O explanation.',
            javaExample: `// Month 5 Assessment: DSA and SQL
public class MonthFiveAssessment {
    public static void main(String[] args) { System.out.println("DSA and SQL Verified."); }
}`,
            practiceQuestions: [
              '65. Create a DSA repository with approach, complexity, and tests.',
              '67. Refactor one solution for readability and edge cases.',
              '68. Write a month-end strengths/weaknesses review.',
              '70. Explain Big-O and one data structure as interview practice.',
            ],
          },
        ],
      },
    ],
  },
  {
    monthNumber: 6,
    title: 'Java Application Development',
    tagline: 'Apply Java, databases, testing, build tools, and backend fundamentals in a structured application.',
    daysRange: 'Days 141–168',
    expectedOutcome: 'Industry-standard developer skills: Git workflows, Maven dependency management, JUnit 5 unit testing, Spring Boot REST APIs, Spring Data JPA, and complete capstone development.',
    deliverable: 'Capstone: Spring Boot REST API with relational database, CRUD, validation, exception handling, tests, and documentation. This is a beginner portfolio project; continue learning after the six-month plan.',
    problemCountTarget: '65 Practice Problems',
    color: 'from-rose-600 to-rose-800',
    accent: 'text-rose-400',
    border: 'border-rose-500/30',
    weeks: [
      {
        weekNumber: 21,
        title: 'Developer Workflow',
        focus: 'Git version control, Maven build tool, JUnit testing, and Spring Boot setup.',
        days: [
          {
            dayNumber: 141,
            title: 'Git Version Control Essentials',
            topic: 'Git/GitHub status, add, commit, push, branches',
            conceptExplanation: 'Git workflow: working directory, staging area, local repository, feature branches, and merge commits.',
            javaExample: `// Git & GitHub Workflow: Add, Commit, Push, Branch
// git checkout -b feature/user-auth
// git commit -m "feat: add user entity"`,
            practiceQuestions: [
              '1. Create a Git repository and initial commit.',
              '2. Create a feature branch, change code, and merge it.',
              '3. Write a project README with run instructions.',
            ],
          },
          {
            dayNumber: 142,
            title: 'Maven Build Tool & pom.xml',
            topic: 'Maven structure, dependencies, lifecycle',
            conceptExplanation: 'Standard directory layout (src/main/java, src/test/java), dependencies, coordinates, and build lifecycle.',
            javaExample: `// Maven Project Structure & pom.xml Dependencies
// Project Object Model: group-id, artifact-id, version, dependencies`,
            practiceQuestions: [
              '4. Create a Maven project and inspect its structure.',
              '5. Add a dependency and explain pom.xml.',
            ],
          },
          {
            dayNumber: 143,
            title: 'JUnit 5 Unit Testing',
            topic: 'JUnit and unit testing',
            conceptExplanation: '@Test, @BeforeEach, @AfterEach, assertEquals, assertTrue, and testing exception handling with assertThrows.',
            javaExample: `// JUnit 5 Testing & Assertions
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
public class CalcTest {
    @Test void testAdd() { assertEquals(4, 2 + 2); }
}`,
            practiceQuestions: [
              '6. Write a JUnit test for a calculator method.',
              '7. Test valid and invalid inputs.',
              '8. Refactor a long method and preserve behavior with tests.',
            ],
          },
          {
            dayNumber: 144,
            title: 'Logging & Clean Code Practices',
            topic: 'Debugging, logging concepts, clean code',
            conceptExplanation: 'SLF4J, Logback, log levels (DEBUG, INFO, WARN, ERROR), and meaningful naming conventions.',
            javaExample: `// Logging Concepts: SLF4J and Logback
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class ServiceLog {
    private static final Logger log = LoggerFactory.getLogger(ServiceLog.class);
    public void run() { log.info("Service initialized successfully."); }
}`,
            practiceQuestions: ['Implement clean logging in utility methods and remove debugging print statements.'],
          },
          {
            dayNumber: 145,
            title: 'HTTP, JSON & REST Architecture',
            topic: 'HTTP, JSON, REST concepts',
            conceptExplanation: 'Stateless HTTP requests, status codes (200, 201, 400, 404, 500), headers, methods (GET, POST, PUT, DELETE), and JSON serialization.',
            javaExample: `// HTTP Protocol, JSON Serialization, and REST Principles
// GET (read), POST (create), PUT (replace), PATCH (update), DELETE (remove)`,
            practiceQuestions: [
              '9. Create a JSON example and identify fields/types.',
              '10. Explain HTTP GET, POST, PUT, PATCH, DELETE with examples.',
              '11. Design REST paths for books and members.',
            ],
          },
          {
            dayNumber: 146,
            title: 'Spring Framework & Inversion of Control',
            topic: 'Spring and dependency injection overview',
            conceptExplanation: 'Inversion of Control (IoC), Dependency Injection (DI), Spring ApplicationContext, and @Component/@Autowired.',
            javaExample: `// Spring Framework & Dependency Injection (@Component, @Autowired)
import org.springframework.stereotype.Service;
@Service
public class UserService {
    // Injected by Spring IoC container
}`,
            practiceQuestions: ['Draft a simple service interface and its implementation bean.'],
          },
          {
            dayNumber: 147,
            title: 'Spring Boot Setup & Starter Dependencies',
            topic: 'Spring Boot setup and review',
            conceptExplanation: '@SpringBootApplication, spring-boot-starter-web, auto-configuration, and embedded Tomcat server.',
            javaExample: `// Spring Boot Application Setup & @SpringBootApplication
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class Application {
    public static void main(String[] args) { SpringApplication.run(Application.class, args); }
}`,
            practiceQuestions: ['12. Create and run a Spring Boot app with a basic endpoint.'],
          },
        ],
      },
      {
        weekNumber: 22,
        title: 'Spring Boot Fundamentals',
        focus: 'Controllers, DTOs, Bean Validation, Exception Handling, and JPA/Hibernate.',
        days: [
          {
            dayNumber: 148,
            title: 'Three-Tier Architecture',
            topic: 'Controllers, services, repositories, layers',
            conceptExplanation: 'Separating Controller (@RestController), Service (@Service), and Repository (@Repository) responsibilities.',
            javaExample: `// Spring Boot Layered Architecture: Controller, Service, Repository
// @RestController -> @Service -> @Repository`,
            practiceQuestions: ['23. Separate controller and service responsibilities.'],
          },
          {
            dayNumber: 149,
            title: 'REST Endpoints & Request Mapping',
            topic: 'REST endpoints and request mapping',
            conceptExplanation: '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping, and returning ResponseEntity with custom status codes.',
            javaExample: `// REST Controllers and @RequestMapping Endpoints
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/greeting")
public class GreetingController {
    @GetMapping public String hello() { return "Hello, Java Developer!"; }
}`,
            practiceQuestions: [
              '13. Create a controller GET endpoint.',
              '17. Implement GET endpoint returning books.',
              '19. Implement update endpoint.',
              '20. Implement delete endpoint with suitable response.',
            ],
          },
          {
            dayNumber: 150,
            title: 'DTOs & Request Parameters',
            topic: 'DTOs, request bodies, path/query parameters',
            conceptExplanation: '@PathVariable, @RequestParam, @RequestBody, and isolating domain entities using Data Transfer Objects (DTOs).',
            javaExample: `// DTOs, @RequestBody, @PathVariable, @RequestParam
import org.springframework.web.bind.annotation.*;
@PostMapping("/api/items")
public String create(@RequestBody ItemDto dto) { return "Created: " + dto.getName(); }`,
            practiceQuestions: [
              '14. Use path variables and request parameters.',
              '15. Create a Book creation DTO.',
              '16. Implement POST endpoint accepting request body.',
              '18. Implement GET-by-ID with not-found handling.',
            ],
          },
          {
            dayNumber: 151,
            title: 'Validation & Global Error Handling',
            topic: 'Validation and API exception handling',
            conceptExplanation: 'Jakarta Validation annotations (@NotNull, @NotBlank, @Min), and centralized error handling with @ControllerAdvice and @ExceptionHandler.',
            javaExample: `// Hibernate Validator & @Valid Annotations
import jakarta.validation.constraints.*;
public class UserCreateDto {
    @NotBlank private String name;
    @Min(18) private int age;
}`,
            practiceQuestions: [
              '21. Validate required title and nonnegative quantity.',
              '22. Create global API exception handling.',
            ],
          },
          {
            dayNumber: 152,
            title: 'Spring Boot Database Connection',
            topic: 'Connect Spring Boot to relational database',
            conceptExplanation: 'application.properties configuration, spring.datasource settings, and HikariCP connection pool.',
            javaExample: `// Connecting Spring Boot to Relational Database
// application.properties: spring.datasource.url=jdbc:postgresql://localhost:5432/mydb`,
            practiceQuestions: ['24. Configure database using environment-based settings.'],
          },
          {
            dayNumber: 153,
            title: 'Spring Data JPA & Hibernate Entities',
            topic: 'JPA entities and repositories',
            conceptExplanation: '@Entity, @Table, @Id, @GeneratedValue, and CrudRepository/JpaRepository interface inheritance.',
            javaExample: `// Jakarta Persistence (JPA) Entities (@Entity, @Id, @Column)
import jakarta.persistence.*;
@Entity
public class Customer {
    @Id @GeneratedValue private Long id;
    private String name;
}`,
            practiceQuestions: [
              '25. Create JPA entity and identifier.',
              '26. Create repository interface and persistence operation.',
            ],
          },
          {
            dayNumber: 154,
            title: 'Database CRUD Endpoints & Tests',
            topic: 'CRUD endpoints and tests',
            conceptExplanation: 'Connecting repository methods to service layer, and writing unit tests with Mockito.',
            javaExample: `// Spring Data JPA Repository (JpaRepository<T, ID>)
import org.springframework.data.jpa.repository.JpaRepository;
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByName(String name);
}`,
            practiceQuestions: [
              '27. Implement database-backed CRUD.',
              '28. Add search endpoint by title or category.',
              '29. Write service-layer unit tests.',
              '30. Test endpoints with an HTTP client and save examples.',
            ],
          },
        ],
      },
      {
        weekNumber: 23,
        title: 'Capstone Build',
        focus: 'Domain modeling, REST API endpoints, business rules, and integration testing.',
        days: [
          {
            dayNumber: 155,
            title: 'Capstone Domain Planning',
            topic: 'Requirements, entities, API plan',
            conceptExplanation: 'Selecting a real-world project domain (e.g., Library Management, Student Portal, or Task Tracker) and drafting REST contracts.',
            javaExample: `// Capstone: Requirements, Domain Entities, API Plan
public class CapstonePlan {
    // Full REST endpoints for Library / E-commerce backend
}`,
            practiceQuestions: [
              '31. Choose capstone domain: library, task tracker, or student records.',
              '32. Write user stories and limit first-version scope.',
            ],
          },
          {
            dayNumber: 156,
            title: 'Data Model & Entity Mapping',
            topic: 'Data model and schema',
            conceptExplanation: 'Designing relational tables, primary keys, and mapping JPA entity classes.',
            javaExample: `// Capstone: Data Model and Flyway / Liquibase Migrations
// V1__create_tables.sql`,
            practiceQuestions: [
              '33. Sketch entities and schema.',
              '34. Implement entity and repository classes.',
            ],
          },
          {
            dayNumber: 157,
            title: 'Create & Read Workflows',
            topic: 'Create/read endpoints',
            conceptExplanation: 'Implementing entity creation, list queries, findById lookups, and mapping responses to DTOs.',
            javaExample: `// Capstone: Create & Read Endpoints with Pagination
// Page<Book> findAll(Pageable pageable);`,
            practiceQuestions: [
              '35. Implement create and list workflows.',
              '36. Implement get-by-ID and missing-record behavior.',
            ],
          },
          {
            dayNumber: 158,
            title: 'Update, Delete & Validation',
            topic: 'Update/delete and validation',
            conceptExplanation: 'Validating payload updates, checking existence before deletion, and returning HTTP 204 No Content.',
            javaExample: `// Capstone: Update, Delete, and Input Validation
// @PutMapping("/{id}") with validation`,
            practiceQuestions: [
              '37. Implement update and delete.',
              '38. Add validation and consistent error response.',
            ],
          },
          {
            dayNumber: 159,
            title: 'Business Rules & Pagination',
            topic: 'Search/filter and business rules',
            conceptExplanation: 'Custom query methods in repositories, sorting, pagination, and enforcing domain logic rules.',
            javaExample: `// Capstone: Search Filtering and Business Rules
// Specification<Book> query filters`,
            practiceQuestions: [
              '39. Add pagination or filtering if feasible.',
              '40. Test service business rules.',
            ],
          },
          {
            dayNumber: 160,
            title: 'Unit & API Integration Testing',
            topic: 'Unit and API tests',
            conceptExplanation: '@SpringBootTest, MockMvc endpoint testing, and verifying HTTP status codes and JSON response bodies.',
            javaExample: `// Capstone: Mockito & MockMvc Integration Tests
import org.junit.jupiter.api.Test;
// mockMvc.perform(get("/api/books")).andExpect(status().isOk());`,
            practiceQuestions: ['41. Test API success and failure cases.'],
          },
          {
            dayNumber: 161,
            title: 'Integration Review & Bug Fixes',
            topic: 'Integration review and bug fixes',
            conceptExplanation: 'Debugging edge cases, transaction boundaries with @Transactional, and error message consistency.',
            javaExample: `// Capstone: Integration Review & Bug Fixing
public class BugFixReview {
    // Boundary conditions, null safety, error responses
}`,
            practiceQuestions: [
              '42. Use environment variables for secrets and DB config.',
              '43. Add seed data or setup steps.',
            ],
          },
        ],
      },
      {
        weekNumber: 24,
        title: 'Finish and Present',
        focus: 'Documentation, packaging, code review, and final roadmap completion.',
        days: [
          {
            dayNumber: 162,
            title: 'Error Responses & Logging Polish',
            topic: 'Error responses and logging',
            conceptExplanation: 'Consistent RFC 7807 problem details response format and structured application logging.',
            javaExample: `// Centralized Error Handling with @RestControllerAdvice
import org.springframework.web.bind.annotation.*;
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ErrorDto handle(Exception e) { return new ErrorDto(500, e.getMessage()); }
}`,
            practiceQuestions: [
              '44. Review API status codes and response shapes.',
              '45. Check duplicate/invalid record handling.',
              '52. Improve validation messages.',
              '53. Review exception handling for predictable failures.',
            ],
          },
          {
            dayNumber: 163,
            title: 'README & API Documentation',
            topic: 'README, setup guide, API examples',
            conceptExplanation: 'Writing professional documentation with curl/Postman request-response samples, schema DDL, and run steps.',
            javaExample: `// Complete Project README, OpenAPI Swagger & Run Guide
// @OpenAPIDefinition for interactive API docs`,
            practiceQuestions: [
              '46. Run from a clean checkout using README.',
              '49. Write complete README with prerequisites and commands.',
              '50. Document endpoints with request/response examples.',
              '51. Add database schema or setup script.',
            ],
          },
          {
            dayNumber: 164,
            title: 'Security Basics & Credentials',
            topic: 'Security basics: secrets, validation, password hashing concepts',
            conceptExplanation: 'Never hardcoding secrets, environment variables, password hashing concepts (BCrypt), and input sanitization.',
            javaExample: `// Security Fundamentals: Password Hashing (BCrypt) & Secrets
// BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();`,
            practiceQuestions: ['54. Verify credentials are not committed.'],
          },
          {
            dayNumber: 165,
            title: 'Refactor & Clean Architecture',
            topic: 'Refactor and code quality',
            conceptExplanation: 'Eliminating duplicate logic, separating concerns, removing unused imports, and optimizing queries.',
            javaExample: `// Code Quality Refactoring & SonarLint Cleanups
public class CleanRefactoring {
    // Clean Code: Small methods, single responsibility, meaningful naming
}`,
            practiceQuestions: [
              '47. Fix bugs and remove unused code.',
              '55. Run test suite and record results.',
              '56. Use descriptive Git commits.',
            ],
          },
          {
            dayNumber: 166,
            title: 'Final Testing & Seed Data',
            topic: 'Final testing and sample data',
            conceptExplanation: 'Verifying end-to-end workflows from a clean database state with realistic seed data.',
            javaExample: `// Final Database Seeding and Load Testing
// CommandLineRunner seed database on startup`,
            practiceQuestions: ['65. Publish repository and verify README from a fresh environment.'],
          },
          {
            dayNumber: 167,
            title: 'Demo & Presentation Prep',
            topic: 'Publish repository and prepare demo',
            conceptExplanation: 'Preparing a concise 2-minute walkthrough explaining architectural layers and request lifecycles.',
            javaExample: `// Git Tags, Releases, and Demo Presentation
// git tag -a v1.0.0 -m "Release 1.0.0"`,
            practiceQuestions: [
              '48. Prepare a short demo of main workflows.',
              '57. Create a release tag or version label.',
              '58. Prepare a two-minute project explanation.',
              '59. Explain controller-service-repository flow.',
              '60. Explain HTTP request-to-database-to-response flow.',
            ],
          },
          {
            dayNumber: 168,
            title: 'Final Assessment & Next Steps',
            topic: 'Final assessment and next plan',
            conceptExplanation: 'Completing the 6-Month Java roadmap, reviewing DSA strengths, and planning the next 90 days of backend growth.',
            javaExample: `// Final Assessment & Graduation
public class CourseGraduation {
    public static void main(String[] args) {
        System.out.println("Congratulations! You have completed the 6-Month Java Professional Track.");
    }
}`,
            practiceQuestions: [
              '61. List three limitations and future improvements.',
              '62. Revise Core Java with a mixed quiz.',
              '63. Revisit five DSA problems previously missed.',
              '64. Plan the next 90 days of Java/backend study.',
            ],
          },
        ],
      },
    ],
  },
]
