import React from 'react'
import { Link, NavLink} from 'react-router-dom'; 
import './Styles/Explore.css'
const Explore = () => {
    return (
        <div className="c1">
              <main class="page">
            <section class="clean-block features">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Explore</h2>
                    <p>Know how to use Placements4u Platform</p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-5 feature-box"><i class="icon-star icon"></i>
                        <h4>STEP 1</h4>
                        <p>Open Placements4u Website from <Link to="/" style={{textDecoration:"none"}}>URL</Link></p>
                    </div>
                    <div class="col-md-5 feature-box"><i class="icon-pencil icon"></i>
                        <h4>STEP 2</h4>
                        <p>Select you respective Branch in the Navbar.</p>
                    </div>
                    <div class="col-md-5 feature-box"><i class="icon-screen-smartphone icon"></i>
                        <h4>STEP 3</h4>
                        <p>Explore the list of companies with respective to your domain &amp; their career pages.&nbsp;</p>
                    </div>
                    <div class="col-md-5 feature-box"><i class="icon-refresh icon"></i>
                        <h4>STEP 4</h4>
                        <p>Click on Latest Openings section for latest Job vacancies and apply according to your preference.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
   </div>
    )
}

export default Explore
