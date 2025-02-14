"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./contact.css";

const ContactPage = () => {
  return (
    <section className="contacts">
      <div className="contact-container">
        <div className="contact-form-container">
          <h1 className="title">Bizimlə Əlaqə qurun</h1>
          <p className="description">Bizimlə əlaqə saxlayaraq suallarınızı verə bilərsiniz.</p>

          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("Ad tələb olunur"),
              email: Yup.string().email("Düzgün email daxil edin").required("Email tələb olunur"),
              message: Yup.string().required("Mesajınızı yazın"),
            })}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="contact-form">
                <label>Adınız</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" className="error" />

                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />

                <label>Mesajınız</label>
                <Field as="textarea" name="message" className="message-field" />
                <ErrorMessage name="message" component="div" className="error" />

                <button type="submit" disabled={isSubmitting}>
                  Göndər
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1950512226315!2d49.86709267585631!3d40.40926475570627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5e8d87c5cf%3A0xe2e362ab9d6e59dd!2sBaku!5e0!3m2!1sen!2saz!4v1649707630336!5m2!1sen!2saz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
