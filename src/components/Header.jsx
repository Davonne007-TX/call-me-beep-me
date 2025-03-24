import MyHobbies from "./MyHobbies";

export default function Header() {
  const contactMe = [
    { getInTouch: "linkedin.com/in/davonnevigil ", id: 1 },
    { getInTouch: "davonnevigil@gmail.com", id: 2 },
    { getInTouch: "github.com/Davonne007-TX" },
  ];
  return (
    <header className="flex flex-col font-serif text-white ml-auto mt-40">
      <div className="flex flex-col p-2">
        <div className="flex gap-4">
          <h1 className="text-4xl font-mono mt-40 max-w-sm">Davonne Vigil</h1>
          <MyHobbies />
        </div>
        <h2 className="font-mono text-2xl mt-2">Frontend Web Developer</h2>
        <ul className="flex gap-8 mt-2 text-lg">
          {contactMe.map((contact) => (
            <li key={contact.id}>{contact.getInTouch}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
