import Card from 'react-bootstrap/Card';

function PageHeader(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <strong>{props.text}</strong>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default PageHeader;
