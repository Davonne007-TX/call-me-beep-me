export default function Header() {
  return (
    <header className="clouds h-screen flex flex-col justify-center items-center text-white">
      <div className="ml-auto mr-72 mb-44 text-neutral-100">
        <h1 className="text-5xl font-mon">Davonne J. Vigil </h1>
        <br />
        <p className="mb-10 text-2xl">
          Frontend Web Developer
          <br /> React | JavaScript ES6 | HTML5 | CSS3 | Tailwind CSS
        </p>
        <section className="flex flex-wrap gap-10 font-serif text-lg">
          <p>davonnejv@gmail.com</p>
          <p>linkedin.com/in/davonnevigil/</p>
          <p>github.com/Davonne007-TX</p>
        </section>
      </div>
    </header>
  );
}
