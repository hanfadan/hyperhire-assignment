'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#26C2B9] to-[#288BE7] text-white py-20 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Text Section */}
        <div className="max-w-lg lg:w-1/2">
          <span className="inline-block bg-white text-[#288BE7] font-medium text-sm px-6 py-2 rounded-full shadow-lg mb-6">
            풀타임, 파트타임
          </span>
          <h1 className="text-5xl font-extrabold mb-6 leading-snug">
            최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
          </h1>
          <p className="text-lg mb-6">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
          <a href="#" className="text-lg font-semibold underline hover:text-yellow-400 transition-colors duration-200">
            개발자가 필요하신가요?
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div>
              <p className="font-bold text-lg">평균 월 120만원</p>
              <p className="text-sm">임금을 해당 국가를 기준으로 계산합니다.</p>
            </div>
            <div>
              <p className="font-bold text-lg">최대 3회 인력교체</p>
              <p className="text-sm">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
            </div>
            <div>
              <p className="font-bold text-lg">평균 3일, 최대 10일</p>
              <p className="text-sm">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
            </div>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
          {/* Logo Hijau di Atas */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-[#E6FFF5] text-[#26C2B9] px-4 py-2 rounded-full shadow-md z-20">
            <img src="/images/icon-dollar.png" alt="Currency" className="w-4 h-4 mr-2" />
            <span className="font-semibold">월 100만원</span>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            style={{ overflow: 'visible' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={(swiper) => {
              swiper.slides.forEach((slide, index) => {
                slide.style.opacity = index === swiper.activeIndex ? '1' : '0.6';
              });
            }}>
            {[...Array(3)].map((_, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white text-black rounded-xl shadow-lg relative"
                  style={{
                    width: '292px',
                    height: '408px',
                    padding: '40px 20px 20px 20px',
                    borderRadius: '12px',
                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                  }}>
                  {/* Foto Profil */}
                  <div
                    className="absolute -top-14 left-1/2 transform -translate-x-1/2"
                    style={{
                      borderRadius: '50%',
                      border: '4px solid white',
                      overflow: 'hidden',
                      width: '110px',
                      height: '110px',
                    }}>
                    <img src="/images/Ellipse 12.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>

                  {/* Nama dan Posisi */}
                  <h3 className="font-bold text-xl mt-16 text-center">
                    Abhishek Gupta
                    <img
                      src="/images/flag.png"
                      alt="Flag"
                      className="inline-block ml-2 w-5 h-3"
                      style={{ verticalAlign: 'middle', marginTop: '-5px' }}
                    />
                  </h3>
                  <p className="text-base text-[#288BE7] font-semibold text-center mt-4">마케팅 • 2y+</p>

                  {/* List Skills */}
                  <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
                    <li className="bg-gray-100 px-4 py-2 rounded-full text-center">마케팅 콘텐츠 제작</li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full text-center">인스타그램 관리</li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full text-center">트위터 관리</li>
                    <li className="bg-gray-100 px-4 py-2 rounded-full text-center">블로그 글 작성</li>
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="swiper-button-prev z-30 absolute top-1/2 -left-10 transform -translate-y-1/2 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19L8 12L15 5" stroke="#288BE7" strokeWidth="2" />
            </svg>
          </div>
          <div className="swiper-button-next z-30 absolute top-1/2 -right-10 transform -translate-y-1/2 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 19L16 12L9 5" stroke="#288BE7" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
