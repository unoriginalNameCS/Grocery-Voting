# Simple React Exercise - Grocery Fruits Voting

Simple React exercise that I found where the task was to build a grocery voting component.

## Some takeaways

Make sure to copy then mutate arrays such as:

```javascript
const arr = [...state];
arr.splice(index, 1); // Delete only the index
setState([...arr]); // Set the state with a new array
```
