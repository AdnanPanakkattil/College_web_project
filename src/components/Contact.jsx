import React, { useState } from 'react';
import { Input, Form, Select, Button } from "antd";

const { Option } = Select;

const collegeCourses = {

};

const Contact = () => {
  const [selectedCollege, setSelectedCollege] = useState("");

  const handleCollegeChange = (value) => {
    setSelectedCollege(value);
  };

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    // You could also send this to a backend or store it elsewhere
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Registration Form</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]} className="col-span-1">
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item name="age" label="Age" rules={[{ required: true, message: "Please enter your age" }]} className="col-span-1">
              <Input type="number" placeholder="Enter your age" />
            </Form.Item>

            <Form.Item name="phone" label="Phone Number" rules={[ { required: true, message: "Please enter your phone number" }, { pattern: /^\d{10}$/, message: "Phone number must be 10 digits" }, ]} className="col-span-1 md:col-span-2">
              <Input placeholder="Enter phone number" />
            </Form.Item>

            <Form.Item
              name="college"
              label="College"
              rules={[{ required: true, message: "Please select a college" }]}
              className="col-span-1"
            >
              <Select placeholder="Select a college" onChange={handleCollegeChange}>
                {Object.keys(collegeCourses).map((college) => (
                  <Option key={college} value={college}>
                    {college}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="courses" label="Courses" rules={[{ required: true, message: "Please select a courses" }]} className="col-span-1" >
            <Select placeholder="Select a college" onChange={handleCollegeChange}>
                {Object.keys(collegeCourses).map((college) => (
                  <Option key={college} value={college}>
                    {college}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <Form.Item className="mt-6">
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;