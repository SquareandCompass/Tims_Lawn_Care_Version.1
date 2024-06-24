// src/pages/Services.js
import React, { useState, useEffect } from 'react';
import styles from './Services.module.css';
import { getServices } from '../api/api';

const staticServices = [
  {
    id: 1,
    name: 'Lawn Mowing',
    description: 'Regular lawn mowing to keep your grass at the perfect height.',
    image: '/images/lawn-mowing.jpg'
  },
  {
    id: 2,
    name: 'Hedge Trimming',
    description: 'Precise hedge trimming to maintain the shape and health of your hedges.',
    image: '/images/hedge-trimming.jpg'
  },
  {
    id: 3,
    name: 'Weed Control',
    description: 'Effective weed control to keep your lawn and garden beds weed-free.',
    image: '/images/weed-control.jpg'
  },
  {
    id: 4,
    name: 'Landscaping',
    description: 'Custom landscaping design and implementation to beautify your outdoor space.',
    image: '/images/landscaping.jpg'
  }
];

const Services = () => {
  const [services, setServices] = useState(staticServices);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const data = await getServices();
      setServices(data.length > 0 ? data : staticServices);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError('Failed to fetch services. Using static data.');
      setServices(staticServices);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.services}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.serviceGrid}>
        {services.map(service => (
          <div key={service.id} className={styles.serviceItem}>
            <img src={service.image} alt={service.name} className={styles.serviceImage} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;