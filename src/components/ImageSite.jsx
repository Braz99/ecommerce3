export default function ImageSite({ image, className, width, height }) {
  return (
    <img
      className={className}
      src={`assets/${image}`}
      alt={image}
      width={width}
      height={height}
    />
  );
}
