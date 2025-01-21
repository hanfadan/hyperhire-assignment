export default function Footer() {
  return (
    <footer className="bg-footerBg py-12 px-8">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-between items-start gap-8 text-sm text-footerText">
        {/* Bagian Kiri (Logo + Deskripsi) */}
        <div className="flex flex-col">
          <img src="/images/logo.png" alt="HyperHire Logo" className="mb-4 w-32" />
          <p className="mb-4">
            우리는 국가의 장벽을 넘어 <br /> 최고의 인재를 매칭해드립니다.
          </p>
          <p className="font-semibold mb-2">010-0000-0000</p>
          <p className="font-semibold">aaaa@naver.com</p>
        </div>

        {/* Bagian Tengah (4 Card Icon) */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 flex-1">
          <div
            className="bg-white p-4 rounded-tl-lg shadow-md flex flex-col items-center text-center"
            style={{ width: '187px', height: '142px', paddingTop: '16px', borderRadius: '12px 0 0 0' }}>
            <img src="/images/icons/code.png" alt="Code Icon" className="w-8 h-8 mb-2" />
            <p className="font-bold">해외 개발자 원격 채용</p>
            <a href="#!" className="text-blue-500 mt-2 flex items-center">
              바로가기 →
            </a>
          </div>
          <div
            className="bg-white p-4 rounded-tl-lg shadow-md flex flex-col items-center text-center"
            style={{ width: '187px', height: '142px', paddingTop: '16px', borderRadius: '12px 0 0 0' }}>
            <img src="/images/icons/people.png" alt="People Icon" className="w-8 h-8 mb-2" />
            <p className="font-bold">외국인 원격 채용 (비개발)</p>
            <a href="#!" className="text-blue-500 mt-2 flex items-center">
              바로가기 →
            </a>
          </div>
          <div
            className="bg-white p-4 rounded-tl-lg shadow-md flex flex-col items-center text-center"
            style={{ width: '187px', height: '142px', paddingTop: '16px', borderRadius: '12px 0 0 0' }}>
            <img src="/images/icons/kor.png" alt="KOR Icon" className="w-8 h-8 mb-2" />
            <p className="font-bold">한국어 가능 외국인 채용</p>
            <a href="#!" className="text-blue-500 mt-2 flex items-center">
              바로가기 →
            </a>
          </div>
          <div
            className="bg-white p-4 rounded-tl-lg shadow-md flex flex-col items-center text-center"
            style={{ width: '187px', height: '142px', paddingTop: '16px', borderRadius: '12px 0 0 0' }}>
            <img src="/images/icons/setting.png" alt="Setting Icon" className="w-8 h-8 mb-2" />
            <p className="font-bold">해외 개발자 활용 서비스</p>
            <a href="#!" className="text-blue-500 mt-2 flex items-center">
              바로가기 →
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-between items-start gap-8 text-sm text-footerText py-8">
        <div className="grid grid-cols-5 gap-6">
          <div>
            <p className="font-bold">상호명</p>
            <p>하이퍼하이어</p>
          </div>
          <div className="mt-4">
            <p className="font-bold">대표 CEO</p>
            <p>김주현</p>
          </div>
          <div className="mt-4">
            <p className="font-bold">사업자등록번호 CIN</p>
            <p>427-86-01187</p>
            <p>U74110DL2016PTC290812</p>
          </div>
          <div className="mt-4">
            <p className="font-bold">주소 ADDRESS</p>
            <p>서울특별시 강남대로 479, 지하 1층 238호</p>
            <p>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-between items-start gap-8 text-sm text-footerText py-1">
        <p className="mt-4">© 2023 HyperHire</p>
      </div>
    </footer>
  );
}
