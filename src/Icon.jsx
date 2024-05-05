export default function Icon({ src, alt }) {
  return (
    <a href="" className="icon-link">
      <img src={src} alt={alt} className="icon" />
    </a>
  );
}
