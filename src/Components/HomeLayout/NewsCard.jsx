import React from "react";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    tags,
  } = news;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 mb-4">

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5 space-y-4">

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
          {title}
        </h2>

        {/* Details */}
        <p className="text-gray-600 text-sm">
          {details.length > 120 ? details.slice(0, 120) + "..." : details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-3 border-t">

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            ⭐ {rating.number}
          </div>

          {/* Views */}
          <div className="text-sm text-gray-500">
            👁 {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;