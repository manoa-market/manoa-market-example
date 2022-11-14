import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Listings } from '../../api/listings/Listings';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  itemName: { type: String, optional: false },
  image: { type: String, optional: false },
  condition: { type: String, optional: false },
  description: { type: String, optional: false },
  price: { type: String, optional: false },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddListing = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { itemName, image, condition, description, price } = data;
    const owner = Meteor.user().username;
    Listings.collection.insert(
      { itemName, image, condition, description, price, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Listing added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Add Listing</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="itemName" />
                <TextField name="image" />
                <TextField name="condition" />
                <LongTextField name="description" />
                <TextField name="price" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddListing;
