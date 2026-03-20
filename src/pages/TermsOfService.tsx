import Layout from '../components/Layout';

export default function TermsOfService() {
  return (
    <Layout>
      <div className="policy-container p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">이용약관</h1>
        <p className="mb-8 text-gray-500">시행일: 2025년 1월 1일</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제1조 (목적)</h2>
          <p>본 약관은 Fately AI(이하 "서비스")의 이용 조건 및 절차에 관한 사항을 규정합니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제2조 (서비스 성격)</h2>
          <p>본 서비스는 전통 명리학과 AI를 활용한 사주 분석 정보를 오락 및 참고 목적으로 제공합니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제3조 (면책조항)</h2>
          <ul className="list-disc pl-5 space-y-2 text-red-800">
            <li>본 서비스의 사주 분석 결과는 오락 목적으로만 제공됩니다.</li>
            <li>분석 결과를 의료, 법률, 재정적 의사결정의 근거로 사용할 수 없습니다.</li>
            <li>서비스 이용으로 인한 손해에 대해 운영자는 책임을 지지 않습니다.</li>
            <li>AI 해석 결과의 정확성을 보장하지 않습니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제4조 (지식재산권)</h2>
          <p>서비스의 디자인, 코드, 콘텐츠의 저작권은 운영자에게 있습니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제5조 (서비스 변경 및 중단)</h2>
          <p>운영자는 사전 고지 없이 서비스를 변경하거나 중단할 수 있습니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제6조 (광고)</h2>
          <p>본 서비스는 Google AdSense를 통해 광고를 게재합니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">제7조 (준거법)</h2>
          <p>본 약관은 대한민국 법률에 따라 해석됩니다.</p>
        </section>

        <div className="mt-12 text-center">
          <p>문의: jyleem78@naver.com</p>
        </div>
      </div>
    </Layout>
  );
}
