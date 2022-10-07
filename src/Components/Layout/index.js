import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    return (
        <div className='App'>

            <Sidebar/>

            <div className='page'>

                <span className='tags top-tags'>
                    {/* &lt;body&gt; */}
                </span>

                {/* Outlet - A component that renders the next match in a set of matches. Index Route
                A child route with no path that renders in the parent's outlet at the parent's URL. 
                Layout Route - A parent route without a path, used exclusively for grouping child routes inside a specific layout. */}

                <Outlet />
                <span  className='tags bottom-tags'>
                    {/* &lt;/body&gt; */}
                    <br/>
                    <span className='bottom-tag-html'>
                        {/* &lt;/html&gt; */}
                    </span>
                </span>

            </div>
        </div>
    );
}
export default Layout;