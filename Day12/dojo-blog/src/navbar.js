const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                {/* inline CSS
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1355d',
                    borderRadius: '8px'
                }}>New Blog</a> */}
            </div>
        </nav>
     );
}
 
export default Navbar;