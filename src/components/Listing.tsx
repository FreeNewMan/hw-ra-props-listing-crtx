import React from 'react';
import { ICard } from "../models";

interface CardProps {
  items: ICard[];
}

export function Listing({items}: CardProps) {
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
          items.map((item, i) => {
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





