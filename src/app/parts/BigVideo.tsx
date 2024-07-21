export default function BigVideo() {
  return (
    <section className="big-video mb-12">
      <div className="container">
        <video width="100%" height="auto" preload="none" autoPlay loop muted className="m-auto">
          <source src="/m3-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
