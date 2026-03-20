import Layout from '../components/Layout';

export default function AboutUs() {
  return (
    <Layout>
      <div className="policy-container p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Fately AI란?</h1>
        <p className="text-xl text-center mb-12">전통 명리학과 인공지능을 결합한 사주 분석 서비스입니다.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
            <h3 className="text-xl font-bold mb-3">🧮 정확한 사주 계산</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              전통 명리학 알고리즘으로 년주·월주·일주·시주 천간·지지를 정확하게 계산합니다.
              절기 기준 월주 계산, 대운 순역행까지 전통 방식을 그대로 적용합니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
            <h3 className="text-xl font-bold mb-3">✨ AI 심층 해석</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Google Gemini / OpenAI GPT가 오행 균형, 용신·기신, 십신 분포를 
              현대적인 언어로 알기 쉽게 해석합니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
            <h3 className="text-xl font-bold mb-3">☯️ 통합 분석</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              서양 별자리(태양별자리)와 혈액형을 사주와 교차 분석하여
              더 입체적인 나의 성격과 운세를 확인할 수 있습니다.
            </p>
          </div>
        </div>

        <section className="mb-12 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">사주란 무엇인가</h2>
          <p className="leading-relaxed mb-4">
            사주(四柱)는 태어난 년(年)·월(月)·일(日)·시(時)의 네 기둥을 의미하며, 각 기둥은 천간(天干)과 지지(地支)로 구성됩니다. 
            음양오행(陰陽五行: 목·화·토·금·수)의 균형을 분석하여 개인의 성격, 적성, 대인관계, 운의 흐름을 파악하는 동양의 전통 예측학입니다.
          </p>
          <p className="leading-relaxed">
            수천 년의 역사를 가진 명리학은 단순한 미신이 아닌, 자연의 이치와 인간의 삶을 연결하는 동양 철학 체계입니다. 
            Fately AI는 이 전통 지혜를 현대 AI 기술과 결합하여 누구나 쉽게 자신의 사주를 이해할 수 있도록 돕습니다.
          </p>
        </section>

        <div className="text-center text-sm text-gray-500 mb-8">
          <p>※ 본 서비스는 오락 및 참고 목적으로만 제공됩니다.</p>
          <p>사주 해석 결과를 실제 의사결정의 근거로 사용하지 마십시오.</p>
        </div>

        <div className="text-center">
          <p className="font-semibold">문의</p>
          <p>이메일: jyleem78@naver.com</p>
        </div>
      </div>
    </Layout>
  );
}
