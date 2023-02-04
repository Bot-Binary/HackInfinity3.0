
import {Link} from "react-router-dom";
export default function Goterror() {
  return (
    <div className="container">
           <section className="page_error">
        <div className="container">
            <div className="row">
                <div className="col-sm-10-sm-offset-1 text-center">
                    <div className="four_zero_four_bg">
                        <h1 className="text-center">404</h1>
                    </div>
                    <div className="constant_box_404">
                        <h3 className="h2">
                            Look like you are lost 
                        </h3>
                        <p>The page you are looking for is not available</p>
                        <Link to="./Login" className="link_404">Go to the login</Link>
                    </div>


                </div>

            </div>
        </div>
    </section>
    </div>
  )
}
