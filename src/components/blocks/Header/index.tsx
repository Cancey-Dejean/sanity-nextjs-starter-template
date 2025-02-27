import Container from "@/components/container";
import { urlFor } from "@/sanity/lib/image";
import { getHeader } from "@/sanity/lib/queries/getHeader";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600;

export default async function Header() {
  const header = await getHeader();
  console.log(header);

  return (
    <header>
      <Container>
        <Link href="/">
          <Image
            src={urlFor(header.logo).url()}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        <nav>
          <ul>
            {header?.primaryMenu?.map((item: any, index: number) => (
              <li key={item._id || `menu-item-${index}`}>
                {item.href && item.label ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : null}

                {item.page && item.page.name ? (
                  <Link href={item.page.slug}>{item.page.name}</Link>
                ) : null}

                {item.post && item.post.title ? (
                  <Link href={`/posts/${item.post.slug}`}>
                    {item.post.title}
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
