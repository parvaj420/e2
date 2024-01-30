import React from 'react'
import './style.css'
import Nav from '../components/nav'
import Bags from './bags'
import Card from './card/card'
import Slider from './card/slider'
function all() {
  return (
    <>
    <Nav/>
    <div className="row">
        <div className="col-xl-3 d-xl-block d-none">
            <Slider />
        </div>
        <div className="col-xl-9">
            <h1 className='name'>all products</h1>
            <p className="num">24 products</p>
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

export default all