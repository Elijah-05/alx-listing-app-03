const CancellationPolicy = () => (
  <div className="px-4 mt-6">
    <h2 className="text-xl md:text-[1.8125rem] font-bold">Cancellation policy</h2>
    <p className="mt-2 text-black font-medium md:text-xl">
      Free cancellation before Aug 23. <span className="text-[#161117] font-normal"> Cancel before check-in on Aug 24 for a partial refund.</span>
    </p>

    <hr className="my-8 text-[#E6E6E6]" />

    <h2 className="text-xl md:text-[1.8125rem] font-bold">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside indent-2">
      <li>Follow the house rules</li>
      <li>Treat your Host&apos;s home like your own</li>
    </ul>
  </div>
);

export default CancellationPolicy;