import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <article className="article">
      <h1 className="article__title">Страница не найдена</h1>
      <p className="article__paragraph">
        Запрашиваемая страница не существует.
      </p>
      <Link to="/" className="menu__item menu__item-active">
        На главную
      </Link>
    </article>
  )
}