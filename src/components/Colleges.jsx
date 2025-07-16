import { useParams } from 'react-router-dom';
import { Card, Spin, Row, Col } from 'antd';
import { useQuery } from 'react-query';
import { getCollegeData } from '../utils/College/CollegeApi';

const { Meta } = Card;

// Define the base URL based on environment
const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-production-url' // Replace with actual production URL
  : 'http://localhost:8000'; // Adjust port if needed

function Colleges() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(
    ['getCollege', id],
    () => getCollegeData(id),
    {
      enabled: !!id,
    }
  );

  const colleges = data?.data?.filter((doc) => doc.University_id?.id?.toString() === id);

  // Log data for debugging
  console.log('Colleges data:', colleges);

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
        }}
        role="status"
        aria-live="polite"
      >
        <Spin size="large" tip="Loading colleges..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <Card>
          <p>Error loading college data. Please try again later.</p>
        </Card>
      </div>
    );
  }

  if (!colleges || colleges.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <Card>
          <p>No colleges found for University ID: {id}</p>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        Colleges
      </h2>

      <Row gutter={[16, 16]} justify="center">
        {colleges.map((college) => (
          <Col key={college.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={college.College_name || 'College campus'}
                  src={
                    college.image
                      ? `${BASE_URL}${college.image.startsWith('/') ? '' : '/'}${college.image}`
                      : '/images/placeholder.jpg'
                  }
                  loading="lazy"
                  style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    console.error(`Failed to load image for ${college.College_name}: ${e.target.src}`);
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
              }
            >
              <Meta
                title={college.College_name}
                description={
                  <div style={{ lineHeight: '1.5', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <div>Location: {college.Place || 'N/A'}</div>
                    <div>State: {college.state || 'N/A'}</div>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Colleges;