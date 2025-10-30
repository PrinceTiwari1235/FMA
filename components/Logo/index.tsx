"use client";
import Image from 'next/image';
import React from 'react';

export default function Logo(): React.ReactElement {
  return (
    <Image src="/logo.png" alt="Dynamic Music Academy logo" width={120} height={120} priority style={{ height: 48, width: 'auto' }} />
  );
}