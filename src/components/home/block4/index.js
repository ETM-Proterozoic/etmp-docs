import React, {useMemo} from "react";
import './index.css'
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function Block4(){
  const isBrowser = useIsBrowser()
  const renderChart = () => {
    const G2 = require('@antv/g2')
    var data = [
      {
      item: 'Staking Reward',
      count: 2000000000,
      percent: 0.4
    }, {
      item: 'Ecosystem',
      count: 1000000000,
      percent: 0.2
    }, {
      item: 'ETM/P Foundation',
      count: 500000000,
      percent: 0.1
    }, {
      item: 'Strategic Investment',
      count: 720000000,
      percent: 0.144
    }, {
      item: 'Liquidity Management',
      count: 280000000,
      percent: 0.056
    }, {
      item: 'Founding Team',
      count: 500000000,
      percent: 0.1
    }
    ];
    var chart = new G2.Chart({
      container: 'TokenomicChart',
      forceFit: true,
      height: 500,
      animate: false
    });
    chart.source(data, {
      percent: {
        formatter: function formatter(val) {
          val = (val * 100).toFixed(2)*1 + '%';
          return val;
        }
      }
    });
    chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    });
    chart.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });
    chart.guide().html({
      position: ['50%', '50%'],
      html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">Total Supply<br><span style="color:#8c8c8c;font-size:20px">500,000,000</span></div>',
      alignX: 'middle',
      alignY: 'middle'
    });
    var interval = chart.intervalStack().position('percent').color('item').label('percent', {
      formatter: function formatter(val, item) {
        return item.point.item + ': ' + val;
      }
    }).tooltip('item*percent', function(item, percent) {
      percent = `${(percent * 100).toFixed(2) * 1}%`;
      return {
        name: item,
        value: percent
      };
    }).style({
      lineWidth: 1,
      stroke: '#fff'
    });
    chart.render();
    interval.setSelected(data[0]);
  }
  useMemo(() => {
    if (isBrowser){
      setTimeout(() => {
        renderChart()
      }, 1000)
    }
  }, [isBrowser])
  return (
    <div className="home-block4">
      <h1 className="home-block4-title" id="Tokenomic">Tokenomic</h1>
      <div className="home-block4-main">
        <div id="TokenomicChart"></div>
      </div>
    </div>
  )
}
