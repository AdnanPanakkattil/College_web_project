import React from 'react';
import { useQuery } from 'react-query';
import { Form, Input, Button, Row, Col, Select, message } from 'antd';
import { useCreateContact } from '../utils/Contact/hooks';
import { getCollegeData } from '../utils/College/CollegeApi';
import { getCoursesData } from '../utils/Courses/coursesApi';

const Contact = () => {
  const [form] = Form.useForm();
  const { mutate: Create, isLoading: isSubmitting } = useCreateContact();
  const { data: Collegedata, isLoading: CollegeLoading } = useQuery('getCollegeFroProduction', getCollegeData);
  const { data: Coursesdata, isLoading: CoursesLoading } = useQuery('getCoursesFroProduction', getCoursesData);

  const onFinish = (values) => {
    Create(values, {
      onSuccess() {
        message.success('Created successfully');
        form.resetFields();
      },
      onError(err) {
        console.error('Error creating appointment:', err);
        message.error('Error');
      },
    });
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="relative w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Contact Form</h2>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Name"
                name="Name"
                rules={[{ required: true, message: 'Please enter Name' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Age"
                name="Age"
                rules={[
                  { required: true, message: 'Please enter Age' },
                  { pattern: /^[0-9]+$/, message: 'Age must be a number' },
                  {
                    validator: (_, value) =>
                      value >= 1 && value <= 120
                        ? Promise.resolve()
                        : Promise.reject('Age must be between 1 and 120'),
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Mobile Number"
                name="Phone_number"
                rules={[
                  { required: true, message: 'Please enter Mobile Number' },
                  { pattern: /^[0-9]{10}$/, message: 'Mobile number must be 10 digits' },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="College name"
                name="College_name"
                rules={[{ required: true, message: 'Please select College name' }]}
              >
                <Select
                  placeholder="Select College name"
                  options={
                    CollegeLoading
                      ? []
                      : Collegedata?.data?.map((it) => ({
                          value: it.id,
                          label: it.College_name,
                        }))
                  }
                  allowClear
                  loading={CollegeLoading}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Courses name"
                name="courses_name"
                rules={[{ required: true, message: 'Please select courses name' }]}
              >
                <Select
                  placeholder="Select courses name"
                  options={
                    CoursesLoading
                      ? []
                      : Coursesdata?.data?.map((it) => ({
                          value: it.id,
                          label: it.courses_name,
                        }))
                  }
                  allowClear
                  loading={CoursesLoading}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <div className="text-center">
              <Button
                htmlType="submit"
                className="w-full max-w-xs"
                type="primary"
                loading={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;