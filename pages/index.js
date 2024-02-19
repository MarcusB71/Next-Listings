/**********************************************************************************
 *  WEB422 – Assignment 3**
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:**
 *
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html**
 *
 * Name: Marcus Brown Student ID: 127900223 Date: 2024/02/16
 *
 *********************************************************************************/
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

const Home = () => {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(
    `https://listings-api-xa0v.onrender.com/api/listings?page=${page}&perPage=10`
  );
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const next = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />
      <Accordion defaultActiveKey="0" flush>
        {pageData.map((listing) => (
          <Accordion.Item eventKey={listing._id} key={listing._id}>
            <Accordion.Header>
              <strong>{listing.name} </strong>{' '}
              <span style={{ marginLeft: '5px' }}>
                {listing.address.street}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing}></ListingDetails>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous}></Pagination.Prev>
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next}></Pagination.Next>
      </Pagination>
    </div>
  );
};
export default Home;
