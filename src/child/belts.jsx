import React from 'react'
import Slider from './card/slider'
import Card from './card/card'
import Nav from '../components/nav'
function belts() {
  return (
    <>
    <Nav/>
    <div className="row">
        <div className="col-xl-3 d-xl-block d-none">
            <Slider />
        </div>
        <div className="col-xl-9">
            <h1 className='name'>belts</h1>
            <p className="num">8 products</p>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_dcdf0ab619804441b0d5aff3adae701c~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_dcdf0ab619804441b0d5aff3adae701c~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$40.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_2d9236035ac24e9fa349cfacbbccc8fe~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_2d9236035ac24e9fa349cfacbbccc8fe~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$34.00" best=<small>best seller</small> />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_53d3251a93c7400fbb1703016d50bc7c~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_53d3251a93c7400fbb1703016d50bc7c~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$40.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_a487065a9eda45c6ba662246a7631d23~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_a487065a9eda45c6ba662246a7631d23~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$34.00" />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_42a5209306dc4013beb8df622b43dc79~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_42a5209306dc4013beb8df622b43dc79~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$34.00" best=<small>best seller</small> />
            <Card img="https://static.wixstatic.com/media/ea71bb_e3dae48bc8784ca68b9e28fe33bb4b81~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_e3dae48bc8784ca68b9e28fe33bb4b81~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$40.00" />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_3437e280e9e44cd695d244df750f0222~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_3437e280e9e44cd695d244df750f0222~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$40.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_091e8f9d8d054e4982368e0f4f68cf0e~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_091e8f9d8d054e4982368e0f4f68cf0e~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$34.00" best=<small>best seller</small> />
            </div>
        </div>
    </div>
    </>
  )
}

export default belts