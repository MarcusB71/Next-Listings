import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    id ? `https://listings-api-xa0v.onrender.com/api/listings/${id}` : null
  );
  if (isLoading) {
    return null;
  }
  if (error || !data) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <PageHeader text={data.name}></PageHeader>
      <ListingDetails listing={data}></ListingDetails>
    </>
  );
}
