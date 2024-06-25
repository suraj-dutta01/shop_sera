import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import hero1 from "../Images/hero1.webp"
import hero2 from "../Images/hero2.jpg"
import hero3 from "../Images/hero3.jpg"
import hero4 from "../Images/hero4.jpg"
import { useEffect, useState } from 'react';
    const HeroImg = () => {
    let images=[hero1,hero2,hero3,hero4];
    return ( 
        <div className="">
                    {images.map((e)=>{
                        return(
                            <div className="">
                                <img src={e} alt="" />
                            </div>
                        )
                    })}
        </div>
     );
}
 
export default HeroImg;