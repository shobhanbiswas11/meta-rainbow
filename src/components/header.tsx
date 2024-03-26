import HeaderUser from "./header-user";

export default function Header() {
  return (
    <header className="bg-foreground-50">
      <div className="h-20 container max-w-screen-xl flex justify-between items-center">
        <h1 className="text-2xl font-black">
          <span className="font-extralight">Meta</span> Rainbow
        </h1>
        <div>
          <HeaderUser />
        </div>
      </div>
    </header>
  );
}
