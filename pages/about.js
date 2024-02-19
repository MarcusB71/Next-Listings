import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';
export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve, reject) => {
    fetch('https://listings-api-xa0v.onrender.com/api/listings/1206363')
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { listing: data } });
      });
  });
}
export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer: Marcus Brown"></PageHeader>
      <Card>
        <Card.Body>
          <p>
            {`Hey there, I'm Marcus, a passionate developer who loves to
            create innovative solutions.`}
          </p>
          <p>
            {`My long-term goal is to one day becoming a full-stack engineer. This goal will require a lot of time and effort, but I am determined and I enjoy learning new things which I belive to be a recipe for success.`}
          </p>
          <p>
            {`Outside of professional aspirations, I spend the rest of my time doing things like powerlifting, gaming, cooking, and reading (currently on Brandon Sanderson's Stormlight Archives series).`}
          </p>
          <p>
            By the way, check out this place I would love to visit called:{' '}
            <Link href="/listing/1206363">
              Eco Hale Hawaii in the Rainforest Lots Of Aloha
            </Link>
          </p>
        </Card.Body>
        <ListingDetails listing={props.listing}></ListingDetails>
      </Card>
    </>
  );
}
