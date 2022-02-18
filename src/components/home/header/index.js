import React, {useMemo, useState} from "react";
import './index.css'
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MenuModal from "../menu-modal";

const headerMenu = [
  {
    name: 'Technology',
    url: '#Technology',
  },
  {
    name: 'Ecosystem',
    url: '#Ecosystem'
  },
  {
    name: 'Tokenomic',
    url: '#Tokenomic'
  },
  {
    name: 'Roadmap',
    url: '#Roadmap'
  },
  {
    name: 'NetWork',
    children: [
      {
        name: 'Test Network',
        url: '#'
      },
      {
        name: 'Main Network',
        url: '#'
      },
    ]
  },
  {
    name: 'Developers',
    children: [
      {
        name: 'Document',
        url: 'https://entanmo.gitbook.io'
      },
      {
        name: 'Build Now ',
        url: 'https://forms.gle/34XJ8eUNyN3a9c4X6'
      },
    ]
  },
  {
    name: 'Individuals',
    children: [
      {
        name: 'Wallet',
        url: '#'
      },
      {
        name: 'Bridge',
        url: '#'
      },
      {
        name: 'Get Started',
        url: 'https://forms.gle/34XJ8eUNyN3a9c4X6'
      }
    ]
  }
]

export default function Header() {
  const Logo = useBaseUrl('/img/logo.svg');
  const Menu = useBaseUrl('/img/home/tab-menu.svg');
  const [showMenuModal, setShowMenuModal] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const isBrowser = useIsBrowser();
  const handleScroll = (event) => {
    const scrollTop_ = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
      || window.pageYOffset
      || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    if (scrollTop_ === 0) {
      setScrollTop(0)
    } else if (scrollTop === 0 && scrollTop_ > 0) {
      setScrollTop(1)
    }
  }
  useMemo(() => {
    if (isBrowser) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isBrowser])

  return (
    <>
      <div className={"header-view " + (scrollTop > 0 ? 'header-w' : 'header-t')}>
        <div className="header-box">
          <img src={Menu} className="header-menu-tab" alt="" onClick={() => setShowMenuModal(true)}/>
          <img src={Logo} className="logo" alt=""/>
        </div>
        <div className="header-menu">
          <div className="header-menu-list">
            {
              headerMenu.map((item, index) => <div className="header-menu-item" key={index}>
                {
                  item.children ? (
                    <>
                      <span>{item.name}</span>
                      <div>
                        {
                          item.children.map((it, idx) => <a href={it.url} target="_blank" key={idx}>{it.name}</a>)
                        }
                      </div>
                    </>
                  ) : <a href={item.url}>{item.name}</a>
                }
              </div>)
            }
          </div>
          <div className="etm3-btn-black header-get-start-btn">Get Started</div>
        </div>
      </div>
      <MenuModal visible={showMenuModal} onClose={() => setShowMenuModal(false)} headerMenu={headerMenu}/>
    </>
  )
}

