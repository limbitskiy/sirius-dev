import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <nav className="border-b">
      <div className="container flex justify-between items-center py-4 px-4">
        <Logo />
        <ul className="navigation justify-between items-center w-2/4 gap-4 text-nowrap hidden xsm:flex">
          <li className="cursor-pointer hover:text-accent-color">Главная</li>
          <li className="cursor-pointer hover:text-accent-color">Наши технологии</li>
          <li className="cursor-pointer hover:text-accent-color">Проекты</li>
          <li className="cursor-pointer hover:text-accent-color">Контакты</li>
        </ul>
        <div className="social-icons-cnt hidden xsm:block">
          <SocialIcons />
        </div>
        <div className="hamburger-icon xsm:hidden">
          <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 21H33M1 11H33M1 1H33" stroke="#2F4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
