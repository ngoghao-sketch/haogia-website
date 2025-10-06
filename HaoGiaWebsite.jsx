/* HaoGiaWebsite.jsx - Single-file React component (default export).
   To run this you can create a React app (create-react-app) and replace App.jsx with this file,
   then put assets/logo.png into public or src/assets and import accordingly. */

import React, { useState, useEffect } from 'react';

export default function HaoGiaWebsite(){ 
  const [lang, setLang] = useState('vi');
  useEffect(()=>{ document.title = 'Hao Gia - Portfolio'; },[]);

  const t = {
    vi: {
      name: 'Hao Gia',
      slogan: 'Thiết kế nhanh – Chuẩn đẹp – Hiện đại cùng AI',
      intro: 'Xin chào! Mình là Hao Gia – người sáng tạo nội dung và thiết kế hình ảnh chuyên nghiệp, tập trung vào sự sáng tạo, tính thẩm mỹ và hiệu quả trong từng dự án.',
      servicesTitle: 'Dịch vụ chính',
      services: ['Thiết kế logo chuyên nghiệp','Bộ nhận diện thương hiệu (color palette, font)','Banner & Social Media','Card visit và ấn phẩm in ấn'],
      portfolioTitle: 'Bộ sưu tập (Demo)',
      contactTitle: 'Liên hệ',
      contactText: 'Email: your@email.com or https://zalo.me/your-number',
      hireBtn: 'Thuê tôi'
    },
    en: {
      name: 'Hao Gia',
      slogan: 'Fast design – Clean look – Modern with AI',
      intro: 'Hi! I’m Hao Gia – a creative designer and content creator who focuses on aesthetics, originality, and efficiency in every project.',
      servicesTitle: 'Core Services',
      services: ['Professional logo design','Brand identity (colors & fonts)','Banners & Social Media','Business cards & print materials'],
      portfolioTitle: 'Portfolio (Demo)',
      contactTitle: 'Contact',
      contactText: 'Email: your@email.com or https://zalo.me/your-number',
      hireBtn: 'Hire me'
    }
  };

  const locale = t[lang];

  return (
    <div style={{fontFamily:'Inter, system-ui, Arial', background:'#f7f7f8', minHeight:'100vh', padding:24}}>
      <div style={{maxWidth:1000, margin:'0 auto'}}>
        <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18}}>
          <div style={{display:'flex', gap:14, alignItems:'center'}}>
            <img src="assets/logo.png" alt="Hao Gia" style={{width:90,height:90,objectFit:'contain',borderRadius:8}}/>
            <div>
              <h1 style={{margin:0}}>{locale.name}</h1>
              <div style={{background: 'linear-gradient(90deg,#ff3b3b,#ffb800)', WebkitBackgroundClip:'text', color:'transparent', fontWeight:600}}>{locale.slogan}</div>
            </div>
          </div>
          <div style={{display:'flex', gap:8}}>
            <button onClick={()=>setLang('vi')}>🇻🇳 VI</button>
            <button onClick={()=>setLang('en')}>🇬🇧 EN</button>
            <a href="#contact" style={{padding:'8px 12px', background:'linear-gradient(90deg,#ff3b3b,#ffb800)', color:'#fff', borderRadius:8, textDecoration:'none'}}> {locale.hireBtn} </a>
          </div>
        </header>

        <main style={{background:'#fff', padding:24, borderRadius:12, boxShadow:'0 6px 22px rgba(0,0,0,0.08)'}}>
          <section style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
            <div>
              <h2>{locale.name}</h2>
              <p>{locale.intro}</p>
              <h3 style={{marginTop:12}}>{locale.servicesTitle}</h3>
              <ul>
                {locale.services.map((s,i)=>(<li key={i}>{s}</li>))}
              </ul>
              <div style={{marginTop:12}}><a href="#contact" style={{padding:'10px 16px', background:'linear-gradient(90deg,#ff3b3b,#ffb800)', color:'#fff', borderRadius:8, textDecoration:'none'}}>{locale.hireBtn}</a></div>
            </div>
            <div>
              <h3>{locale.portfolioTitle}</h3>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
                {[1,2,3,4,5,6].map(i=>(
                  <div key={i} style={{border:'2px dashed #e6e6e6', padding:12, borderRadius:8, minHeight:110, display:'flex', alignItems:'center', justifyContent:'center', color:'#999'}}>Demo image #{i}</div>
                ))}
              </div>
              <p style={{fontSize:12,color:'#888', marginTop:8}}>(Demo placeholders — replace images later.)</p>
            </div>
          </section>

          <section id="contact" style={{marginTop:18}}>
            <h3>{locale.contactTitle}</h3>
            <p>{locale.contactText}</p>
          </section>
        </main>

        <footer style={{textAlign:'center', color:'#999', fontSize:12, marginTop:12}}>© 2025 Hao Gia</footer>
      </div>
    </div>
  );
}
