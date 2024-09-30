import {getTweet} from "./data-access/generate"
import Form from "./form";

export default async function Home() {
  const tweet = await getTweet()

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-100">
  {/* Left column - Form */}
  <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-md">
   
      <h2
      className="text-2xl font-bold mb-6 text-orange-500"
      style={{
        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
      }}
    >
      Tweet Generator
    </h2>
  <div className="mb-8">
  <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-xl">
    <p className="text-lg text-gray-700 leading-relaxed">
    {tweet}
    </p>
  </div>
</div>

    <Form />
  </div>

  {/* Right column - Image */}
  <div className="flex items-center justify-center">
    <img
      className="rounded-lg shadow-md"
      src="./icon.jpg"
      alt="Placeholder Image"
    />
  </div>
</div>

  );
}
