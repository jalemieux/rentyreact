//property.js

var React = require('react');
var Styles = require('../styles/');
var PropertiesData = require('../data/properties');


var PropertyDetail = React.createClass({
  render: function() {
    var propertyId = this.props.params['propertyId'];
    var prop = PropertiesData.find(function(p){
      return p.propertyId == propertyId;
    });
    

    Styles.propJumboImgStyle = {
      opacity: 1,
      backgroundImage: 'url(' + prop.imgPath + ')',
      height: '300px',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgb(238, 238, 238)',
      boxSizing: 'border-box',
      color: 'rgb(51, 51, 51)',
      display: 'block',
      height: '600px',
      lineHeight: '20px',
      width: '100%',
      backgroundSize:     'cover',                    
      backgroundRepeat:   'no-repeat',
      backgroundPosition: 'center center',    
      position: 'fixed',
      top: '0',
      left: '0',   
      zIndex: '-100'
    };    
    Styles.propPanel = {
      backgroundColor: 'rgba(255,255,255,0.75)',
      WebkitBoxShadow: '1px 1px 1px 0px rgba(122,120,122,1)',
      MozBoxShadow: '1px 1px 1px 0px rgba(122,120,122,1)',
      boxShadow: '1px 1px 1px 0px rgba(122,120,122,1)',
    };
    return (
      <div className="row">
        <div style={Styles.propJumboImgStyle}></div>
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 " style={Styles.propPanel}>
          <div style={Styles.propAddress}>
            <div style={Styles.propAddress1}>{prop.address1}</div>
            <div style={Styles.propAddress2}>{prop.address2}</div>
            <div style={Styles.propInfo}>
              <div style={Styles.propInfoBlockLeft}>
                <span style={Styles.propInfoLabel}><small>Vacancy</small></span>  
                <div><span className="label label-success">{prop.vacancyStatus}</span></div>
              </div>
              <div style={Styles.propInfoBlock}>
                <span style={Styles.propInfoLabel}><small>Beds</small></span>
                <div style={Styles.propInfoValue}>{prop.beds}</div>
              </div>
              <div style={Styles.propInfoBlock}>
                <span style={Styles.propInfoLabel}><small>Baths</small></span>
                <div style={Styles.propInfoValue}>{prop.baths}</div>
              </div>
              <div style={Styles.propInfoBlock}>
                <span style={Styles.propInfoLabel}><small>sqft</small></span>
                <div style={Styles.propInfoValue}>{prop.sqft}</div>
              </div>
              <div style={Styles.propInfoBlock}>
                <span style={Styles.propInfoLabel}><small>gross income</small></span>  
                <div style={Styles.propInfoValue}>${prop.incomeGross}</div>
              </div>
              <div style={Styles.propInfoBlock}>
                <span style={Styles.propInfoLabel}><small>expenses</small></span>  
                <div style={Styles.propInfoValue}>${prop.expensesGross}</div>
              </div>
              <div style={Styles.propInfoBlock}>
                <span style={Styles.propInfoLabel}><small>net income</small></span>  
                <div style={Styles.propInfoValue}>${prop.incomeNet}</div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading"><strong>Description</strong>  <a href="#"><small>edit </small><span className="glyphicon glyphicon-pencil glyphicon-mini" aria-hidden="true"></span></a></div>
            <div className="panel-body">
              Lorem ipsum Dolore dolore exercitation et labore voluptate Ut Ut tempor eiusmod tempor. Lorem ipsum Sunt occaecat incididunt sed veniam fugiat pariatur. Lorem ipsum Sint sit id ut dolor reprehenderit ad in in. Lorem ipsum Nisi do ut nulla ut dolor id officia laboris dolore irure. Lorem ipsum Sunt tempor Ut incididunt fugiat deserunt nulla fugiat ut minim commodo dolore eu. Lorem ipsum Consequat ad sunt irure aliqua aliquip et consequat occaecat minim culpa.
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <strong>Amenities</strong> | <a href="#"><small>edit </small><span className="glyphicon glyphicon-pencil glyphicon-mini" aria-hidden="true"></span></a>
            </div>
            <div className="panel-body">
              <ul>
                <li>Garage</li>
                <li>Backyard</li>
                <li>Washer & Dryer</li>
              </ul>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading"><strong>Pictures</strong></div>
            <div className="panel-body">
              <img src="/images/95124.jpg" alt="..." style={Styles.propThumb} className="img-thumbnail" />
              <img src="/images/95124.jpg" alt="..." style={Styles.propThumb}  className="img-thumbnail" />
              <img src="/images/burlingame.jpg" alt="..." style={Styles.propThumb}  className="img-thumbnail" />
              <img src="/images/95124.jpg" alt="..." style={Styles.propThumb} className="img-thumbnail" />
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading"><strong>Tenant information</strong> | <a href="#"><small>edit </small><span className="glyphicon glyphicon-pencil glyphicon-mini" aria-hidden="true"></span></a></div>
            <div className="panel-body">
              (if rented only)<br />
              Display picture and name of tenant<br />
              Display any new message notification<br />
              Display current state of rent if rent is tracked<br />
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading"><strong>Listing Status</strong> | <a href="#"><small>edit </small><span className="glyphicon glyphicon-pencil glyphicon-mini" aria-hidden="true"></span></a></div>
            <div className="panel-body">
              Status : Listed | Not Listed<br />
              If listed, display landing page hits (if possible)<br />
              Display number of leads<br />
              Display any upcoming open house<br />
              Display any new message notification<br />
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = PropertyDetail;
