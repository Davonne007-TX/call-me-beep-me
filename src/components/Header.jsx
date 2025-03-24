export default function Header() {
  const contactMe = [
    { getInTouch: "linkedin.com/in/davonnevigil ", id: 1 },
    { getInTouch: "davonnevigil@gmail.com", id: 2 },
    { getInTouch: "github.com/Davonne007-TX" },
  ];
  return (
    <header className="flex flex-col font-serif text-white ml-auto mt-40">
      <div className="flex flex-col p-2 mr-4">
        <h1 className="font-mono text-4xl mt-40 max-w-sm">Davonne Vigil</h1>
        <ul className="flex gap-8 mt-2 text-lg">
          {contactMe.map((contact) => (
            <li key={contact.id}>{contact.getInTouch}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
