export function* rangeGenerator(start, end, step) {
  for (let current = start; current < end; current += step) {
    yield current;
  }
}

function RangeGeneratorComponent() {
  console.log("Generator range:");
  for (const value of rangeGenerator(0, 10, 1)) {
    console.log(value);
  }

  console.log([...rangeGenerator(1, 10, 1)]);

  const iterator2 = rangeGenerator(1, 10, 1);
  console.log(iterator2.next());
  console.log(iterator2.next());
  console.log(iterator2.next());

  return (
    <div>
      <p>Check the console for details.</p>
    </div>
  );
}

export default RangeGeneratorComponent;
