import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import BookmarkCard from "../components/Bookmark/BookmarkCard"
import useCurrentUser from "../store/hooks/useCurrentUser"
import {
  bookmarksSelector,
  LOAD_BOOKMARKS,
} from "../store/reducers/blogs.slice"
import "../styles/BookmarkPage.css"

function BookmarkPage() {
  const currentUser = useCurrentUser()
  const username = currentUser?.name?.split(" ").pop()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(LOAD_BOOKMARKS())
  }, [])
  const bookmarks = useSelector(bookmarksSelector)
  console.log(bookmarks)
  return (
    <section id="BookmarkPage">
      <div className="text-center">
        <p className="h2 bookmark-page-title fw-bolder text-uppercase">
          <i className="fas fa-bookmark"></i> {username}'s Bookmarks
        </p>
      </div>
      <div className="bookmark-container">
        {bookmarks.map(bookmark => (
          <BookmarkCard key={bookmark._id} bookmark={bookmark} />
        ))}
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="button-primary">
            <i className="fas fa-home"></i> Go Home
          </button>
        </Link>
      </div>
    </section>
  )
}

export default BookmarkPage
