import {connectHits} from 'react-instantsearch-dom'

const Hits = ({hit}) => console.log('==================>', hit)

const CustomHits = connectHits(Hits)

export default CustomHits
