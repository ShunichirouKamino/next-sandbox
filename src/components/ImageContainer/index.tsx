import Link from "next/link";

type Props = {
  alt?: string;
  anker?: string;
};

const ImageContainer: React.FC<Props> = ({
  alt = "no-image",
  anker = undefined,
}): JSX.Element => {
  console.log(anker);
  return (
    <>
      {!anker ? (
        <div>
          <img
            className="object-contain h-48 w-full"
            src="/images/profile.png"
            alt={alt}
          />
        </div>
      ) : (
        <Link href={anker}>
          <a className="bg-center">
            <div>
              <img
                className="object-contain h-48 w-full"
                src="/images/profile.png"
                alt={alt}
              />
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default ImageContainer;
