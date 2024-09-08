export function Avatar({ className, children }) {
    return (
      <div className={`rounded-full overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }
  
  export function AvatarImage({ src, alt }) {
    return <img src={src} alt={alt} className="object-cover w-full h-full" />;
  }
  
  export function AvatarFallback({ children }) {
    return (
      <div className="bg-gray-500 flex items-center justify-center w-full h-full text-white">
        {children}
      </div>
    );
  }
  