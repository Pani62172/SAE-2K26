import React from 'react'
import './Alumni.css'
import Cardalumni from './CardAlumni.js'
import Wave from './Wave.js';

const Alumni = () => {
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
            <div className="cards-Alumni">
            {cardsData.map(card => (
                <Cardalumni  name={card.name} image={card.url} instalink={card.instalink} linkedinlink={card.linkedinlink}/>
            ))}
            </div>
        </div>
        </>
  );
};

export default Alumni
