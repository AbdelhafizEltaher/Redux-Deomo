import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from './../../store/actions/language';

const Home = () => {
          
          const language=useSelector((state)=>state.language.lang)
          const x = useSelector((state)=>state)
          console.log(x);
          


           const dispatch = useDispatch()

          const handleChange=()=>{
               
            dispatch(changeLanguage((language=="en")?'ar':'en'))
              

          }


    return (
        <>
                <div>
            <button onClick={()=>{handleChange()}} className='btn btn-primary'>change language</button>
        </div>


<section className='text-center'>

{
    language=="en"? <h3>Language Is English</h3> : <h3>اللغة عربي</h3>
}
{
    language
}
</section>
</>

    );
}

export default Home;
