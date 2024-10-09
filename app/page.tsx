'use client';
import { MantineProvider } from '@mantine/core';
import HomePage from './Components/HomePage';
import '@mantine/core/styles.css';
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Home() {
  useEffect(() =>{
    AOS.init();
  }, []);
  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  );
}
