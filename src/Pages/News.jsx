import React from 'react'
import NewsContainer from '../Components/news/NewsContainer'
import RightPartH from '../Components/RightPartH'
import SubNavbar from '../Components/SubNavbar'

function News() {
  const data ={
    title:"News",
    subTitle:"News home",
    data1:"RSS Index",
    data2:"Covid-19",
    data3:"Ball-tampering",
    data4:"Technology in cricket",
    data5:"Racism"
}
 
  return (
    <div >
     <SubNavbar iteam={data}  />
     <div style={{"margin":"3%","marginLeft":"12%", }}>
     <img src="https://tpc.googlesyndication.com/simgad/16233217720762028300?" />
     </div>
    <div style={{'display':'flex'}}>
    <NewsContainer/>
    <RightPartH/>
    </div>
   

    </div>
    
  )
}

export default News