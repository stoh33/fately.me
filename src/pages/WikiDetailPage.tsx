import { useParams, useNavigate, Link } from 'react-router-dom';
import { useMemo } from 'react';
import Layout from '../components/Layout';
import { wikiArticles } from '../data/wikiData';
import '../styles/wiki.css';

// Simple custom Markdown parser component for lightweight rendering
function MiniMarkdown({ content }: { content: string }) {
  const parsedElements = useMemo(() => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let listKey = 0;

    const renderAccumulatedList = () => {
      if (listItems.length > 0) {
        const key = `list-${listKey++}`;
        if (listType === 'ul') {
          elements.push(
            <ul key={key} className="wiki-md-ul">
              {listItems.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
              ))}
            </ul>
          );
        } else if (listType === 'ol') {
          elements.push(
            <ol key={key} className="wiki-md-ol">
              {listItems.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
              ))}
            </ol>
          );
        }
        listItems = [];
        listType = null;
      }
    };

    const parseInline = (text: string) => {
      // Bold syntax: **text** -> <strong>text</strong>
      let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Italic syntax: *text* -> <em>text</em>
      html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
      return html;
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      // Empty line
      if (trimmed === '') {
        renderAccumulatedList();
        return;
      }

      // Headers
      if (trimmed.startsWith('## ')) {
        renderAccumulatedList();
        elements.push(
          <h2 key={idx} className="wiki-md-h2">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        renderAccumulatedList();
        elements.push(
          <h3 key={idx} className="wiki-md-h3">
            {trimmed.slice(4)}
          </h3>
        );
      } else if (trimmed.startsWith('#### ')) {
        renderAccumulatedList();
        elements.push(
          <h4 key={idx} className="wiki-md-h4">
            {trimmed.slice(5)}
          </h4>
        );
      }
      // Divider
      else if (trimmed === '---') {
        renderAccumulatedList();
        elements.push(<hr key={idx} className="wiki-md-hr" />);
      }
      // Unordered list
      else if (trimmed.startsWith('- ')) {
        if (listType !== 'ul') {
          renderAccumulatedList();
          listType = 'ul';
        }
        listItems.push(trimmed.slice(2));
      }
      // Ordered list
      else if (/^\d+\.\s/.test(trimmed)) {
        if (listType !== 'ol') {
          renderAccumulatedList();
          listType = 'ol';
        }
        const textContent = trimmed.replace(/^\d+\.\s/, '');
        listItems.push(textContent);
      }
      // Regular paragraph
      else {
        renderAccumulatedList();
        elements.push(
          <p
            key={idx}
            className="wiki-md-p"
            dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }}
          />
        );
      }
    });

    // Render any remaining list
    renderAccumulatedList();

    return elements;
  }, [content]);

  return <div className="wiki-markdown-body">{parsedElements}</div>;
}

export default function WikiDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const articleIndex = useMemo(() => {
    return wikiArticles.findIndex((a) => a.id === id);
  }, [id]);

  const article = useMemo(() => {
    return articleIndex !== -1 ? wikiArticles[articleIndex] : null;
  }, [articleIndex]);

  const prevArticle = useMemo(() => {
    if (articleIndex > 0) {
      return wikiArticles[articleIndex - 1];
    }
    return null;
  }, [articleIndex]);

  const nextArticle = useMemo(() => {
    if (articleIndex !== -1 && articleIndex < wikiArticles.length - 1) {
      return wikiArticles[articleIndex + 1];
    }
    return null;
  }, [articleIndex]);

  if (!article) {
    return (
      <Layout>
        <div className="wiki-container wiki-not-found">
          <div className="empty-icon">⚠️</div>
          <h2>아티클을 찾을 수 없습니다.</h2>
          <p>요청하신 페이지가 존재하지 않거나 삭제되었을 수 있습니다.</p>
          <Link to="/wiki" className="wiki-reset-btn">
            백과사전 목록으로
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="wiki-detail-wrapper">
        <div className="wiki-detail-header-nav">
          <button onClick={() => navigate('/wiki')} className="wiki-back-btn">
            ← 백과사전 목록
          </button>
        </div>

        <article className="wiki-detail-card">
          <header className="wiki-detail-header">
            <span className={`wiki-card-badge ${getBadgeClass(article.category)}`}>
              {article.category}
            </span>
            <h1 className="wiki-detail-title">{article.title}</h1>
            
            <div className="wiki-detail-meta">
              <span className="wiki-detail-author">{article.author}</span>
              <span className="wiki-detail-divider">|</span>
              <span className="wiki-detail-date">작성일: {article.date}</span>
              <span className="wiki-detail-divider">|</span>
              <span className="wiki-detail-readtime">읽는 시간: {article.readTime}</span>
            </div>
            
            <div className="wiki-detail-summary">
              <strong>요약:</strong> {article.summary}
            </div>
          </header>

          <div className="wiki-detail-content">
            <MiniMarkdown content={article.content} />
          </div>

          <footer className="wiki-detail-footer">
            <div className="wiki-share-info">
              💡 본 아티클은 전통 명리학과 현대적 해석을 바탕으로 작성되었으며, 개인의 성향 파악 및 지혜로운 대처를 위한 가이드용 콘텐츠입니다.
            </div>
          </footer>
        </article>

        {/* Navigation between articles */}
        <div className="wiki-page-navigation">
          {prevArticle ? (
            <Link to={`/wiki/${prevArticle.id}`} className="wiki-nav-link prev">
              <span className="nav-dir">이전 아티클</span>
              <span className="nav-title">{prevArticle.title}</span>
            </Link>
          ) : (
            <div className="wiki-nav-link-empty" />
          )}

          {nextArticle ? (
            <Link to={`/wiki/${nextArticle.id}`} className="wiki-nav-link next">
              <span className="nav-dir">다음 아티클</span>
              <span className="nav-title">{nextArticle.title}</span>
            </Link>
          ) : (
            <div className="wiki-nav-link-empty" />
          )}
        </div>
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
