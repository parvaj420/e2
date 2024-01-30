import React from 'react'
import Page2card from './page2card'
import {NavLink} from 'react-router-dom'
function page2(){
  return (
    <>
    <div className="page2 mt-5 mb-2">
      <div className="mt-5 mb-5">
        <h1 className="header text-center mb-4">BEST SELLERS</h1>
        <div className="line"></div>
    </div>
    <div class="carousel">
       <div class="slider-wrapper">
        <div class="image-list" >
           <Page2card img="https://static.wixstatic.com/media/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg" text="I'm a product" tk="$400.00" best=<small>best seller</small> />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg" text="I'm a product" tk="$340.00" best=<small>best seller</small> />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg" text="I'm a product" tk="$320.00" best=<small>best seller</small> />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg" text="I'm a product" tk="$250.00" />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg" text="I'm a product" tk="$300.00" best=<small>best seller</small> />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg" text="I'm a product" tk="$150.00" />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg" text="I'm a product" tk="$520.00" />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg" text="I'm a product" tk="$270.00" />

           <Page2card img="https://static.wixstatic.com/media/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg" text="I'm a product" tk="$400.00" best=<small>best seller</small> />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg" text="I'm a product" tk="$340.00" best=<small>best seller</small> />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg" text="I'm a product" tk="$320.00" best=<small>best seller</small> />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg" text="I'm a product" tk="$250.00" />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg" text="I'm a product" tk="$300.00" />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg" text="I'm a product" tk="$150.00" />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg" text="I'm a product" tk="$520.00" best=<small>best seller</small> />
           <Page2card img="https://static.wixstatic.com/media/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_255,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg" text="I'm a product" tk="$270.00" />
        </div>
        </div>
      </div>
    <NavLink to="/all" className='btn-c'>Shop All Bags</NavLink>
    </div>

    </>
  )
  }

export default page2