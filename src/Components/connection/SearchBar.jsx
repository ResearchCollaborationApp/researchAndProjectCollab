import './peoplesCard.css'
export default function SearchBar() {
    return (
        <div className="search-bar container-fluid">
            <div>
                <input  type="text" className="form-control p-3 rounded" id="form-name" placeholder="Search your project buddy" />
            </div>
            <div>
                <button className="btn btn-info ">Search</button>
            </div>
            <div class="dropdown">
                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter One
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="google.com">Action</a>
                    <a class="dropdown-item" href="google.com">Another action</a>
                    <a class="dropdown-item" href="google.com">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter Two
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="google.com">Action</a>
                    <a class="dropdown-item" href="google.com">Another action</a>
                    <a class="dropdown-item" href="google.com">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter Three
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="google.com">Action</a>
                    <a class="dropdown-item" href="google.com">Another action</a>
                    <a class="dropdown-item" href="google.com">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter Four
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="google.com">Action</a>
                    <a class="dropdown-item" href="google.com">Another action</a>
                    <a class="dropdown-item" href="google.com">Something else here</a>
                </div>
            </div>
        </div>
    );
}