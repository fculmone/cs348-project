export default function HeroSection() {
    return (
      <div className="relative bg-[url('/images/logo.png')] bg-cover bg-center h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore the world’s most popular cities, curated by fellow travelers.
          </p>
          <a
            href="#top-favourites" 
            className="inline-block bg-indigo-500 hover:bg-indigo-600 px-5 py-3 rounded-md text-white font-semibold"
          >
            View Top 10 Cities
          </a>
        </div>
      </div>
    );
  }
  