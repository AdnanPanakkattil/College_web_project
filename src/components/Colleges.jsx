import { useParams, Link } from 'react-router-dom';
import { Card, Spin, Row, Col } from 'antd';
import { useQuery } from 'react-query';
import { getCollegeData } from '../utils/College/CollegeApi';

const { Meta } = Card;

function Colleges() {
  const { id } = useParams();
   const { data, isLoading, isError } = useQuery(
     ['getCollege', id], 
     () => getCollegeData(id),
     {
       enabled: !!id, 
     }
   );

console.log({data});

  const colleges = data?.data?.filter((doc) => doc.University_id?.id?.toString() == id);

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        Error loading college data
      </div>
    );
  }

  if (!colleges || colleges.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        No colleges found for University ID: {id}
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Colleges underD: {id}
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {colleges.map((college) => (
          <Col key={college.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={colleges.College_name || 'University Image'}
                  src={colleges.image ? `http://localhost:8000${University_id.image}` : '/images/placeholder.jpg'}
                    style={{
                      width: '100%',
                      aspectRatio: '4/3',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => (e.target.src = '/images/placeholder.jpg')}
                />
              }
               >
              <Link to={`/colleges/${college.id}`} className="hover:text-blue-600">
                <Meta
                  title={college.College_name}
                  description={
                    <>
                      <div>Location: {college.Place}</div>
                      <div>State: {college.state}</div>
                    </>
                  }
                />
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Colleges;