function rangeIterator(start, end, step) {
  let current = start;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (current < end) {
        const value = current;
        current += step;
        return { value, done: false };
      } else {
        return { done: true };
      }
    },
  };
}

function RangeIteratorComponent() {
  console.log("Iterator range:");
  for (const value of rangeIterator(0, 10, 1)) {
    console.log(value);
  }

  console.log([...rangeIterator(1, 10, 1)]);

  const iterator1 = rangeIterator(1, 10, 1);
  console.log(iterator1.next());
  console.log(iterator1.next());
  console.log(iterator1.next());

  return (
    <div>
      <p>Check the console for details</p>
    </div>
  );
}

export default RangeIteratorComponent;
