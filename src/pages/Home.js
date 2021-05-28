function Home() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1> Hello Guys! Start Working From Home.js</h1>
      <h2 style={{ marginTop: "20px" }}>
        Modify Global Styles from global.css
      </h2>
      <h2 style={{ marginTop: "20px" }}>Keep Your Code DRY</h2>
      <h3 style={{ marginTop: "20px" }}>
        Using Yarn for this project, so start development server using "yarn
        start"
        <br />
        ** always notify everyone in group when choosing new dependencies.❤ **
      </h3>
    </div>
  )
}

export default Home
