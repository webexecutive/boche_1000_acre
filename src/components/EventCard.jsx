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

const EventCard = ({ event }) => {
    const imageItem = event?.thumbnailId ? getImageById(event.thumbnailId) : null;
    const imageSrc  = imageItem?.variants?.small || "/images/image-not-found-small.webp";
    const imageBlur = imageItem?.variants?.blur;

    return (
        <div className="flex flex-col gap-3 w-full max-w-[320px]">
            <CImage
                src={imageSrc}
                blur={imageBlur}
                alt={event?.title || 'Event image'}
                className="w-full aspect-4/5 rounded-[32px]"
            />
            <div className="flex flex-col px-2 mt-2">
                <span className="text-[#1a1a1a] text-sm font-medium mb-1 tracking-wide">
                    {formatDate(event?.startDate)}
                </span>
                <h3 className="text-[32px] font-serif text-[#1a1a1a] font-light leading-tight">
                    {event?.title}
                </h3>
            </div>
        </div>
    );
};

export default EventCard;