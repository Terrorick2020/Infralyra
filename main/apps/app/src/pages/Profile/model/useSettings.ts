"use client";

import { useState } from 'react'

export function useSettings() {
  const [name, setName] = useState<string>("admine");
  const [role, setRole] = useState<string>("admine");

  return { name, role }
}