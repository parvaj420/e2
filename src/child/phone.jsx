import React from 'react'
import Slider from './card/slider'
import Card from './card/card'
import Nav from '../components/nav'
function phone() {
  return (
    <>
    <Nav/>
    <div className="row">
        <div className="col-xl-3 d-xl-block d-none">
            <Slider />
        </div>
        <div className="col-xl-9">
            <h1 className='name'>phone cases</h1>
            <p className="num">8 products</p>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_fa86f061a1dd4d95b044551dcf0b352b~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_fa86f061a1dd4d95b044551dcf0b352b~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$40.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_73f718529ce14b1cba23d162711d2366~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_73f718529ce14b1cba23d162711d2366~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$34.00" best=<small>best seller</small> />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_1fa18fc78a924cf8a955a3c153bf5d74~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_1fa18fc78a924cf8a955a3c153bf5d74~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$40.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_d115c6a75bd74dca82a8e7145e44ed80~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_d115c6a75bd74dca82a8e7145e44ed80~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$34.00" />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_d8c75e51bacc45418aac68ec7eb405fb~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_d8c75e51bacc45418aac68ec7eb405fb~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$34.00" best=<small>best seller</small> />
            <Card img="https://static.wixstatic.com/media/ea71bb_e05c89f9d76548d595ac28f440787b56~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_e05c89f9d76548d595ac28f440787b56~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$40.00" />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_cd91f4aa3bae42728b7ec25feee56f64~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_cd91f4aa3bae42728b7ec25feee56f64~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$40.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_cf7229cdefac4f9ca2c59692ef3f5984~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_cf7229cdefac4f9ca2c59692ef3f5984~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$34.00" best=<small>best seller</small> />
            </div>
        </div>
    </div>
    </>
  )
}

export default phone