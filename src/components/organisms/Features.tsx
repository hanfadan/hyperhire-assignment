export default function Features() {
  return (
    <section className="bg-white py-16 px-12 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-blue-600 text-2xl font-bold">월 120만원</h3>
          <p className="mt-4 text-gray-600">인증을 생략한 국가별 기준으로 채용합니다.</p>
        </div>
        <div>
          <h3 className="text-blue-600 text-2xl font-bold">최대 3회 인터뷰 진행</h3>
          <p className="mt-4 text-gray-600">만족 채용을 위해 직접 협의합니다.</p>
        </div>
        <div>
          <h3 className="text-blue-600 text-2xl font-bold">평균 3일, 최대 10일</h3>
          <p className="mt-4 text-gray-600">채용 속도 최적화.</p>
        </div>
      </div>
    </section>
  );
}
