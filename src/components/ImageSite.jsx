export default function ImageSite({ image, className, width, height, name }) {
  return (
    <img
      className={className}
      src={`assets/${image}`}
      alt={name ?? image}
      width={width}
      height={height}
    />
  );
}
