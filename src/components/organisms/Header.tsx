export default function Header() {
  return (
    <header className="flex justify-between items-center px-20 py-4 bg-gradient-to-r from-gradientStart to-gradientEnd text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo-white.png" alt="HyperHire Logo" className="w-8 h-8 mr-3" />
        <span className="text-lg font-bold">hyperhire</span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-10 text-sm">
        <a href="#!" className="hover:underline">
          채용
        </a>
        <a href="#!" className="hover:underline">
          해외 개발자 활용 서비스
        </a>
      </nav>

      <button className="bg-white text-blue-500 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100">
        문의하기
      </button>
    </header>
  );
}
