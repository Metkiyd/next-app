import React from 'react'
import {
  YMaps,
  Map,
  ZoomControl,
  Placemark,
  Clusterer,
  withYMaps,
  useYMaps,
} from '@pbe/react-yandex-maps'
import Image from 'next/image'
import styles from './styles.module.scss'
import { MarkGarage, MarkRoom, MarkStore } from '@/assets/icons'
import MarkFactory1 from '../../assets/icons/MarkFactory.svg'
import MarkFactory2 from '@/assets/icons/MarkFactory.svg'

const myPoints = [
  {
    title: 'Auchan',
    description: 'Ашан орбитальная',
    coordinates: [47.30869864897845, 39.721987331491114],
  },
  {
    title: 'Mega',
    description: 'ТЦ Мега',
    coordinates: [47.290058259888625, 39.847420212403335],
  },
  {
    title: 'Lenta',
    description: 'Лента',
    coordinates: [47.24088209900305, 39.75076185734704],
  },
]

export const MyMap = () => {
  const [zoom, setZoom] = React.useState(15)

  const mapState = React.useMemo(
    () => ({
      center: [47.222, 39.7],
      zoom,
      // behaviors: ['disable.scrollZoom'],
    }),
    [zoom],
  )
  // const ymaps = useYMaps(['templateLayoutFactory'])

  // createTemplateLayoutFactory = () => {
  //   templateLayoutFactory.createClass('<div>1</div>')
  // }
  // const MyPlacemark = () => {
  //   const BalloonContentLayout = React.memo(({ text }) => {
  //     return <div>{text}</div>
  //   })
  // }
  const MyPlacemark = () => {
    const BalloonContentLayout = React.memo(({ text }) => {
      return <div>{text}</div>
    })
  }

  // const template = createPinTemplateFactory(mapInstanceRef)({
  //   onPinClick: onClick,
  //   description: pin.description,
  //   isActive: pin.isActive,
  //   isViewed: pin.isViewed,
  // })

  // const createBalloonLayout = (ymaps) => {
  //   const BalloonLayout = ymaps.templateLayoutFactory.createClass(
  //     '<div>new balloon</div>',
  //     {},
  //   )
  //   return BalloonLayout
  // }

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Рабочие зоны</p>
      <div>
        {/*  <MarkRoom />*/}
        {/*  <MarkGarage />*/}
        {/*<MarkStore />*/}
        <img src={MarkFactory2} alt='next' />
      </div>

      <div className={styles.map}>
        <YMaps
          // query={{ load: 'package.full' }}
          query={{ load: 'templateLayoutFactory' }}
        >
          <Map
            width={650}
            height={415}
            state={mapState}
            modules={[
              'geoObject.addon.balloon',
              'control.ZoomControl',
              'templateLayoutFactory',
              'layout.ImageWithContent',
            ]}
          >
            <Clusterer
              options={{
                preset: 'islands#invertedVioletClusterIcons',
                groupByCoordinates: false,
              }}
            >
              <Placemark
                defaultGeometry={[47.224156206825704, 39.696326724992325]}
                properties={
                  {
                    // balloonContentLayout: BaloonContentLayout,
                    // balloonContentLayoutContent: 'BaloonContentLayout',
                    // balloonContentBody: 'Социальный фонд РФ',
                  }
                }
                options={{
                  iconLayout: 'default#imageWithContent',
                  // iconContentLayout: BalloonLayout,
                  // iconLayout: template,
                  iconImageSize: [38, 38],
                }}
              />
              <Placemark
                defaultGeometry={[47.22439074221497, 39.70489690590817]}
                properties={{
                  balloonContentBody: 'Ростовский Цирк',
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: 'https://7745.by/images/map/map-marker2.svg',
                  iconImageSize: [28, 38],
                }}
              />
              <Placemark
                defaultGeometry={[47.22, 39.697]}
                properties={{
                  balloonContentBody: 'Justice IT Rostov office',
                }}
              />
              <Placemark
                defaultGeometry={[47.219310552147604, 39.70271173982023]}
                properties={{
                  balloonContentBody: 'ГУ МВД',
                }}
              />
              {myPoints.map((point, index) => (
                <Placemark
                  key={index}
                  defaultGeometry={point.coordinates}
                  properties={{
                    balloonContentBody: point.description,
                  }}
                />
              ))}
            </Clusterer>
            <ZoomControl
              options={{
                size: 'small',
                position: { right: '16px', top: '16px' },
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  )
}
