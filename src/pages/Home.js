import TourCard from '../components/TourCard';

const tours = [
  { title: "Tour Đà Lạt", image: "https://picsum.photos/400/200?1", description: "Khám phá xứ sở sương mù." },
  { title: "Tour Hạ Long", image: "https://picsum.photos/400/200?2", description: "Di sản thiên nhiên thế giới." },
  { title: "Tour Sa Pa", image: "https://picsum.photos/400/200?3", description: "Nóc nhà Đông Dương." },
];

function Home() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Chào mừng đến với Công ty Du Lịch</h1>
      <p className="text-gray-700 mb-8">Chúng tôi mang đến những trải nghiệm tuyệt vời nhất.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </div>
  );
}

export default Home;

