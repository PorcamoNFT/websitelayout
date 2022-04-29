// import custom components
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./Sidebar";
export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row"
  };
  return (
    <>
      <Header />
      <main style={styles}>
        <section style={{ width: "1024px" }}>{children}</section>
        <SideBar />
      </main>
      <Footer />
    </>
  );
}
