import React from 'react';
import './catagorydetail.css'
import {strings} from '../../../language/language';
import {useSelector} from 'react-redux'

export default function RecipeReviewCard() {
  const lang=useSelector((state)=>state.LanguageReducer.language)
  React.useEffect(()=>{},[lang]);
  return (
    <div className="catagory-detail">
      <div className="detail-header">
       {strings.header}
      </div>
      <div className="main-detail">
        {strings.main}
      </div>
      <div className="catagory-footer">

      </div>
    </div>
  );
}
