import { useParams } from 'react-router-dom';

function Gallery() {
    const { category } = useParams();

    return (
        <div className="min-h-screen pt-32 px-4 max-w-350 mx-auto">
            <h1 className="text-4xl font-serif mb-8 capitalize">
                Gallery {category ? `- ${category.replace('-', ' ')}` : ''}
            </h1>
            <p className="text-gray-500">
                This is the placeholder for the gallery page. Images will be loaded here.
            </p>
        </div>
    );
}

export default Gallery;
