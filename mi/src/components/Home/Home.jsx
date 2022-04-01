import './Home.scss'
import { Link } from "react-router-dom";


export const Home= ()=>{
    return(
        <div className="Home_Main">
            <div className="Home_Sliding"></div>
            <div className="All_Main">
                <div className="First_Three">
                    <Link to={'/'} className="Three_Single"><img src="https://i01.appmifile.com/webfile/globalimg/dongxuechun/purplecolor.jpg?width=398&height=230&160516" alt="Redmi Note 10S" /></Link>
                    <Link to={'/'} className="Three_Single"><img src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-small-banner/RN-10pro-small-banner-new.jpg?width=398&height=230&160516" alt="Redmi Note 10 Pro" /></Link>
                    <Link to={'/'} className="Three_Single"><img src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-small-banner/RN-10-small-banner-new.jpg?width=398&height=230&160516" alt="Redmi Note 10" /></Link>
                </div>
                <div className="Star_Main">
                    <div className="Star_Line"><hr /></div>
                    <div className="Star_Name">STAR PRODUCTS</div>
                    <div className="Star_Line"><hr /></div>
                </div>
                <div className="Star_Products">
                    <div className="Star_Left">
                        <Link to={'/'}><img src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-Star-Products/watch-s1-s1active.jpg?width=612&height=612" alt="Watches" /></Link>
                    </div>
                    <div className="Star_Right">
                        <div className="Right_Upper">
                            <div>
                            <Link to={'/'}><img src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-Star-Products/buds-3t-pro.jpg?width=612&height=612" alt="Redmi Buds" /></Link>
                            </div>
                            <div>
                            <Link to={'/'}><img src="https://i01.appmifile.com/webfile/globalimg/dongxuechun/Redmi-Buds-3.jpg?width=612&height=612" alt="Xiaomi Buds" /></Link>
                            </div>
                        </div>
                        <div className="Right_down">
                            <Link to={'/'}><img src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-Star-Products/StarPro4-Purifier-4Series.jpg?width=612&height=612" alt="Air Purifier" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}