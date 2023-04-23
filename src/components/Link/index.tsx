import Link from 'next/link';

interface LinksValue {
  label: string;
  url: any;
}
const Links = ({ url, label }: LinksValue) => {
  return (
    <>
      <Link href={url} className="font-montserrat font-[600] text-[14px]">
        {label}
      </Link>
    </>
  );
};

export default Links;
