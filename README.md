# Codewars solutions


## 1.Categorize New Member (7kyu)


The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output

Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

# Solution

```
const openOrSenior = (data) => {
  return data.map((data) => {
    if(data[0] >= 55 && data[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    };
  })
}

```


## 2. Sum of two lowest numbers in a given array
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

# Solution

```
const sumTwoSmallestNumbers = (numbers) => {  
    const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
    return firstNumber + secondNumber;
};

const numbers = [19, 5, 42, 2, 77]
console.log(sumTwoSmallestNumbers(numbers));
```

## 3.Replace With Alphabet Position
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

### Python Solution
```
def alphabet_position(text):
    nums = [str(ord(x) - 96) for x in text.lower() if x >= 'a' and x <= 'z']
    return " ".join(nums)
```

### JavaScript Solution
```const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetPosition = (text) => {
    return text
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((letter) => alphabet.indexOf(letter) + 1).join(' ');
}
alphabetPosition('Hello, How are you today?')
```

## 4. Factorial using recursion
```
const factorial = n => n > 1 ? n * factorial(n - 1) : 1

```

```
function factorial(n){
  if(n==1||n==0){
    return 1;
  }else{
    return n*factorial(n-1);
  }    
}
```
