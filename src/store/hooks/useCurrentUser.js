function useCurrentUser() {
  return JSON.parse(sessionStorage.getItem("user"))
}

export default useCurrentUser
