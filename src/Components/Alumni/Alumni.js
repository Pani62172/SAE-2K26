import React from 'react'
import { useState } from 'react';
import './Alumni.css'
import Cardalumni from './CardAlumni.js'
import Wave from './Wave.js';

const Alumni = () => {
    const CardsData =[
        {
          "image": "https://live.staticflickr.com/65535/52770752569_2b8ecca0dc_n.jpg",
          "name": "Rahul Kashyap",
          "instalink": "https://instagram.com/rahulkshp64?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/meetrahulkashyap/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770839734_5e031c3c8c_n.jpg",
          "name": "Vaibhav Ojha",
          "instalink": "https://instagram.com/vaibhav___ojha?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/vaibhav-ojha-2bb06a224/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770963502_3bf0621ced_n.jpg",
          "name": "Ayushi Gupta",
          "instalink": "https://instagram.com/_ayug_?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/ayushi-gupta-8444b2202/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52769982052_1439e8a056_n.jpg",
          "name": "Sandeep Verma",
          "instalink": "https://instagram.com/vsandeep13?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/vsan13/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770777144_ceb4de8b33_n.jpg",
          "name": "Asif Khan",
          "instalink": "https://instagram.com/asif_khan1911?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/asif-khan-a1489964/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770737614_0e22c3bba8_w.jpg",
          "name": "D. Sharvani Reddy",
          "instalink": "https://instagram.com/sharvani_reddyy?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sharvani-reddy-dommata-8444b8210/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52771752264_f93e99eaf8_w.jpg",
          "name": "Neel Kamal",
          "instalink": "https://instagram.com/_hyperconjugate_?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/neel-kamal1407/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52769989932_96e6a564c0_n.jpg",
          "name": "Asutosh Kumar Singh Rathore",
          "instalink": "https://instagram.com/simp0la?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/ashutosh-rathore-133b58177",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770762544_ca5e536294_n.jpg",
          "name": "Subham Paul",
          "instalink": "https://instagram.com/x_subham_d?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/subham-paul-900320207/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770963442_7e8504f832_n.jpg",
          "name": "Ishan Gupta",
          "instalink": "https://instagram.com/ishangupta641?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/ishan-gupta-0652611b8/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770963562_eb41760b38_w.jpg",
          "name": "Navin Kumar Pathak",
          "instalink": "https://instagram.com/kumarpathaknavin?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/navin-kumar-pathak-a421a1235/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770985890_14ec284834_n.jpg",
          "name": "Sunay Pal",
          "instalink": "https://instagram.com/palsunay?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sunay-pal-917035201/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770958238_a1d772fb5c_w.jpg",
          "name": "Ravi Prakash",
          "instalink": "https://instagram.com/itz._ravi?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/ravi-prakash-036a13200/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770543366_761f532d74_z.jpg",
          "name": "Sabharish Sappa",
          "instalink": "https://instagram.com/sabharish_sappa?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sabharish-sappa-ba62a3216",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52771020693_7da5f3bd3a_n.jpg",
          "name": "Faria Tariq",
          "instalink": "https://instagram.com/tariqfaria23?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/tariqfaria23",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770534016_72a7436c14_n.jpg",
          "name": "Harsh Srivastava",
          "instalink": "https://instagram.com/harshsrivastav521?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/harsh-srivastava-11652b1b7",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770962720_9e830240db_w.jpg",
          "name": "Shivanshu  Basu Mallik",
          "instalink": "https://instagram.com/shivanshu_basumallick?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sbmallick",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/53127082214_560dc78757_n.jpg",
          "name": "Kushal Sarda",
          "instalink": "https://instagram.com/kumarpathaknavin?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/kushal-sarda-0126251aa/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52771494371_b5647c9349_n.jpg",
          "name": "Sujal Gupta",
          "instalink": "https://instagram.com/sujalgupta628?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sujal-gupta-436752201/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770810594_44afa91a13_n.jpg",
          "name": "Shraddha Mandal",
          "instalink": "https://instagram.com/mandalshraddha?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/shraddha-mandal-75b993215",
          "facebooklink": "/"
        },
        {
            "image": "https://live.staticflickr.com/65535/53126284227_4a0c1c0c46_m.jpg",
            "name": "M. Vishnu Vardhan Reddy",
            "instalink": "https://instagram.com/vvreddy_2709?igshid=YmMyMTA2M2Y=",
            "linkedinlink": "https://www.linkedin.com/in/vishnu-vardhan-reddy-maddi-0b8615218/",
            "facebooklink": "/"
          },
          {
            "image": "https://live.staticflickr.com/65535/52771005658_7ed79be0eb_n.jpg",
            "name": "Subham Mandal",
            "instalink": "https://instagram.com/subham_mandal?igshid=YmMyMTA2M2Y=",
            "linkedinlink": "https://www.linkedin.com/in/subham-mandal-8a18961b6/",
            "facebooklink": "/"
          },
          {
            "image": "https://live.staticflickr.com/65535/52770812484_b2e8ae8b60_w.jpg",
            "name": "Shruti Sharma",
            "instalink": "https://instagram.com/shruti.sh_01?igshid=YmMyMTA2M2Y=",
            "linkedinlink": "https://www.linkedin.com/in/shruti-sharma-bb0b6820b/",
            "facebooklink": "/"
          },
          {
            "image": "https://live.staticflickr.com/65535/52771494461_96e011d3ab_w.jpg",
            "name": "Sankalp Mohanty",
            "instalink": "/",
            "linkedinlink": "/",
            "facebooklink": "/"
          },
          {
            "image": "https://live.staticflickr.com/65535/52771983018_12d616e1b2_n.jpg",
            "name": "K. Deekshita",
            "instalink": "/",
            "linkedinlink": "https://www.linkedin.com/in/deekshita-kancharla-35616a218/",
            "facebooklink": "/"
          }
      ]
    const cardsData = [
        {
            "url": require("./Assets/AluminiImg/Siddharth Khandelwal.jpg"),
            "name": "Siddharth Khandelwal",
            "instaLink": "https://www.instagram.com/siddharthkhandelwal7878/?hl=en",
            "linkedinLink": "https://www.linkedin.com/in/siddharth-khandelwal-b54340225/",
        },

        {
            "url": "https://live.staticflickr.com/65535/52771983628_a45c73fbd5_w.jpg",
            "name": "Atanu Bepari",
            "instaLink": "https://www.instagram.com/bepari.22/",
            "linkedinLink": "https://www.linkedin.com/in/atanu-bepari-64114826b/",
        },
        {
            "url": require("./Assets/AluminiImg/Prince Raj.jpg"),
            "name": "Prince Raj",
            "instaLink": "https://www.google.com/search?q=www.instagrm.comcall_me_prince_62&oq=w",
            "linkedinLink": "https://www.linkedin.com/in/prince-raj-322246236",
        },

        {
            "url": "https://i.ibb.co/WVtSd9W/Aniket-Kamble.png",
            "name": "Aniket Kamble",
            "instaLink": "https://www.instagram.com/aniketkamble9192/",
            "linkedinLink": "https://www.linkedin.com/in/aniket-kamble-068803183",
        },

        {
            "url": require("./Assets/AluminiImg/Dipesh Banerjee.jpg"),
            "name": "Dipesh Banerjee",
            "instaLink": "https://www.instagram.com/dipesh.banerjee.9/?hl=en",
            "linkedinLink": "https://www.linkedin.com/in/dipesh-banerjee-1163681a7/",
        },

        {
            "url": "https://live.staticflickr.com/65535/52771058662_34408c67b5_w.jpg",
            "name": "Shiv Mangal Pandey",
            "instaLink": "https://instagram.com/p_shivmangal?igshid=YmMyMTA2M2Y=",
            "linkedinLink": "https://www.linkedin.com/in/shiv-mangal-pandey-0b6455237/",
        },
        {
            "url": require('./Assets/AluminiImg/Gautam.png'),
            "name": "Gautam Kesari",
            "instaLink": "https://instagram.com/gautamkeshari75?igshid=ZDdkNTZiNTM=",
            "linkedinLink": "https://www.linkedin.com/in/gautam-keshari-62892a231",
        },

        {
            "url": "https://live.staticflickr.com/65535/52770930214_3de6813ed8_w.jpg",
            "name": "Liza Gupta",
            "instaLink": "https://www.instagram.com/liza_gupta22369/",
            "linkedinLink": "https://www.linkedin.com/in/liza-gupta-7a1ab5223/",
        },
        {
            "url": "https://live.staticflickr.com/65535/52771085605_0f5886ca1c_n.jpg",
            "name": "Ambar",
            "instaLink": "https://www.instagram.com/aforambar/",
            "linkedinLink": "https://www.linkedin.com/in/ambar-b9863921a/",
        },
        {
            "url": require("./Assets/AluminiImg/Sachin Patel.jpg"),
            "name": "Sachin Patel",
            "instaLink": "https://www.instagram.com/Sachinpat_el/",
            "linkedinLink": "https://www.linkedin.com/in/sachin-patel-b643aa227",
        },
        {
            "url": "https://live.staticflickr.com/65535/52770704591_34e540d4f0_n.jpg",
            "name": "Prajnan Karmakar",
            "instaLink": "https://www.instagram.com/pride0_opro/",
            "linkedinLink": "https://www.linkedin.com/in/prajnan-karmakar-60b190221",
        },

        {
            "url": require("./Assets/AluminiImg/Biswajit.png"),
            "name": "Biswajit",
            "instaLink": "https://instagram.com/biswa_410?igshid=YmMyMTA2M2Y=",
            "linkedinLink": " https://www.linkedin.com/in/biswajit-garai-41a454234",
        },
      
        {
            "url": "https://live.staticflickr.com/65535/52770159432_ee9bdfdbf0_n.jpg",
            "name": "Prasant Sahu",
            "instaLink": "https://www.instagram.com/prash_482/",
            "linkedinLink": "https://www.linkedin.com/in/prasant-sahu-0b236923a",
        },

        {
            "url": "https://live.staticflickr.com/65535/52771602331_bc777f420f_n.jpg",
            "name": "Sai Prakash",
            "instaLink": "https://www.instagram.com/invites/contact/?i=8n4vsoq52ti0&utm_content=i9tna3z",
            "linkedinLink": "https://www.linkedin.com/in/sai-prakash-katravath-090a5a235",
        },
        {
            "url": require("./Assets/AluminiImg/Aksha.png"),
            "name": "Aksha",
            "instaLink": "https://www.instagram.com/invites/contact/?i=1wj9lvits2krl&utm_content=oez95wj",
            "linkedinLink": "https://www.linkedin.com/in/aksha-vardhini-73840623a",
        },
        {
            "url": "https://live.staticflickr.com/65535/52770138467_1133f23c3e_w.jpg",
            "name": "Vyshnavi",
            "instaLink": "https://instagram.com/vyshnavi_jakku?igshid=YmMyMTA2M2Y=",
            "linkedinLink": "https://www.linkedin.com/in/vyshnavi-jakku-743237246/",
        },

        {
            "url": "https://live.staticflickr.com/65535/52771494781_6e0ca2e5c6_w.jpg",
            "name": "Bireshwar Hansda",
            "instaLink": "https://instagram.com/im_bireshwar?igshid=YmMyMTA2M2Y=",
            "linkedinLink": "https://www.linkedin.com/in/bireshwar-hansda-a85a4a1b5/",
        },
      

        {
            "url": "https://live.staticflickr.com/65535/52769439002_ab1b5da2e3_w.jpg",
            "name": "Shibraj Deb",
            "instaLink": "",
            "linkedinLink": "https://www.linkedin.com/in/shibraj-deb-26247b22a/",
        },

        {
            "url": "https://live.staticflickr.com/65535/52770493868_8825256c72_n.jpg",
            "name": "Himanshu",
            "instaLink": "https://www.instagram.com/me_himanshu.u/",
            "linkedinLink": "https://www.linkedin.com/in/himanshu-hembram-b9717423a/",
        },

        {
            "url": "https://live.staticflickr.com/65535/52770394240_f0a47a4e43_w.jpg",
            "name": "Hritam Saha",
            "instaLink": "https://instagram.com/hritam._saha?igshid=ODM2MWFjZDg=",
            "linkedinLink": "https://www.linkedin.com/in/hritam-saha-07576025b/",
        },

        {
            "url": "https://live.staticflickr.com/65535/52770445380_13163e4edb_n.jpg",
            "name": "Abhay Fateh",
            "instaLink": "https://instagram.com/abhayfate?igshid=ZDdkNTZiNTM=",
            "linkedinLink": "https://www.linkedin.com/in/abhay-fate-ba395323a",
        },
        {
            "url": "https://live.staticflickr.com/65535/52770390480_1dc866efc1_w.jpg",
            "name": "Rakesh",
            "instaLink": "https://instagram.com/ra_kesh__g?igshid=ZDdkNTZiNTM=",
            "linkedinLink": "https://www.linkedin.com/in/gunta-rakesh-05204a259",
        },

        {
            "url": require("./Assets/AluminiImg/Ritu Rani.png"),
            "name": "Ritu Rani",
            "instaLink": "https://www.instagram.com/ritu712193/",
            "linkedinLink": "",
        },
        {
            "url": "https://live.staticflickr.com/65535/52771085715_9c9216744e_w.jpg",
            "name": "Jaswanth Ram",
            "instaLink": "https://www.instagram.com/jashwanth.161/",
            "linkedinLink": "https://www.linkedin.com/in/jashwanth-ram-8398b223a/",
        },

        {
            "url": "https://live.staticflickr.com/65535/53127365808_16bfac199a_m.jpg ",
            "name": "Agnibho Bhattacharya",
            "instaLink": "https://www.instagram.com/.agnibho._/?hl=en",
            "linkedinLink": "",
        },
        {
            "url": "https://live.staticflickr.com/65535/52771200973_e82464442d_n.jpg",
            "name": "Sourashish",
            "instaLink": "https://www.instagram.com/invites/contact/?i=16eu1lpvu5kek&utm_content=46ycqg3",
            "linkedinLink": "https://www.linkedin.com/in/sourasish-paul-89b360226",
        },
        {
            "url": "https://live.staticflickr.com/65535/52771545716_f8fd7cd973_n.jpg",
            "name": "Siddarth Prasad",
            "instaLink": "https://www.instagram.com/p_sidd016/",
            "linkedinLink": "https://www.linkedin.com/in/siddharth-prasad-a83336243",
        },
      ]

      const [activeYear, setActiveYear] = useState("2024");
      
    return (
      <>
      <Wave/>
        <div class="container-alumni mt-4">
            <h1>Meet Our <span>Alumni</span></h1>
            <div className="content-alumni mt-6">
                <p id='alumni-content'>The 2023 and 2024 alumni have significantly contributed to the club's esteemed reputation through their diligent efforts in hosting a range of successful events, including SDV, TEDx, Aarohan, Drag & Drift, F.I.S.T., webinars, and various interactive workshops.
                Their involvement in the club's Annual Magazine, Autopia, and videos on cutting-edge technology for Cryptech has been remarkable.
                Furthermore, their participation in national events such as Baja India has been noteworthy.
                Their contributions have played a crucial role in the club's exceptional achievements during their tenure, thereby ensuring the perpetuation of its legacy.</p>
            </div>
            <div className="year-buttons">
              <button 
                className={activeYear === "2024" ? "active-btn" : ""}
                onClick={() => setActiveYear("2024")}
              >
                2024
              </button>

              <button 
                className={activeYear === "2025" ? "active-btn" : ""}
                onClick={() => setActiveYear("2025")}
              >
                2025
              </button>
            </div>
            <div className="cards-Alumni">
              {activeYear === "2024" && (
                <>
                  {CardsData.map((card, index) => (
                    <Cardalumni
                      key={index}
                      name={card.name}
                      image={card.image}
                      instalink={card.instalink}
                      linkedinlink={card.linkedinlink}
                    />
                  ))}
                </>
              )}

              {activeYear === "2025" && (
                <>
                  {cardsData.map((card, index) => (
                    <Cardalumni
                      key={index}
                      name={card.name}
                      image={card.url}
                      instalink={card.instaLink}
                      linkedinlink={card.linkedinLink}
                    />
                  ))}
                </>
              )}
            </div>
        </div>
        </>
  );
};

export default Alumni
