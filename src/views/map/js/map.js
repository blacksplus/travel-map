import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
mapboxgl.accessToken =
  'pk.eyJ1IjoidG1hcC1qanEiLCJhIjoiY21lMDN4MHczMDBwcjJucjB1b3k4bmthbiJ9.pFa-dZabwg1dNarLMHFqdA'
class TMap {
  constructor(dom) {
    const map = new mapboxgl.Map({
      container: dom, // container ID
      style: 'mapbox://styles/tmap-jjq/cme1ielvx00lp01re6f53h0ea', // style URL
      center: [118.7915619, 32.0615513], // starting position [lng, lat]
      zoom: 10 // starting zoom
    })
    const language = new MapboxLanguage()
    map.addControl(language)
    map.setLanguage("zh-Hans")
    map.on('load', () => {
      console.log('Map loaded')
    })
  }
}

export default TMap
