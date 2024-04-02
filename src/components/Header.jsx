export default function Header() {
  return (
    <header className="bg-[url('images/star.jpg')] bg-cover h-screen flex flex-col justify-center items-center text-white">
      <div className="ml-auto mr-72 mt-66 text-white">
        <h1 className="text-5xl font-sans mb-4 font-bold">Davonne Vigil </h1>

        <p className="mb-4 text-2xl">
          Frontend Web Developer
          <br /> React | JavaScript ES6 | HTML5 | CSS3 | Tailwind CSS
        </p>
        <section className="flex flex-wrap gap-10 font-serif text-lg">
          <p>davonnevigil@gmail.com</p>
          <p>linkedin.com/in/davonnevigil/</p>
          <p>github.com/Davonne007-TX</p>
        </section>
      </div>
    </header>
  );
}
