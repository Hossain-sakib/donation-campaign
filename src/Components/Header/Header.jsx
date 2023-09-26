
const Header = () => {
    return (
        <div>
            
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/QQJH9TC/Rectangle-4281.png)' }}>
           
                <div className="hero-overlay bg-white bg-opacity-80"></div>
                <div>
                    <div className="text-center flex flex-col items-center md:px-10 py-40 space-y-6">
                        <p className="text-lg md:text-3xl lg:text-5xl font-semibold">I Grow By Helping People In Need</p>
                        <div>
                            <input className="w-56 px-4 py-2 border rounded-l-lg text-sm font-medium" type="search" placeholder="Search here..." />
                            <button className="border bg-red-500 hover:bg-red-400 text-center text-white px-4 py-2 rounded-r-lg text-sm font-medium">Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;