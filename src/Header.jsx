export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191026] z-50">
      <div
        className="container mx-auto flex items-center
  
  justify-between gap-x-6"
      >
        <a href="/">
          <img
            className="h-[45px]"
            src="https://learnwithsumit.com/_next/static/media/lws-logo-dark.8e393acf.svg"
          />
        </a>
      </div>
    </nav>
  );
}
