// src/components/PizzaOrderForm.js
import React, { useState } from 'react';
import { Form, FormControl, FormText, Select, CheckRadios, Range, InputGroup, FloatingLabel, Button, Alert,} from 'react-bootstrap';

const PizzaOrderForm = () => {
  const [formData, setFormData] = useState({
    pizzaSize: '',
    toppings: [],
    quantity: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToppingsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      toppings: [...prevData.toppings, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="pizzaSize" label="Pizza Size">
        <Select
          name="pizzaSize"
          value={formData.pizzaSize}
          onChange={handleInputChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </Select>
      </FloatingLabel>

      <CheckRadios
        label="Toppings"
        options={['Pepperoni', 'Mushrooms', 'Onions', 'Sausage']}
        onChange={handleToppingsChange}
      />

      <Range
        name="quantity"
        value={formData.quantity}
        onChange={handleInputChange}
      />

      <InputGroup className="mb-3">
        <InputGroup.Text>Quantity</InputGroup.Text>
        <FormControl
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
      </InputGroup>

      <Button type="submit">Place Order</Button>

      {formData.toppings.length > 0 && (
        <Alert variant="success">
          Selected Toppings: {formData.toppings.join(', ')}
        </Alert>
      )}
    </Form>
  );
};

export default PizzaOrderForm;
