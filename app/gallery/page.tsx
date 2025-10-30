export default function GalleryPage() {
  const images = [
    'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg',
    'https://images.pexels.com/photos/164836/pexels-photo-164836.jpeg',
    'https://images.pexels.com/photos/3771112/pexels-photo-3771112.jpeg',
    'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg',
    'https://images.pexels.com/photos/7521300/pexels-photo-7521300.jpeg',
    'https://images.pexels.com/photos/34228389/pexels-photo-34228389.jpeg',
  ];

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Events & Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img key={i} src={`${src}?auto=compress&cs=tinysrgb&w=800`} alt={`gallery-${i}`} className="w-full h-56 object-cover rounded-lg shadow" />
          ))}
        </div>
      </div>
    </main>
  );
}
