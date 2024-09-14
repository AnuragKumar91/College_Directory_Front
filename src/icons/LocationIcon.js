

import { faAngleRight, faBookmark, faChevronRight, faLocationDot, faStar, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


export const LocationIcon = () => {
    return (
        <>
            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
        </>
    )
}

export const BookmarkIcon = () => {
    return (
        <>
            <FontAwesomeIcon icon={faBookmark} className='me-2' />
        </>
    )
}

export const ThumbtrackIcon = () => {
    return (
        <>
            <FontAwesomeIcon icon={faThumbtack} className='me-2' />
        </>
    )
}

export const StarIcon = () => {
    return (
        <>
            <FontAwesomeIcon icon={faStar} className='me-2' />
        </>
    )
}

export const RightArraow = () => {
    return (
        <>
            <FontAwesomeIcon icon={faChevronRight} className='me-2' />
        </>
    )
}

export const AngleRightArraow= () => {
    return (
        <>
            <FontAwesomeIcon icon={faAngleRight} />
        </>
    )
}





