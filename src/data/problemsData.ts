export interface ProblemTestCase {
  id: number
  input: string
  expected: string
}

export interface ProblemItem {
  id: string
  numId: number
  title: string
  topic: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  acceptance: string
  status?: 'solved' | 'unsolved'
  month: number
  courseLessonIds?: string[]
  description: string
  examples: {
    input: string
    output: string
    explanation?: string
  }[]
  constraints: string[]
  hints?: string[]
  starterCode: string
  editorial?: {
    approach: string
    explanation: string
    timeComplexity: string
    spaceComplexity: string
  }
  solutionCode?: string
  testCases: ProblemTestCase[]
}

export const PROBLEMS_DATA: ProblemItem[] = [
  {
    "id": "print-welcome-formatted",
    "numId": 1,
    "title": "Formatted Console Welcome Output",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "92.4%",
    "status": "solved",
    "month": 1,
    "courseLessonIds": [
      "day-1"
    ],
    "description": "Write a Java class that prints a formatted welcome message to the console containing your student name, track, and cohort on separate lines, utilizing newline and tab escape characters.",
    "examples": [
      {
        "input": "No input parameters",
        "output": "Track:\tJava Backend\nCohort:\t2026",
        "explanation": "Outputs formatted text with proper indentation and newline breaks."
      }
    ],
    "constraints": [
      "Must use System.out.println or formatted print",
      "Class name must be Solution or Welcome"
    ],
    "starterCode": "public class Solution {\n    public static void main(String[] args) {\n        // Print formatted welcome message using \\n and \\t escape sequences\n        System.out.println(\"Track:\\tJava Backend\\nCohort:\\t2026\");\n    }\n}",
    "editorial": {
      "approach": "Direct console I/O using escape sequences.",
      "explanation": "Use \\n for newline breaks and \\t for horizontal tab spacing.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "main([])",
        "expected": "Track:\tJava Backend\nCohort:\t2026"
      }
    ]
  },
  {
    "id": "primitive-types-inspector",
    "numId": 2,
    "title": "Primitive Data Types and Range Display",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "89.1%",
    "status": "solved",
    "month": 1,
    "courseLessonIds": [
      "day-2"
    ],
    "description": "Declare variables of each Java primitive type (byte, short, int, long, float, double, char, boolean), assign sample values, and print their byte sizes and default range bounds using wrapper class constants like Integer.MIN_VALUE and Integer.MAX_VALUE.",
    "examples": [
      {
        "input": "No direct input",
        "output": "byte: 8 bits, int: 32 bits, double: 64 bits",
        "explanation": "Displays wrapper bit sizes."
      }
    ],
    "constraints": [
      "Covers all 8 Java primitive types"
    ],
    "starterCode": "public class Solution {\n    public void displayTypeRanges() {\n        // Display byte sizes and bounds using wrapper classes\n    }\n}",
    "editorial": {
      "approach": "Utilize Java primitive wrapper constants Byte.SIZE, Integer.MIN_VALUE, etc.",
      "explanation": "Each wrapper class provides SIZE, MIN_VALUE, and MAX_VALUE metadata constants.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "displayTypeRanges()",
        "expected": "Valid ranges output"
      }
    ]
  },
  {
    "id": "celsius-to-fahrenheit",
    "numId": 3,
    "title": "Celsius to Fahrenheit Converter",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "86.5%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-3"
    ],
    "description": "Given a temperature in degrees Celsius as a double, convert it to Fahrenheit using the standard conversion formula: F = (C * 9/5) + 32. Return the temperature rounded to two decimal places.",
    "examples": [
      {
        "input": "celsius = 0.0",
        "output": "32.0",
        "explanation": "(0 * 9/5) + 32 = 32.0"
      },
      {
        "input": "celsius = 100.0",
        "output": "212.0",
        "explanation": "(100 * 9/5) + 32 = 212.0"
      }
    ],
    "constraints": [
      "-273.15 <= celsius <= 1000.0"
    ],
    "starterCode": "public class Solution {\n    public double toFahrenheit(double celsius) {\n        // Formula: (celsius * 9.0 / 5.0) + 32.0\n        return 0.0;\n    }\n}",
    "editorial": {
      "approach": "Floating point arithmetic with double precision.",
      "explanation": "Ensure 9.0 / 5.0 is used to avoid integer division truncation.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "0.0",
        "expected": "32.0"
      },
      {
        "id": 2,
        "input": "100.0",
        "expected": "212.0"
      },
      {
        "id": 3,
        "input": "-40.0",
        "expected": "-40.0"
      }
    ]
  },
  {
    "id": "swap-numbers-without-temp",
    "numId": 4,
    "title": "Swap Integers Without Temporary Variable",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "78.2%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-4"
    ],
    "description": "Given an array containing two integers [a, b], swap their values without creating or utilizing any third temporary variable. Return the modified array [b, a].",
    "examples": [
      {
        "input": "nums = [5, 10]",
        "output": "[10, 5]",
        "explanation": "a becomes 10 and b becomes 5."
      },
      {
        "input": "nums = [-3, 8]",
        "output": "[8, -3]",
        "explanation": "Values swapped successfully."
      }
    ],
    "constraints": [
      "nums.length == 2",
      "-10^6 <= nums[i] <= 10^6"
    ],
    "starterCode": "public class Solution {\n    public int[] swapInPlace(int[] nums) {\n        // Swap nums[0] and nums[1] without extra variables (using arithmetic or XOR)\n        return nums;\n    }\n}",
    "editorial": {
      "approach": "XOR bitwise swap or arithmetic subtraction.",
      "explanation": "Using XOR: a = a ^ b; b = a ^ b; a = a ^ b; operates without risk of integer overflow.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[5, 10]",
        "expected": "[10, 5]"
      },
      {
        "id": 2,
        "input": "[-3, 8]",
        "expected": "[8, -3]"
      }
    ]
  },
  {
    "id": "leap-year-checker",
    "numId": 5,
    "title": "Leap Year Evaluation",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "81.4%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-6"
    ],
    "description": "Determine whether a given Gregorian calendar year is a leap year. A year is a leap year if it is divisible by 4, except for century years which must be divisible by 400 (e.g. 1900 was not, 2000 was).",
    "examples": [
      {
        "input": "year = 2024",
        "output": "true",
        "explanation": "2024 is divisible by 4 and not a century year."
      },
      {
        "input": "year = 1900",
        "output": "false",
        "explanation": "Divisible by 100 but not 400."
      }
    ],
    "constraints": [
      "1 <= year <= 9999"
    ],
    "starterCode": "public class Solution {\n    public boolean isLeapYear(int year) {\n        // Write your logic here\n        return false;\n    }\n}",
    "editorial": {
      "approach": "Compound conditional statements.",
      "explanation": "Condition: (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0).",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "2024",
        "expected": "true"
      },
      {
        "id": 2,
        "input": "1900",
        "expected": "false"
      },
      {
        "id": 3,
        "input": "2000",
        "expected": "true"
      }
    ]
  },
  {
    "id": "calculator-switch",
    "numId": 6,
    "title": "Arithmetic Calculator with Switch",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "84.0%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-7"
    ],
    "description": "Implement a method that takes two integer operands and a character operator ('+', '-', '*', '/', '%') and evaluates the arithmetic expression using a switch statement or switch expression. Throw an ArithmeticException if division by zero occurs.",
    "examples": [
      {
        "input": "a = 15, b = 3, op = '/'",
        "output": "5",
        "explanation": "15 / 3 = 5"
      },
      {
        "input": "a = 10, b = 4, op = '%'",
        "output": "2",
        "explanation": "10 % 4 = 2"
      }
    ],
    "constraints": [
      "-10^5 <= a, b <= 10^5",
      "op is one of +, -, *, /, %"
    ],
    "starterCode": "public class Solution {\n    public int calculate(int a, int b, char op) {\n        // Implement calculator logic using switch\n        return 0;\n    }\n}",
    "editorial": {
      "approach": "Modern Java switch expression.",
      "explanation": "Handle each character case and validate denominator before division.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "15, 3, '/'",
        "expected": "5"
      },
      {
        "id": 2,
        "input": "7, 8, '+'",
        "expected": "15"
      },
      {
        "id": 3,
        "input": "4, 5, '*'",
        "expected": "20"
      }
    ]
  },
  {
    "id": "factorial-loop",
    "numId": 7,
    "title": "Factorial Calculation with Iteration",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "76.8%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-8"
    ],
    "description": "Given a non-negative integer n, calculate its factorial (n!) using an iterative loop. Factorial of 0 is 1. Use 64-bit long to prevent overflow for values up to 20.",
    "examples": [
      {
        "input": "n = 5",
        "output": "120",
        "explanation": "5 * 4 * 3 * 2 * 1 = 120"
      },
      {
        "input": "n = 0",
        "output": "1",
        "explanation": "0! = 1"
      }
    ],
    "constraints": [
      "0 <= n <= 20"
    ],
    "starterCode": "public class Solution {\n    public long factorial(int n) {\n        // Compute factorial iteratively\n        return 1L;\n    }\n}",
    "editorial": {
      "approach": "For-loop product accumulation.",
      "explanation": "Accumulate product starting at 1L up to n.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "5",
        "expected": "120"
      },
      {
        "id": 2,
        "input": "0",
        "expected": "1"
      },
      {
        "id": 3,
        "input": "10",
        "expected": "3628800"
      }
    ]
  },
  {
    "id": "count-integer-digits",
    "numId": 8,
    "title": "Count Digits in Integer",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "82.3%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-9"
    ],
    "description": "Given an integer n (positive, negative, or zero), return the total number of digits it contains.",
    "examples": [
      {
        "input": "n = 12345",
        "output": "5",
        "explanation": "Contains 5 digits."
      },
      {
        "input": "n = 0",
        "output": "1",
        "explanation": "Zero has 1 digit."
      },
      {
        "input": "n = -450",
        "output": "3",
        "explanation": "Negative sign is not a digit."
      }
    ],
    "constraints": [
      "-2^31 <= n <= 2^31 - 1"
    ],
    "starterCode": "public class Solution {\n    public int countDigits(int n) {\n        // Count number of digits in n\n        return 0;\n    }\n}",
    "editorial": {
      "approach": "Repeated division by 10 or log10.",
      "explanation": "If n == 0 return 1. Take absolute value and divide by 10 in a while loop.",
      "timeComplexity": "O(log10(n))",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "12345",
        "expected": "5"
      },
      {
        "id": 2,
        "input": "0",
        "expected": "1"
      },
      {
        "id": 3,
        "input": "-999",
        "expected": "3"
      }
    ]
  },
  {
    "id": "reverse-integer-digits",
    "numId": 9,
    "title": "Reverse Integer Digits",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "63.5%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-9"
    ],
    "description": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], return 0.",
    "examples": [
      {
        "input": "x = 123",
        "output": "321",
        "explanation": "Reversed digits form 321."
      },
      {
        "input": "x = -123",
        "output": "-321",
        "explanation": "Preserves negative sign."
      },
      {
        "input": "x = 120",
        "output": "21",
        "explanation": "Leading zeros are dropped."
      }
    ],
    "constraints": [
      "-2^31 <= x <= 2^31 - 1"
    ],
    "starterCode": "public class Solution {\n    public int reverse(int x) {\n        // Reverse digits with overflow protection\n        return 0;\n    }\n}",
    "editorial": {
      "approach": "Modulo extraction with overflow bounds checking.",
      "explanation": "Extract last digit with x % 10, check for overflow before multiplying result by 10.",
      "timeComplexity": "O(log10(x))",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "123",
        "expected": "321"
      },
      {
        "id": 2,
        "input": "-123",
        "expected": "-321"
      },
      {
        "id": 3,
        "input": "1534236469",
        "expected": "0"
      }
    ]
  },
  {
    "id": "palindrome-number",
    "numId": 10,
    "title": "Palindrome Number Verification",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "67.2%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-10"
    ],
    "description": "Given an integer x, return true if x is a palindrome integer, or false otherwise. An integer is a palindrome when it reads the same forward and backward without converting the number into a string.",
    "examples": [
      {
        "input": "x = 121",
        "output": "true",
        "explanation": "121 reads 121 backwards."
      },
      {
        "input": "x = -121",
        "output": "false",
        "explanation": "-121 backwards is 121- which is not equal."
      },
      {
        "input": "x = 10",
        "output": "false",
        "explanation": "Reads 01 backwards."
      }
    ],
    "constraints": [
      "-2^31 <= x <= 2^31 - 1"
    ],
    "starterCode": "public class Solution {\n    public boolean isPalindrome(int x) {\n        // Return true if x is a palindrome integer\n        return false;\n    }\n}",
    "editorial": {
      "approach": "Reverse the back half of the integer.",
      "explanation": "Negative numbers and numbers ending with 0 (except 0) are not palindromes. Reverse half and compare.",
      "timeComplexity": "O(log10(x))",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "121",
        "expected": "true"
      },
      {
        "id": 2,
        "input": "-121",
        "expected": "false"
      },
      {
        "id": 3,
        "input": "10",
        "expected": "false"
      }
    ]
  },
  {
    "id": "prime-number-check",
    "numId": 11,
    "title": "Prime Number Determination",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "64.9%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-10"
    ],
    "description": "Write a method isPrime(int n) that returns true if n is a prime number, and false otherwise. A prime number is a natural number strictly greater than 1 with no positive divisors other than 1 and itself.",
    "examples": [
      {
        "input": "n = 29",
        "output": "true",
        "explanation": "29 has no divisors other than 1 and 29."
      },
      {
        "input": "n = 1",
        "output": "false",
        "explanation": "1 is not prime by definition."
      },
      {
        "input": "n = 4",
        "output": "false",
        "explanation": "4 is divisible by 2."
      }
    ],
    "constraints": [
      "1 <= n <= 10^9"
    ],
    "starterCode": "public class Solution {\n    public boolean isPrime(int n) {\n        // Determine whether n is prime\n        return false;\n    }\n}",
    "editorial": {
      "approach": "Trial division up to sqrt(n).",
      "explanation": "Check divisibility by 2 and 3, then step by 6 (6k +- 1) up to sqrt(n).",
      "timeComplexity": "O(sqrt(n))",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "29",
        "expected": "true"
      },
      {
        "id": 2,
        "input": "1",
        "expected": "false"
      },
      {
        "id": 3,
        "input": "4",
        "expected": "false"
      }
    ]
  },
  {
    "id": "armstrong-number-check",
    "numId": 12,
    "title": "Armstrong Number Checker",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "62.0%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-11"
    ],
    "description": "An Armstrong number of k digits is an integer where the sum of each digit raised to power k equals the number itself. Determine if a given positive integer n is an Armstrong number.",
    "examples": [
      {
        "input": "n = 153",
        "output": "true",
        "explanation": "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153."
      },
      {
        "input": "n = 9474",
        "output": "true",
        "explanation": "9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474."
      }
    ],
    "constraints": [
      "1 <= n <= 10^8"
    ],
    "starterCode": "public class Solution {\n    public boolean isArmstrong(int n) {\n        // Check if n equals sum of (digit ^ k)\n        return false;\n    }\n}",
    "editorial": {
      "approach": "Count digits k, then accumulate digit^k.",
      "explanation": "Determine k = number of digits. Extract each digit and compute sum += Math.pow(d, k).",
      "timeComplexity": "O(log10(n))",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "153",
        "expected": "true"
      },
      {
        "id": 2,
        "input": "9474",
        "expected": "true"
      },
      {
        "id": 3,
        "input": "123",
        "expected": "false"
      }
    ]
  },
  {
    "id": "gcd-and-lcm",
    "numId": 13,
    "title": "Greatest Common Divisor (GCD) and LCM",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "79.5%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-11"
    ],
    "description": "Given two positive integers a and b, compute their Greatest Common Divisor (GCD) using the Euclidean algorithm, and their Least Common Multiple (LCM) where LCM = (a * b) / GCD.",
    "examples": [
      {
        "input": "a = 12, b = 18",
        "output": "[6, 36]",
        "explanation": "GCD is 6, LCM is 36."
      },
      {
        "input": "a = 7, b = 13",
        "output": "[1, 91]",
        "explanation": "Coprime numbers have GCD=1."
      }
    ],
    "constraints": [
      "1 <= a, b <= 10^6"
    ],
    "starterCode": "public class Solution {\n    public int[] findGcdAndLcm(int a, int b) {\n        // Return int[]{ gcd, lcm }\n        return new int[]{ 1, 1 };\n    }\n}",
    "editorial": {
      "approach": "Euclidean algorithm for GCD, formula for LCM.",
      "explanation": "Repeatedly replace (a, b) with (b, a % b) until b == 0. Then LCM = (a * b) / GCD.",
      "timeComplexity": "O(log(min(a, b)))",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "12, 18",
        "expected": "[6, 36]"
      },
      {
        "id": 2,
        "input": "7, 13",
        "expected": "[1, 91]"
      }
    ]
  },
  {
    "id": "array-sum-and-average",
    "numId": 14,
    "title": "Array Sum and Average Calculator",
    "topic": "Arrays",
    "difficulty": "Easy",
    "acceptance": "88.3%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-13"
    ],
    "description": "Given an array of integers, compute the total sum and the average as a double. Return a double array [sum, average].",
    "examples": [
      {
        "input": "nums = [10, 20, 30, 40, 50]",
        "output": "[150.0, 30.0]",
        "explanation": "Sum is 150, average is 150/5 = 30."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "starterCode": "public class Solution {\n    public double[] sumAndAverage(int[] nums) {\n        // Return new double[]{ sum, average }\n        return new double[]{ 0.0, 0.0 };\n    }\n}",
    "editorial": {
      "approach": "Single pass accumulation.",
      "explanation": "Loop through array accumulating into a 64-bit long sum, then divide by length for average.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[10, 20, 30, 40, 50]",
        "expected": "[150.0, 30.0]"
      },
      {
        "id": 2,
        "input": "[5]",
        "expected": "[5.0, 5.0]"
      }
    ]
  },
  {
    "id": "second-largest-in-array",
    "numId": 15,
    "title": "Find Second Largest Distinct Value",
    "topic": "Arrays",
    "difficulty": "Easy",
    "acceptance": "58.4%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-14"
    ],
    "description": "Given an array of integers, find the second largest distinct value in the array in a single traversal. If no second largest distinct value exists, return -1.",
    "examples": [
      {
        "input": "nums = [12, 35, 1, 10, 34, 1]",
        "output": "34",
        "explanation": "35 is largest, 34 is second largest."
      },
      {
        "input": "nums = [10, 10, 10]",
        "output": "-1",
        "explanation": "All elements identical, no second distinct value."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^6 <= nums[i] <= 10^6"
    ],
    "starterCode": "public class Solution {\n    public int findSecondLargest(int[] nums) {\n        // Return second largest distinct value or -1\n        return -1;\n    }\n}",
    "editorial": {
      "approach": "Maintain largest and secondLargest variables in one pass.",
      "explanation": "Update secondLargest when a value is between largest and secondLargest, or update both when a new maximum is found.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[12, 35, 1, 10, 34, 1]",
        "expected": "34"
      },
      {
        "id": 2,
        "input": "[10, 10, 10]",
        "expected": "-1"
      }
    ]
  },
  {
    "id": "count-vowels-and-consonants",
    "numId": 16,
    "title": "Count Vowels and Consonants in String",
    "topic": "Strings",
    "difficulty": "Easy",
    "acceptance": "85.2%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-16"
    ],
    "description": "Given a string s, count the total number of vowels and consonants it contains. Ignore spaces, digits, and special characters. Return an int array [vowelCount, consonantCount].",
    "examples": [
      {
        "input": "s = \"Java Programming!\"",
        "output": "[5, 10]",
        "explanation": "Vowels: a, a, o, a, i (5). Consonants: J, v, P, r, g, r, m, m, n, g (10)."
      }
    ],
    "constraints": [
      "1 <= s.length() <= 10^4"
    ],
    "starterCode": "public class Solution {\n    public int[] countVowelsAndConsonants(String s) {\n        // Return int[]{ vowels, consonants }\n        return new int[]{ 0, 0 };\n    }\n}",
    "editorial": {
      "approach": "Character classification with Character.isLetter().",
      "explanation": "Convert to lowercase, check if char is letter, then branch on vowel set (a,e,i,o,u).",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "\"Java Programming!\"",
        "expected": "[5, 10]"
      },
      {
        "id": 2,
        "input": "\"AEIOU\"",
        "expected": "[5, 0]"
      }
    ]
  },
  {
    "id": "reverse-string-in-place",
    "numId": 17,
    "title": "Reverse String Without Built-in Helper",
    "topic": "Strings",
    "difficulty": "Easy",
    "acceptance": "82.7%",
    "status": "unsolved",
    "month": 1,
    "courseLessonIds": [
      "day-17"
    ],
    "description": "Given a character array s, reverse it in place using a two-pointer approach without using StringBuilder.reverse() or extra string allocations.",
    "examples": [
      {
        "input": "s = ['h','e','l','l','o']",
        "output": "['o','l','l','e','h']",
        "explanation": "Characters swapped from ends inward."
      }
    ],
    "constraints": [
      "1 <= s.length <= 10^5"
    ],
    "starterCode": "public class Solution {\n    public void reverseString(char[] s) {\n        // Reverse array in place using two pointers\n    }\n}",
    "editorial": {
      "approach": "Two-pointer inward traversal.",
      "explanation": "Swap s[left] and s[right], increment left, decrement right until left >= right.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "['h','e','l','l','o']",
        "expected": "['o','l','l','e','h']"
      },
      {
        "id": 2,
        "input": "['J','a','v','a']",
        "expected": "['a','v','a','J']"
      }
    ]
  },
  {
    "id": "student-class-constructor",
    "numId": 18,
    "title": "Student Class with Constructor and Display",
    "topic": "Object-Oriented Programming",
    "difficulty": "Easy",
    "acceptance": "89.4%",
    "status": "unsolved",
    "month": 2,
    "courseLessonIds": [
      "day-29"
    ],
    "description": "Create a Student class with encapsulated fields id, name, and gpa. Provide a parameterized constructor and a displayInfo() method returning a formatted string \"Student[id=..., name=..., gpa=...]\".",
    "examples": [
      {
        "input": "id=101, name=\"Alice\", gpa=3.85",
        "output": "\"Student[id=101, name=Alice, gpa=3.85]\"",
        "explanation": "Formats fields correctly."
      }
    ],
    "constraints": [
      "gpa must be between 0.0 and 4.0"
    ],
    "starterCode": "public class Student {\n    private int id;\n    private String name;\n    private double gpa;\n\n    public Student(int id, String name, double gpa) {\n        this.id = id;\n        this.name = name;\n        this.gpa = gpa;\n    }\n\n    public String displayInfo() {\n        return \"Student[id=\" + id + \", name=\" + name + \", gpa=\" + gpa + \"]\";\n    }\n}",
    "editorial": {
      "approach": "Standard OOP class with encapsulated fields.",
      "explanation": "Use private fields with this keyword in constructor to disambiguate field from parameters.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "new Student(101, \"Alice\", 3.85).displayInfo()",
        "expected": "\"Student[id=101, name=Alice, gpa=3.85]\""
      }
    ]
  },
  {
    "id": "bank-account-encapsulation",
    "numId": 19,
    "title": "BankAccount Encapsulation and Transaction Validation",
    "topic": "Object-Oriented Programming",
    "difficulty": "Easy",
    "acceptance": "75.2%",
    "status": "unsolved",
    "month": 2,
    "courseLessonIds": [
      "day-31"
    ],
    "description": "Design a BankAccount class with private double balance. Implement deposit(double amount) returning boolean, withdraw(double amount) returning boolean, and getBalance(). Reject non-positive amounts or overdrafts.",
    "examples": [
      {
        "input": "deposit(100), withdraw(40)",
        "output": "balance = 60.0",
        "explanation": "Valid transaction chain."
      },
      {
        "input": "withdraw(200) from 50 balance",
        "output": "false, balance unchanged",
        "explanation": "Insufficient balance rejected."
      }
    ],
    "constraints": [
      "Balance cannot become negative"
    ],
    "starterCode": "public class BankAccount {\n    private double balance;\n\n    public BankAccount(double initialBalance) {\n        this.balance = Math.max(0, initialBalance);\n    }\n\n    public boolean deposit(double amount) {\n        if (amount <= 0) return false;\n        balance += amount;\n        return true;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount <= 0 || amount > balance) return false;\n        balance -= amount;\n        return true;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}",
    "editorial": {
      "approach": "Encapsulation with business rule validations.",
      "explanation": "Keep balance private and enforce invariants within mutating methods.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "initial 100, deposit 50, withdraw 30",
        "expected": "120.0"
      },
      {
        "id": 2,
        "input": "initial 50, withdraw 100",
        "expected": "false"
      }
    ]
  },
  {
    "id": "vehicle-car-inheritance",
    "numId": 20,
    "title": "Vehicle and Car Inheritance with Super",
    "topic": "Object-Oriented Programming",
    "difficulty": "Easy",
    "acceptance": "83.1%",
    "status": "unsolved",
    "month": 2,
    "courseLessonIds": [
      "day-33"
    ],
    "description": "Model a base class Vehicle(brand, speed) and a subclass Car(brand, speed, doors). Car must invoke super(brand, speed) in its constructor and override describe() to include door count.",
    "examples": [
      {
        "input": "brand=\"Toyota\", speed=120, doors=4",
        "output": "\"Car: Toyota traveling at 120 km/h with 4 doors\"",
        "explanation": "Subclass delegates brand and speed to parent."
      }
    ],
    "constraints": [
      "Must use inheritance with super keyword"
    ],
    "starterCode": "class Vehicle {\n    protected String brand;\n    protected int speed;\n    public Vehicle(String brand, int speed) { this.brand = brand; this.speed = speed; }\n}\n\npublic class Car extends Vehicle {\n    private int doors;\n    public Car(String brand, int speed, int doors) {\n        super(brand, speed);\n        this.doors = doors;\n    }\n    public String describe() {\n        return \"Car: \" + brand + \" traveling at \" + speed + \" km/h with \" + doors + \" doors\";\n    }\n}",
    "editorial": {
      "approach": "Inheritance with super constructor invocation.",
      "explanation": "Subclass constructor must invoke super(...) as its very first statement.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "new Car(\"Toyota\", 120, 4).describe()",
        "expected": "\"Car: Toyota traveling at 120 km/h with 4 doors\""
      }
    ]
  },
  {
    "id": "abstract-shape-hierarchy",
    "numId": 21,
    "title": "Abstract Shape and Area Hierarchy",
    "topic": "Object-Oriented Programming",
    "difficulty": "Medium",
    "acceptance": "78.5%",
    "status": "unsolved",
    "month": 2,
    "courseLessonIds": [
      "day-35"
    ],
    "description": "Create an abstract class Shape with an abstract method calculateArea(). Implement Circle(radius) and Rectangle(width, height) subclasses with polymorphic area calculations.",
    "examples": [
      {
        "input": "Circle(radius=5)",
        "output": "78.5398...",
        "explanation": "Area = pi * r^2"
      },
      {
        "input": "Rectangle(width=4, height=6)",
        "output": "24.0",
        "explanation": "Area = 4 * 6"
      }
    ],
    "constraints": [
      "Shape cannot be instantiated directly"
    ],
    "starterCode": "abstract class Shape {\n    public abstract double calculateArea();\n}\n\nclass Circle extends Shape {\n    private double radius;\n    public Circle(double radius) { this.radius = radius; }\n    @Override public double calculateArea() { return Math.PI * radius * radius; }\n}\n\nclass Rectangle extends Shape {\n    private double width, height;\n    public Rectangle(double w, double h) { this.width = w; this.height = h; }\n    @Override public double calculateArea() { return width * height; }\n}",
    "editorial": {
      "approach": "Runtime polymorphism via abstract class method contracts.",
      "explanation": "Subclasses provide concrete implementations of abstract methods.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "new Rectangle(4, 6).calculateArea()",
        "expected": "24.0"
      }
    ]
  },
  {
    "id": "payment-interface-polymorphism",
    "numId": 22,
    "title": "Payment Interface with Card and UPI Processing",
    "topic": "Object-Oriented Programming",
    "difficulty": "Medium",
    "acceptance": "74.2%",
    "status": "unsolved",
    "month": 2,
    "courseLessonIds": [
      "day-36"
    ],
    "description": "Define an interface PaymentMethod with processPayment(double amount). Implement CreditCardPayment and UpiPayment classes providing formatted transaction confirmations.",
    "examples": [
      {
        "input": "CreditCardPayment(\"1234\").processPayment(50.0)",
        "output": "\"Paid $50.0 via Card ending in 1234\"",
        "explanation": "Formats masked card transaction."
      }
    ],
    "constraints": [
      "Both classes must implement PaymentMethod"
    ],
    "starterCode": "interface PaymentMethod {\n    String processPayment(double amount);\n}\n\nclass CreditCardPayment implements PaymentMethod {\n    private String last4;\n    public CreditCardPayment(String last4) { this.last4 = last4; }\n    @Override public String processPayment(double amount) {\n        return \"Paid $\" + amount + \" via Card ending in \" + last4;\n    }\n}",
    "editorial": {
      "approach": "Interface contracts for loose coupling.",
      "explanation": "Client code interacts with the PaymentMethod interface rather than concrete classes.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "CreditCard 1234, 50.0",
        "expected": "\"Paid $50.0 via Card ending in 1234\""
      }
    ]
  },
  {
    "id": "recursive-fibonacci-memo",
    "numId": 23,
    "title": "Recursive Fibonacci with Memoization",
    "topic": "Algorithms",
    "difficulty": "Medium",
    "acceptance": "61.7%",
    "status": "unsolved",
    "month": 2,
    "courseLessonIds": [
      "day-41"
    ],
    "description": "Calculate the N-th Fibonacci number using recursion combined with memoization to ensure O(n) runtime performance instead of exponential O(2^n). F(0)=0, F(1)=1.",
    "examples": [
      {
        "input": "n = 10",
        "output": "55",
        "explanation": "F(10) = 55."
      },
      {
        "input": "n = 30",
        "output": "832040",
        "explanation": "Calculates instantaneously due to memoization."
      }
    ],
    "constraints": [
      "0 <= n <= 50"
    ],
    "starterCode": "public class Solution {\n    private long[] memo = new long[51];\n\n    public long fib(int n) {\n        if (n <= 1) return n;\n        if (memo[n] != 0) return memo[n];\n        return memo[n] = fib(n - 1) + fib(n - 2);\n    }\n}",
    "editorial": {
      "approach": "Top-down dynamic programming with recursion and memo array.",
      "explanation": "Cache each subproblem result to prevent repeated branch recalculations.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "10",
        "expected": "55"
      },
      {
        "id": 2,
        "input": "30",
        "expected": "832040"
      }
    ]
  },
  {
    "id": "generic-box-container",
    "numId": 24,
    "title": "Generic Box Container with Type Bounds",
    "topic": "Object-Oriented Programming",
    "difficulty": "Easy",
    "acceptance": "84.6%",
    "status": "unsolved",
    "month": 2,
    "courseLessonIds": [
      "day-44"
    ],
    "description": "Implement a generic class Box<T> that safely stores an item of type T with getItem(), setItem(T item), and hasItem() methods, preventing unchecked type casts.",
    "examples": [
      {
        "input": "Box<String> box = new Box<>(); box.setItem(\"Java\");",
        "output": "\"Java\"",
        "explanation": "Type safe generic getter."
      }
    ],
    "constraints": [
      "Type parameter T must be generic"
    ],
    "starterCode": "public class Box<T> {\n    private T item;\n    public void setItem(T item) { this.item = item; }\n    public T getItem() { return this.item; }\n    public boolean hasItem() { return this.item != null; }\n}",
    "editorial": {
      "approach": "Parametric polymorphism via Java Generics.",
      "explanation": "Type erasure ensures backward compatibility while the compiler enforces type safety.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "Box<String> with \"Java\"",
        "expected": "\"Java\""
      }
    ]
  },
  {
    "id": "custom-exception-validator",
    "numId": 25,
    "title": "Custom InsufficientBalanceException Validator",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "80.1%",
    "status": "unsolved",
    "month": 3,
    "courseLessonIds": [
      "day-59"
    ],
    "description": "Create a custom checked exception InsufficientBalanceException. Implement a method withdraw(double currentBalance, double amount) that throws this exception with an informative message if amount > currentBalance.",
    "examples": [
      {
        "input": "balance = 100, amount = 150",
        "output": "Throws InsufficientBalanceException(\"Deficit: $50.0\")",
        "explanation": "Validates deficit."
      }
    ],
    "constraints": [
      "Must extend Exception (checked)"
    ],
    "starterCode": "class InsufficientBalanceException extends Exception {\n    public InsufficientBalanceException(String msg) { super(msg); }\n}\n\npublic class Solution {\n    public double withdraw(double balance, double amount) throws InsufficientBalanceException {\n        if (amount > balance) {\n            throw new InsufficientBalanceException(\"Deficit: $\" + (amount - balance));\n        }\n        return balance - amount;\n    }\n}",
    "editorial": {
      "approach": "Custom checked exception with message propagation.",
      "explanation": "Subclass Exception for checked domain business errors.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "balance 100, amount 40",
        "expected": "60.0"
      }
    ]
  },
  {
    "id": "arraylist-name-directory",
    "numId": 26,
    "title": "ArrayList Name Directory Operations",
    "topic": "Collections",
    "difficulty": "Easy",
    "acceptance": "87.4%",
    "status": "unsolved",
    "month": 3,
    "courseLessonIds": [
      "day-61"
    ],
    "description": "Implement an in-memory name directory using ArrayList<String>. Support adding a name, inserting at a specified index, searching for a name, and removing by value.",
    "examples": [
      {
        "input": "add(\"Alice\"), add(\"Bob\"), insertAt(1, \"Charlie\")",
        "output": "[\"Alice\", \"Charlie\", \"Bob\"]",
        "explanation": "Elements shifted right on index insert."
      }
    ],
    "constraints": [
      "Names are non-null strings"
    ],
    "starterCode": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class NameDirectory {\n    private List<String> names = new ArrayList<>();\n    public void add(String name) { names.add(name); }\n    public void insertAt(int index, String name) { names.add(index, name); }\n    public boolean contains(String name) { return names.contains(name); }\n    public boolean remove(String name) { return names.remove(name); }\n    public List<String> getAll() { return new ArrayList<>(names); }\n}",
    "editorial": {
      "approach": "Standard List API methods with dynamic array backing.",
      "explanation": "ArrayList provides O(1) random access and O(n) middle insertions.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "insertAt 1 on [\"A\", \"B\"]",
        "expected": "[\"A\", \"Charlie\", \"B\"]"
      }
    ]
  },
  {
    "id": "remove-duplicates-preserve-order",
    "numId": 27,
    "title": "Remove Duplicates Preserving Insertion Order",
    "topic": "Collections",
    "difficulty": "Easy",
    "acceptance": "77.8%",
    "status": "unsolved",
    "month": 3,
    "courseLessonIds": [
      "day-62"
    ],
    "description": "Given an array of integers, remove all duplicate elements while preserving the original relative insertion order using a LinkedHashSet.",
    "examples": [
      {
        "input": "nums = [4, 5, 2, 4, 1, 5]",
        "output": "[4, 5, 2, 1]",
        "explanation": "First occurrences preserved in exact order."
      }
    ],
    "constraints": [
      "0 <= nums.length <= 10^5"
    ],
    "starterCode": "import java.util.LinkedHashSet;\nimport java.util.Set;\n\npublic class Solution {\n    public int[] removeDuplicates(int[] nums) {\n        Set<Integer> set = new LinkedHashSet<>();\n        for (int n : nums) set.add(n);\n        return set.stream().mapToInt(Integer::intValue).toArray();\n    }\n}",
    "editorial": {
      "approach": "LinkedHashSet combines hash lookup with doubly linked ordering.",
      "explanation": "O(1) average lookup and insertion while retaining iteration order.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[4, 5, 2, 4, 1, 5]",
        "expected": "[4, 5, 2, 1]"
      }
    ]
  },
  {
    "id": "word-frequency-counter",
    "numId": 28,
    "title": "Word Frequency Counter with Map",
    "topic": "Collections",
    "difficulty": "Easy",
    "acceptance": "79.2%",
    "status": "unsolved",
    "month": 3,
    "courseLessonIds": [
      "day-64"
    ],
    "description": "Given a sentence string, tokenize words by whitespace and count the occurrence frequency of each word using Map<String, Integer>. Return the frequency of a target word.",
    "examples": [
      {
        "input": "text = \"java is fun and java is powerful\", target = \"java\"",
        "output": "2",
        "explanation": "\"java\" appears twice."
      }
    ],
    "constraints": [
      "Case-insensitive word comparison"
    ],
    "starterCode": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Solution {\n    public Map<String, Integer> countFrequencies(String text) {\n        Map<String, Integer> map = new HashMap<>();\n        if (text == null || text.isBlank()) return map;\n        for (String word : text.toLowerCase().split(\"\\\\s+\")) {\n            map.put(word, map.getOrDefault(word, 0) + 1);\n        }\n        return map;\n    }\n}",
    "editorial": {
      "approach": "HashMap with getOrDefault for frequency counting.",
      "explanation": "Splits string on whitespace and increments counts.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(k) where k is distinct words"
    },
    "testCases": [
      {
        "id": 1,
        "input": "\"java is fun and java is powerful\"",
        "expected": "{\"java\": 2, \"is\": 2, \"fun\": 1, ...}"
      }
    ]
  },
  {
    "id": "generic-pair-implementation",
    "numId": 29,
    "title": "Generic Pair Implementation with Comparable",
    "topic": "Collections",
    "difficulty": "Medium",
    "acceptance": "71.4%",
    "status": "unsolved",
    "month": 3,
    "courseLessonIds": [
      "day-67"
    ],
    "description": "Create an immutable generic record or class Pair<K extends Comparable<K>, V> that implements Comparable<Pair<K, V>>, ordering pairs naturally by their first key element.",
    "examples": [
      {
        "input": "Pair(1, \"A\").compareTo(Pair(2, \"B\"))",
        "output": "< 0",
        "explanation": "Key 1 is smaller than key 2."
      }
    ],
    "constraints": [
      "Key K must implement Comparable<K>"
    ],
    "starterCode": "public class Pair<K extends Comparable<K>, V> implements Comparable<Pair<K, V>> {\n    private final K key;\n    private final V value;\n    public Pair(K key, V value) { this.key = key; this.value = value; }\n    public K getKey() { return key; }\n    public V getValue() { return value; }\n    @Override public int compareTo(Pair<K, V> o) {\n        return this.key.compareTo(o.key);\n    }\n}",
    "editorial": {
      "approach": "Bounded type parameter K extends Comparable<K>.",
      "explanation": "Enforces compile-time sortability on the primary key attribute.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "compare (1, \"A\") with (2, \"B\")",
        "expected": "negative"
      }
    ]
  },
  {
    "id": "comparator-multi-attribute-sort",
    "numId": 30,
    "title": "Multi-Field Employee Sorting with Comparator",
    "topic": "Searching and Sorting",
    "difficulty": "Medium",
    "acceptance": "66.8%",
    "status": "unsolved",
    "month": 3,
    "courseLessonIds": [
      "day-69"
    ],
    "description": "Given a list of Employee(name, department, salary) objects, sort them primarily by salary descending, and secondarily by name alphabetically using Comparator.comparing().",
    "examples": [
      {
        "input": "[(\"Alice\", 80000), (\"Bob\", 95000), (\"Charlie\", 80000)]",
        "output": "[Bob (95k), Alice (80k), Charlie (80k)]",
        "explanation": "Bob first, Alice before Charlie on tie."
      }
    ],
    "constraints": [
      "Salary is positive double"
    ],
    "starterCode": "import java.util.Comparator;\nimport java.util.List;\n\nclass Employee {\n    String name;\n    double salary;\n    public Employee(String name, double salary) { this.name = name; this.salary = salary; }\n    public double getSalary() { return salary; }\n    public String getName() { return name; }\n}\n\npublic class Solution {\n    public void sortEmployees(List<Employee> list) {\n        list.sort(Comparator.comparing(Employee::getSalary).reversed()\n            .thenComparing(Employee::getName));\n    }\n}",
    "editorial": {
      "approach": "Method references chained with Comparator combinators.",
      "explanation": "comparing().reversed().thenComparing() allows elegant declarative multi-field sort criteria.",
      "timeComplexity": "O(n log n)",
      "spaceComplexity": "O(log n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "Alice 80k, Bob 95k, Charlie 80k",
        "expected": "Bob, Alice, Charlie"
      }
    ]
  },
  {
    "id": "stream-filter-and-transform",
    "numId": 31,
    "title": "Filter and Transform Collections with Java Streams",
    "topic": "Collections",
    "difficulty": "Medium",
    "acceptance": "75.9%",
    "status": "unsolved",
    "month": 3,
    "courseLessonIds": [
      "day-72"
    ],
    "description": "Given a list of strings, filter out strings with length < 4, transform remaining strings to uppercase, remove duplicates, and collect to an alphabetically sorted list using Java 8+ Streams API.",
    "examples": [
      {
        "input": "[\"cat\", \"elephant\", \"dog\", \"tiger\", \"cat\", \"tiger\"]",
        "output": "[\"ELEPHANT\", \"TIGER\"]",
        "explanation": "Filtered, uppercased, distinct, and sorted."
      }
    ],
    "constraints": [
      "Must use java.util.stream.Stream pipeline"
    ],
    "starterCode": "import java.util.List;\nimport java.util.stream.Collectors;\n\npublic class Solution {\n    public List<String> processWords(List<String> words) {\n        return words.stream()\n            .filter(w -> w.length() >= 4)\n            .map(String::toUpperCase)\n            .distinct()\n            .sorted()\n            .collect(Collectors.toList());\n    }\n}",
    "editorial": {
      "approach": "Functional stream pipeline with filter, map, distinct, sorted.",
      "explanation": "Leverages non-mutating declarative stream transformations.",
      "timeComplexity": "O(n log n)",
      "spaceComplexity": "O(n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[\"cat\", \"elephant\", \"dog\", \"tiger\"]",
        "expected": "[\"ELEPHANT\", \"TIGER\"]"
      }
    ]
  },
  {
    "id": "local-date-duration-calculator",
    "numId": 32,
    "title": "Calculate Days Between Two Dates with LocalDate",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "84.3%",
    "status": "unsolved",
    "month": 3,
    "courseLessonIds": [
      "day-75"
    ],
    "description": "Given two ISO date strings (e.g. \"2026-01-01\" and \"2026-06-30\"), parse them into java.time.LocalDate and calculate the total number of days elapsed between them using ChronoUnit.DAYS.",
    "examples": [
      {
        "input": "start=\"2026-01-01\", end=\"2026-01-10\"",
        "output": "9",
        "explanation": "9 full days elapsed between Jan 1 and Jan 10."
      }
    ],
    "constraints": [
      "Dates must conform to YYYY-MM-DD format"
    ],
    "starterCode": "import java.time.LocalDate;\nimport java.time.temporal.ChronoUnit;\n\npublic class Solution {\n    public long daysBetween(String startIso, String endIso) {\n        LocalDate start = LocalDate.parse(startIso);\n        LocalDate end = LocalDate.parse(endIso);\n        return ChronoUnit.DAYS.between(start, end);\n    }\n}",
    "editorial": {
      "approach": "Modern java.time API using ChronoUnit.DAYS.",
      "explanation": "Thread-safe immutable dates replace legacy java.util.Date.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "\"2026-01-01\", \"2026-01-10\"",
        "expected": "9"
      }
    ]
  },
  {
    "id": "file-word-and-line-counter",
    "numId": 33,
    "title": "File Word, Line, and Character Counter",
    "topic": "Java Fundamentals",
    "difficulty": "Medium",
    "acceptance": "72.0%",
    "status": "unsolved",
    "month": 4,
    "courseLessonIds": [
      "day-86"
    ],
    "description": "Implement a method that reads a multiline text content and computes the total count of lines, whitespace-delimited words, and characters.",
    "examples": [
      {
        "input": "\"Hello World\\nJava Backend\"",
        "output": "[2, 4, 23]",
        "explanation": "2 lines, 4 words, 23 characters."
      }
    ],
    "constraints": [
      "Handles empty strings gracefully"
    ],
    "starterCode": "public class Solution {\n    public int[] countStats(String content) {\n        if (content == null || content.isEmpty()) return new int[]{0, 0, 0};\n        String[] lines = content.split(\"\\r?\\n\");\n        String[] words = content.trim().split(\"\\\\s+\");\n        return new int[]{ lines.length, words.length, content.length() };\n    }\n}",
    "editorial": {
      "approach": "Regular expression tokenization.",
      "explanation": "Splits on newlines for lines and whitespace for word tokens.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "\"Hello World\\nJava Backend\"",
        "expected": "[2, 4, 23]"
      }
    ]
  },
  {
    "id": "multithreaded-runnable-worker",
    "numId": 34,
    "title": "Concurrent Worker Execution with Runnable",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "80.5%",
    "status": "unsolved",
    "month": 4,
    "courseLessonIds": [
      "day-90"
    ],
    "description": "Implement a TaskWorker class implementing Runnable. It accepts a taskId and count, outputs each step, and allows the calling thread to await completion using thread.join().",
    "examples": [
      {
        "input": "Worker with count 3",
        "output": "Executes steps 1..3 concurrently",
        "explanation": "Joined thread completes before main continues."
      }
    ],
    "constraints": [
      "Must implement java.lang.Runnable"
    ],
    "starterCode": "public class TaskWorker implements Runnable {\n    private String taskId;\n    private int iterations;\n    public TaskWorker(String taskId, int iterations) {\n        this.taskId = taskId;\n        this.iterations = iterations;\n    }\n    @Override public void run() {\n        for (int i = 1; i <= iterations; i++) {\n            // Task progress\n        }\n    }\n}",
    "editorial": {
      "approach": "Runnable decoupling from Thread creation.",
      "explanation": "Runnable represents the executable work unit while Thread handles execution.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "taskId \"T1\", 3 iterations",
        "expected": "Successful execution"
      }
    ]
  },
  {
    "id": "producer-consumer-buffer",
    "numId": 35,
    "title": "Thread-Safe Producer Consumer Buffer",
    "topic": "Data Structures",
    "difficulty": "Hard",
    "acceptance": "52.3%",
    "status": "unsolved",
    "month": 4,
    "courseLessonIds": [
      "day-92"
    ],
    "description": "Implement a thread-safe bounded buffer class BoundedBuffer<T> using synchronized methods, wait(), and notifyAll() to coordinate concurrent producer and consumer threads without race conditions or deadlocks.",
    "examples": [
      {
        "input": "capacity = 2, produce 3 items",
        "output": "3rd produce blocks until consumer takes an item",
        "explanation": "Bounded capacity enforced safely."
      }
    ],
    "constraints": [
      "Capacity >= 1",
      "Must guard wait() inside a while loop"
    ],
    "starterCode": "import java.util.LinkedList;\nimport java.util.Queue;\n\npublic class BoundedBuffer<T> {\n    private final Queue<T> queue = new LinkedList<>();\n    private final int capacity;\n\n    public BoundedBuffer(int capacity) { this.capacity = capacity; }\n\n    public synchronized void put(T item) throws InterruptedException {\n        while (queue.size() == capacity) {\n            wait();\n        }\n        queue.add(item);\n        notifyAll();\n    }\n\n    public synchronized T take() throws InterruptedException {\n        while (queue.isEmpty()) {\n            wait();\n        }\n        T item = queue.poll();\n        notifyAll();\n        return item;\n    }\n}",
    "editorial": {
      "approach": "Monitor synchronization with wait and notifyAll.",
      "explanation": "Always invoke wait() within a while loop to protect against spurious wakeups.",
      "timeComplexity": "O(1) amortized",
      "spaceComplexity": "O(capacity)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "capacity 2, put 2 items",
        "expected": "buffer full, no deadlock"
      }
    ]
  },
  {
    "id": "executor-service-task-pool",
    "numId": 36,
    "title": "ThreadPool Management with ExecutorService and Future",
    "topic": "Algorithms",
    "difficulty": "Medium",
    "acceptance": "64.1%",
    "status": "unsolved",
    "month": 4,
    "courseLessonIds": [
      "day-93"
    ],
    "description": "Implement a service that submits N Callable<Integer> computation tasks to an ExecutorService fixed thread pool and sums their results by resolving java.util.concurrent.Future objects.",
    "examples": [
      {
        "input": "3 tasks returning 10, 20, 30",
        "output": "60",
        "explanation": "All futures resolved and summed."
      }
    ],
    "constraints": [
      "Executor must be cleanly shut down with shutdown()"
    ],
    "starterCode": "import java.util.List;\nimport java.util.concurrent.*;\n\npublic class Solution {\n    public int executeAndSum(List<Callable<Integer>> tasks) throws Exception {\n        ExecutorService executor = Executors.newFixedThreadPool(4);\n        int total = 0;\n        try {\n            List<Future<Integer>> futures = executor.invokeAll(tasks);\n            for (Future<Integer> f : futures) {\n                total += f.get();\n            }\n        } finally {\n            executor.shutdown();\n        }\n        return total;\n    }\n}",
    "editorial": {
      "approach": "ExecutorService task batching with invokeAll.",
      "explanation": "Executors handle thread lifecycle and pooling, abstracting manual thread spawning.",
      "timeComplexity": "O(n / threads)",
      "spaceComplexity": "O(n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "3 tasks [10, 20, 30]",
        "expected": "60"
      }
    ]
  },
  {
    "id": "jdbc-prepared-statement-crud",
    "numId": 37,
    "title": "Parameterized Book Record Insertion with PreparedStatement",
    "topic": "JDBC",
    "difficulty": "Medium",
    "acceptance": "71.5%",
    "status": "unsolved",
    "month": 4,
    "courseLessonIds": [
      "day-98"
    ],
    "description": "Write a JDBC DAO method insertBook(Connection conn, String title, String author, double price) that uses a parameterized PreparedStatement and try-with-resources to prevent SQL injection.",
    "examples": [
      {
        "input": "title=\"Effective Java\", author=\"Joshua Bloch\", price=45.0",
        "output": "1 (row inserted)",
        "explanation": "Executes INSERT INTO books (title, author, price) VALUES (?, ?, ?)."
      }
    ],
    "constraints": [
      "Must use try-with-resources and parameterized query"
    ],
    "starterCode": "import java.sql.Connection;\nimport java.sql.PreparedStatement;\nimport java.sql.SQLException;\n\npublic class BookDao {\n    public int insertBook(Connection conn, String title, String author, double price) throws SQLException {\n        String sql = \"INSERT INTO books (title, author, price) VALUES (?, ?, ?)\";\n        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\n            pstmt.setString(1, title);\n            pstmt.setString(2, author);\n            pstmt.setDouble(3, price);\n            return pstmt.executeUpdate();\n        }\n    }\n}",
    "editorial": {
      "approach": "JDBC PreparedStatement binding.",
      "explanation": "Parameter placeholders (?) guarantee proper type escaping and defend against SQL injection attacks.",
      "timeComplexity": "O(1) network I/O",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "\"Effective Java\", \"Joshua Bloch\", 45.0",
        "expected": "1"
      }
    ]
  },
  {
    "id": "jdbc-transaction-rollback",
    "numId": 38,
    "title": "Multi-Table Transaction Management with Commit and Rollback",
    "topic": "JDBC",
    "difficulty": "Hard",
    "acceptance": "57.8%",
    "status": "unsolved",
    "month": 4,
    "courseLessonIds": [
      "day-102"
    ],
    "description": "Write a JDBC transaction method transferFunds(Connection conn, int fromAcc, int toAcc, double amount) that disables auto-commit, executes both debit and credit updates, commits on success, and executes rollback() if any step fails.",
    "examples": [
      {
        "input": "from=1, to=2, amount=100.0",
        "output": "true on commit, false on error rollback",
        "explanation": "Maintains ACID atomicity."
      }
    ],
    "constraints": [
      "Must reset auto-commit in finally block"
    ],
    "starterCode": "import java.sql.Connection;\nimport java.sql.SQLException;\n\npublic class AccountDao {\n    public boolean transferFunds(Connection conn, int fromAcc, int toAcc, double amount) {\n        try {\n            conn.setAutoCommit(false);\n            // Execute debit and credit statements here\n            conn.commit();\n            return true;\n        } catch (SQLException e) {\n            try { conn.rollback(); } catch (SQLException ex) {}\n            return false;\n        }\n    }\n}",
    "editorial": {
      "approach": "Explicit manual transaction boundaries with setAutoCommit(false).",
      "explanation": "Atomic unit of work: commits if all queries succeed or rolls back all changes on failure.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "valid transfer",
        "expected": "true"
      }
    ]
  },
  {
    "id": "linear-search-implementation",
    "numId": 39,
    "title": "Linear Search Element Lookup",
    "topic": "Searching and Sorting",
    "difficulty": "Easy",
    "acceptance": "89.2%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-114"
    ],
    "description": "Given an array of integers and a target value, perform a linear search. Return the index of the first occurrence of the target, or -1 if the target is not present.",
    "examples": [
      {
        "input": "nums = [4, 2, 7, 1, 9], target = 7",
        "output": "2",
        "explanation": "7 found at index 2."
      },
      {
        "input": "nums = [1, 2, 3], target = 5",
        "output": "-1",
        "explanation": "5 is not in the array."
      }
    ],
    "constraints": [
      "0 <= nums.length <= 10^5"
    ],
    "starterCode": "public class Solution {\n    public int linearSearch(int[] nums, int target) {\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] == target) return i;\n        }\n        return -1;\n    }\n}",
    "editorial": {
      "approach": "Sequential array traversal.",
      "explanation": "Iterate from 0 to n-1 checking equality against target.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[4, 2, 7, 1, 9], 7",
        "expected": "2"
      },
      {
        "id": 2,
        "input": "[1, 2, 3], 5",
        "expected": "-1"
      }
    ]
  },
  {
    "id": "binary-search-iterative",
    "numId": 40,
    "title": "Binary Search on Sorted Array",
    "topic": "Searching and Sorting",
    "difficulty": "Easy",
    "acceptance": "56.9%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-115"
    ],
    "description": "Given an array of integers nums sorted in ascending order and an integer target, write a function to search target in nums. If target exists, return its index. Otherwise, return -1. Your algorithm must run in O(log n) time.",
    "examples": [
      {
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "output": "4",
        "explanation": "9 exists in nums and its index is 4"
      },
      {
        "input": "nums = [-1,0,3,5,9,12], target = 2",
        "output": "-1",
        "explanation": "2 does not exist in nums"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^4",
      "nums is sorted in ascending order"
    ],
    "starterCode": "public class Solution {\n    public int search(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] == target) return mid;\n            else if (nums[mid] < target) left = mid + 1;\n            else right = mid - 1;\n        }\n        return -1;\n    }\n}",
    "editorial": {
      "approach": "Divide and conquer with mid calculation.",
      "explanation": "Mid calculation mid = left + (right - left) / 2 avoids integer overflow on large arrays.",
      "timeComplexity": "O(log n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[-1,0,3,5,9,12], 9",
        "expected": "4"
      },
      {
        "id": 2,
        "input": "[-1,0,3,5,9,12], 2",
        "expected": "-1"
      }
    ]
  },
  {
    "id": "merge-sort-algorithm",
    "numId": 41,
    "title": "Merge Sort Recursive Implementation",
    "topic": "Searching and Sorting",
    "difficulty": "Medium",
    "acceptance": "63.4%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-116"
    ],
    "description": "Implement the Merge Sort algorithm to sort an array of integers in non-decreasing order with guaranteed O(n log n) worst-case time complexity.",
    "examples": [
      {
        "input": "nums = [5, 2, 3, 1]",
        "output": "[1, 2, 3, 5]",
        "explanation": "Sorted successfully."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 5 * 10^4"
    ],
    "starterCode": "public class Solution {\n    public int[] sortArray(int[] nums) {\n        mergeSort(nums, 0, nums.length - 1);\n        return nums;\n    }\n\n    private void mergeSort(int[] nums, int l, int r) {\n        if (l >= r) return;\n        int m = l + (r - l) / 2;\n        mergeSort(nums, l, m);\n        mergeSort(nums, m + 1, r);\n        merge(nums, l, m, r);\n    }\n\n    private void merge(int[] nums, int l, int m, int r) {\n        // Implement merge step\n    }\n}",
    "editorial": {
      "approach": "Divide, conquer, and combine.",
      "explanation": "Recursively halve the array until subarrays of size 1 remain, then merge sorted halves in O(n) auxiliary space.",
      "timeComplexity": "O(n log n)",
      "spaceComplexity": "O(n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[5, 2, 3, 1]",
        "expected": "[1, 2, 3, 5]"
      }
    ]
  },
  {
    "id": "move-zeros-to-end",
    "numId": 42,
    "title": "Move Zeros to End Preserving Relative Order",
    "topic": "Arrays",
    "difficulty": "Easy",
    "acceptance": "61.5%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-117"
    ],
    "description": "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.",
    "examples": [
      {
        "input": "nums = [0, 1, 0, 3, 12]",
        "output": "[1, 3, 12, 0, 0]",
        "explanation": "Non-zeros shifted left, zeros moved right."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^4"
    ],
    "starterCode": "public class Solution {\n    public void moveZeroes(int[] nums) {\n        int insertPos = 0;\n        for (int num : nums) {\n            if (num != 0) nums[insertPos++] = num;\n        }\n        while (insertPos < nums.length) {\n            nums[insertPos++] = 0;\n        }\n    }\n}",
    "editorial": {
      "approach": "Two-pointer write-head compaction.",
      "explanation": "Collect all non-zero elements into front positions, then zero-fill remaining indices.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[0, 1, 0, 3, 12]",
        "expected": "[1, 3, 12, 0, 0]"
      }
    ]
  },
  {
    "id": "rotate-array-k-steps",
    "numId": 43,
    "title": "Rotate Array Right by K Steps",
    "topic": "Arrays",
    "difficulty": "Medium",
    "acceptance": "40.2%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-117"
    ],
    "description": "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. Optimize for O(1) extra space using the triple-reversal algorithm.",
    "examples": [
      {
        "input": "nums = [1,2,3,4,5,6,7], k = 3",
        "output": "[5,6,7,1,2,3,4]",
        "explanation": "Rotate 3 steps right."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "0 <= k <= 10^5"
    ],
    "starterCode": "public class Solution {\n    public void rotate(int[] nums, int k) {\n        k %= nums.length;\n        reverse(nums, 0, nums.length - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n    }\n    private void reverse(int[] nums, int start, int end) {\n        while (start < end) {\n            int temp = nums[start];\n            nums[start++] = nums[end];\n            nums[end--] = temp;\n        }\n    }\n}",
    "editorial": {
      "approach": "Triple reversal algorithm.",
      "explanation": "Reverse entire array, reverse first k elements, reverse remaining n-k elements.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[1,2,3,4,5,6,7], 3",
        "expected": "[5,6,7,1,2,3,4]"
      }
    ]
  },
  {
    "id": "java-two-sum",
    "numId": 44,
    "title": "Two Sum Target Pair in Java",
    "topic": "Arrays",
    "difficulty": "Easy",
    "acceptance": "54.2%",
    "status": "solved",
    "month": 5,
    "courseLessonIds": [
      "day-118"
    ],
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume each input has exactly one solution and cannot reuse the same element twice.",
    "examples": [
      {
        "input": "nums = [2, 7, 11, 15], target = 9",
        "output": "[0, 1]",
        "explanation": "nums[0] + nums[1] == 9."
      },
      {
        "input": "nums = [3, 2, 4], target = 6",
        "output": "[1, 2]",
        "explanation": "nums[1] + nums[2] == 6."
      }
    ],
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= target <= 10^9"
    ],
    "starterCode": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}",
    "editorial": {
      "approach": "One-pass hash map lookup.",
      "explanation": "Stores each number and index in a map; checks if (target - num) was previously observed in O(1) average time.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[2, 7, 11, 15], 9",
        "expected": "[0, 1]"
      },
      {
        "id": 2,
        "input": "[3, 2, 4], 6",
        "expected": "[1, 2]"
      }
    ]
  },
  {
    "id": "maximum-subarray-kadane",
    "numId": 45,
    "title": "Maximum Subarray Sum (Kadane's Algorithm)",
    "topic": "Algorithms",
    "difficulty": "Medium",
    "acceptance": "50.8%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-118"
    ],
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum using Kadane's algorithm.",
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the largest sum 6."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5"
    ],
    "starterCode": "public class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSoFar = nums[0];\n        int currentMax = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            currentMax = Math.max(nums[i], currentMax + nums[i]);\n            maxSoFar = Math.max(maxSoFar, currentMax);\n        }\n        return maxSoFar;\n    }\n}",
    "editorial": {
      "approach": "Kadane's linear dynamic programming algorithm.",
      "explanation": "At each position, decide whether to append to the running subarray or start a fresh subarray at nums[i].",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[-2,1,-3,4,-1,2,1,-5,4]",
        "expected": "6"
      }
    ]
  },
  {
    "id": "reverse-linked-list",
    "numId": 46,
    "title": "Reverse Singly Linked List Iteratively",
    "topic": "Data Structures",
    "difficulty": "Easy",
    "acceptance": "74.8%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-120"
    ],
    "description": "Given the head of a singly linked list ListNode, reverse the list iteratively, and return the reversed list head.",
    "examples": [
      {
        "input": "head = [1, 2, 3, 4, 5]",
        "output": "[5, 4, 3, 2, 1]",
        "explanation": "Pointers reversed."
      }
    ],
    "constraints": [
      "The number of nodes in the list is the range [0, 5000]"
    ],
    "starterCode": "class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int val) { this.val = val; }\n}\n\npublic class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null;\n        ListNode curr = head;\n        while (curr != null) {\n            ListNode nextTemp = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = nextTemp;\n        }\n        return prev;\n    }\n}",
    "editorial": {
      "approach": "Three pointer iterative reversal (prev, curr, nextTemp).",
      "explanation": "Redirect each node's next pointer to prev while traversing forward.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "[1, 2, 3, 4, 5]",
        "expected": "[5, 4, 3, 2, 1]"
      }
    ]
  },
  {
    "id": "detect-linked-list-cycle",
    "numId": 47,
    "title": "Detect Linked List Cycle with Fast and Slow Pointers",
    "topic": "Data Structures",
    "difficulty": "Medium",
    "acceptance": "49.1%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-121"
    ],
    "description": "Given head, the head of a linked list, determine if the linked list has a cycle in it using Floyd's Tortoise and Hare algorithm.",
    "examples": [
      {
        "input": "head with cycle at node index 1",
        "output": "true",
        "explanation": "Fast pointer catches slow pointer."
      }
    ],
    "constraints": [
      "Node count in [0, 10^4]",
      "Must use O(1) memory"
    ],
    "starterCode": "public class Solution {\n    public boolean hasCycle(ListNode head) {\n        if (head == null) return false;\n        ListNode slow = head;\n        ListNode fast = head.next;\n        while (slow != fast) {\n            if (fast == null || fast.next == null) return false;\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return true;\n    }\n}",
    "editorial": {
      "approach": "Floyd's Cycle-Finding Algorithm.",
      "explanation": "Slow moves 1 step, fast moves 2 steps. If a cycle exists, they must meet.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "cycle list",
        "expected": "true"
      }
    ]
  },
  {
    "id": "valid-parentheses-stack",
    "numId": 48,
    "title": "Valid Parentheses String with Stack",
    "topic": "Data Structures",
    "difficulty": "Easy",
    "acceptance": "40.6%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-122"
    ],
    "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order.",
    "examples": [
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": "All brackets match and close properly."
      },
      {
        "input": "s = \"(]\"",
        "output": "false",
        "explanation": "Mismatched closing bracket."
      }
    ],
    "constraints": [
      "1 <= s.length <= 10^4"
    ],
    "starterCode": "import java.util.ArrayDeque;\nimport java.util.Deque;\n\npublic class Solution {\n    public boolean isValid(String s) {\n        Deque<Character> stack = new ArrayDeque<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') stack.push(')');\n            else if (c == '{') stack.push('}');\n            else if (c == '[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}",
    "editorial": {
      "approach": "Stack (LIFO) verification.",
      "explanation": "Push expected closing brackets onto stack and pop to verify matches.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(n)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "\"()[]{}\"",
        "expected": "true"
      },
      {
        "id": 2,
        "input": "\"(]\"",
        "expected": "false"
      }
    ]
  },
  {
    "id": "first-non-repeating-character",
    "numId": 49,
    "title": "First Non-Repeating Character in String",
    "topic": "Strings",
    "difficulty": "Easy",
    "acceptance": "60.1%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-123"
    ],
    "description": "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    "examples": [
      {
        "input": "s = \"leetcode\"",
        "output": "0",
        "explanation": "'l' is the first non-repeating character."
      },
      {
        "input": "s = \"loveleetcode\"",
        "output": "2",
        "explanation": "'v' is the first non-repeating character."
      }
    ],
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists of lowercase English letters"
    ],
    "starterCode": "public class Solution {\n    public int firstUniqChar(String s) {\n        int[] count = new int[26];\n        for (char c : s.toCharArray()) count[c - 'a']++;\n        for (int i = 0; i < s.length(); i++) {\n            if (count[s.charAt(i) - 'a'] == 1) return i;\n        }\n        return -1;\n    }\n}",
    "editorial": {
      "approach": "Fixed-size frequency array.",
      "explanation": "Count character frequencies with an int[26] array, then scan string to find first with count == 1.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "\"leetcode\"",
        "expected": "0"
      },
      {
        "id": 2,
        "input": "\"loveleetcode\"",
        "expected": "2"
      }
    ]
  },
  {
    "id": "binary-tree-inorder-traversal",
    "numId": 50,
    "title": "Binary Tree Inorder Traversal",
    "topic": "Data Structures",
    "difficulty": "Easy",
    "acceptance": "74.1%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-124"
    ],
    "description": "Given the root of a binary tree TreeNode, return the inorder traversal (Left -> Node -> Right) of its nodes' values as a List<Integer>.",
    "examples": [
      {
        "input": "root = [1, null, 2, 3]",
        "output": "[1, 3, 2]",
        "explanation": "Inorder order visits 1, then 3, then 2."
      }
    ],
    "constraints": [
      "Node count in range [0, 100]"
    ],
    "starterCode": "import java.util.ArrayList;\nimport java.util.List;\n\nclass TreeNode {\n    int val;\n    TreeNode left, right;\n    TreeNode(int val) { this.val = val; }\n}\n\npublic class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        helper(root, res);\n        return res;\n    }\n    private void helper(TreeNode node, List<Integer> res) {\n        if (node == null) return;\n        helper(node.left, res);\n        res.add(node.val);\n        helper(node.right, res);\n    }\n}",
    "editorial": {
      "approach": "Depth-First Search (DFS) recursive traversal.",
      "explanation": "Traverse left subtree, visit node, traverse right subtree.",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(h) call stack where h is tree height"
    },
    "testCases": [
      {
        "id": 1,
        "input": "tree [1, null, 2, 3]",
        "expected": "[1, 3, 2]"
      }
    ]
  },
  {
    "id": "binary-search-tree-insert-search",
    "numId": 51,
    "title": "Binary Search Tree Insertion and Search",
    "topic": "Data Structures",
    "difficulty": "Medium",
    "acceptance": "65.2%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-125"
    ],
    "description": "Implement a Binary Search Tree (BST) with insert(int val) preserving BST invariant (left < root < right) and search(int val) returning true if val exists.",
    "examples": [
      {
        "input": "insert [4, 2, 7, 1, 3], search(2)",
        "output": "true",
        "explanation": "2 found in BST."
      }
    ],
    "constraints": [
      "Keys are unique integers"
    ],
    "starterCode": "public class BST {\n    private TreeNode root;\n\n    public void insert(int val) {\n        root = insertRec(root, val);\n    }\n    private TreeNode insertRec(TreeNode root, int val) {\n        if (root == null) return new TreeNode(val);\n        if (val < root.val) root.left = insertRec(root.left, val);\n        else if (val > root.val) root.right = insertRec(root.right, val);\n        return root;\n    }\n\n    public boolean search(int val) {\n        TreeNode curr = root;\n        while (curr != null) {\n            if (val == curr.val) return true;\n            curr = val < curr.val ? curr.left : curr.right;\n        }\n        return false;\n    }\n}",
    "editorial": {
      "approach": "Binary Search Tree property.",
      "explanation": "Search branches left if target < current.val or right if target > current.val in O(h) time.",
      "timeComplexity": "O(h) where h is tree height",
      "spaceComplexity": "O(1) iterative search"
    },
    "testCases": [
      {
        "id": 1,
        "input": "insert [4, 2, 7], search(2)",
        "expected": "true"
      }
    ]
  },
  {
    "id": "sql-filtered-order-query",
    "numId": 52,
    "title": "SQL Filtered Selection with ORDER BY and LIMIT",
    "topic": "SQL",
    "difficulty": "Easy",
    "acceptance": "82.0%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-130"
    ],
    "description": "Write an SQL query to select student_id, name, and gpa from students where department = 'Computer Science' and gpa >= 3.5, ordered by gpa DESC, limiting to top 5.",
    "examples": [
      {
        "input": "students table with CS and Non-CS records",
        "output": "Top 5 CS students with highest GPA",
        "explanation": "Filter, order, and limit applied."
      }
    ],
    "constraints": [
      "Must produce valid ANSI SQL"
    ],
    "starterCode": "-- Write your SQL query here\nSELECT student_id, name, gpa\nFROM students\nWHERE department = 'Computer Science' AND gpa >= 3.5\nORDER BY gpa DESC\nLIMIT 5;",
    "editorial": {
      "approach": "Standard SQL declarative filtering.",
      "explanation": "WHERE clauses execute before ORDER BY and LIMIT.",
      "timeComplexity": "O(n log k) with index",
      "spaceComplexity": "O(k)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "CS students dataset",
        "expected": "5 highest GPA records"
      }
    ]
  },
  {
    "id": "sql-multi-table-join",
    "numId": 53,
    "title": "SQL Multi-Table Join for Course Enrollments",
    "topic": "SQL",
    "difficulty": "Medium",
    "acceptance": "68.7%",
    "status": "unsolved",
    "month": 5,
    "courseLessonIds": [
      "day-132"
    ],
    "description": "Write an SQL query that joins students, enrollments, and courses tables to retrieve each student's name, course_title, and grade for the Spring 2026 term.",
    "examples": [
      {
        "input": "3 related relational tables",
        "output": "Tabular report with student and course details",
        "explanation": "Inner join on student_id and course_id keys."
      }
    ],
    "constraints": [
      "Must use INNER JOIN with appropriate foreign keys"
    ],
    "starterCode": "-- Write your multi-table JOIN query\nSELECT s.name, c.course_title, e.grade\nFROM students s\nINNER JOIN enrollments e ON s.student_id = e.student_id\nINNER JOIN courses c ON e.course_id = c.course_id\nWHERE e.term = 'Spring 2026';",
    "editorial": {
      "approach": "Relational inner joins linking foreign keys.",
      "explanation": "Links enrollment junction table between student and course parent entities.",
      "timeComplexity": "O(n + m) with indexes",
      "spaceComplexity": "O(result size)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "normalized schema sample",
        "expected": "Accurate tabular join"
      }
    ]
  },
  {
    "id": "junit5-service-test-suite",
    "numId": 54,
    "title": "JUnit 5 Service Test Suite with Assertions",
    "topic": "Java Fundamentals",
    "difficulty": "Easy",
    "acceptance": "79.2%",
    "status": "unsolved",
    "month": 6,
    "courseLessonIds": [
      "day-143"
    ],
    "description": "Write JUnit 5 test cases utilizing @Test, assertEquals, and assertThrows(ArithmeticException.class, ...) to verify addition, multiplication, and divide-by-zero validation in a Calculator service.",
    "examples": [
      {
        "input": "calculator.divide(10, 0)",
        "output": "assertThrows passes with ArithmeticException",
        "explanation": "Exception successfully verified."
      }
    ],
    "constraints": [
      "Must use JUnit Jupiter annotations"
    ],
    "starterCode": "import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.*;\n\npublic class CalculatorTest {\n    @Test\n    void testDivisionByZero() {\n        Calculator calc = new Calculator();\n        assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));\n    }\n}",
    "editorial": {
      "approach": "JUnit 5 assertThrows with lambda expression.",
      "explanation": "Validates that expected runtime exceptions are thrown under exceptional arguments.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "divide(10, 0)",
        "expected": "ArithmeticException"
      }
    ]
  },
  {
    "id": "spring-boot-rest-controller",
    "numId": 55,
    "title": "Spring Boot REST Controller with DTO Validation",
    "topic": "Algorithms",
    "difficulty": "Medium",
    "acceptance": "65.4%",
    "status": "unsolved",
    "month": 6,
    "courseLessonIds": [
      "day-146"
    ],
    "description": "Implement a Spring Boot REST controller method with @PostMapping(\"/api/books\") that validates a BookCreateDTO with @Valid, saves the book via service, and returns ResponseEntity with HTTP 201 Created.",
    "examples": [
      {
        "input": "POST /api/books with valid JSON",
        "output": "HTTP 201 Created",
        "explanation": "DTO validated and persisted."
      }
    ],
    "constraints": [
      "Must return ResponseEntity<BookResponseDTO> with HttpStatus.CREATED"
    ],
    "starterCode": "// Spring Boot Controller Stub\npublic class BookController {\n    // Implement @PostMapping with DTO mapping and 201 response\n}",
    "editorial": {
      "approach": "Spring MVC @RestController and @Valid annotations.",
      "explanation": "Enforces declarative constraint validation before invoking service layer business methods.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "valid book DTO",
        "expected": "201 Created"
      }
    ]
  },
  {
    "id": "spring-boot-global-exception-handler",
    "numId": 56,
    "title": "Global REST Exception Handling with ControllerAdvice",
    "topic": "Object-Oriented Programming",
    "difficulty": "Medium",
    "acceptance": "68.5%",
    "status": "unsolved",
    "month": 6,
    "courseLessonIds": [
      "day-149"
    ],
    "description": "Implement a @RestControllerAdvice class that catches ResourceNotFoundException and MethodArgumentNotValidException, returning structured JSON error payloads with timestamp, HTTP status code, and clear error messages.",
    "examples": [
      {
        "input": "ResourceNotFoundException(\"Book with id 99 not found\")",
        "output": "HTTP 404 with JSON {\"status\": 404, \"message\": \"Book with id 99 not found\"}",
        "explanation": "Centralized exception mapping."
      }
    ],
    "constraints": [
      "Must use @RestControllerAdvice and @ExceptionHandler"
    ],
    "starterCode": "// Spring Boot @RestControllerAdvice stub\npublic class GlobalExceptionHandler {\n    // Implement @ExceptionHandler methods for 404 and 400\n}",
    "editorial": {
      "approach": "Centralized cross-cutting exception interception with @ControllerAdvice.",
      "explanation": "Prevents leaking internal stack traces and provides consistent REST error contract.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "ResourceNotFoundException",
        "expected": "HTTP 404 ErrorResponse JSON"
      }
    ]
  },
  {
    "id": "spring-data-jpa-repository",
    "numId": 57,
    "title": "Spring Data JPA Entity and CRUD Repository",
    "topic": "SQL",
    "difficulty": "Medium",
    "acceptance": "73.0%",
    "status": "unsolved",
    "month": 6,
    "courseLessonIds": [
      "day-151"
    ],
    "description": "Define a JPA @Entity Book with @Id @GeneratedValue, and an interface BookRepository extending JpaRepository<Book, Long> with a custom finder method findByTitleContainingIgnoreCase(String keyword).",
    "examples": [
      {
        "input": "keyword=\"java\"",
        "output": "Returns all books containing \"java\" in title",
        "explanation": "Spring Data derives query automatically."
      }
    ],
    "constraints": [
      "Must use Jakarta Persistence annotations"
    ],
    "starterCode": "// Spring Data JPA Entity & Repository Stubs\npublic class Book {\n    // Define @Id, title, price, isbn\n}\n\npublic interface BookRepository {\n    // Extend JpaRepository and add custom query method\n}",
    "editorial": {
      "approach": "Spring Data JPA query derivation.",
      "explanation": "Automates SQL generation from method names eliminating boilerplate DAO classes.",
      "timeComplexity": "O(1) framework proxy call",
      "spaceComplexity": "O(1)"
    },
    "testCases": [
      {
        "id": 1,
        "input": "keyword \"effective\"",
        "expected": "List of matching Book entities"
      }
    ]
  }
];

export function getProblemById(id: string): ProblemItem | undefined {
  if (!id) return undefined;
  return PROBLEMS_DATA.find((p) => p.id === id || p.id === id.trim());
}

export function getProblemsByMonth(month: number): ProblemItem[] {
  return PROBLEMS_DATA.filter((p) => p.month === month);
}

export function getProblemsByDifficulty(difficulty: string): ProblemItem[] {
  if (!difficulty || difficulty === 'ALL') return PROBLEMS_DATA;
  return PROBLEMS_DATA.filter((p) => p.difficulty.toLowerCase() === difficulty.toLowerCase());
}

export function getProblemsByTopic(topic: string): ProblemItem[] {
  if (!topic || topic === 'ALL') return PROBLEMS_DATA;
  return PROBLEMS_DATA.filter((p) => p.topic.toLowerCase() === topic.toLowerCase());
}
