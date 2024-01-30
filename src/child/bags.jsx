import React from 'react'
import Slider from './card/slider'
import Card from './card/card'
import Nav from '../components/nav'
function bags() {
  return (
    <>
    <Nav/>
    <div className="row">
        <div className="col-xl-3 d-xl-block d-none">
            <Slider />
        </div>
        <div className="col-xl-9">
            <h1 className='name'>Bags</h1>
            <p className="num">8 products</p>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_47c995fa95724f998485903107f14308~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_47c995fa95724f998485903107f14308~mv2_d_2487_3298_s_4_2.jpg" title="I'm a product" text="$400.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_7a7a685b6efe4d4ab57bd5f16ea1e4fa~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_7a7a685b6efe4d4ab57bd5f16ea1e4fa~mv2_d_2487_3298_s_4_2.jpg" title="I'm a product" text="$400.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg" title="I'm a product" text="$340.00" />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_63af2b0b5b0644f286581a4cf2f35c2c~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_63af2b0b5b0644f286581a4cf2f35c2c~mv2_d_3444_4568_s_4_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            <Card img="https://static.wixstatic.com/media/ea71bb_0c099c6223b949b789ec35c279acd873~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_0c099c6223b949b789ec35c279acd873~mv2_d_3444_4568_s_4_2.jpg" title="I'm a product" text="$400.00" />
            </div>
            <div className="d-flex">
            <Card img="https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg" title="I'm a product" text="$400.00" />
            <Card img="https://static.wixstatic.com/media/ea71bb_83f0d2bab3eb41d1b735a26bd6836a8d~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_1026,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_83f0d2bab3eb41d1b735a26bd6836a8d~mv2_d_3444_4568_s_4_2.jpg" title="I'm a product" text="$340.00" best=<small>best seller</small> />
            </div>
        </div>
    </div>
    </>
  )
}

export default bags