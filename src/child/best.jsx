import React from 'react'
import Slider from './card/slider'
import Card from './card/card'
import Nav from '../components/nav'
function best() {
  return (
    <>
    <Nav/>
    <div className="row">
        <div className="col-xl-3 d-xl-block d-none">
            <Slider />
        </div>
        <div className="col-xl-9">
            <h1 className='name'>best sellers</h1>
            <p className="num">8 products</p>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_cf7229cdefac4f9ca2c59692ef3f5984~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_cf7229cdefac4f9ca2c59692ef3f5984~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            <Card img="https://static.wixstatic.com/media/ea71bb_d8c75e51bacc45418aac68ec7eb405fb~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_d8c75e51bacc45418aac68ec7eb405fb~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_73f718529ce14b1cba23d162711d2366~mv2_d_1576_2117_s_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_73f718529ce14b1cba23d162711d2366~mv2_d_1576_2117_s_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            <Card img="https://static.wixstatic.com/media/ea71bb_c4dfe97aae164fd9927c3f32598ba86c~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_c4dfe97aae164fd9927c3f32598ba86c~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_36c6d68cd2a843118af8600f5df4645a~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_36c6d68cd2a843118af8600f5df4645a~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            <Card img="https://static.wixstatic.com/media/ea71bb_3fd7c4402f1a4290bd274c4afd283163~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_3fd7c4402f1a4290bd274c4afd283163~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_091e8f9d8d054e4982368e0f4f68cf0e~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_091e8f9d8d054e4982368e0f4f68cf0e~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$34.00" best=<small>best seller</small> />
            <Card img="https://static.wixstatic.com/media/ea71bb_2d9236035ac24e9fa349cfacbbccc8fe~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_2d9236035ac24e9fa349cfacbbccc8fe~mv2_d_3613_4860_s_4_2.jpg" title="I'm a product" text="$34.00" best=<small>best seller</small> />
            </div>
        </div>
    </div>
    </>
  )
}

export default best