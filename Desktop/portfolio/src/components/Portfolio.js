import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf portfolio-container">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="portfolio-item">
                  <a href='javascript:void(0)'>
                    <div className="portfolio-itemWrap item-wrap" onClick={() => window.open(`${item.url}`)}>
                        <img src={`${item.imgurl}`} className="item-img portfolio-img"/>
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                    </div>
                  </a>
                    <div className="portfolio_descriptionContainer">
                        <h1>Project: {item.contentDescriotion}</h1>
                        <p>{item.contentDescriotion2}</p>
                        <p>{item.contentDescriotion3}</p>
                        <p>{item.contentDescriotion4}</p>
                        <p>{item.contentDescriotion5}</p>
                        <p>{item.contentDescriotion6}</p>
                        <p>{item.contentDescriotion7}</p>
                    </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
