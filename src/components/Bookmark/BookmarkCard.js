function BookmarkCard({ bookmark }) {
  const { title, content, image, url } = bookmark
  return (
    <div className="bookmarkCard">
      <img src={image} />
      <div className="overlay">
        <div className="line">
          <h2 className="bookmark-title h6 pt-3 fw-bolder text-uppercase">
            {title}
          </h2>
        </div>
        <div className="content">
          <p className="content-text">{content}</p>
          <a href={url} target="_blank" rel="noreferrer">
            <button className="button-primary">
              <i className="fas fa-book"></i> Read More...
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BookmarkCard
