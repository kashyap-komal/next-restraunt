import React from 'react'
import Restraunt from './Restraunt'

function MainBody() {

  const resObj=
  {
              
                "info": {
                  "id": "182075",
                  "name": "Pind Punjab",
                  "cloudinaryImageId": "inuz5b1g03lxlrnck5kl",
                  "locality": "Hinjewadi",
                  "areaName": "Hinjawadi",
                  "costForTwo": "₹450 for two",
                  "cuisines": [
                    "Indian",
                    "Punjabi",
                    "Chinese",
                    "Biryani",
                    "Thalis",
                    "Mughlai",
                    "Beverages",
                    "Desserts"
                  ],
                  "avgRating": 4.3,
                  "parentId": "4196",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "26K+",
                  "promoted": true,
                  "adTrackingId": "cid=25577037~p=1~adgrpid=25577037#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=182075~eid=3dfa19b1-6d26-402d-ac6e-74933c9a4aec~srvts=1740415123243~collid=115117",
                  "sla": {
                    "deliveryTime": 39,
                    "lastMileTravel": 4.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "4.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2025-02-24 23:30:00",
                    "opened": true
                  },
                  "badges": {
                    
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                  },
                  "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                      "text": "BENEFITS",
                      "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  "context": "seo-data-6a3416a6-dd3c-40da-98b7-78c93a502662"
                },
                "cta": {
                  "link": "https://www.swiggy.com/city/pune/pind-punjab-hinjewadi-hinjawadi-rest182075",
                  "type": "WEBLINK"
                }
                   
  }
  return (
    <div className='mainbody'>
        <div className='search'>
            Search
        </div>
        <div className='res-container'>
            {/* different restraunts list */}
            {/* here  I am assisnging the same Restraunt call just to see css how it aligns */}
           <Restraunt resData={resObj}/> 

        </div>
     
    </div>
  )
}

export default MainBody
