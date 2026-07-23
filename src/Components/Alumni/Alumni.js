import React from 'react'
import { useState } from 'react';
import './Alumni.css'
import Cardalumni from './CardAlumni.js'
import Wave from './Wave.js';
import DarkVeil from '../Events/DarkVeil/DarkVeil.js';

const Alumni = () => {
    const cardsData2023 = [
          {
              "url":"https://live.staticflickr.com/65535/52768996893_caf48d783b_n.jpg",
              "name":"Divas Gupta",
              "instaLink":"https://www.instagram.com/divas__gupta/",
              "linkedinLink":"https://www.linkedin.com/in/divas-gupta-a23501125/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768499151_e754bb1b90_n.jpg",
              "name":"Anurag Singh",
          
              "instaLink":"https://www.instagram.com/anurag1857/",
              "linkedinLink":"https://www.linkedin.com/in/anurag1857/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768931815_807e7fd6f3_m.jpg",
              "name":"Aniket Panigrahi",
              "instaLink":"https://www.instagram.com/iamaniketpanigrahi16/",
              "linkedinLink":"https://www.linkedin.com/in/aniketpanigrahi/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52767981077_c0293c8bee_n.jpg" ,
              "name":"Satyam Shorya Jha",
              "instaLink":"https://www.instagram.com/ssj11___/",
              "linkedinLink":"https://www.linkedin.com/in/satyam-shorya-jha-520a19194/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768940625_2bb0d6208a_n.jpg" ,
              "name":"S. Hemanth",
              "instaLink":"https://www.instagram.com/hemanthsanagavarapu/",
              "linkedinLink":"https://www.linkedin.com/in/hemanth-sanagavarapu-7a70161b2/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768790894_9e57425f04_n.jpg" ,
              "name":"Suryadip Mondal",
              "instaLink":"https://www.instagram.com/s.u.r.j.o__/",
              "linkedinLink":"https://www.linkedin.com/in/suryadip-mondal-1534921b1/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768794844_9406bd0899_n.jpg" ,
              "name":"Sukanya dutta",
              "instaLink":"https://www.instagram.com/_sukanyadutta_/",
              "linkedinLink":"https://www.linkedin.com/in/sukanya-dutta-72a45219a/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768004002_1a11c68c93_n.jpg" ,
              "name":"Soumyadeep Das",
              "instaLink":"https://instagram.com/sd.soumya_deep?igshid=YmMyMTA2M2Y=",
              "linkedinLink":"https://www.linkedin.com/in/soumyadeepdas-20/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769035693_6ac2ab53bd_n.jpg" ,
              "name":"Anik Mondal",
              "instaLink":"",
              "linkedinLink":"",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768572636_b17a8a9e2f_n.jpg" ,
              "name":"Vishal Jaiswal",
              "instaLink":"https://www.instagram.com/tynnision_vishal/",
              "linkedinLink":"https://www.linkedin.com/in/vishal-jaiswal-4b103a199/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768989855_507cd697f9_n.jpg" ,
              "name":"Souptik Das",
              "instaLink":"https://instagram.com/soda_o_0_?igshid=YmMyMTA2M2Y=",
              "linkedinLink":"https://www.linkedin.com/in/souptik-das-2760ab14a/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768581316_5e948bbcc6_w.jpg" ,
              "name":"V. Sivaji Ganesh Naidu",
              "instaLink":"https://instagram.com/sivajiganeshnaidu_v?igshid=YmMyMTA2M2Y=",
              "linkedinLink":"https://www.linkedin.com/in/sivaji-ganesh-naidu-vemulapalli-4bb14b1b9/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768838999_c9a8ecaf6f_w.jpg" ,
              "name":"Ayush Kumar",
              "instaLink":"https://www.instagram.com/hashtag_aayush/",
              "linkedinLink":"https://www.linkedin.com/in/aayush-kumar-827976199/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769075718_9f16b7d0b9_w.jpg" ,
              "name":"Arpan Das",
              "instaLink":"https://www.instagram.com/the_mystic_shadow/",
              "linkedinLink":"https://www.linkedin.com/in/arpan-das-217a731b3/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768845264_139784be57_w.jpg" ,
              "name":"Subham Gupta",
              "instaLink":"https://www.instagram.com/subhamgupta173/",
              "linkedinLink":"https://www.linkedin.com/in/subham-gupta-2398361a9/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769081713_12c71e61df_w.jpg" ,
              "name":"Anshika Chaudhary",
              "instaLink":"https://www.instagram.com/anshi__kaaaaa/",
              "linkedinLink":"https://www.linkedin.com/in/anshika-chaudhary-3399561b5/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768596866_b3c5844682_n.jpg" ,
              "name":"Arani Gangopadhyay",
              "instaLink":"https://www.instagram.com/arani_008/",
              "linkedinLink":"https://www.linkedin.com/in/arani-gangopadhyay-7642b6243/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769134248_ab505e843d_n.jpg" ,
              "name":"Ankita Mondal",
              "instaLink":"https://www.instagram.com/miss__shady/",
              "linkedinLink":"https://www.linkedin.com/in/ankita-mandal-b173411ab/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768599596_ca63fa83dd.jpg" ,
              "name":"Souham Bnaerjee",
              "instaLink":"https://instagram.com/souhambanerjee?igshid=YmMyMTA2M2Y=",
              "linkedinLink":"https://www.linkedin.com/in/souham-banerjee-a407b5185/",
          },
          {
              "url":"https://live.staticflickr.com/65535/53126268392_96da2b46cf_b.jpg"  ,
              "name":"Koena Saha"
      ,        "instaLink":"https://instagram.com/_mistalee_koena?igshid=YmMyMTA2M2Y=",
              "linkedinLink":"https://www.linkedin.com/in/koena-saha-869920200/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769130293_712c2ea392_n.jpg" ,
              "name":"Shivam Kumar",
              "instaLink":"https://www.instagram.com/k21shivam/",
              "linkedinLink":"https://www.linkedin.com/in/shivam-kumar21/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769023890_c737f51ed5_w.jpg" ,
              "name":"Sneha Chattopadhya",
              "instaLink":"https://www.instagram.com/sneha._.chattopadhyay/",
              "linkedinLink":"https://www.linkedin.com/in/sneha-chattopadhyay/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769101123_a53708378e_z.jpg" ,
              "name":"V. Manish Yadav",
              "instaLink":"/",
              "linkedinLink":"https://www.linkedin.com/in/manish-veerla/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769028900_6d35be9ed8_n.jpg" ,
              "name":"Abhishek Sharma",
              "instaLink":"https://www.instagram.com/_sharma_ab/",
              "linkedinLink":"https://www.linkedin.com/in/abhishek-sharma-nitdgp23/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769031690_f62cbffc28_n.jpg" ,
              "name":"Rahul Mondal"
      ,        "instaLink":"https://instagram.com/r.a.h.u.l_mondal?igshid=YmMyMTA2M2Y=",
              "linkedinLink":"https://www.linkedin.com/in/rahul-mondal-86241b200/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768881894_0b1741aa1e_n.jpg" ,
              "name":"P. Venkatesh"
      ,        "instaLink":"https://instagram.com/venky_9010?igshid=YmMyMTA2M2Y=",
              "linkedinLink":"https://www.linkedin.com/in/perepureddy-venkatesh-ab3420192/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769045905_2ec72118d6_w.jpg" ,
              "name":"P. Chandra Sekhar",
              "instaLink":"https://instagram.com/sekhar_691?igshid=YmMyMTA2M2Y=",
              "linkedinLink":"https://www.linkedin.com/in/chandrasekharnaidu/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52768634016_8ba58bf81e_n.jpg" ,
              "name":"Leela Prasad",
              "instaLink":"/",
              "linkedinLink":"/",
          },
          {
              "url":"https://live.staticflickr.com/65535/52769919127_c24b8a862b_n.jpg" ,
              "name":"J. sri Chandana",
              "instaLink":"/",
              "linkedinLink":"/",
          },
      ]
    const cardsData2024 =[
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
          "name": "Asutosh Kumar Singh",
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
    const cardsData2025 = [
        {
            "url": require("./Assets/AluminiImg/2025/Siddharth Khandelwal.jpg"),
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
            "url": require("./Assets/AluminiImg/2025/Prince Raj.jpg"),
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
            "url": require("./Assets/AluminiImg/2025/Dipesh Banerjee.jpg"),
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
            "url": require('./Assets/AluminiImg/2025/Gautam.png'),
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
            "url": require("./Assets/AluminiImg/2025/Sachin Patel.jpg"),
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
            "url": require("./Assets/AluminiImg/2025/Biswajit.png"),
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
            "url": require("./Assets/AluminiImg/2025/Aksha.png"),
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
            "url": require("./Assets/AluminiImg/2025/Ritu Rani.png"),
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
      const cardsData2026 = [
          {
          "url": "https://live.staticflickr.com/65535/52966207158_d929d620a0_n.jpg",
          "name": "Debjit Banerjee",
          "instaLink": "https://instagram.com/dev_b0073?igshid=NGExMmI2YTkyZg==",
          "linkedinLink": "https://www.linkedin.com/in/debjit-banerjee-88b49526b",
        },
      {
          "url": "https://live.staticflickr.com/65535/52966124605_06b5472610_w.jpg",
          "name": "Namrata Gupta",
          "instaLink": "https://www.instagram.com/me_namrataax?igsh=NzRiNDB5N2VvaWUz",
          "linkedinLink": "https://www.linkedin.com/in/namrata-gupta-b22b74259/",
      },
      {
          "url": require('./Assets/AluminiImg/2026/Aryan Gupta.png'),
          "name": "Aryan Gupta",
          "instaLink": "https://www.instagram.com/aryangupta_25?igsh=OGU2b3RsOWdxbTkw",
          "linkedinLink": "https://www.linkedin.com/in/aryangupta2511/",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Nisarga Jana.jpeg"),
          "name": "Nisarga Jana",
          "instaLink": "https://instagram.com/nj_0.0_?igshid=NGExMmI2YTkyZg==",
          "linkedinLink": "https://www.linkedin.com/in/nisarga-jana-634400259",
      },
      {
          "url": "https://live.staticflickr.com/65535/52966207018_ea112ec72c_n.jpg",
          "name": "Souryadipta Khan",
          "instaLink": "",
          "linkedinLink": "",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Tanmay Bandhu Jaiswal.png"),
          "name": "Tanmay Bandhu Jaiswal",
          "instaLink": "https://instagram.com/t.a.n.m.a.y._.j.a.i.s.w.a.l?igshid=MzNlNGNkZWQ4Mg==",
          "linkedinLink": "https://www.linkedin.com/in/tanmay-bandhu-jaiswal-552b31229",
      },
      {
          "url": require('./Assets/AluminiImg/2026/Rituparna Pradhan.png'),
          "name": "Rituparna Pradhan",
          "instaLink": "https://instagram.com/ritu_parna8?igshid=MzNlNGNkZWQ4Mg==",
          "linkedinLink": "https://www.linkedin.com/in/rituparna-pradhan-96774a26a",
      },
      {
          "url": require('./Assets/AluminiImg/2026/Devansh Dubey.png'),
          "name": "Devansh Dubey",
          "instaLink": "",
          "linkedinLink": "",
      },
      {
          "url": require('./Assets/AluminiImg/2026/Chandan Kumar Roy.png'),
          "name": "Chandan Roy",
          "instaLink": "https://www.instagram.com/prash_482/",
          "linkedinLink": "https://www.linkedin.com/in/prasant-sahu-0b236923a",
      },
      {
          "url": "https://live.staticflickr.com/65535/52965888754_4f08ca4c58_w.jpg",
          "name": "Samaseen Prabhat",
                 "instaLink": "https://instagram.com/ritu_parna8?igshid=MzNlNGNkZWQ4Mg==",
          "linkedinLink": "https://www.linkedin.com/in/samaseen-prabhat-b90909262",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Kiranmai Perada.png"),
          "name": "Perada Kiranmai",
                 "instaLink": "https://instagram.com/__.k.i.r.a.n.m.a.i.__?igshid=NGExMmI2YTkyZg==",
          "linkedinLink": "https://www.linkedin.com/in/kiranmai-perada-a606b226a",
      },
      {
          "url": "https://live.staticflickr.com/65535/52966124380_bbb90e0987_w.jpg",
          "name": "Yashasree",
          "instaLink": "https://instagram.com/_yashasree_?igshid=ZDc4ODBmNjlmNQ==",
          "linkedinLink": "https://www.linkedin.com/in/yashasree-appikonda-26125127b",
      },
      {
          "url": "https://live.staticflickr.com/65535/52966207433_cb91a81c21_n.jpg",
          "name": "Doki Manoj Kumar",
          "instaLink": "https://instagram.com/manoj_doki?igshid=ZDc4ODBmNjlmNQ==",
          "linkedinLink": "https://www.linkedin.com/in/manoj-kumar-doki-796549250/",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Mayank Mani Singh.png"),
          "name": "Mayank Mani Singh",
             "instaLink": "https://instagram.com/singhmayankmani?igshid=ZDc4ODBmNjlmNQ==",
          "linkedinLink": "https://www.linkedin.com/in/mayank-mani-singh-aa133526a",
      },
      {
          "url": "https://live.staticflickr.com/65535/52966361968_cbdb745c7f_n.jpg",
          "name": "Pothina Divya Venkata Durga Naga Sai",
             "instaLink": "",
          "linkedinLink": "https://www.linkedin.com/in/pothina-divya-venkata-durga-naga-sai-45610625a",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Aniruddha.jpg"),
          "name": "Aniruddha Roy",
              "instaLink": "",
          "linkedinLink": "https://www.linkedin.com/in/aniruddha-roy-b3b233261",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Raman Patel.png"),
          "name": "Raman Patel",
              "instaLink": "",
          "linkedinLink": "https://www.linkedin.com/in/raman-patel-4a333926a",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Charan Teja.png"),
          "name": "Pochepalli Charan Teja",
          "instaLink": "https://www.instagram.com/urstrulycharanteja/",
          "linkedinLink": "https://www.linkedin.com/in/charanteja-pochepalli-274856257/",
      },
      {
          "url": "https://live.staticflickr.com/65535/52965888629_b33d98f268_n.jpg",
          "name": "Suresh Chandra Adhikari",
          "instaLink": "https://www.instagram.com/suresh2441?igsh=MWZ2djNqbG5ra2g0bQ==",
          "linkedinLink": "https://www.linkedin.com/in/suresh-adhikari-69b129269",
      },
      {
          "url": "https://live.staticflickr.com/65535/53126313107_106838b187_t.jpg",
          "name": "Tarak Suhas Abhiram",
            "instaLink": "",
          "linkedinLink": "https://in.linkedin.com/in/tarak-suhas-abhiram-puppala-418b25268",
      },
      {
          "url": "https://live.staticflickr.com/65535/52966124395_f2a5cccfe8_n.jpg",
          "name": "Snehashish Sha",
            "instaLink": "",
          "linkedinLink": "https://www.linkedin.com/in/snehashis-sha-06833726a",
      },
      {
          "url": "https://live.staticflickr.com/65535/52965889164_af7b692f0f_n.jpg",
          "name": "Anubhav Mondal",
          "instaLink": "https://instagram.com/anubhav.mondal.315?igshid=MzNlNGNkZWQ4Mg==",
          "linkedinLink": "https://www.linkedin.com/in/anubhav-mondal-61b963255",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Sarvapalli Arya.png"),
          "name": "Sarvpalli Arya",
          "instaLink": "https://instagram.com/shivangi_._queen?igshid=NGExMmI2YTkyZg==",
          "linkedinLink": "https://www.linkedin.com/in/sarvpalli-arya-0034a9261",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Soumya Raj.png"),
          "name": "Soumya Raj",
                 "instaLink": "https://instagram.com/_sxumyaa?igshid=MzNlNGNkZWQ4Mg==",
          "linkedinLink": "https://www.linkedin.com/in/soumya-raj-78685727a",
      },
      {
          "url": "https://live.staticflickr.com/65535/52966206483_caf3d8fbc0_w.jpg",
          "name": "Vishnu Vardhan",
                 "instaLink": "",
          "linkedinLink": "",
      },
      {
          "url": "https://live.staticflickr.com/65535/52966124400_54e6aa06f2_n.jpg",
          "name": "Sumantha Baskey",
            "instaLink": "https://www.instagram.com/sumantabaskeybabu?r=nametag",
          "linkedinLink": "https://www.linkedin.com/in/sumanta-baskey-967093278",
      },
      {
          "url": "https://live.staticflickr.com/65535/52965821941_f27650736c_n.jpg",
          "name": "Aman Singh",
          "instaLink": "https://www.instagram.com/_amansingh1007_?r=nametag",
          "linkedinLink": "https://www.linkedin.com/in/aman-singh-16273727a",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Arjya Dutta.jpg"),
          "name": "Arjya Dutta",
          "instaLink": "https://www.instagram.com/10_arjya_d?igsh=MWtpZW5vNmN6bDNkdw==",
          "linkedinLink": "https://www.linkedin.com/in/arjya-dutta-356449275/",
      },
      {
          "url": require("./Assets/AluminiImg/2026/Indrajit Das.jpg"),
          "name": "Indrajit Das",

          "instaLink": "https://www.instagram.com/__dreeze?igsh=MWZzbzVmMWhkbms1bA==",
          "linkedinLink": "https://www.linkedin.com/in/indrajit-das-321440245/",
      },
      {
          "url": "https://live.staticflickr.com/65535/52966124710_7974bb9c26_w.jpg",
          "name": "Manish Kumar Yadav",

          "instaLink": "",
          "linkedinLink": "",
      },
      // {
      //     "url": "https://live.staticflickr.com/65535/52965150222_77d6eca948_w.jpg",
      //     "name": "Harshit Shukla",
         //     "instaLink": "",
      //     "linkedinLink": "",
      // },
      // {
      //     "url":"https://live.staticflickr.com/65535/52965744206_776ec301a1_n.jpg",
      //     "name":"Lochan Vaishnav",
        //     "instaLink":"",
      //     "linkedinLink":"",
      // },
      {
          "url": "https://live.staticflickr.com/65535/52966124865_83437e845b_w.jpg",
          "name": "Nishkarsh Chowdary",

          "instaLink": "https://instagram.com/nishkarsh_choudhary_3604?igshid=MzNlNGNkZWQ4Mg==",
          "linkedinLink": "",
      },
      {
          "url": "https://live.staticflickr.com/65535/52966206688_b6a6bbbc7d_w.jpg",
          "name": "Rigden Bhutia",

          "instaLink": "https://instagram.com/rigden._bhutia?igshid=NTc4MTIwNjQ2YQ==",
          "linkedinLink": "https://www.linkedin.com/in/rigden-bhutia-6596ba250",
      },
      
      {
          "url": "https://live.staticflickr.com/65535/52965149777_eae9508a6d_w.jpg",
          "name": "Susmitha Khatun",

          "instaLink": "https://instagram.com/susmitakhatun192?igshid=MzNlNGNkZWQ4Mg==",
          "linkedinLink": "https://www.linkedin.com/in/susmita-khatun-b48a6b251",
      },
      {
          "url": "https://live.staticflickr.com/65535/52965149787_0bdfa960f6_n.jpg",
          "name": "Sunil Kumawat",

          "instaLink": "",
          "linkedinLink": "",
      },
    ]
    

      const [activeYear, setActiveYear] = useState("2026");
      
    return (
      <>
    <div className="alumni-container">
      <Wave />
      <div className="alumni-background">
        <DarkVeil
          hueShift={240}
          noiseIntensity={0.05}
          scanlineIntensity={0.15}
          speed={0.5}
          scanlineFrequency={1}
          warpAmount={3}
          resolutionScale={2}
        />
      </div>
        <div class="container-alumni mt-4">
            <h1>Meet Our <span>Alumni</span></h1>
            <div className="content-alumni mt-6">
                <p id='alumni-content'>The alumni have significantly contributed to the club's esteemed reputation through their diligent efforts in hosting a range of successful events, including SDV, TEDx, Aarohan, Drag & Drift, F.I.S.T., webinars, and various interactive workshops.
                Their involvement in the club's Annual Magazine, Autopia, and videos on cutting-edge technology for Cryptech has been remarkable.
                Furthermore, their participation in national events such as Baja India has been noteworthy.
                Their contributions have played a crucial role in the club's exceptional achievements during their tenure, thereby ensuring the perpetuation of its legacy.</p>
            </div>
            <div className="year-buttons">
              <button 
                className={activeYear === "2026" ? "active-btn" : ""}
                onClick={() => setActiveYear("2026")}
              >
                2026
              </button>

              <button 
                className={activeYear === "2025" ? "active-btn" : ""}
                onClick={() => setActiveYear("2025")}
              >
                2025
              </button>

              <button 
                className={activeYear === "2024" ? "active-btn" : ""}
                onClick={() => setActiveYear("2024")}
              >
                2024
              </button>

              <button 
                className={activeYear === "2023" ? "active-btn" : ""}
                onClick={() => setActiveYear("2023")}
              >
                2023
              </button>
            </div>
            <div className="cards-Alumni">
              {activeYear === "2023" && (
                <>
                  {cardsData2023.map((card, index) => (
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
              {activeYear === "2024" && (
                <>
                  {cardsData2024.map((card, index) => (
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
                  {cardsData2025.map((card, index) => (
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

              {activeYear === "2026" && (
                <>
                  {cardsData2026.map((card, index) => (
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
      </div>
        </>
  );
};

export default Alumni