import React, { Component } from 'react';
import './OtherArticles.css'
import OtherArticle from './OtherArticle';
class OtherArticles extends Component {
	render(){
return (  
  <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
<OtherArticle/>
    </div>   
)
}
}
export default OtherArticles