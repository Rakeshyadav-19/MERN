// A component file name must start with capital letter.

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-5 px-6 bg-emerald-500">
                
                <h2 className="text-3xl">Rax</h2>

                <div className="flex gap-9 items-center">
                    <h5 className="text-2xl">About</h5>
                    <h5 className="text-2xl">Contact</h5>
                    <h5 className="text-2xl">FeedBack</h5>
                    <h5 className="text-2xl">More</h5>
                </div>
            </nav>
        </div>
    );
}

export default Header;