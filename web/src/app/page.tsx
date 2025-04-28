export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
        Charity&nbsp;Clarity
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl text-center">
        Discover preloved treasures from UK charity shops&nbsp;— and see exactly
        where your money goes.
      </p>

      <a
        href="#learn-more"
        className="mt-8 inline-block rounded-2xl bg-indigo-600 px-8 py-3 text-white text-lg shadow-lg hover:shadow-xl transition"
      >
        Learn how it works
      </a>
    </main>
  );
}