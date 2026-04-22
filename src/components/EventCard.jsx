import React from 'react';
import CImage from './CImage';
import { getImageById } from '../services/galleryService';

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(date);
};

import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    const imageItem = event?.thumbnailId ? getImageById(event.thumbnailId) : null;
    const imageSrc  = imageItem?.variants?.small || "/images/image-not-found-small.webp";
    const imageBlur = imageItem?.variants?.blur;

    return (
        <Link 
            to={`/events/${event.id}`} 
            className="flex flex-col gap-3 w-full max-w-[320px] group cursor-pointer"
        >
            <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <CImage
                    src={imageSrc}
                    blur={imageBlur}
                    alt={event?.title || 'Event image'}
                    className="w-full aspect-4/5 transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col px-2 mt-2">
               
                <p className='font-medium md:text-lg lg:text-xl'>
                    {event?.title}
                </p>
                 <span className="text-gray-600 text-sm font-medium mb-1 tracking-wide">
                    {formatDate(event?.startDate)}
                </span>
            </div>
        </Link>
    );
};

export default EventCard;