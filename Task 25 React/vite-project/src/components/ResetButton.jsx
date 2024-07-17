export default function ResetButton({ resetCounts }) {
  return (
    <div className='mt-8'>
      <button className='btn bg-gray-300 m-auto flex text-black' onClick={resetCounts}>Reset</button>
    </div>
  );
}
