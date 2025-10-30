interface NewsCardProps {
  category: string;
  title: string;
  description: string;
  color: string;
  imageText: string;
  href: string;
}

export default function NewsCard({
  category,
  title,
  description,
  color,
  imageText,
  href,
}: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <svg
        className={`w-full h-48 ${color}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect width="100%" height="100%" fill="currentColor" />
        <text
          x="50%"
          y="50%"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="20"
        >
          {imageText}
        </text>
      </svg>
      <div className="p-4">
        <span className="text-red-600 text-sm font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>
        <a href={href} className="text-red-600 mt-3 inline-block hover:text-red-700">
          Read More →
        </a>
      </div>
    </div>
  );
}