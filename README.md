# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug related to type coercion during arithmetic operations.  JavaScript's loose typing system can lead to unexpected results when you perform operations with mixed data types (e.g., numbers and strings).

The `bug.js` file shows the problematic code, while `bugSolution.js` offers a corrected version that avoids this issue.

## Problem

The code in `bug.js` attempts to add a number and a string.  JavaScript automatically coerces the number to a string before concatenation, resulting in string concatenation instead of numerical addition.

## Solution

The solution in `bugSolution.js` explicitly converts the string to a number using `parseInt()` or `Number()` before performing the addition to ensure the correct numerical result.  This emphasizes the importance of type checking and explicit type conversion in JavaScript to prevent such unexpected behavior.