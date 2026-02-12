
import React from 'react';
import { NavItem, Service, Doctor, Testimonial, Package } from './types';
import { 
  Eye, 
  Zap, 
  ShieldAlert, 
  Activity, 
  Baby, 
  Search, 
  Accessibility, 
  ClipboardList, 
  Contact,
  Award,
  Users,
  Microscope,
  Stethoscope
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Services', path: '/services' },
  { label: 'Technology', path: '/technology' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'cataract',
    name: 'Cataract Surgery',
    description: 'Stitchless, advanced phacoemulsification technique.',
    icon: 'Eye',
  },
  {
    id: 'lasik',
    name: 'LASIK & Refractive',
    description: 'Laser vision correction for a spectacle-free life.',
    icon: 'Zap',
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma Treatment',
    description: 'Early detection and long-term management strategies.',
    icon: 'Activity',
  },
  {
    id: 'retina',
    name: 'Retina Services',
    description: 'Specialized care for diabetic retinopathy and macular issues.',
    icon: 'Search',
  },
  {
    id: 'pediatric',
    name: 'Pediatric Ophthalmology',
    description: "Expert eye care for children and squint correction.",
    icon: 'Baby',
  },
  {
    id: 'diabetic',
    name: 'Diabetic Eye Screening',
    description: 'Comprehensive evaluations to protect diabetic vision.',
    icon: 'ShieldAlert',
  },
  {
    id: 'squint',
    name: 'Squint Correction',
    description: 'Adult and pediatric alignment for better focus.',
    icon: 'Accessibility',
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Checkup',
    description: 'Complete assessment of your visual health.',
    icon: 'ClipboardList',
  },
  {
    id: 'contact-lens',
    name: 'Contact Lens Clinic',
    description: 'Precision fitting and expert care for all lens types.',
    icon: 'Eye',
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'jothi-babu',
    name: 'Dr. Jyoti Babu C. Neelam',
    role: 'Phaco & Glaucoma Surgeon',
    portrait: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    bio: 'Dr. Jyoti Babu C. Neelam is a distinguished Phaco and Glaucoma surgeon. A FIGS Fellow in Glaucoma & Cataract Surgery from the prestigious Aravind Eye Hospital, Madurai, he brings advanced surgical expertise and precision-driven care to Satya Nethralaya Gvt.',
    expertise: [
      'Fellow Glaucoma & Cataract Surgeon (FIGS)',
      'Advanced Phacoemulsification',
      'Micro-Incision Cataract Surgery',
      'Complex Glaucoma Management'
    ]
  },
  {
    id: 'bhavi',
    name: 'Dr. Bhavi',
    role: 'Consultant Ophthalmologist',
    portrait: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
    bio: 'Dr. Bhavi specializes in patient-centered ophthalmology with a focus on detailed diagnosis and structured treatment planning. Her approach combines clinical accuracy with empathetic consultation.',
    expertise: [
      'Pediatric Eye Care & Vision Screening',
      'Glaucoma Diagnosis & Management',
      'Routine & Preventive Eye Checkups',
      'Diabetic Eye Disease Screening'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Lakshmi R.', rating: 5, text: "Dr. Jyoti Babu performed my cataract surgery with great care. The staff was very helpful and the hospital is very clean." },
  { id: '2', name: 'Rajesh K.', rating: 5, text: "Excellent treatment for my daughter's squint. Dr. Bhavi was very patient and explained everything clearly." },
  { id: '3', name: 'Suresh M.', rating: 4, text: "Professional service and modern equipment. My diabetic eye screening was thorough and the doctor gave clear advice." },
];

export const PACKAGES: Package[] = [
  {
    id: 'basic',
    name: 'Basic Eye Checkup',
    price: '₹500',
    features: ['Vision Acuity Testing', 'Refraction Test', 'Eye Pressure Check', 'Doctor Consultation'],
    recommendedFor: 'Routine checkup, vision changes'
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Examination',
    price: '₹1,200',
    features: ['Complete Vision Assessment', 'Refraction & Power Testing', 'Eye Pressure Measurement', 'Slit Lamp Examination', 'Dilated Retina Examination'],
    recommendedFor: 'Annual checkup, new visitors'
  }
];
