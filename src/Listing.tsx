import React from 'react';

export function Listing(props) {
    const {items} = props;
    const formatPrice = (price, code) => {
      switch(code) {
        case 'USD': return '$'+price
        case 'EUR': return '€'+price
        default: return price+' GBR'}
    }

    const formatColor = (quantity) => {
      if (quantity > 20) return 'high';
      if (quantity <= 20 && quantity > 10) return 'medium';
      if (quantity <= 10) return 'low';
      }

    return (
      <div className="item-list">
        {
          items.filter(row => row.title).map((jitem, i) => {
            let item = JSON.parse(JSON.stringify(jitem));
            return (
                <div className="item"  key={`item-${item.listing_id}`}>
                <div className="item-image">
                  <a href={item.url}>
                    <img src={'MainImage' in item ? item.MainImage.url_570xN : '' } alt={item.title} />
                  </a>
                </div>
                <div className="item-details">
                  <p className="item-title">{item.title}</p>
                  <p className="item-price">
                    { formatPrice(item.price, item.currency_code)}                 
                  </p>
                  <p className={`item-quantity level-${formatColor(item.quantity)}`}>{item.quantity} left</p>
                </div>
              </div>
            );
          })
        }
      </div>
    );
};





