export function MapSection() {
  // Gandhidham coordinates
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117519.02486419665!2d70.05458392265624!3d23.07564220000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b7f2e0c8f1b7%3A0x9b6c3e3e8e8c8e8d!2sGandhidham%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative w-full h-96">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="KRIVOX Office Location"
        />
      </div>
      <div className="p-6 bg-gray-50">
        <h3 className="font-bold text-lg text-gray-900 mb-2">Visit Our Office</h3>
        <p className="text-gray-600">
          Located in the heart of Gandhidham, we're easily accessible from all major areas of Kutch region.
        </p>
      </div>
    </div>
  );
}