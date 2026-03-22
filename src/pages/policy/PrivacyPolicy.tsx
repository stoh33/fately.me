import Layout from '../../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="policy-container p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">개인정보처리방침</h1>
        <p className="mb-8 text-gray-500">시행일: 2025년 1월 1일</p>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">1. 수집하는 개인정보</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>항목: 생년월일, 출생 시각, 성별, 혈액형, 출생지</li>
            <li>수집 방법: 사용자 직접 입력</li>
            <li>목적: 사주 분석 서비스 제공</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">2. 개인정보 보유 및 이용 기간</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>입력된 정보는 분석 즉시 처리 후 파기합니다.</li>
            <li>당사 서버에 개인정보를 저장하지 않습니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">3. 제3자 제공</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Google Gemini API / OpenAI API: 사주 해석 목적으로 입력 데이터 전송 (각 서비스의 개인정보처리방침 적용)</li>
            <li>Google AdSense: 맞춤 광고 제공을 위한 쿠키 사용 (Google 개인정보처리방침: https://policies.google.com/privacy)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">4. 쿠키(Cookie) 사용</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Google AdSense 광고 제공을 위해 쿠키를 사용합니다.</li>
            <li>쿠키 거부 방법: 브라우저 설정 &gt; 개인정보 &gt; 쿠키 차단</li>
            <li>Google 광고 설정: https://adssettings.google.com</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">5. 이용자의 권리</h2>
          <p>개인정보 열람, 정정, 삭제 요청 가능하며, 아래 이메일로 문의주시기 바랍니다.</p>
          <p>문의: jyleem78@naver.com</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">6. 개인정보 보호책임자</h2>
          <p>이름: Fately 운영팀</p>
          <p>이메일: jyleem78@naver.com</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">7. 문의처</h2>
          <p>이메일: jyleem78@naver.com</p>
        </section>
      </div>
    </Layout>
  );
}
