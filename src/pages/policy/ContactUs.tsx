import Layout from '../../components/Layout';

export default function ContactUs() {
  return (
    <Layout>
      <div className="policy-container p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-6">
          We'd love to hear from you! If you have any questions, feedback, or suggestions, please feel free to reach out to us.
        </p>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Email Support</h2>
          <p className="text-blue-600">jyleem78@naver.com</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-12">문의하기 (Korean)</h2>
        <p className="text-lg mb-4">
          Fately 서비스에 대한 문의사항이나 피드백이 있으시면 언제든지 연락해 주세요.
        </p>
        <p className="text-gray-700">이메일: jyleem78@naver.com</p>
      </div>
    </Layout>
  );
}
