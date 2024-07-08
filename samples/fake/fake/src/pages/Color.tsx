export default function Color() {
  return (
    <div className="bg-sky-700">
      <p className="w-full p-4 text-3xl" text-while>
        Color
      </p>

      <div className="mb-4">
        <p className="text-white text-2xl font-bold italic text-left">
          Email Adress
        </p>
        <input
          type="email"
          className="text-gray-900 border-sky-200 border-4"
        ></input>
        <p className="text-rose-300">This field is required</p>
      </div>
    </div>
  );
}
