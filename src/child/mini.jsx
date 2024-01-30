import React from 'react'
import Slider from './card/slider'
import Card from './card/card'
import Nav from '../components/nav'
function mini() {
  return (
    <>
    <Nav/>
    <div className="row">
        <div className="col-xl-3 d-xl-block d-none">
            <Slider />
        </div>
        <div className="col-xl-9">
            <h1 className='name'>mini leather goods</h1>
            <p className="num">8 products</p>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_3061929daf1f4dfd9093dd86ba8f0ce9~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_3061929daf1f4dfd9093dd86ba8f0ce9~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$400.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_3fd7c4402f1a4290bd274c4afd283163~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_3fd7c4402f1a4290bd274c4afd283163~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_1b8d9bf0acb948e1a496cebd2aa1bd81~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_1b8d9bf0acb948e1a496cebd2aa1bd81~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$400.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_4dcf4698147a479c912875bb4ad67d1a~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_4dcf4698147a479c912875bb4ad67d1a~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$340.00" />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_36c6d68cd2a843118af8600f5df4645a~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_36c6d68cd2a843118af8600f5df4645a~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            <Card img="https://static.wixstatic.com/media/ea71bb_4ed9ee376def49cb94194d5814cf8574~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_4ed9ee376def49cb94194d5814cf8574~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$400.00" />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_c8f5b35dd1674a38b347648acae300a2~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_c8f5b35dd1674a38b347648acae300a2~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$400.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_c4dfe97aae164fd9927c3f32598ba86c~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_c4dfe97aae164fd9927c3f32598ba86c~mv2_d_3078_4139_s_4_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            </div>
        </div>
    </div>
    </>
  )
}

export default mini