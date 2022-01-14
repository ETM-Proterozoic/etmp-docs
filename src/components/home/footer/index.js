import React from "react";
import './index.css'

const links = [
  {
    name: 'GitHub',
    icon: require('/img/home/github.svg').default
  },
  {
    name: 'Twitter',
    icon: require('/img/home/twitter.svg').default
  },
  {
    name: 'Telegram',
    icon: require('/img/home/telegram.svg').default
  },
  {
    name: 'Discord',
    icon: require('/img/home/discord.svg').default
  }
]

export default function Footer(){
  return (
    <div className="footer-view">
      <div className="footer-border-t"/>
      <div className="footer-main">
        <div className="footer-link-list">
          {
            links.map(Item => (
              <div key={Item.name}>
                <Item.icon/>
                {Item.name}
              </div>
            ))
          }
        </div>
      </div>
      <p className="website-info">© 2022 ETM Foundation</p>
    </div>
  )
}

