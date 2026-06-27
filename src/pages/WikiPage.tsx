import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { wikiArticles, type WikiArticle } from '../data/wikiData';
import '../styles/wiki.css';

export default function WikiPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = useMemo(() => {
    return ['전체', '기초이론', '오행과십신', '운세와흐름', '신살과궁합'];
  }, []);

  const filteredArticles = useMemo(() => {
    return wikiArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === '전체' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <Layout>
      <div className="wiki-hero">
        <div className="wiki-hero-content">
          <span className="wiki-hero-subtitle">Myeongli Encyclopedia</span>
          <h1 className="wiki-hero-title">사주 명리 백과사전</h1>
          <p className="wiki-hero-desc">
            전통 명리학의 심도 깊은 이론부터 실생활 개운법까지, 
            인생의 지도인 사주팔자를 올바르게 해독하기 위한 지혜의 가이드를 제공합니다.
          </p>
        </div>
      </div>

      <div className="wiki-container">
        <div className="wiki-controls">
          <div className="wiki-search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="궁금한 명리 이론을 검색해 보세요..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="wiki-search-input"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="wiki-search-clear"
                aria-label="검색어 지우기"
              >
                ✕
              </button>
            )}
          </div>

          <div className="wiki-category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`wiki-category-tab ${
                  selectedCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="wiki-results-count">
          총 <span>{filteredArticles.length}</span>개의 아티클이 있습니다.
        </div>

        {filteredArticles.length > 0 ? (
          <div className="wiki-grid">
            {filteredArticles.map((article: WikiArticle) => (
              <article 
                key={article.id} 
                className="wiki-card"
                onClick={() => navigate(`/wiki/${article.id}`)}
              >
                <div className="wiki-card-body">
                  <span className={`wiki-card-badge ${getBadgeClass(article.category)}`}>
                    {article.category}
                  </span>
                  <h2 className="wiki-card-title">{article.title}</h2>
                  <p className="wiki-card-summary">{article.summary}</p>
                </div>
                <div className="wiki-card-footer">
                  <div className="wiki-card-meta">
                    <span className="wiki-card-author">{article.author}</span>
                    <span className="wiki-card-dot">•</span>
                    <span className="wiki-card-date">{article.date}</span>
                  </div>
                  <span className="wiki-card-more">읽기 ➔</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="wiki-empty">
            <div className="empty-icon">🔮</div>
            <h3>검색 결과가 없습니다.</h3>
            <p>다른 검색어를 입력하시거나 카테고리 필터를 변경해 보세요.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('전체');
              }} 
              className="wiki-reset-btn"
            >
              초기화하기
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

function getBadgeClass(category: string): string {
  switch (category) {
    case '기초이론':
      return 'badge-blue';
    case '오행과십신':
      return 'badge-mint';
    case '운세와흐름':
      return 'badge-amber';
    case '신살과궁합':
      return 'badge-purple';
    default:
      return '';
  }
}
