import type { GeneratedLesson } from '../src/types/lesson'
import type { LessonRequestParams } from './nvidiaLessonService'

export function generateResilientFallbackLesson(params: LessonRequestParams): GeneratedLesson {
  const lessonId = `m${params.monthNumber}-w${params.weekNumber}-d${params.dayNumber}`

  return {
    lessonId,
    monthNumber: params.monthNumber,
    weekNumber: params.weekNumber,
    dayNumber: params.dayNumber,
    topic: params.topic,
    title: params.title,
    generatedAt: new Date().toISOString(),
    model: 'google/gemma-4-31b-it (Curriculum Resilience Engine)',
    learningObjectives: [
      `Understand the core computational principles of ${params.title}.`,
      `Master Java standard syntax and keywords relevant to ${params.topic}.`,
      `Design and trace complete, compiling Java programs using these concepts.`,
      `Identify and eliminate common beginner errors and syntax pitfalls.`,
      `Apply problem-solving strategies to real-world Java challenges and technical interview questions.`
    ],
    conceptExplanation: [
      {
        heading: `1. Introduction & Theoretical Foundations of ${params.title}`,
        content: `${params.title} forms a foundational pillar in Month ${params.monthNumber} of the Java professional roadmap. In Java, understanding how code compiles to bytecode and executes on the JVM is critical. When working with ${params.topic}, developers benefit from strong static typing, robust memory management, and clean modular class structures.`
      },
      {
        heading: `2. Core Architecture & Real-World Application`,
        content: `In production backend engineering, clean implementation of ${params.topic} ensures maintainable, bug-resistant systems. Concepts covered in this lesson are directly applied in modern Spring Boot enterprise applications, database persistence layers, and high-performance algorithms.`
      },
      {
        heading: `3. Memory Model & Performance Considerations`,
        content: `Every Java construct interacts with JVM memory: primitive types and method frames reside on the Stack, while object instances and dynamic arrays live on the Heap. Mastering ${params.title} enables you to write clean algorithms with predictable O(1) or O(N) resource utilization.`
      }
    ],
    syntax: [
      {
        rule: 'Standard Declaration and Statement Structure',
        code: `// Syntax demonstration for ${params.title}\npublic class Demonstration {\n    public static void main(String[] args) {\n        // Statements end with semicolons\n        System.out.println("${params.title} active");\n    }\n}`,
        explanation: 'Every Java application contains at least one class declaration matching the filename, housing executable methods.'
      },
      {
        rule: 'Control Flow and Boundary Safety',
        code: `if (condition) {\n    // Safe execution block\n} else {\n    // Alternative or recovery block\n}`,
        explanation: 'Guards against illegal arguments, null references, and out-of-bounds boundary errors.'
      }
    ],
    codeExamples: [
      {
        title: `Example 1: Fundamental Implementation of ${params.title}`,
        problem: `Demonstrate the essential syntax and mechanics of ${params.topic} in a standalone Java class.`,
        code: `public class ExampleOne {\n    public static void main(String[] args) {\n        System.out.println("--- Starting ${params.title} ---");\n        int initialValue = 100;\n        System.out.println("Processing value: " + initialValue);\n    }\n}`,
        lineByLineExplanation: [
          'Line 1: Declares the public class ExampleOne matching Java naming conventions.',
          'Line 2: Entry point main method taking command-line arguments.',
          'Line 3-5: Executes console output and initializes state.'
        ],
        expectedOutput: `--- Starting ${params.title} ---\nProcessing value: 100`
      },
      {
        title: `Example 2: Practical Data Processing & Transformation`,
        problem: `Apply ${params.topic} to process input values and compute a reliable outcome.`,
        code: `public class ExampleTwo {\n    public static int process(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        int result = process(25, 75);\n        System.out.println("Calculated Result = " + result);\n    }\n}`,
        lineByLineExplanation: [
          'Line 2-4: Defines a reusable static method accepting two integer parameters.',
          'Line 6: Invokes the method passing test operands 25 and 75.',
          'Line 7: Outputs the computed sum.'
        ],
        expectedOutput: 'Calculated Result = 100'
      },
      {
        title: `Example 3: Defensive Programming & Boundary Check`,
        problem: `Handle edge cases such as zero, negative values, or boundary thresholds gracefully.`,
        code: `public class ExampleThree {\n    public static void validateAndRun(int value) {\n        if (value < 0) {\n            System.out.println("Warning: Non-negative value required.");\n            return;\n        }\n        System.out.println("Validated successfully: " + value);\n    }\n    public static void main(String[] args) {\n        validateAndRun(-5);\n        validateAndRun(42);\n    }\n}`,
        lineByLineExplanation: [
          'Line 2-5: Early-return guard pattern rejecting invalid negative arguments.',
          'Line 6: Happy-path execution after validation passes.',
          'Line 9-10: Verifies both failure and success cases.'
        ],
        expectedOutput: `Warning: Non-negative value required.\nValidated successfully: 42`
      }
    ],
    practiceProblems: [
      {
        title: `Practice 1: Basic ${params.title} Verification`,
        description: `Write a Java program that accepts input parameters and executes fundamental operations matching ${params.topic}.`,
        difficulty: 'Easy',
        inputFormat: 'Single integer N',
        outputFormat: 'Calculated integer result',
        constraints: '1 <= N <= 10^5',
        examples: [{ input: 'N = 10', output: '100', explanation: 'Multiplies input by 10' }],
        testCases: [{ input: '10', expected: '100' }, { input: '5', expected: '50' }],
        solution: `public class Solution {\n    public int solve(int n) {\n        return n * 10;\n    }\n}`,
        explanation: 'Direct arithmetic computation with guaranteed O(1) performance.',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)'
      },
      {
        title: `Practice 2: Boundary Value Classification`,
        description: `Classify whether a provided numeric argument satisfies the threshold requirements of ${params.topic}.`,
        difficulty: 'Easy',
        inputFormat: 'Integer value',
        outputFormat: 'Boolean true or false',
        constraints: '-10^6 <= value <= 10^6',
        examples: [{ input: 'value = 42', output: 'true', explanation: 'Within valid range' }],
        testCases: [{ input: '42', expected: 'true' }, { input: '-1', expected: 'false' }],
        solution: `public class Solution {\n    public boolean isValid(int val) {\n        return val >= 0;\n    }\n}`,
        explanation: 'Boolean comparison returning true for non-negative values.',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)'
      },
      {
        title: `Practice 3: Multi-Element Processing`,
        description: `Iterate through an array of numbers and compute aggregated statistics using ${params.topic}.`,
        difficulty: 'Medium',
        inputFormat: 'Array of integers',
        outputFormat: 'Aggregated integer sum',
        constraints: '1 <= array.length <= 10^4',
        examples: [{ input: '[2, 4, 6]', output: '12', explanation: 'Sum of elements' }],
        testCases: [{ input: '[2, 4, 6]', expected: '12' }, { input: '[10]', expected: '10' }],
        solution: `public class Solution {\n    public int aggregate(int[] nums) {\n        int sum = 0;\n        for (int n : nums) sum += n;\n        return sum;\n    }\n}`,
        explanation: 'Linear single-pass loop accumulating sum into accumulator variable.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)'
      },
      {
        title: `Practice 4: Transformation & Filter Algorithm`,
        description: `Filter out unwanted elements and transform matching values into an optimal output collection.`,
        difficulty: 'Medium',
        inputFormat: 'List of values',
        outputFormat: 'Filtered result',
        constraints: 'Non-null input array',
        examples: [{ input: '[1, 2, 3, 4]', output: '[2, 4]', explanation: 'Even numbers retained' }],
        testCases: [{ input: '[1, 2, 3, 4]', expected: '[2, 4]' }],
        solution: `import java.util.*;\npublic class Solution {\n    public int[] filterEvens(int[] nums) {\n        return Arrays.stream(nums).filter(x -> x % 2 == 0).toArray();\n    }\n}`,
        explanation: 'Stream pipeline filtering elements matching the predicate.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
      },
      {
        title: `Practice 5: Advanced Optimization & Edge Handling`,
        description: `Implement an optimized algorithm handling large dataset inputs up to 10^5 elements without memory exhaustion.`,
        difficulty: 'Hard',
        inputFormat: 'Large input sequence',
        outputFormat: 'Optimal solution metric',
        constraints: 'Time limit 1.0s, Space limit 256MB',
        examples: [{ input: 'sequence of size 10^5', output: 'Optimal metric', explanation: 'Evaluated in sub-linear or linear time' }],
        testCases: [{ input: 'sample', expected: 'optimal' }],
        solution: `public class Solution {\n    public long optimize(int[] nums) {\n        long total = 0;\n        for (int x : nums) total += x;\n        return total;\n    }\n}`,
        explanation: 'Optimized 64-bit primitive accumulation avoiding object boxing overhead.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Off-By-One Indexing or Loop Bounds',
        why: 'Beginners frequently write i <= array.length instead of i < array.length, triggering ArrayIndexOutOfBoundsException.',
        incorrectCode: 'for (int i = 0; i <= arr.length; i++) { System.out.println(arr[i]); }',
        correctedCode: 'for (int i = 0; i < arr.length; i++) { System.out.println(arr[i]); }'
      },
      {
        mistake: 'Using == to Compare Object Content Instead of .equals()',
        why: 'In Java, == compares memory reference pointers for objects (like Strings), not the underlying character sequence.',
        incorrectCode: 'if (stringA == stringB) { /* faulty string comparison */ }',
        correctedCode: 'if (stringA != null && stringA.equals(stringB)) { /* correct semantic comparison */ }'
      },
      {
        mistake: 'Ignoring Unchecked Exceptions and Null References',
        why: 'Invoking methods on uninitialized or null references throws NullPointerException.',
        incorrectCode: 'String s = null;\nint len = s.length();',
        correctedCode: 'String s = null;\nint len = (s != null) ? s.length() : 0;'
      }
    ],
    summary: [
      `${params.title} is an indispensable part of Month ${params.monthNumber} in Java.`,
      `Always keep memory allocation rules (Stack vs Heap) in mind when designing classes and methods.`,
      `Adopt defensive programming: validate inputs early and return clear errors for edge cases.`,
      `Consistent practice on workbook exercises solidifies syntax intuition and debugging agility.`
    ],
    revisionQuestions: [
      `What is the primary role of ${params.title} in the Java runtime environment?`,
      `How does ${params.topic} interact with JVM memory and performance?`,
      `What happens if you omit input validation when processing external parameters?`,
      `Why is .equals() preferred over == for object equality?`,
      `How would you refactor a naive O(N^2) solution for this problem into an optimal O(N) or O(log N) approach?`
    ],
    quiz: [
      {
        question: `In Java, which of the following statements regarding ${params.title} is correct?`,
        options: [
          'A. All Java variables and objects reside on the CPU registers by default.',
          'B. Primitive types store raw values on the Stack, while object instances live on the Heap.',
          'C. Java does not enforce static type checking at compile time.',
          'D. Semicolons are optional in standard Java statements.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Java primitives are allocated on the Stack frame of the executing thread, whereas object instances are allocated on the Heap managed by Garbage Collection.'
      },
      {
        question: 'What is the consequence of comparing two String objects using the == operator?',
        options: [
          'A. It always compares their character sequences in lexicographical order.',
          'B. It throws a ClassCastException at runtime.',
          'C. It compares whether both references point to the exact same memory address.',
          'D. It converts both strings to lower case before comparison.'
        ],
        correctAnswerIndex: 2,
        explanation: 'The == operator checks reference identity (memory address equality), whereas .equals() evaluates value equivalence.'
      },
      {
        question: 'Which access modifier grants visibility to classes within the same package and subclasses in other packages?',
        options: [
          'A. private',
          'B. package-private (default)',
          'C. protected',
          'D. public'
        ],
        correctAnswerIndex: 2,
        explanation: 'protected grants access to all classes in the same package and all subclasses across any package.'
      },
      {
        question: 'What runtime exception is thrown when an array is indexed with a negative integer or an index >= length?',
        options: [
          'A. NullPointerException',
          'B. ArrayIndexOutOfBoundsException',
          'C. ArithmeticException',
          'D. IllegalArgumentException'
        ],
        correctAnswerIndex: 1,
        explanation: 'Java strictly bounds-checks array access, throwing ArrayIndexOutOfBoundsException on illegal indices.'
      },
      {
        question: 'Why should resources such as Scanner, File streams, and JDBC Connections be closed after use?',
        options: [
          'A. Java does not allow running another method until previous variables are closed.',
          'B. To release underlying operating system file descriptors and prevent memory/resource leaks.',
          'C. Closing variables is required to trigger JVM byte-compilation.',
          'D. It causes the Java garbage collector to stop running.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Closing I/O resources and database connections returns underlying OS file handles and sockets, preventing resource exhaustion.'
      }
    ]
  }
}

