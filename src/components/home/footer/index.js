import React from "react";
import './index.css'
const links = [
  {
    name: 'GitHub',
    icon: require('/img/home/github.svg').default,
    url: 'https://github.com/entanmo'
  },
  {
    name: 'Twitter',
    icon: require('/img/home/twitter.svg').default,
    url: 'https://twitter.com/EnTanMo1'
  },
  {
    name: 'Telegram',
    icon: require('/img/home/telegram.svg').default,
    url: 'https://t.me/entanmo'
  },
  {
    name: 'Discord',
    icon: require('/img/home/discord.svg').default,
    url: '#'
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
              <a key={Item.name} href={Item.url} target="_blank">
                <Item.icon/>
                {Item.name}
              </a>
            ))
          }
        </div>
      </div>
      <p className="website-info">© 2022 ETM Foundation</p>
    </div>
  )
}

