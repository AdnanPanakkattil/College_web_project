import { useParams, Link } from 'react-router-dom';
import { Button, Card, Spin } from 'antd';
import { useQuery } from 'react-query';
import { getUniversityCoursesData } from '../utils/UniversityCourses/UniversityCoursesApi';
const { Meta } = Card;

function University() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(

    ['getUniversityCourses', id],
    () => getUniversityCoursesData(id),
    {
      enabled: !!id,
    }
  );

  const university = id && data?.data?.filter((doc) => doc.courseid?.id?.toString() === id);
  console.log({ university });

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Error loading university data</div>;
  }

  if (id && !university) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>University not found</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: '20px', boxSizing: 'border-box', }} >

      <h2 className="text-4xl font-bold" style={{ textAlign: 'center', marginBottom: '20px', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', }} >
        University List
      </h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', width: '100%', maxWidth: '1200px',}}
      >
        {id && university?.length > 0 ? (
          university.map((it) => (
            <Card
              key={it.University_id.id} 
              hoverable
              style={{
                width: '100%',
                maxWidth: '400px',
                minWidth: '280px',
                flex: '1 1 280px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
              }}
              cover={
                <Link to={`/Colleges/${it.University_id.id}`}>
                  <img
                    alt={it.University_id.University_name || 'University Image'}
                    src={
                      it.University_id.image
                        ? `http://localhost:8000${it.University_id.image}`
                        : '/images/placeholder.jpg'
                    }
                    style={{
                      width: '100%',
                      aspectRatio: '4/3',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => (e.target.src = '/images/placeholder.jpg')}
                  />
                </Link>
              }
            >
              <Link to={`/Colleges/${it.University_id.id}`} className="hover:text-blue-600">
                <Meta title={it.University_id.University_name} />
              </Link>
            </Card>
          ))
        ) : (
          <div style={{ textAlign: 'center', width: '100%' }}>No university selected</div>
        )}
      </div>
    </div>
  );
}

export default University;