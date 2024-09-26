const HomeNavbar = () => {
    return(
        <nav className="w-full h-16 bg-surface-100 fixed">
            <div className="nav-margins flex justify-between items-center h-full">
                <div className="flex gap-x-14 items-center">
                    <div className="font-semibold text-base">Project Hub @ GT</div>
                </div>
                
                <div className="flex gap-x-6 items-center">
                    <button className="secondary-btn" onClick={() => window.location.href = '/signup'}>Sign Up</button>
                    <button className="primary-btn" onClick={() => window.location.href = '/login'}>Login</button>
                    </div>
            </div>
        </nav>
    )
}

export default HomeNavbar;