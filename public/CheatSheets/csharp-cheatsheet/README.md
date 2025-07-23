# 💻 C# Cheatsheet

A comprehensive reference guide for C# programming language syntax, features, and best practices.

## 📝 Basic Syntax

### Variables & Data Types

```csharp
// Primitive types
int number = 42;
double decimalNumber = 3.14;
float floatNumber = 3.14f;
decimal preciseNumber = 3.14m;
bool isTrue = true;
char character = 'A';
string text = "Hello World";

// Reference types
object obj = new object();
dynamic dynamicVar = "Can be anything";

// Nullable types
int? nullableInt = null;
Nullable<int> nullableInt2 = null;

// Implicit typing
var implicitVar = "Type inferred";
```

### Constants & Readonly

```csharp
const int CONSTANT_VALUE = 100;
readonly string READONLY_VALUE = "Cannot change after constructor";

// Expression-bodied members (C# 6+)
public string Name => "John";
public int Age => 25;
```

## 🏗️ Classes & Objects

### Class Definition

```csharp
public class Person
{
    // Fields
    private string _name;
    private int _age;
    
    // Properties
    public string Name { get; set; }
    public int Age { get; set; }
    
    // Auto-implemented properties
    public string Email { get; set; } = "default@email.com";
    
    // Expression-bodied property
    public string FullName => $"{FirstName} {LastName}";
    
    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
    
    // Expression-bodied constructor
    public Person(string name) => Name = name;
    
    // Method
    public void SayHello()
    {
        Console.WriteLine($"Hello, I'm {Name}");
    }
    
    // Expression-bodied method
    public string GetInfo() => $"Name: {Name}, Age: {Age}";
}
```

### Inheritance

```csharp
public class Student : Person
{
    public string StudentId { get; set; }
    
    public Student(string name, int age, string studentId) 
        : base(name, age)
    {
        StudentId = studentId;
    }
    
    // Method overriding
    public override void SayHello()
    {
        base.SayHello();
        Console.WriteLine($"Student ID: {StudentId}");
    }
}
```

### Interfaces

```csharp
public interface IPrintable
{
    void Print();
    string GetContent();
}

public class Document : IPrintable
{
    public void Print() => Console.WriteLine("Printing...");
    public string GetContent() => "Document content";
}
```

## 🔄 Control Flow

### Conditional Statements

```csharp
// If-else
if (condition)
{
    // code
}
else if (anotherCondition)
{
    // code
}
else
{
    // code
}

// Ternary operator
string result = condition ? "Yes" : "No";

// Switch expression (C# 8+)
string message = value switch
{
    1 => "One",
    2 => "Two",
    _ => "Unknown"
};

// Switch statement
switch (value)
{
    case 1:
        Console.WriteLine("One");
        break;
    case 2:
        Console.WriteLine("Two");
        break;
    default:
        Console.WriteLine("Unknown");
        break;
}
```

### Loops

```csharp
// For loop
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}

// While loop
while (condition)
{
    // code
}

// Do-while loop
do
{
    // code
} while (condition);

// Foreach loop
foreach (var item in collection)
{
    Console.WriteLine(item);
}
```

## 📦 Collections

### Arrays

```csharp
// Array declaration
int[] numbers = { 1, 2, 3, 4, 5 };
int[] emptyArray = new int[5];
int[,] matrix = new int[3, 3];

// Array methods
Array.Sort(numbers);
Array.Reverse(numbers);
int length = numbers.Length;
```

### Lists

```csharp
// List declaration
List<string> names = new List<string>();
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

// List operations
names.Add("John");
names.AddRange(new[] { "Jane", "Bob" });
names.Remove("John");
names.RemoveAt(0);
names.Insert(0, "Alice");
bool contains = names.Contains("Jane");
int count = names.Count;
```

### Dictionaries

```csharp
// Dictionary declaration
Dictionary<string, int> ages = new Dictionary<string, int>();
Dictionary<string, string> config = new Dictionary<string, string>
{
    ["key1"] = "value1",
    ["key2"] = "value2"
};

// Dictionary operations
ages.Add("John", 25);
ages["Jane"] = 30;
bool hasKey = ages.ContainsKey("John");
bool hasValue = ages.ContainsValue(25);
ages.Remove("John");
```

## 🎯 LINQ

### Basic LINQ Operations

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Filtering
var evenNumbers = numbers.Where(n => n % 2 == 0);
var greaterThan5 = numbers.Where(n => n > 5);

// Projection
var doubled = numbers.Select(n => n * 2);
var strings = numbers.Select(n => n.ToString());

// Aggregation
var sum = numbers.Sum();
var average = numbers.Average();
var max = numbers.Max();
var min = numbers.Min();
var count = numbers.Count();

// Ordering
var ordered = numbers.OrderBy(n => n);
var orderedDesc = numbers.OrderByDescending(n => n);

// First/Last
var first = numbers.First();
var firstOrDefault = numbers.FirstOrDefault();
var last = numbers.Last();
var lastOrDefault = numbers.LastOrDefault();

// Any/All
bool anyEven = numbers.Any(n => n % 2 == 0);
bool allPositive = numbers.All(n => n > 0);
```

## 🚀 Modern C# Features

### Null-Conditional Operator (C# 6+)

```csharp
string name = person?.Name;
int? age = person?.Age;
string result = person?.GetInfo() ?? "No person";
```

### String Interpolation (C# 6+)

```csharp
string name = "John";
int age = 25;
string message = $"Hello {name}, you are {age} years old";
string formatted = $"{age:C}"; // Currency format
```

### Pattern Matching (C# 7+)

```csharp
// Type patterns
if (obj is string str)
{
    Console.WriteLine($"String: {str}");
}

// Switch expressions with patterns
string result = obj switch
{
    string s => $"String: {s}",
    int i => $"Integer: {i}",
    _ => "Unknown type"
};
```

### Records (C# 9+)

```csharp
// Record declaration
public record Person(string Name, int Age);

// Record with inheritance
public record Student(string Name, int Age, string StudentId) : Person(Name, Age);

// With expression
var person = new Person("John", 25);
var updatedPerson = person with { Age = 26 };
```

### Top-level Statements (C# 9+)

```csharp
// Program.cs
Console.WriteLine("Hello World!");
var name = Console.ReadLine();
Console.WriteLine($"Hello {name}!");
```

## 🛠️ Exception Handling

```csharp
try
{
    // Risky code
    int result = int.Parse("invalid");
}
catch (FormatException ex)
{
    Console.WriteLine($"Format error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"General error: {ex.Message}");
}
finally
{
    // Always executed
    Console.WriteLine("Cleanup code");
}

// Exception filters (C# 6+)
try
{
    // code
}
catch (Exception ex) when (ex.Message.Contains("specific"))
{
    // Handle specific exceptions
}
```

## 🔧 Attributes

```csharp
[Obsolete("Use NewMethod instead")]
public void OldMethod() { }

[Serializable]
public class SerializableClass { }

[Conditional("DEBUG")]
public void DebugMethod() { }
```

## 📚 Async/Await

```csharp
public async Task<string> GetDataAsync()
{
    await Task.Delay(1000); // Simulate async work
    return "Data";
}

public async Task ProcessDataAsync()
{
    try
    {
        var data = await GetDataAsync();
        Console.WriteLine(data);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
    }
}

// Async Main (C# 7.1+)
static async Task Main(string[] args)
{
    await ProcessDataAsync();
}
```

## 🎯 Best Practices

### Naming Conventions

```csharp
// PascalCase for public members
public class MyClass
{
    public string PublicProperty { get; set; }
    public void PublicMethod() { }
}

// camelCase for private fields
private string _privateField;
private int _counter;

// camelCase for local variables
string localVariable = "value";
int count = 0;
```

### Code Organization

```csharp
public class WellOrganizedClass
{
    // 1. Constants
    private const int DEFAULT_SIZE = 10;
    
    // 2. Fields
    private readonly string _name;
    private int _count;
    
    // 3. Properties
    public string Name { get; set; }
    
    // 4. Constructors
    public WellOrganizedClass(string name)
    {
        _name = name;
    }
    
    // 5. Methods
    public void DoSomething()
    {
        // Implementation
    }
}
```

## 🔗 Useful Resources

- [Microsoft C# Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [C# Language Specification](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/)
- [.NET API Browser](https://docs.microsoft.com/en-us/dotnet/api/)

---

**Happy coding! 💻** 